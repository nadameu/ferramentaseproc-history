/**
 * @name resource://eproc/Router.jsm
 * @fileOverview Define o namespace Eproc.Router
 * @author Nadameu
 * @version 1.0
 */
/**
 * @ignore
 */
var EXPORTED_SYMBOLS = ['Eproc'];

if ('undefined' == typeof(Eproc)) {
  Eproc = {};
}

const Cc = Components.classes;
const Ci = Components.interfaces;
const Cr = Components.results;
const Cu = Components.utils;

/**
 * Número de janelas abertas
 * 
 * @private
 * @type Number
 */
var windows = 0;

/**
 * Responsável pelo encaminhamento das requisições ao controlador correto
 * 
 * @namespace Responsável pelo encaminhamento das requisições ao controlador
 *            correto
 */
Eproc.Router = {
  /**
   * Verifica se a preferência "v2.enable" está habilitada e adiciona ou remove
   * o observador de acordo.
   */
  checkEnabled: function()
  {
    if (this.getPreferences().get('v2.enable')) {
      this.observer =
        this.getEvents().addObserver('http-on-examine-response',
          this.onExamineResponse, this
        );
    } else if (this.observer) {
      this.getEvents().removeObserver(this.observer);
      delete this.observer;
    }
  },
  /**
   * Obtém o serviço Events
   * 
   * @returns {Eproc.Events}
   */
  getEvents: function()
  {
    return this.getService('Events');
  },
  /**
   * Obtém o serviço Loader
   * 
   * @returns {Eproc.Loader}
   */
  getLoader: function()
  {
    return this.getService('Loader');
  },
  /**
   * Obtém o serviço Preferences
   * 
   * @returns {Eproc.Preferences}
   */
  getPreferences: function()
  {
    return this.getService('Preferences');
  },
  /**
   * Obtém o serviço especificado
   * 
   * @param {String} service Nome do Serviço
   * @returns Serviço solicitado
   */
  getService: function(service)
  {
    var wrapper = {};
    Cu['import']('resource://eproc/' + service + '.jsm', wrapper);
    this['get' + service] = function()
    {
      return wrapper.Eproc[service];
    };
    return this['get' + service]();
  },
  /**
   * Obtém as strings do arquivo "chrome://eproc/locale/v2.properties"
   * 
   * @param {Address} address Endereço da página
   * @returns {StringBundle}
   */
  getStrings: function(address)
  {
    var wrapper = {};
    Cu['import']('resource://eproc/StringBundle.js', wrapper);
    var strings =
      new wrapper.StringBundle('chrome://eproc/locale/'
        + (address.v1 ? 'v1' : 'v2') + '.properties');
    this.getStrings = function()
    {
      return strings;
    };
    return this.getStrings();
  },
  /**
   * Inicializa o objeto
   */
  init: function()
  {
    this.getEvents().addObserver('eproc-window-load', this.onLoad, this);
    this.getEvents().addObserver('eproc-window-unload', this.onUnload, this);
  },
  /**
   * @event
   * @param {Event} e Evento disparado
   */
  onBeforeUnload: function(e)
  {
    var Events = this.getEvents();
    var doc = e.originalTarget;
    Events.removeListeners(doc);
  },
  /**
   * Função que lida com o evento disparado ao ser carregado o conteúdo de uma
   * página
   * 
   * @event
   * @param {Event} e Evento disparado
   * @param {Listener} listener Objeto que contém as informações do observador
   */
  onContentLoaded: function(e, listener)
  {
    var doc = e.originalTarget, chromeWindow = listener.obj, Preferences =
      this.getPreferences();
    if ('defaultView' in doc && 'location' in doc) {
      var window = doc.defaultView, address = this.parseUrl(doc.location.href);
      if ('EprocLoaded' in window) {
        // Página já processada
      } else if (address.valid && address.v2 && Preferences.get('v2.enable')) {
        if (address.test({
            acao: /^acessar_documento(_publico)?$/
          })) {
          var match, evento, documento;
          if (match = /^(\d+)\/([A-Z_]+\d+)$/.exec(address.hash)) {
            [match, evento, documento] = match;
            doc.title = documento + '-Evento ' + evento;
          }
        } else if (doc.contentType == 'text/html') {
          var sandbox = new Sandbox(doc, address, chromeWindow);
          sandbox.run('chrome://eproc/content/EprocSandbox/V2.js');
        }
      } else if (address.valid && address.v1 && Preferences.get('v1.enable')) {
        var script = 'chrome://eproc/content/EprocSandbox/V1.js';
        var sandbox = new Sandbox(doc, address, chromeWindow);
        sandbox.run(script);
      }
      if ('undefined' != typeof(sandbox)) {
        this.getEvents().addListener(doc, window, 'unload',
          this.onBeforeUnload, this
        );
      }
      window.EprocLoaded = true;
    }
  },
  /**
   * Lida com o evento disparado quando uma requisição HTTP é respondida
   * 
   * @event
   * @param {nsISupports} subject Assunto do evento
   * @param {String} topic Tópico do evento
   * @param data Dados adicionais passados pelo evento
   */
  onExamineResponse: function(subject, topic, data)
  {
    var httpChannel = subject.QueryInterface(Ci.nsIHttpChannel);
    var address = this.parseUrl(httpChannel.name);
    if (address.valid && address.v2 && address.test({
        controlador: 'controlador',
        acao: /^acessar_documento(_publico)?$/
      })) {
      httpChannel.contentType =
        httpChannel.contentType.replace(/^application\/(.*)$/, function(match,
            type)
          {
            var newType = {
              'doc': 'application/msword',
              'jpeg': 'image/jpeg',
              'jpg': 'image/jpeg',
              'png': 'image/png',
              'pdf': 'application/pdf',
              'odt': 'application/x-vnd.oasis.opendocument.text',
              'html': 'text/html'
            }[type];
            return newType;
          });
    }
  },
  /**
   * Lida com o evento disparado quando uma nova janela do browser é carregada
   * 
   * @event
   * @param {nsISupports} subject Assunto do evento
   * @param {String} topic Tópico do evento
   * @param data Dados adicionais passados pelo evento
   */
  onLoad: function(subject, topic, data)
  {
    var window = subject.window;
    if (windows == 0) {
      this.checkEnabled();
      this.prefObserver =
        this.getEvents().addPrefObserver('v2.enable', this.checkEnabled, this);
    }
    var Events = this.getEvents(), that = this;
    function addListener(evt, fn)
    {
      Events.addListener(window, window, evt, fn, that);
    }
    addListener('DOMContentLoaded', this.onContentLoaded);
    addListener('pageshow', this.onContentLoaded);
    windows++;
  },
  /**
   * Lida com o evento disparado quando uma janela do browser é descarregada
   * 
   * @event
   * @param {nsISupports} subject Assunto do evento
   * @param {String} topic Tópico do evento
   * @param data Dados adicionais passados pelo evento
   */
  onUnload: function(subject, topic, data)
  {
    if (--windows == 0) {
      if (this.observer) {
        this.getEvents().removeObserver(this.observer);
        delete this.observer;
      }
      if (this.prefObserver) {
        this.getEvents().removePrefObserver(this.prefObserver);
        delete this.prefObserver;
      }
    }
  },
  /**
   * Analisa uma URL
   * 
   * @param {String} url Endereço a ser analisado
   * @returns {Address} Informações do endereço
   */
  parseUrl: function(url)
  {
    return new Address(url);
  }
};
/**
 * Analisa uma URL e retorna informações
 * 
 * @private
 * @class Analisa uma URL e retorna informações
 * @constructor
 * @param {String} url Endereço a ser analisado
 */
