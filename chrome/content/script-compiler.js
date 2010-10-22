var IE = function()
{
        // create an nsILocalFile for the executable
        var file = Components.classes["@mozilla.org/file/local;1"]
                             .createInstance(Components.interfaces.nsILocalFile);
        var prefs = new eproc_PrefManager();
        file.initWithPath(prefs.getValue('v2.ielocation'));

        // create an nsIProcess
        this.process = Components.classes["@mozilla.org/process/util;1"]
                                .createInstance(Components.interfaces.nsIProcess);
        this.process.init(file);

        // Run the process.
        // If first param is true, calling thread will be blocked until
        // called process terminates.
        // Second and third params are used to pass command-line arguments
        // to the process.
}
IE.prototype.launch = function(url)
{
    var args = [url];
    this.process.run(false, args, args.length);
}

var eproc_gmCompiler={

// getUrlContents adapted from Greasemonkey Compiler
// http://www.letitblog.com/code/python/greasemonkey.py.txt
// used under GPL permission
//
// most everything else below based heavily off of Greasemonkey
// http://greasemonkey.devjavu.com/
// used under GPL permission

getUrlContents: function(aUrl){
    var    ioService=Components.classes["@mozilla.org/network/io-service;1"]
        .getService(Components.interfaces.nsIIOService);
    var    scriptableStream=Components
        .classes["@mozilla.org/scriptableinputstream;1"]
        .getService(Components.interfaces.nsIScriptableInputStream);
    var unicodeConverter=Components
        .classes["@mozilla.org/intl/scriptableunicodeconverter"]
        .createInstance(Components.interfaces.nsIScriptableUnicodeConverter);
    unicodeConverter.charset="UTF-8";

    var    channel=ioService.newChannel(aUrl, null, null);
    var    input=channel.open();
    scriptableStream.init(input);
    var    str=scriptableStream.read(input.available());
    scriptableStream.close();
    input.close();

    try {
        return unicodeConverter.ConvertToUnicode(str);
    } catch (e) {
        return str;
    }
},

isGreasemonkeyable: function(url) {
    var scheme=Components.classes["@mozilla.org/network/io-service;1"]
        .getService(Components.interfaces.nsIIOService)
        .extractScheme(url);
    return (
        (scheme == "http" || scheme == "https" || scheme == "file") &&
        !/hiddenWindow\.html$/.test(url)
    );
},

contentLoad: function(e) {
    var unsafeWin=e.target.defaultView;
    if (unsafeWin.wrappedJSObject) unsafeWin=unsafeWin.wrappedJSObject;

    var unsafeLoc=new XPCNativeWrapper(unsafeWin, "location").location;
    var href=new XPCNativeWrapper(unsafeLoc, "href").href;

    if (eproc_gmCompiler.isGreasemonkeyable(href)) {
        var prefs = new eproc_PrefManager();
        var script = false;
        if (prefs.getValue('v2.enable') && /https:\/\/jef[23]?\.jf(pr|rs|sc)\.(gov|jus)\.br\/eproc(V2|v2_homologacao)\/.*/.test(href)) {
            script = eproc_gmCompiler.getUrlContents('chrome://eproc/content/eprocV2.js');
        } else if (prefs.getValue('v1.enable') && /https:\/\/jef[23]?\.jf(pr|rs|sc)\.(gov|jus)\.br\/eproc\/.*/.test(href)) {
            if (prefs.getValue('v1.consulta_processo.enable') && /https:\/\/jef[23]?\.jf(pr|rs|sc)\.(gov|jus)\.br\/eproc\/consulta_processo.php\?.*/.test(href)) {
                script = eproc_gmCompiler.getUrlContents('chrome://eproc/content/consulta_processo.js');
            } else if (prefs.getValue('v1.html_to_pdf.enable') && /https:\/\/jef[23]?\.jf(pr|rs|sc)\.(gov|jus)\.br\/eproc\/html_to_pdf\.php/.test(href)) {
                script = eproc_gmCompiler.getUrlContents('chrome://eproc/content/html_to_pdf.js');
            } else if (prefs.getValue('v1.alteracao_assunto.enable') && /https:\/\/jef[23]?\.jf(pr|rs|sc)\.(gov|jus)\.br\/eproc\/alteracao_assunto.php\?.*/.test(href)) {
                script = eproc_gmCompiler.getUrlContents('chrome://eproc/content/alteracao_assunto.js');
            } else if (/https:\/\/jef[23]?\.jf(pr|rs|sc)\.(gov|jus)\.br\/eproc\/class\/.*/.test(href)) {
            } else if (prefs.getValue('v1.eproc.enable')) {
                script = eproc_gmCompiler.getUrlContents('chrome://eproc/content/eproc.js');
            }
        }
        if (script)
            eproc_gmCompiler.injectScript(script, href, unsafeWin);
    }
},

injectScript: function(script, url, unsafeContentWin) {
    var sandbox, script, logger, storage, xmlhttpRequester;
    var safeWin=new XPCNativeWrapper(unsafeContentWin);

    sandbox=new Components.utils.Sandbox(safeWin);

    var storage=new eproc_ScriptStorage();
    xmlhttpRequester=new eproc_xmlhttpRequester(
        unsafeContentWin, window//appSvc.hiddenDOMWindow
    );

    sandbox.window=safeWin;
    sandbox.document=sandbox.window.document;
    sandbox.unsafeWindow=unsafeContentWin;

    // patch missing properties on xpcnw
    sandbox.XPathResult=Components.interfaces.nsIDOMXPathResult;

    // add our own APIs
    sandbox.GM_addStyle=function(css) { eproc_gmCompiler.addStyle(sandbox.document, css) };
    sandbox.GM_setValue=eproc_gmCompiler.hitch(storage, "setValue");
    sandbox.GM_getValue=eproc_gmCompiler.hitch(storage, "getValue");
    sandbox.GM_openInTab=eproc_gmCompiler.hitch(this, "openInTab", unsafeContentWin);
    sandbox.GM_xmlhttpRequest=eproc_gmCompiler.hitch(
        xmlhttpRequester, "contentStartRequest"
    );
    sandbox.IE = IE;
    //unsupported
    sandbox.GM_registerMenuCommand=function(){};
    sandbox.GM_log=myDump; //function(){};
    sandbox.GM_getResourceURL=function(){};
    sandbox.GM_getResourceText=function(){};

    sandbox.__proto__=sandbox.window;

    try {
        this.evalInSandbox(
            "(function(){"+script+"})()",
            url,
            sandbox);
    } catch (e) {
        var e2=new Error(typeof e=="string" ? e : e.message);
        e2.fileName=script.filename;
        e2.lineNumber=0;
        //GM_logError(e2);
        alert(e2);
    }
},

evalInSandbox: function(code, codebase, sandbox) {
    if (Components.utils && Components.utils.Sandbox) {
        // DP beta+
        Components.utils.evalInSandbox(code, sandbox);
    } else if (Components.utils && Components.utils.evalInSandbox) {
        // DP alphas
        Components.utils.evalInSandbox(code, codebase, sandbox);
    } else if (Sandbox) {
        // 1.0.x
        evalInSandbox(code, sandbox, codebase);
    } else {
        throw new Error("Could not create sandbox.");
    }
},

openInTab: function(unsafeContentWin, url) {
    var tabBrowser = getBrowser(), browser, isMyWindow = false;
    for (var i = 0; browser = tabBrowser.browsers[i]; i++)
        if (browser.contentWindow == unsafeContentWin) {
            isMyWindow = true;
            break;
        }
    if (!isMyWindow) return;
 
    var loadInBackground, sendReferrer, referrer = null;
    loadInBackground = tabBrowser.mPrefs.getBoolPref("browser.tabs.loadInBackground");
    sendReferrer = tabBrowser.mPrefs.getIntPref("network.http.sendRefererHeader");
    if (sendReferrer) {
        var ios = Components.classes["@mozilla.org/network/io-service;1"]
                            .getService(Components.interfaces.nsIIOService);
        referrer = ios.newURI(content.document.location.href, null, null);
     }
     tabBrowser.loadOneTab(url, referrer, null, null, loadInBackground);
 },
 
 /*
 hitch: function(obj, meth) {
    var unsafeTop = new XPCNativeWrapper(unsafeContentWin, "top").top;

    for (var i = 0; i < this.browserWindows.length; i++) {
        this.browserWindows[i].openInTab(unsafeTop, url);
    }
},
*/
apiLeakCheck: function(allowedCaller) {
    var stack=Components.stack;

    var leaked=false;
    do {
        if (2==stack.language) {
            if ('chrome'!=stack.filename.substr(0, 6) &&
                allowedCaller!=stack.filename 
            ) {
                leaked=true;
                break;
            }
        }

        stack=stack.caller;
    } while (stack);

    return leaked;
},

hitch: function(obj, meth) {
    if (!obj[meth]) {
        throw "method '" + meth + "' does not exist on object '" + obj + "'";
    }

    var hitchCaller=Components.stack.caller.filename;
    var staticArgs = Array.prototype.splice.call(arguments, 2, arguments.length);

    return function() {
        if (eproc_gmCompiler.apiLeakCheck(hitchCaller)) {
            return;
        }
        
        // make a copy of staticArgs (don't modify it because it gets reused for
        // every invocation).
        var args = staticArgs.concat();

        // add all the new arguments
        for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
        }

        // invoke the original function with the correct this obj and the combined
        // list of static and dynamic arguments.
        return obj[meth].apply(obj, args);
    };
},

