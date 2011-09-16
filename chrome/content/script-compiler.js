var getModule = function(module)
{
    Cu['import']('resource://eproc/' + module + '.jsm');
}

getModule('Base64');
getModule('EprocUri');
getModule('httpRequestObserver');

var IELauncher = function(url)
{
    // create an nsILocalFile for the executable
    var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
    var prefs = new EprocPreferences();
    file.initWithPath(prefs.getValue('v2.ielocation'));

    // create an nsIProcess
    var process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
    process.init(file);

    // Run the process.
    // If first param is true, calling thread will be blocked until
    // called process terminates.
    // Second and third params are used to pass command-line arguments
    // to the process.
    var args = [url];
    return process.run(false, args, args.length);
};

var EprocGmCompiler = {

    // getUrlContents adapted from Greasemonkey Compiler
    // http://www.letitblog.com/code/python/greasemonkey.py.txt
    // used under GPL permission
    //
    // most everything else below based heavily off of Greasemonkey
    // http://greasemonkey.devjavu.com/
    // used under GPL permission

    getContents: function(aUrl, binary)
    {
        if (typeof binary == 'undefined') binary = false;
        var ioService = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
        var scriptableStream = Components.classes["@mozilla.org/scriptableinputstream;1"].getService(Components.interfaces.nsIScriptableInputStream);
        var channel = ioService.newChannel(aUrl, null, null);
        var input = channel.open();
        scriptableStream.init(input);
        var str = scriptableStream.read(input.available());
        scriptableStream.close();
        input.close();
        return str;
    },

    getUrlContents: function(aUrl)
    {
        var str = this.getContents(aUrl);
        var unicodeConverter = Components.classes["@mozilla.org/intl/scriptableunicodeconverter"].createInstance(Components.interfaces.nsIScriptableUnicodeConverter);
        unicodeConverter.charset = "UTF-8";

        try {
            return unicodeConverter.ConvertToUnicode(str);
        } catch (e) {
            return str;
        }
    },

    getUrlContentsAsBase64: function(aUrl)
    {
//        var str = this.getContents(aUrl, true);

        var ioService = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
        var scriptableStream = Components.classes["@mozilla.org/binaryinputstream;1"].getService(Components.interfaces.nsIBinaryInputStream);
        var channel = ioService.newChannel(aUrl, null, null);
        var input = channel.open();
        scriptableStream.setInputStream(input);
        var str = scriptableStream.readBytes(input.available());
        scriptableStream.close();
        input.close();

        return base64_encode(str);
    },

    isGreasemonkeyable: function(url)
    {
        var scheme = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService).extractScheme(url);
        return ((scheme == "http" || scheme == "https" || scheme == "file") && !/hiddenWindow\.html$/.test(url));
    },

    contentLoad: function(e)
    {
        var unsafeWin = e.target.defaultView;
        if (unsafeWin.wrappedJSObject) unsafeWin = unsafeWin.wrappedJSObject;

        var unsafeLoc = new XPCNativeWrapper(unsafeWin, "location").location;
        var href = new XPCNativeWrapper(unsafeLoc, "href").href;

        if (EprocGmCompiler.isGreasemonkeyable(href)) {
            var prefs = new EprocPreferences();
            var script = false;
            var uri = new EprocUri(href);
            if (uri.isV1()) {
                if (prefs.getValue('v1.enable')) {
                    var controlador = uri.getControlador();
                    var arquivo = uri.getArquivo();
                    if (['consulta_processo', 'html_to_pdf', 'alteracao_assunto'].indexOf(controlador) > -1 && prefs.getValue('v1.' + controlador + '.enable')) {
                        script = EprocGmCompiler.getUrlContents('chrome://eproc/content/' + controlador + '.js');
                    } else if (['download_documento', 'arvore'].indexOf(controlador) > -1 || /^(class|download)\//.test(arquivo)) {
                    } else if (prefs.getValue('v1.eproc.enable')) {
                        script = EprocGmCompiler.getUrlContents('chrome://eproc/content/eproc.js');
                    }
                }
            } else if (uri.isV2()) {
                var controlador = uri.getControlador();
                var query = uri.getQuery();
                if (controlador == 'controlador' && /^acao=acessar_documento_implementacao/.test(query)) {
                } else if (prefs.getValue('v2.enable')) {
                    script = EprocGmCompiler.getUrlContents('chrome://eproc/content/eprocV2.js');
                }
            }
            if (script) EprocGmCompiler.injectScript(script, href, unsafeWin);
        }
    },

    injectScript: function(script, url, unsafeContentWin)
    {
        var sandbox, script, logger, storage, xmlhttpRequester;
        var safeWin = new XPCNativeWrapper(unsafeContentWin);

        sandbox = new Components.utils.Sandbox(safeWin);

        var storage = new EprocScriptStorage();
        xmlhttpRequester = new EprocXmlhttpRequester(
            unsafeContentWin,
            window //appSvc.hiddenDOMWindow
        );

        sandbox.window = safeWin;
        sandbox.document = sandbox.window.document;
        sandbox.unsafeWindow = unsafeContentWin;

        // patch missing properties on xpcnw
        sandbox.XPathResult = Components.interfaces.nsIDOMXPathResult;

        // add our own APIs
        sandbox.GM_addStyle = function(css)
        {
            EprocGmCompiler.addStyle(sandbox.document, css);
        };
        sandbox.GM_setValue = EprocGmCompiler.hitch(storage, "setValue");
        sandbox.GM_getValue = EprocGmCompiler.hitch(storage, "getValue");
        sandbox.GM_openInTab = EprocGmCompiler.hitch(this, "openInTab", unsafeContentWin);
        sandbox.GM_xmlhttpRequest = EprocGmCompiler.hitch(xmlhttpRequester, "contentStartRequest");
        sandbox.IELauncher = IELauncher;
        //unsupported
        sandbox.GM_registerMenuCommand = function(){};
        sandbox.GM_log = myDump; //function(){};
        sandbox.GM_getResourceURL = function(){};
        sandbox.GM_getResourceText = function(){};
        sandbox.GM_confirmCheck = function(title, text, chkMsg, chkState)
        {
            var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"].getService(Components.interfaces.nsIPromptService);
            var result = prompts.confirmCheck(null, title, text, chkMsg, chkState);
            return result;
        };
        sandbox.GM_yesNo = function(title, text)
        {
            var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"].getService(Components.interfaces.nsIPromptService);
            var flags = prompts.BUTTON_POS_0 * prompts.BUTTON_TITLE_YES + prompts.BUTTON_POS_1 * prompts.BUTTON_TITLE_NO;
            var button = prompts.confirmEx(null, title, text, flags, '', '', '', '', {value: false});
            return button;
        };
        sandbox.GM_getBase64 = function(aUrl) { return EprocGmCompiler.getUrlContentsAsBase64(aUrl); };
        sandbox.__proto__ = sandbox.window;

        try {
            this.evalInSandbox(
            "(function(){"+script+"})()",
            url,
            sandbox);
        } catch (e) {
            var e2 = new Error(typeof e=="string" ? e : e.message);
            e2.fileName = script.filename;
            e2.lineNumber = 0;
            //GM_logError(e2);
            alert(e2);
        }
    },

    evalInSandbox: function(code, codebase, sandbox)
    {
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
        for (var i = 0; browser = tabBrowser.browsers[i]; i++) {
            if (browser.contentWindow == unsafeContentWin) {
                isMyWindow = true;
                break;
            }
        }
        if (!isMyWindow) return;

        var loadInBackground, sendReferrer, referrer = null;
        loadInBackground = tabBrowser.mPrefs.getBoolPref("browser.tabs.loadInBackground");
        sendReferrer = tabBrowser.mPrefs.getIntPref("network.http.sendRefererHeader");
        if (sendReferrer) {
            var ios = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
            referrer = ios.newURI(content.document.location.href, null, null);
        }
        tabBrowser.loadOneTab(url, referrer, null, null, loadInBackground);
    },

    apiLeakCheck: function(allowedCaller)
    {
        var stack = Components.stack;

        var leaked = false;
        do {
            if (2 == stack.language) {
                if ('chrome' != stack.filename.substr(0, 6) && allowedCaller != stack.filename) {
                    leaked = true;
                    break;
                }
            }

            stack = stack.caller;
        } while (stack);

        return leaked;
    },

    hitch: function(obj, meth)
    {
        if (!obj[meth]) {
            throw "method '" + meth + "' does not exist on object '" + obj + "'";
        }

        var hitchCaller = Components.stack.caller.filename;
        var staticArgs = Array.prototype.splice.call(arguments, 2, arguments.length);

        return function()
        {
            if (EprocGmCompiler.apiLeakCheck(hitchCaller)) {
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

    addStyle: function(doc, css)
    {
        var head, style;
        head = doc.getElementsByTagName('head')[0];
        if (!head) return;
        style = doc.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    },

    onLoad: function()
    {
        var appcontent = window.document.getElementById("appcontent");
        if (appcontent && !appcontent.greased_EprocGmCompiler) {
            appcontent.greased_EprocGmCompiler = true;
            appcontent.addEventListener("DOMContentLoaded", EprocGmCompiler.contentLoad, false);
        }
    },

    onUnLoad: function()
    {
        //remove now unnecessary listeners
        window.removeEventListener('load', EprocGmCompiler.onLoad, false);
        window.removeEventListener('unload', EprocGmCompiler.onUnLoad, false);
        window.document.getElementById("appcontent").removeEventListener("DOMContentLoaded", EprocGmCompiler.contentLoad, false);
    },

}; //object EprocGmCompiler


function EprocScriptStorage()
{
    var prefMan = new EprocPreferences();
    this.setValue = function(name, val)
    {
        prefMan.setValue(name, val);
    };
    this.getValue = function(name, defVal)
    {
        return prefMan.getValue(name, defVal);
    };
}


window.addEventListener('load', EprocGmCompiler.onLoad, false);
window.addEventListener('unload', EprocGmCompiler.onUnLoad, false);

function myDump(aMessage)
{
    var consoleService = Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService);
    consoleService.logStringMessage("e-Proc: " + aMessage);
}

