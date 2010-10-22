/**
 * @name resource://eproc/Events.jsm
 * @fileOverview Define o namespace Eproc.Events
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
 * Conjunto de observadores de eventos de objetos
 * 
 * @type Listener[]
 */
var listeners = [];
/**
 * Conjunto de observadores de eventos do browser
 * 
 * @type Observer[]
 */
var observers = [];
/**
 * Conjunto de observadores de alteração de preferências
 * 
 * @type PrefObserver[]
 */
var prefObservers = [];
/**
 * Responsável pelo controle dos observadores de eventos
 * 
 * @namespace Responsável pelo controle dos observadores de eventos
 */
Eproc.Events = {
  /**
   * Adiciona um observador a um objeto
   * 
   * @param {Object} page Página a que o observador pertence. Permite a exclusão
   *        de observadores em bloco.
   * @param {Object} obj Objeto que dispara o evento
   * @param {String} evt Evento a observar
   * @param {Function} fn Função a ser chamada quando o evento for disparado
   * @param {Object} [thisObject] Escopo da função observadora
   */
  addListener: function(page, obj, evt, fn, thisObject)
  {
    var cap = (evt == 'beforeunload') ? true : false;
    var listener = this.getListeners().add(page, obj, evt, fn, thisObject, cap);
    listeners.push(listener);
    return listener;
  },
  /**
   * Adiciona um observador a um evento do browser
   * 
   * @param {String} topic Tópico a ser observado
   * @param {Function} fn Função a ser chammada quando o evento for disparado
   * @param {Object} [thisObject] Escopoo da função observadora
   */
  addObserver: function(topic, callback, thisObject)
  {
    var observer = observers.filter(function(observer)
    {
      return observer.topic == topic
        && observer.callback.toSource() == callback.toSource()
        && (!/this\./.test(observer.callback.toSource()) || (observer.thisObject == thisObject));
    }
    );
    if (observer.length == 0) {
      var observer = this.getObservers().add(topic, callback, thisObject);
      observers.push(observer);
      return observer;
    }
  },
  /**
   * Adiciona um observador a uma alteração de preferência
   * 
   * @param {String} pref Preferência a ser observada
   * @param {Function} fn Função a ser chammada quando a preferência for
   *        alterada
   * @param {Object} [thisObject] Escopoo da função observadora
   */
  addPrefObserver: function(pref, callback, thisObject)
  {
    var prefObserver = prefObservers.filter(function(prefObserver)
    {
      return prefObserver.pref == pref
        && prefObserver.callback.toSource() == callback.toSource()
        && (!/this\./.test(prefObserver.callback.toSource()) || prefObserver.thisObject == thisObject);
    }
    );
    if (prefObserver.length == 0) {
      var prefObserver = this.getPreferences().add(pref, callback, thisObject);
      prefObservers.push(prefObserver);
      return prefObserver;
    }
  },
  /**
   * Obtém um serviço, carregando o módulo respectivo e reescrevendo a função
   * que o obtém
   * 
   * @param {String} service Nome do serviço
   * @returns Serviço requisitado
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
   * Obtém o serviço observador de eventos de objetos
   * 
   * @returns {Eproc.Listeners}
   */
  getListeners: function()
  {
    return this.getService('Listeners');
  },
  /**
   * Obtém o serviço observador de eventos do browser
   * 
   * @returns {Eproc.Observers}
   */
  getObservers: function()
  {
    return this.getService('Observers');
  },
  /**
   * Obtém o serviço de preferências
   * 
   * @returns {Eproc.Preferences}
   */
  getPreferences: function()
  {
    return this.getService('Preferences');
  },
  /**
   * Notifica os observadores de um evento
   * 
   * @param {String} topic Tópico da notificação
   * @param {Object} [subject=null] Assunto da notificação. Pode ser usado para
   *        passar dados ao observador.
   */
  notifyObservers: function(topic, subject)
  {
    if ('undefined' == typeof(subject)) {
      subject = null;
    }
    return this.getObservers().notify(topic, subject);
  },
  /**
   * Remove todos os observadores de eventos do browser
   */
  removeAllObservers: function()
  {
    observers.forEach(function(observer)
      {
        this.removeObserver(observer);
      }, this);
  },
  /**
   * Remove todos os observadores de alterações de preferências
   */
  removeAllPrefObservers: function()
  {
    prefObservers.forEach(function(prefObserver)
      {
        this.removePrefObserver(prefObserver);
      }, this);
  },
  /**
   * Remove um observador de evento de objeto
   * 
   * @param {Listener} listener Função que contém as informações do observador
   */
  removeListener: function(listener)
  {
    this.getListeners().remove(listener);
    listeners.splice(listeners.indexOf(listener), 1);
  },
  /**
   * Remove todos os observadores de eventos de objetos adicionados por uma
   * determinada página
   * 
   * @param {Object} page Página que adicionou o evento
   */
  removeListeners: function(page)
  {
    listeners.filter(function(listener)
      {
        return listener.page == page;
      }).forEach(function(listener)
      {
        this.removeListener(listener);
      }, this);
  },
  /**
   * Remove um observador de evento do browser
   * 
   * @param {Observer} observer Observador
   */
  removeObserver: function(observer)
  {
    this.getObservers().remove(observer);
    observers.splice(observers.indexOf(observer), 1);
  },
  /**
   * Remove um observador de alteração de preferências
   * 
   * @param {PrefObserver} prefObserver Observador
   */
  removePrefObserver: function(prefObserver)
  {
    this.getPreferences().remove(prefObserver);
    prefObservers.splice(prefObservers.indexOf(prefObserver), 1);
  }
};
