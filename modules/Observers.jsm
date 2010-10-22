/**
 * @name resource://eproc/Observers.jsm
 * @fileOverview Define o namespace Eproc.Observers
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
 * @namespace Responsável pelo controle dos observadores de eventos do browser
 */
Eproc.Observers = {
  /**
   * Adiciona um novo observador a um evento do browser
   * 
   * @param {String} topic Tópico a ser observado
   * @param {Function} callback Função a ser chamada
   * @param {Object} [thisObject] Objeto "this" para a função a ser chamada
   * @returns {Observer} Objeto que contém as informações do observador
   */
  add: function(topic, callback, thisObject)
  {
    var observer = new Observer(topic, callback, thisObject);
    this.getService().addObserver(observer, topic, false);
    return observer;
  },
  /**
   * Obtém o serviço de observação
   * 
   * @returns {nsIObserverService} Serviço de observação
   */
  getService: function()
  {
    var service =
      Cc["@mozilla.org/observer-service;1"].getService(Ci.nsIObserverService);
    this.getService = function()
    {
      return service;
    };
    return this.getService();
  },
  /**
   * Notifica os observadores de um evento
   * 
   * @param {String} topic Tópico da notificação
   * @param {Object} [subject=null] Assunto da notificação. Pode ser usado para
   *        passar dados ao observador.
   */
  notify: function(topic, subject)
  {
    if (typeof subject == 'undefined') {
      subject = null;
    } else {
      subject = new Subject(subject);
    }
    this.getService().notifyObservers(subject, topic, null);
  },
  /**
   * Remove um observador
   * 
   * @param {Observer} observer Objeto que contém as informações do observador
   */
  remove: function(observer)
  {
    this.getService().removeObserver(observer, observer.topic);
  }
};
/**
 * Objeto que possui as informações do observador
 * 
 * @class Objeto que possui as informações do observador
 * @constructor
 * @param {String} topic Tópico a ser observado
 * @param {Function} callback Função a ser chamada
 * @param {Object} [thisObject] Objeto "this" para a função a ser chamada
 */
function Observer(topic, callback, thisObject)
{
  /**
   * Tópico a ser observado
   * 
   * @type String
   */
  this.topic = topic;
  /**
   * Função a ser chamada
   * 
   * @type Function
   */
  this.callback = callback;
  /**
   * Objeto "this" para a função a ser chamada
   * 
   * @type Object
   */
  this.thisObject = thisObject;
}
Observer.prototype = {
  /**
   * Função que será chamada quando o evento for notificado
   * 
   * @event
   * @param {Object} subject Assunto da notificação. Pode ser usado para passar
   *        dados ao observador.
   * @param {String} topic Tópico da notificação
   * @param data Dados adicionais passados pelo evento
   */
  observe: function(subject, topic, data)
  {
    if ('object' == typeof(subject) && 'wrappedJSObject' in subject
      && 'isWrappedObject' in subject.wrappedJSObject) {
      subject = subject.wrappedJSObject.object;
    }
    if (this.thisObject) {
      this.callback.call(this.thisObject, subject, topic, data);
    } else {
      this.callback(subject, topic, data);
    }
  }
}
function Subject(object)
{
  this.wrappedJSObject = {
    isWrappedObject: true,
    object: object
  };
}