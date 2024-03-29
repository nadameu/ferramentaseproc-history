var EprocChrome = {};

(function(){
    function defineLazyGetter(moduleName)
    {
        var ec = EprocChrome;
        ec.__defineGetter__(moduleName, function()
        {
            delete ec[moduleName];
            Cu['import']('resource://eproc/' + moduleName + '.jsm', ec);
            return ec[moduleName];
        });
    }
    defineLazyGetter('Base64');
    defineLazyGetter('MD5');
    defineLazyGetter('Uri');
    setLazyGetter('httpRequestObserver');
})();
function setLazyGetter(module)
{
    Cu['import']('resource://eproc/' + module + '.jsm');
}
var showPreferences = function()
{
    openDialog('chrome://eproc/content/options.xul', 'eproc-options', 'chrome,centerscreen,modal');
};

var IELauncher = function(url)
{
    // create an nsILocalFile for the executable
    var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
    var prefs = new EprocPreferences();
    file.initWithPath(prefs.getValue('v2.ielocation'));

    // create an nsIProcess
    var process = Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
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
        var ioService = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);
        if (binary) {
            var scriptableStream = Cc["@mozilla.org/binaryinputstream;1"].getService(Ci.nsIBinaryInputStream);
        } else {
            var scriptableStream = Cc["@mozilla.org/scriptableinputstream;1"].getService(Ci.nsIScriptableInputStream);
        }
        var channel = ioService.newChannel(aUrl, null, null);
        var input = channel.open();
        if (binary) {
            scriptableStream.setInputStream(input);
            var str = scriptableStream.readBytes(input.available());
        } else {
            scriptableStream.init(input);
            var str = scriptableStream.read(input.available());
        }
        scriptableStream.close();
        input.close();
        return str;
    },

    getUrlContents: function(aUrl)
    {
        var str = this.getContents(aUrl);
        var unicodeConverter = Cc["@mozilla.org/intl/scriptableunicodeconverter"].createInstance(Ci.nsIScriptableUnicodeConverter);
        unicodeConverter.charset = "UTF-8";

        try {
            return unicodeConverter.ConvertToUnicode(str);
        } catch (e) {
            return str;
        }
    },

    getUrlContentsAsBase64: function(aUrl)
    {
        var str = this.getContents(aUrl, true);
        return EprocChrome.Base64.encode(str);
    },

    isGreasemonkeyable: function(url)
    {
        var scheme = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService).extractScheme(url);
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
            var scriptPath = false;
            var uri = new EprocChrome.Uri(href);
            if (uri.isV1()) {
                if (prefs.getValue('v1.enable')) {
                    var controlador = uri.getControlador();
                    var arquivo = uri.getArquivo();
                    if (['consulta_processo', 'html_to_pdf', 'alteracao_assunto'].indexOf(controlador) > -1 && prefs.getValue('v1.' + controlador + '.enable')) {
                        scriptPath = 'chrome://eproc/content/' + controlador + '.js';
                    } else if (['download_documento', 'arvore'].indexOf(controlador) > -1 || /^(class|download)\//.test(arquivo)) {
                    } else if (prefs.getValue('v1.eproc.enable')) {
                        scriptPath = 'chrome://eproc/content/eproc.js';
                    }
                }
            } else if (uri.isV2()) {
                var controlador = uri.getControlador();
                var query = uri.getQuery();
                if (controlador == 'controlador' && /^acao=acessar_documento_implementacao/.test(query)) {
                } else if (prefs.getValue('v2.enable')) {
                    scriptPath = 'chrome://eproc/content/eprocV2.js';
                }
            }
            if (scriptPath) {
                var script = EprocGmCompiler.getUrlContents(scriptPath);
                EprocGmCompiler.injectScript(script, href, unsafeWin, scriptPath);
            }
        }
    },

    injectScript: function(script, url, unsafeContentWin, scriptPath)
    {
        var sandbox, script, logger, storage, xmlhttpRequester;
        var safeWin = new XPCNativeWrapper(unsafeContentWin);

        sandbox = new Cu.Sandbox(safeWin);

        var storage = new EprocScriptStorage();
        xmlhttpRequester = new EprocXmlhttpRequester(
            unsafeContentWin,
            window //appSvc.hiddenDOMWindow
        );

        sandbox.window = safeWin;
        sandbox.document = sandbox.window.document;
        sandbox.unsafeWindow = unsafeContentWin;

        // patch missing properties on xpcnw
        sandbox.XPathResult = Ci.nsIDOMXPathResult;

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
            var prompts = Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(Ci.nsIPromptService);
            var result = prompts.confirmCheck(null, title, text, chkMsg, chkState);
            return result;
        };
        var ConfirmEx = function()
        {
            var prompts = Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(Ci.nsIPromptService);
            var flags = 0;
            var stringTitles = ['', '', ''];
            var titles = Array.prototype.slice.call(arguments);
            titles.forEach(function(title, position)
            {
                if (['YES', 'NO', 'CANCEL'].indexOf(title) > -1) {
                    flags += prompts['BUTTON_TITLE_' + title] * prompts['BUTTON_POS_' + position];
                } else {
                    flags += prompts.BUTTON_TITLE_IS_STRING * prompts['BUTTON_POS_' + position];
                    stringTitles[position] = title;
                }
            });
            return function(title, text)
            {
                var position = prompts.confirmEx(null, title, text, flags, stringTitles[0], stringTitles[1], stringTitles[2], '', {value: false});
                return titles[position];
            };
        };
        sandbox.GM_yesCancelNo = (function()
        {
            return new ConfirmEx('YES', 'CANCEL', 'NO');
        })();
        sandbox.GM_yesNo = (function()
        {
            return new ConfirmEx('YES', 'NO');
        })();
        sandbox.GM_getBase64 = function(aUrl) { return EprocGmCompiler.getUrlContentsAsBase64(aUrl); };
        sandbox.GM_MD5 = function(word) { return EprocChrome.MD5(word); };
        sandbox.GM_showPreferences = function() { return showPreferences(); };
        sandbox.GM_analisarVersao = function(FeP)
        {
            var versionComparator = Components.classes["@mozilla.org/xpcom/version-comparator;1"].getService(Components.interfaces.nsIVersionComparator);
            if (versionComparator.compare(versaoInstalada, FeP.numeroVersaoCompativel) >= 0) {
                FeP.versaoUsuarioCompativel = true;
            }
        };
        sandbox.__proto__ = sandbox.window;

        try {
            this.evalInSandbox(
            "(function(){"+script+"})()",
            scriptPath,
            sandbox);
        } catch (e) {
            var e2 = new Error(typeof e=="string" ? e : e.message);
            e2.fileName = scriptPath;
            e2.lineNumber = typeof e=="string" ? 0 : e.lineNumber;
            alert(e2);
            throw e2;
        }
    },

    evalInSandbox: function(code, codebase, sandbox)
    {
        if (Cu && Cu.Sandbox) {
            // DP beta+
            Cu.evalInSandbox(code, sandbox, "1.8", codebase, 1);
        } else if (Cu && Cu.evalInSandbox) {
            // DP alphas
            Cu.evalInSandbox(code, codebase, sandbox);
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
            var ios = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);
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
    var consoleService = Cc["@mozilla.org/consoleservice;1"].getService(Ci.nsIConsoleService);
    consoleService.logStringMessage("e-Proc: " + aMessage);
}

var versaoInstalada = '';
if ('extensions' in Application) {
    versaoInstalada = Application.extensions.get('eproc@nadameu.com.br').version;
} else {
    Application.getExtensions(function(extensions)
    {
        versaoInstalada = extensions.get('eproc@nadameu.com.br').version;
    });
}
