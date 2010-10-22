/**
 * @name resource://eproc/Log.js
 * @fileOverview Define a função LOG
 * @author Nadameu
 * @version 1.0
 */

/**
 * @ignore
 */
var EXPORTED_SYMBOLS = ['LOG'];

const Cc = Components.classes;
const Ci = Components.interfaces;
const Cr = Components.results;
const Cu = Components.utils;

/**
 * FUEL Application
 * 
 * @private
 * @name Log.js-Application
 * @type fuelIApplication
 */
var Application =
  Cc["@mozilla.org/fuel/application;1"].getService(Ci.fuelIApplication);

/**
 * Atalho para Application.console.log
 * 
 * @param {String} msg Mensagem a ser passada ao console
 * @requires Log.js-Application
 */
function LOG(msg)
{
  try {
    return Application.console.log('' + msg);
  } catch (e) {
    return Application.console.log('' + e);
  }
}
