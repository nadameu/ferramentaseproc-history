function EprocXmlhttpRequester(unsafeContentWin, chromeWindow) {
    this.unsafeContentWin = unsafeContentWin;
    this.chromeWindow = chromeWindow;
}

// this function gets called by user scripts in content security scope to
// start a cross-domain xmlhttp request.
//
// details should look like:
// {method,url,onload,onerror,onreadystatechange,headers,data}
// headers should be in the form {name:value,name:value,etc}
// can't support mimetype because i think it's only used for forcing
// text/xml and we can't support that
EprocXmlhttpRequester.prototype.contentStartRequest = function(details) {
    // important to store this locally so that content cannot trick us up with
    // a fancy getter that checks the number of times it has been accessed,
    // returning a dangerous URL the time that we actually use it.
    var url = details.url;

    // make sure that we have an actual string so that we can't be fooled with
    // tricky toString() implementations.
    if (typeof url != "string") {
        throw new Error("Invalid url: url must be of type string");
    }

    var ioService=Components.classes["@mozilla.org/network/io-service;1"]
        .getService(Components.interfaces.nsIIOService);
    var scheme = ioService.extractScheme(url);

    // This is important - without it, GM_xmlhttpRequest can be used to get
    // access to things like files and chrome. Careful.
    switch (scheme) {
        case "http":
        case "https":
        case "ftp":
            this.chromeWindow.setTimeout(
                EprocGmCompiler.hitch(this, "chromeStartRequest", url, details), 0);
            break;
        default:
            throw new Error("Invalid url: " + url);
    }
}

// this function is intended to be called in chrome's security context, so
// that it can access other domains without security warning
EprocXmlhttpRequester.prototype.chromeStartRequest=function(safeUrl, details) {
    var req = new this.chromeWindow.XMLHttpRequest();

    this.setupRequestEvent(this.unsafeContentWin, req, "onload", details);
    this.setupRequestEvent(this.unsafeContentWin, req, "onerror", details);
    this.setupRequestEvent(this.unsafeContentWin, req, "onreadystatechange", details);

    req.open(details.method, safeUrl);

    if (details.headers) {
        for (var prop in details.headers) {
            req.setRequestHeader(prop, details.headers[prop]);
        }
    }
    if (details.mimeType) {
        req.overrideMimeType(details.mimeType);
    }
    req.send(details.data);
}

// arranges for the specified 'event' on xmlhttprequest 'req' to call the
// method by the same name which is a property of 'details' in the content
// window's security context.
EprocXmlhttpRequester.prototype.setupRequestEvent =
function(unsafeContentWin, req, event, details) {
    if (details[event]) {
        req[event] = function() {
            var responseState = {
                __exposedProps__: {
                  responseText: 'r',
                  readyState: 'r',
                  responseHeaders: 'r',
                  status: 'r',
                  statusText: 'r'
                },
                // can't support responseXML because security won't
                // let the browser call properties on it
                responseText:req.responseText,
                readyState:req.readyState,
                responseHeaders:(req.readyState==4?req.getAllResponseHeaders():''),
                status:(req.readyState==4?req.status:0),
                statusText:(req.readyState==4?req.statusText:'')
            }

            // Pop back onto browser thread and call event handler.
            // Have to use nested function here instead of GM_hitch because
            // otherwise details[event].apply can point to window.setTimeout, which
            // can be abused to get increased priveledges.
            new XPCNativeWrapper(unsafeContentWin, "setTimeout()")
                .setTimeout(function(){details[event](responseState);}, 0);
        }
    }
}
