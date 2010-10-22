/**
 * @name resource://eproc/Preferences.jsm
 * @fileOverview Define a classe Eproc.Preferences
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
 * @namespace Responsável pelo controle dos observadores de eventos das
 *            preferências
 */
Eproc.Preferences = {
  /**
   * Adiciona um novo observador a um evento do browser
   * 
   * @param {String} topic Tópico a ser observado
   * @param {Function} callback Função a ser chamada
   * @param {Object} [thisObject] Objeto "this" para a função a ser chamada
   * @returns {Preferences.js.PrefObserver} Objeto que contém as informações do
   *          observador
   */
  add: function(topic, callback, thisObject)
  {
    var prefObserver = new PrefObserver(topic, callback, thisObject);
    this.getBranch().QueryInterface(Ci.nsIPrefBranch2);
    this.getBranch().addObserver(topic, prefObserver, false);
    this.getBranch().QueryInterface(Ci.nsIPrefBranch);
    return prefObserver;
  },
  /**
   * Obtém o valor da preferência
   * 
   * @param {String} pref Preferência
   * @returns {nsIVariant} Valor da preferência
   */
  get: function(pref)
  {
    switch (this.getBranch().getPrefType(pref))
    {
      case Ci.nsIPrefBranch.PREF_STRING:
        return this.getBranch().getComplexValue(pref,
          Components.interfaces.nsISupportsString
        ).data;
        break;

      case Ci.nsIPrefBranch.PREF_INT:
        return this.getBranch().getIntPref(pref);
        break;

      case Ci.nsIPrefBranch.PREF_BOOL:
        return this.getBranch().getBoolPref(pref);
        break;

      case Ci.nsIPrefBranch.PREF_INVALID:
      default:
        return null;
        break;
    }
  },
  /**
   * Obtém o ramo das preferências deste complemento
   * 
   * @returns {nsIPrefBranch} Ramo das preferências
   */
  getBranch: function()
  {
    var branch =
      this.getService().getBranch('extensions.eproc@nadameu.com.br.');
    this.getBranch = function()
    {
      return branch;
    };
    return this.getBranch();
  },
  /**
   * Obtém o serviço de preferências
   * 
   * @returns {nsIPrefService} Serviço de preferências
   */
  getService: function()
  {
    var service =
      Cc["@mozilla.org/preferences-service;1"].getService(Ci.nsIPrefService);
    this.getService = function()
    {
      return service;
    };
    return this.getService();
  },
  /**
   * Remove um observador
   * 
   * @param {PrefObserver} prefObserver Objeto que contém as informações do
   *        observador
   */
  remove: function(prefObserver)
  {
    this.getBranch().QueryInterface(Ci.nsIPrefBranch2);
    this.getBranch().removeObserver(prefObserver.pref, prefObserver);
    this.getBranch().QueryInterface(Ci.nsIPrefBranch);
  },
  /**
   * Retorna todas as preferências a seus valores padrão
   */
  reset: function()
  {
    var cl = {}, x;
    var children = this.getBranch().getChildList('', cl, x);
    for (var i = 0, child; (i < cl.value) && (child = children[i]); i++) {
      if (this.getBranch().prefHasUserValue(child)) {
        this.getBranch().clearUserPref(child);
      }
    }
  },
  /**
   * Define o valor de uma preferência
   * 
   * @param {String} pref Nome da preferência
   * @param {nsIVariant} value Valor da preferência
   */
  set: function(pref, value)
  {
    switch (value.constructor.name)
    {
      case 'String':
        var str =
          Components.classes["@mozilla.org/supports-string;1"]
            .createInstance(Components.interfaces.nsISupportsString);
        str.data = value;
        this.getBranch().setComplexValue(pref,
          Components.interfaces.nsISupportsString, str
        );
        break;

      case 'Number':
        this.getBranch().setIntPref(pref, value);
        break;

      case 'Boolean':
        this.getBranch().setBoolPref(pref, value);
        break;

      default:
        this.getBranch().setCharPref(pref, value);
        break;
    }
  }
};
/**
 * Objeto que possui as informações do observador
 * 
 * @class Objeto que possui as informações do observador
 * @constructor
 * @param {String} pref Preferência a ser observada
 * @param {Function} callback Função a ser chamada
 * @param {Object} [thisObject] Objeto "this" para a função a ser chamada
 */
function PrefObserver(pref, callback, thisObject)
{
  /**
   * Preferência a ser observada
   * 
   * @type String
   */
  this.pref = pref;
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
PrefObserver.prototype = {
  /**
   * Função que será chamada quando o evento for notificado
   * 
   * @event
   * @param {nsIPrefBranch2} subject Ramo das preferências a que pertence a
   *        preferência alterada.
   * @param {String} topic "nsPref:changed"
   * @param {String} data Nome da preferência alterada
   */
  observe: function(subject, topic, data)
  {
    if (this.thisObject) {
      this.callback.call(this.thisObject, subject, topic, data, this);
    } else {
      this.callback(subject, topic, data, this);
    }
  }
}