addStyle:function(doc, css) {
    var head, style;
    head = doc.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = doc.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
},

onLoad: function() {
    var    appcontent=window.document.getElementById("appcontent");
    if (appcontent && !appcontent.greased_eproc_gmCompiler) {
        appcontent.greased_eproc_gmCompiler=true;
        appcontent.addEventListener("DOMContentLoaded", eproc_gmCompiler.contentLoad, false);
    }
},

onUnLoad: function() {
    //remove now unnecessary listeners
    window.removeEventListener('load', eproc_gmCompiler.onLoad, false);
    window.removeEventListener('unload', eproc_gmCompiler.onUnLoad, false);
    window.document.getElementById("appcontent")
        .removeEventListener("DOMContentLoaded", eproc_gmCompiler.contentLoad, false);
},

}; //object eproc_gmCompiler


function eproc_ScriptStorage() {
    this.prefMan=new eproc_PrefManager();
}
eproc_ScriptStorage.prototype.setValue = function(name, val) {
    this.prefMan.setValue(name, val);
}
eproc_ScriptStorage.prototype.getValue = function(name, defVal) {
    return this.prefMan.getValue(name, defVal);
}


window.addEventListener('load', eproc_gmCompiler.onLoad, false);
window.addEventListener('unload', eproc_gmCompiler.onUnLoad, false);

