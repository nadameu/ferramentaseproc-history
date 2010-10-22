var Options = {

    action: function(act) {
        for (var i = 0, l = this.options.length, n; (i < l) && (n = this.options[i]); i++) {
            var el = document.getElementById(n.split('.').join('_')), prop;
            switch (el.tagName) {
                case 'checkbox':
                    prop = 'checked';
                    break;

                case 'textbox':
                    prop = 'value';
                    break;
            }
            switch (act) {
                case 'get':
                    el[prop] = this.getValue(n, false);
                    break;

                case 'save':
                    this.prefs.setValue(n, el[prop]);
                    break;

                case 'clear':
                    el[prop] = this.getValue(n, true);
                    break;
            }
        }
    },

    cancel: function() {
        return true;    
    },
    
    defaults: function() {
        this.action('clear');
        return false;
    },

    getValue: function(prefName, clear) {
        if (clear) {
            return this.prefs.getDefaultValue(prefName);
        } else {
            return this.prefs.getValue(prefName);
        }
    },
    
    init: function() {
        this.prefs = new eproc_PrefManager();
        this.options = [
            'v1.enable',
            'v1.consulta_processo.enable',
            'v1.html_to_pdf.enable',
            'v1.alteracao_assunto.enable',
            'v1.eproc.enable',
			'v2.enable',
			'v2.fundo',
			'v2.perfil'
        ];
        this.action('get');
    },

    ok: function() {
        this.action('save');
        return true;
    }

}
