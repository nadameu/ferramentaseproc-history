/**
 * @name resource://eproc/Timer.jsm
 * @fileOverview Define a classe Eproc.Timer
 * @author Nadameu
 * @version 1.0
 */

/**
 * @ignore
 */
var EXPORTED_SYMBOLS = ['Eproc'];

if ('undefined' == typeof(Eproc)) {
  var Eproc = {};
}

const Cc = Components.classes;
const Ci = Components.interfaces;
const Cr = Components.results;
const Cu = Components.utils;

/**
 * Executa uma função após um determinado tempo
 * 
 * @class Executa uma função após um determinado tempo
 * @constructor
 * @param {Number} delay Número de milissegundos a aguardar antes da execução da
 *        função
 * @param {Function} callback Função a ser chamada
 * @param {Object} [thisObject] Objeto "this" da função a ser chamada
 */
Eproc.Timer = function(delay, callback, thisObject)
{
  var observer = new TimerObserver(callback, thisObject);
  var timer = Cc['@mozilla.org/timer;1'].createInstance(Ci.nsITimer);
  timer.initWithCallback(observer, delay, Ci.nsITimer.TYPE_ONE_SHOT);
  /**
   * Cancela o evento timer
   */
  this.cancel = function()
  {
    timer.cancel();
  }
}
/**
 * Observador do timer
 * 
 * @class Observador do timer
 * @constructor
 * @param {Function} callback Função a ser chamada
 * @param {Object} [thisObject] Objeto "this" da função a ser chamada
 */
function TimerObserver(callback, thisObject)
{
  this.callback = callback;
  this.thisObject = thisObject;
}
TimerObserver.prototype = {
  /**
   * Função chamada quando o timer notifica o objeto observador
   * 
   * @event
   * @param {nsITimer} timer Objeto timer
   */
  notify: function(timer)
  {
    if (this.thisObject) {
      this.callback.call(this.thisObject, timer, this);
    } else {
      this.callback(timer, this);
    }
  }
};