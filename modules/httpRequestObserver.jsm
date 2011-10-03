var EXPORTED_SYMBOLS = [];

Components.utils['import']('resource://eproc/EprocUri.jsm');

var httpRequestObserver = {

    observe: function(subject, topic, data)
    {
        if (topic == "http-on-examine-response") {
            if (typeof Components == 'undefined') return;
            var httpChannel = subject.QueryInterface(Components.interfaces.nsIHttpChannel);
            var uri = new EprocUri(httpChannel.name);
            if (uri.isV2() && uri.getControlador() == 'controlador' && /^acao=acessar_documento_(implementacao|publico)/.test(uri.getQuery())) {
                var types = {
                    'doc' : 'application/msword',
                    'jpeg': 'image/jpeg',
                    'jpg' : 'image/jpeg',
                    'mp3' : 'audio/mpeg',
                    'png' : 'image/png',
                    'pdf' : 'application/pdf',
                    'odt' : 'application/x-vnd.oasis.opendocument.text',
                    'html': 'text/html; charset=ISO-8859-1'
                };
                var extension;
                httpChannel.contentType = httpChannel.contentType.replace(
                    /^application\/(.*)$/,
                    function(match, type)
                    {
                        extension = type;
                        return types[type];
                    }
                );
                var titulo = uri.getQuery().match(/&titulo_janela=([^&]+)/);
                if (titulo) {
                    replacePattern = 'filename="' + decodeURIComponent(titulo[1]).replace(/ /g, '_') + '.' + extension + '"';
                } else {
                    replacePattern = 'filename="$1"';
                }
                httpChannel.setResponseHeader('Content-Disposition', httpChannel.getResponseHeader('Content-Disposition').replace(/filename=([^"]*)$/, replacePattern), false);
            }
        }
    },

    get observerService() {
        return Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService);
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
