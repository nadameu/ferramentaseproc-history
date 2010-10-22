/**
 * @name resource://eproc/Listeners.jsm
 * @fileOverview Define o namespace Eproc.Listeners
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
 * Responsável pelo controle dos observadores de eventos de objetos
 * 
 * @namespace Responsável pelo controle dos observadores de eventos de objetos
 */
Eproc.Listeners = {
  /**
   * Adiciona um novo observador a um evento de objetos
   * 
   * @param {Object} page Página que adicionou o observador
   * @param {Object} obj Objeto que dispara o evento
   * @param {String} evt Evento a observar
   * @param {Function} fn Função manipuladora do evento
   * @param {Object} thisObject Objeto que será utilizado como "this" ao
   *        executar a função vinculada ao evento
   * @param {Boolean} cap Usar captura de evento
   * @returns {Listener} Objeto que contém as informações do observador
   */
  add: function(page, obj, evt, callback, thisObject, cap)
  {
    var listener = new Listener(page, obj, evt, callback, thisObject, cap);
    obj.addEventListener(evt, listener.callbackWrapper, cap);
    return listener;
  },
  /**
   * Remove um observador
   * 
   * @param {Listener} listener Objeto que contém as informações do observador
   */
  remove: function(listener)
  {
    listener.obj.removeEventListener(listener.evt, listener.callbackWrapper,
      listener.cap
    );
  }
};
/**
 * Armazena as informações de um listener
 * 
 * @class Armazena as informações de um listener
 * @constructor
 * @param {Object} page Página que adicionou o observador
 * @param {Object} obj Objeto que dispara o evento
 * @param {String} evt Evento a observar
 * @param {Function} fn Função manipuladora do evento
 * @param {Object} thisObject Objeto que será utilizado como "this" ao executar
 *        a função vinculada ao evento
 * @param {Boolean} cap Usar captura de evento
 */
function Listener(page, obj, evt, fn, thisObject, cap)
{
  /**
   * Página que adicionou o observador
   * 
   * @type Object
   */
  this.page = page;
  /**
   * Objeto que dispara o evento
   * 
   * @type Object
   */
  this.obj = obj;
  /**
   * Evento a observar
   * 
   * @type String
   */
  this.evt = evt;
  /**
   * Função manipuladora do evento
   * 
   * @type Function
   */
  this.fn = fn;
  /**
   * Objeto que será utilizado como "this" ao executar a função vinculada ao
   * evento
   * 
   * @type Object
   */
  this.thisObject = thisObject;
  /**
   * Usar captura de evento
   * 
   * @type Boolean
   */
  this.cap = cap;
  var callback = this.callback, callbackThis = this;
  /**
   * Função a ser passada ao observador de eventos
   * 
   * @field
   * @type Function
   */
  this.callbackWrapper = function()
  {
    return callback.apply(callbackThis, arguments);
  };
}
Listener.prototype = {
  /**
   * Função que será chamada quando o evento for disparado
   * 
   * @field
   * @type Function
   */
  callback: function(e)
  {
    if (this.thisObject) {
      return this.fn.call(this.thisObject, e, this);
    } else {
      return this.fn(e, this);
    }
  }
}