function Address(url)
{
  /**
   * Endereço analisado
   * 
   * @type String
   */
  this.url = url.replace('//10.5.3.198/', '//jef3.jfsc.jus.br/');
  var parts = new RegExp('^(https?)' + // scheme
    '://((?:(?:jef|eproc)[23]?|eproc2d-(?:um|dois|tres)))' + // subdominio
    '\.(jf(pr|rs|sc)|trf4)' + // dominio, estado
    '\.(?:gov|jus)\.br/eproc(|V1|V2|2trf4|(?:trf4|v2)_[^/?#]+)/' + // sistema
    '(|([^\.]+)\.php)' + // arquivo, controlador
    '(?:\\?([^#]*))?' + // query
    '(?:#(.*))?' + // hash
    '$').exec(this.url);
  if (parts) {
    this.valid = true;
    var scheme, subdominio, dominio, estado, sistema, arquivo, controlador, query, hash;
    [url, scheme, subdominio, dominio, estado, sistema, arquivo, controlador,
      query, hash] = parts;
    if (scheme == 'https') {
      this.secure = true;
    }
    if (estado) {
      this.grau = 1;
      if (dominio == 'jfrs' && subdominio == 'jef2'
        && sistema == 'v2_apresentacao') {
        this.apres = true;
        this.v2 = true;
      } else {
        this.producao = true;
        if (sistema == '') {
          this.v1 = true;
        } else if (sistema == 'V2') {
          this.v2 = true;
        } else {
          this.valid = false;
        }
      }
    } else if (/^eproc2d-/.test(subdominio)) {
      this.desenv = true;
      if (sistema == 'V1') {
        this.v1 = true;
      } else if (sistema == 'V2' || /^v2_/.test(sistema)) {
        this.v2 = true;
      } else {
        this.valid = false;
      }
    } else {
      this.v2 = true;
      this.grau = 2;
      if (subdominio == 'eproc2' && sistema == 'trf4_apresentacao') {
        this.apres = true;
      } else if (sistema == '2trf4') {
        this.producao = true;
      } else {
        this.valid = false;
      }
    }
    if (this.valid) {
      this.params = {};
      if (this.v1 || this.v2) {
        /**
         * Controlador utilizado pela página
         * 
         * @type String
         */
        this.controlador =
          controlador ? controlador : (this.v1 ? 'index'
            : 'externo_controlador');
        /**
         * Ação utilizada pela página
         * 
         * @type String
         */
        if (this.v2) {
          this.acao = controlador ? '' : 'principal';
          this.hash = hash;
        }
        if (query) {
          query.split('&').forEach(function(parameter)
            {
              eval("let [name, value] = parameter.split('=');");
              if (this.v2 && name == 'acao') {
                this.acao = value;
              } else if (this.v2 && !this.acao && name == 'acao_origem') {
                this.acao = value + '_destino';
              } else {
                this.params[name] = value;
              }
            }, this);
        }
      }
    }
  }
}
Address.prototype = {
  /**
   * O servidor é de apresentação?
   * 
   * @type Boolean
   */
  apres: false,
  /**
   * O servidor é de desenvolvimento?
   * 
   * @type Boolean
   */
  desenv: false,
  /**
   * Grau do sistema (1º ou 2º)
   * 
   * @type Number
   */
  grau: 0,
  /**
   * Parâmetros GET passados à página
   * 
   * @type Object
   */
  params: null,
  /**
   * O servidor é de produção?
   * 
   * @type Boolean
   */
  producao: false,
  /**
   * O endereço da página é seguro?
   * 
   * @type Boolean
   */
  secure: false,
  /**
   * O endereço da página é valido?
   * 
   * @type Boolean
   */
  valid: false,
  /**
   * O sistema utilizado é o V1 (JEF) ?
   * 
   * @type Boolean
   */
  v1: false,
  /**
   * O sistema utilizado é o V2 (Rito Ordinário) ?
   * 
   * @type Boolean
   */
  v2: false,
  /**
   * Testa o endereço de acordo com as condições informadas
   * <p>
   * Exemplo:
   * </p>
   * 
   * <pre><code>
   * var addr =
   *   new Address('http://jef.jfsc.gov.br/eprocV2/controlador.php?acao=sair');
   * addr.test({
   *     v2: true,
   *     acao: 'sair',
   *     controlador: /&circ;controlador$/
   *   }); // true
   * </code></pre>
   * 
   * @param {Object} properties Propriedades que devem ser filtradas
   * @returns {Boolean} true se o endereço atende a todas as condições
   */
  test: function(properties)
  {
    var test = true;
    for ([name, filter] in Iterator(properties)) {
      if (filter.constructor.name == 'RegExp') {
        if (!filter.test(this[name])) test = false;
      } else {
        if (this[name] != filter) test = false;
      }
    }
    return test;
  }
};
function Sandbox(doc, address, chromeWindow)
{
  var sandbox = Components.utils.Sandbox(doc.location.href);
  sandbox.chromeWindow = chromeWindow;
  sandbox.document = doc;
  sandbox.window = doc.defaultView;
  sandbox.window.EprocSandbox = {
    Address: address,
    IE: function(url)
    {
      // create an nsILocalFile for the executable
      var file =
        Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
      file.initWithPath(Eproc.Router.getPreferences().get('v2.ielocation'));

      // create an nsIProcess
      var process =
        Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
      process.init(file);

      // Run the process.
      // If first param is true, calling thread will be blocked until
      // called process terminates.
      // Second and third params are used to pass command-line arguments
      // to the process.
      var args = [url];
      process.run(false, args, args.length);
    },
    Loader: Eproc.Router.getLoader(),
    Preferences: Eproc.Router.getPreferences(),
    Strings: Eproc.Router.getStrings(address)
  };
  var Events = Eproc.Router.getEvents();
  sandbox.addListener = function(obj, evt, fn, thisObject)
  {
    return Events.addListener(doc, obj, evt, fn, thisObject);
  };
  sandbox.addNotification =
    function(nb, message, value, icon, priority, buttons, persistent)
    {
      if ('undefined' == typeof(persistent)) {
        persistent = false;
      }
      var newBar =
        nb.appendNotification(message, value, icon, priority, buttons);
      if (persistent) {
        newBar.persistence++;
      }
      newBar.setLabel = function(label)
      {
        this.label = label;
      };
      return newBar;
    }
  sandbox.GM_xmlhttpRequest = function(options)
  {
    var req = new chromeWindow.XMLHttpRequest();
    req.open(options.method, options.url);
    if (options.mimeType) {
      req.overrideMimeType(options.mimeType);
    }
    if (options.headers) {
        for (var prop in options.headers) {
            req.setRequestHeader(prop, options.headers[prop]);
        }
    }
    req.onload = function()
    {
      return options.onload({
          responseText: req.responseText
        });
    };
    if (options.data) req.send(options.data);
    else req.send();
  };
  sandbox.__proto__ = sandbox.window;
  this.run = function(script)
  {
    var loader = Eproc.Router.getLoader();
    var content = loader.getUrlContents(script);
    try {
      throw new Error('Bogus Error');
    } catch (bogusEx) {
      try {
        Cu.evalInSandbox(content, sandbox);
      } catch (ex) {
        var customException =
          new Error(ex, script, ex.lineNumber - (bogusEx.lineNumber + 2));
        if (Eproc.Router.getPreferences().get('debug')) {
          throw customException;
        }
      }
    }
  };
  sandbox.evalInSandbox = this.run;
}
(function()
{
  Eproc.Router.init();
})();
