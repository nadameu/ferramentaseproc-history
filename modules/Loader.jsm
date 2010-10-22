/**
 * @name resource://eproc/Loader.jsm
 * @fileOverview Define o namespace Eproc.Loader
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
 * Armazena o conteúdo dos arquivos já buscados
 * 
 * @private
 * @type Object
 */
var contents = {};

/**
 * Obtém o conteúdo de um arquivo
 * <p>
 * getUrlContents adapted from Greasemonkey Compiler<br/>
 * http://www.letitblog.com/code/python/greasemonkey.py.txt<br/>used under GPL
 * permission<br/>most everything else below based heavily off of Greasemonkey<br/>http://greasemonkey.devjavu.com/<br/>used
 * under GPL permission
 * </p>
 * 
 * @private
 * @param {AUTF8String} aUrl Caminho do arquivo
 * @return {String} Conteúdo do arquivo
 */
function getUrlContents(aUrl)
{
  var ioService =
    Components.classes["@mozilla.org/network/io-service;1"]
      .getService(Components.interfaces.nsIIOService);
  var scriptableStream =
    Components.classes["@mozilla.org/scriptableinputstream;1"]
      .getService(Components.interfaces.nsIScriptableInputStream);
  var unicodeConverter =
    Components.classes["@mozilla.org/intl/scriptableunicodeconverter"]
      .createInstance(Components.interfaces.nsIScriptableUnicodeConverter);
  unicodeConverter.charset = "UTF-8";

  var channel = ioService.newChannel(aUrl, null, null);
  var input = channel.open();
  scriptableStream.init(input);
  var str = scriptableStream.read(input.available());
  scriptableStream.close();
  input.close();
  try {
    return unicodeConverter.ConvertToUnicode(str);
  } catch (e) {
    return str;
  }
};

/**
 * Obtém o conteúdo de arquivos
 * 
 * @namespace Obtém o conteúdo de arquivos
 */
Eproc.Loader = {
  /**
   * Obtém o conteúdo de um arquivo e armazena-o.
   * 
   * @param {AUTF8String} aUrl Caminho do arquivo
   * @return {String} Conteúdo do arquivo
   */
  getUrlContents: function(aUrl)
  {
    if (!contents.hasOwnProperty(aUrl)) {
      contents[aUrl] = getUrlContents(aUrl);
    }
    return contents[aUrl];
  }
};
