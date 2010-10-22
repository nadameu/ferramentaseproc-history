/**
 * @name chrome://eproc/content/BrowserOverlay.js
 * @fileOverview Define o namespace EprocChrome.BrowserOverlay
 * @author Nadameu
 * @version 1.0
 */

if ('undefined' == typeof(EprocChrome)) {
  var EprocChrome = {};
}
/**
 * Responsável pelo funcionamento do complemento
 * 
 * @namespace Responsável pelo funcionamento do complemento
 */
EprocChrome.BrowserOverlay = {
  /**
   * Verifica se o complemento está ativado e altera a mensagem e a
   * transparência do ícone sempre que as preferências forem alteradas
   * 
   * @event
   */
  checkEnabled: function()
  {
  	var statusbar = document.getElementById('eproc-status-bar-panel');
    var icon =
      statusbar.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'img')[0];
    var Strings = this.getStrings();
    var Preferences = this.getPreferences();
    var status = Strings.get('tooltip.none');
    var v1 = Preferences.get('v1.enable');
    var v2 = Preferences.get('v2.enable');
    if (v1 && v2) {
      status = Strings.get('tooltip.both');
    } else if (v1) {
      status = Strings.get('tooltip.v1');
    } else if (v2) {
      status = Strings.get('tooltip.v2');
    }
    statusbar.setAttribute('tooltiptext', status);
    icon.style.opacity = (v1 || v2) ? '1' : '.5';
  },
  getEvents: function()
  {
    return this.getService('Events');
  },
  getPreferences: function()
  {
    return this.getService('Preferences');
  },
  getRouter: function()
  {
    return this.getService('Router');
  },
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
  getStrings: function()
  {
    var wrapper = {};
    Cu['import']('resource://eproc/StringBundle.js', wrapper);
    var strings =
      new wrapper.StringBundle('chrome://eproc/locale/overlay.properties');
    this.getStrings = function()
    {
      return strings;
    };
    return this.getStrings();
  },
  getTimer: function()
  {
    return this.getService('Timer');
  },
  /**
   * Inicializa o complemento
   */
  init: function()
  {
    var Timer = this.getTimer();
    timer = new Timer(0, this.load, this);
  },
  /**
   * Carrega os arquivos necessários e define os observadores
   */
  load: function()
  {
    timer.cancel();
    delete timer;
    this.getEvents().addListener(window, window, 'load', this.onLoad, this);
  },
  /**
   * @event
   * @param {Event} e Evento disparado
   * @param {Listener} listener Objeto que possui as informações do observador
   *        do evento disparado
   */
  onLoad: function(e, listener)
  {
    var Router = this.getRouter();
    var Events = this.getEvents();
    /* Remove o listener window.onload */
    Events.removeListener(listener);
    Events.notifyObservers('eproc-window-load', {
        window: window,
        gBrowser: gBrowser
      });
    Events.addListener(window, window, 'unload', this.onUnload, this);
    Events.addPrefObserver('v1.enable', this.checkEnabled, this);
    Events.addPrefObserver('v2.enable', this.checkEnabled, this);
    this.checkEnabled();
  },
  /**
   * @event
   * @param {Event} e Evento disparado
   */
  onUnload: function(e)
  {
    var Events = this.getEvents();
    Events.notifyObservers('eproc-window-unload');
    Events.removeListeners(window);
  },
  openPreferences: function()
  {
    if (null == this._preferencesWindow || this._preferencesWindow.closed) {
      var instantApply =
        Application.prefs.get('browser.preferences.instantApply');
      var features =
        'chrome,titlebar,toolbar,centerscreen'
          + (instantApply.value ? ',dialog=no' : ',modal');
      this._preferencesWindow =
        window.openDialog('chrome://eproc/content/options.xul',
          'eproc-options', features
        );
    }
    this._preferencesWindow.focus();
  }
};
(function()
{
  /**
   * Timer
   * 
   * @private
   * @type Eproc.Timer
   */
  var timer;
  EprocChrome.BrowserOverlay.init();
})();