var httpRequestObserver =
{
  observe: function(subject, topic, data)
  {
    if (topic == "http-on-examine-response") {
      if (typeof Components == 'undefined') return;
      var httpChannel = subject.QueryInterface(Components.interfaces.nsIHttpChannel);

      if (httpChannel.name.match(/https:\/\/jef[23]?\.jf(pr|rs|sc)\.(gov|jus)\.br\/eproc(V2|v2_homologacao)\/controlador\.php\?acao=acessar_documento/)) {
//          httpChannel.setResponseHeader("Content-Disposition", httpChannel.getResponseHeader("Content-Disposition").replace('attachment', 'inline'), false);
          httpChannel.contentType = httpChannel.contentType.replace(/^application\/(.*)$/, function(match, type) {
              return {
                  'jpeg': 'image/jpeg',
                  'jpg' : 'image/jpeg',
                  'png' : 'image/png',
                  'pdf' : 'application/pdf',
                  'odt' : 'application/x-vnd.oasis.opendocument.text',
                  'html': 'text/html'
              }[type];
          });
      }
    }
  },

  get observerService() {
    return Components.classes["@mozilla.org/observer-service;1"]
                     .getService(Components.interfaces.nsIObserverService);
  },

  register: function()
  {
    this.observerService.addObserver(this, "http-on-examine-response", false);
  },

  unregister: function()
  {
    this.observerService.removeObserver(this, "http-on-examine-response");
  }
};
httpRequestObserver.register();
function myDump(aMessage) {
  var consoleService = Components.classes["@mozilla.org/consoleservice;1"]
                                 .getService(Components.interfaces.nsIConsoleService);
  consoleService.logStringMessage("e-Proc: " + aMessage);
}

