/**
 * @name chrome://eproc/content/Options.js
 * @fileOverview Script vinculado ao arquivo "options.xul"
 * @author Nadameu
 * @version 1.0
 */

if ('undefined' == typeof(EprocChrome)) {
  var EprocChrome = {};
}

/**
 * Controla a caixa de diálogo de preferências do complemento
 * 
 * @namespace Controla a caixa de diálogo de preferências do complemento
 */
EprocChrome.Options = {
  /**
   * Obtém o serviço de preferências
   * 
   * @return {Eproc.Preferences} Serviço de preferências
   */
  getPreferences: function()
  {
    var wrapper = {};
    Components.utils['import']('resource://eproc/Preferences.jsm', wrapper);
    this.getPreferences = function()
    {
      return wrapper.Eproc.Preferences;
    };
    return this.getPreferences();
  },
  /**
   * Obtém as strings do arquivo "chrome://eproc/locale/options.properties"
   * 
   * @return {StringBundle} Conjunto de strings
   */
  getStrings: function()
  {
    var wrapper = {};
    Components.utils['import']('resource://eproc/StringBundle.js', wrapper);
    var strings =
      new wrapper.StringBundle('chrome://eproc/locale/options.properties');
    this.getStrings = function()
    {
      return strings;
    };
    return this.getStrings();
  },
  /**
   * Desabilita as opções "filhas" de uma opção principal se esta for
   * desabilitada
   * 
   * @param {String} main Opção principal (id do elemento)
   * @param {String} children Opções "filhas" (id dos elementos separados por
   *        espaço)
   */
  process: function(main, children)
  {
    var _main = document.getElementById(main);
    var _this = this;
    children.split(' ').forEach(function(id)
      {
        document.getElementById(id).disabled = _main.disabled || !_main.checked;
        if (_this['on_' + id]) {
          _this['on_' + id]();
        }
      }
    );
  },
  /**
   * Função executada ao alterar a preferência "v1.enable"
   * 
   * @event
   */
  on_v1_enable: function()
  {
    this
      .process(
        'v1_enable',
        'v1_consulta_processo_enable v1_html_to_pdf_enable v1_alteracao_assunto_enable v1_eproc_enable'
      );
  },
  /**
   * Função executada ao alterar a preferência "v1.html_to_pdf.enable"
   * 
   * @event
   */
  on_v1_html_to_pdf_enable: function()
  {
    this.process('v1_html_to_pdf_enable', 'v1_secao v1_subsecao v1_vara');
  },
  /**
   * Função executada ao alterar a preferência "v2.enable"
   * 
   * @event
   */
  on_v2_enable: function()
  {
    this.process('v2_enable',
      'v2_perfil v2_secao v2_subsecao v2_ielocation v2_ielocation_button'
    );
  },
  /**
   * Função executada ao clicar no botão "Procurar..." da opção "v2.ielocation"
   * 
   * @event
   */
  on_v2_ielocation_click: function()
  {
    var picker =
      Components.classes["@mozilla.org/filepicker;1"]
        .createInstance(Components.interfaces.nsIFilePicker);
    picker.init(window, this.getStrings().get('v2.ielocation.title'), 0);
    picker.appendFilter("iexplore.exe", 'iexplore.exe');
    picker.appendFilters(0x40 | 0x01);
    if (picker.show() == 0)
      this.getPreferences().set('v2.ielocation', picker.file.path);
  },
  /**
   * Função executada ao clicar no botão "Restaurar valores padrão"
   * 
   * @event
   */
  reset: function()
  {
    this.getPreferences().reset();
    this.on_v1_enable();
    this.on_v2_enable();
  }
};