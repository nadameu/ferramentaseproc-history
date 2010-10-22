// {{{ Cores
var Cores = {
    AMARELA: '#efef8f',
    AZUL: '#8fbfef',
    AZUL_CLARA: '#c4dffb',
    AZUL_OU_MARROM: '#bf8040',
    BRANCA: '#fff',
    CINZA: '#bfbfbf',
    DESCONHECIDA: '#fff',
    LARANJA: '#f5b574',
    PALHA: '#efd88f',
    ROSA: '#fbc4df',
    SALM�O: '#efa88f',
    VERDE: '#a7eda7',
    VERMELHA: '#db6464'
}
// }}}
/*
var table = document.createElement('table');
table.setAttribute('cellpadding', 10);
table.setAttribute('cellspacing', 0);
table.setAttribute('border', 1);
var row = table.insertRow(0);
for (c in Cores) {
    var cell = row.insertCell(row.cells.length);
    cell.style.backgroundColor = Cores[c];
    cell.innerHTML = c;
}
document.getElementById('divInfraAreaTelaD').appendChild(table);
*/
// {{{ Classes
var Classes = {
    'A��O CIVIL P�BLICA': Cores.VERDE,
    'A��O CIVIL P�BLICA DE IMPROBIDADE ADMINISTRATIVA': Cores.VERDE,
    'A��O CIVIL P�BLICA DO C�DIGO DE DEFESA DO CONSUMID': Cores.VERDE,
    'A��O DE ALIMENTOS': Cores.VERDE,
    'A��O DE ANULA��O E SUBSTITUI��O DE T�TULOS AO PORT': Cores.VERDE,
    'A��O DE APREENS�O E DEP�SITO DE COISA VENDIDA C/RE': Cores.VERDE,
    'A��O DE BUSCA E APREENS�O EM ALIENA��O FIDUCI�RIA': Cores.VERDE,
    'A��O DE COBRAN�A DE C�DULA DE CR�DITO INDUSTRIAL': Cores.VERDE,
    'A��O DE COMPROMISSO ARBITRAL': Cores.VERDE,
    'A��O DE CONSIGNA��O DE ALUGUEL': Cores.VERDE,
    'A��O DE CONSIGNA��O EM PAGAMENTO': Cores.VERDE,
    'A��O DE DEP�SITO': Cores.VERDE,
    'A��O DE DEP�SITO DA LEI 8866/94': Cores.VERDE,
    'A��O DE DESAPROPRIA��O': Cores.VERDE,
    'A��O DE DESAPROPRIA��O P FINS DE REFORMA AGR�RIA': Cores.VERDE,
    'A��O DE DESPEJO': Cores.VERDE,
    'A��O DE DISSOLU��O E LIQUIDA��O DE SOCIEDADE': Cores.VERDE,
    'A��O DE EXPROPRIA��O DA LEI 8.257/91': Cores.VERDE,
    'A��O DE IMISS�O NA POSSE': Cores.CINZA,
    'A��O DE NUNCIA��O DE OBRA NOVA': Cores.VERDE,
    'A��O DE USUCAPI�O': Cores.VERDE,
    'A��O DISCRIMINAT�RIA': Cores.VERDE,
    'A��O MONIT�RIA': Cores.VERDE,
    'A��O ORDIN�RIA (PROCEDIMENTO COMUM ORDIN�RIO)': Cores.ROSA,
    'A��O PENAL': Cores.AZUL_CLARA,
    'A��O POPULAR': Cores.VERDE,
    'A��O RENOVAT�RIA': Cores.VERDE,
    'A��O REVISIONAL DE ALUGUEL': Cores.VERDE,
    'A��O SUM�RIA (PROCEDIMENTO COMUM SUM�RIO)': Cores.VERDE,
    'AGRAVO DE EXECU��O PENAL': Cores.BRANCA,
    'AGRAVO DE INSTRUMENTO': Cores.VERDE,
    'AGRAVO DE INSTRUMENTO DE DECIS�O DENEGAT.DE REC.EX': Cores.VERDE,
    'ALIENA��O JUDICIAL': Cores.BRANCA,
    'ALIENA��O JUDICIAL CRIMINAL': Cores.VERMELHA,
    'ALVAR� JUDICIAL': Cores.CINZA,
    'APELA��O CRIMINAL': Cores.AZUL,
    'APREENS�O DE EMBARCA��ES': Cores.BRANCA,
    'ARRESTO / HIPOTECA LEGAL - MEDIDAS ASSECURAT�RIAS': Cores.BRANCA,
    'ARRIBADAS FOR�ADAS': Cores.BRANCA,
    'AVARIA A CARGO DO SEGURADOR': Cores.BRANCA,
    'AVARIAS': Cores.BRANCA,
    'CANCELAMENTO DE NATURALIZA��O': Cores.BRANCA,
    'CARTA DE ORDEM': Cores.CINZA,
    'CARTA PRECAT�RIA': Cores.CINZA,
    'CARTA ROGAT�RIA': Cores.CINZA,
    'CARTA TESTEMUNH�VEL': Cores.AMARELA,
    'COMUNICA��O DE PRIS�O EM FLAGRANTE': Cores.BRANCA,
    'CONFLITO DE COMPET�NCIA': Cores.BRANCA,
    'CRIMES AMBIENTAIS': Cores.BRANCA,
    'CUMPRIMENTO DE SENTEN�A': Cores.BRANCA,
    'DECLARA��O DE AUS�NCIA': Cores.BRANCA,
    'DECLARA��O DE D�VIDA NO REGISTRO': Cores.BRANCA,
    'DEMARCA��O / DIVIS�O': Cores.CINZA,
    'DESAFORAMENTO DE JULGAMENTO': Cores.BRANCA,
    'DESPEJO P/FALTA DE PAGAMENTO CUMULADO C/COBRAN�A': Cores.VERDE,
    'DESPEJO POR FALTA DE PAGAMENTO': Cores.DESCONHECIDA,
    'EMBARGOS � ADJUDICA��O': Cores.VERDE,
    'EMBARGOS � ARREMATA��O': Cores.VERDE,
    'EMBARGOS � EXECU��O': Cores.VERDE,
    'EMBARGOS � EXECU��O FISCAL': Cores.VERDE,
    'EMBARGOS DE RETEN��O POR BENFEITORIAS': Cores.VERDE,
    'EMBARGOS DE TERCEIRO': Cores.VERDE,
    'EMBARGOS DO ACUSADO': Cores.DESCONHECIDA,
    'ESPECIALIZA��O DE HIPOTECA LEGAL': Cores.BRANCA,
    'EXCE��O DA VERDADE': Cores.BRANCA,
    'EXCE��O DE COISA JULGADA': Cores.BRANCA,
    'EXCE��O DE ILEGITIMIDADE DE PARTE': Cores.BRANCA,
    'EXCE��O DE IMPEDIMENTO': Cores.VERDE,
    'EXCE��O DE IMPEDIMENTO CRIMINAL': Cores.BRANCA,
    'EXCE��O DE INCOMPET�NCIA': Cores.VERDE,
    'EXCE��O DE INCOMPET�NCIA CRIMINAL': Cores.BRANCA,
    'EXCE��O DE LITISPEND�NCIA': Cores.BRANCA,
    'EXCE��O DE SUSPEI��O': Cores.VERDE,
    'EXCE��O DE SUSPEI��O CRIMINAL': Cores.BRANCA,
    'EXCESSO OU DESVIO-INCIDENTES EM EXECU��O CRIMINAL': Cores.BRANCA,
    'EXECU��O DE SENTEN�A CONTRA FAZENDA P�BL': Cores.VERDE,
    'EXECU��O DE T�TULO EXTRAJUDICIAL': Cores.AMARELA,
    'EXECU��O FISCAL': Cores.LARANJA,
    'EXECU��O HIPOTEC�RIA DO SISTEMA FINANCEIRO DA HABI': Cores.DESCONHECIDA,
    'EXECU��O PENAL': Cores.DESCONHECIDA,
    'EXECU��O PENAL PROVIS�RIA': Cores.AMARELA,
    'EXECU��O PROVIS�RIA DE SENTEN�A': Cores.VERDE,
    'EXIBI��O DE DOCUMENTO OU COISA': Cores.LARANJA,
    'HABEAS CORPUS': Cores.AMARELA,
    'HABEAS DATA': Cores.DESCONHECIDA,
    'HABILITA��O': Cores.DESCONHECIDA,
    'HOMOLOGA��O DE TRANSA��O EXTRAJUDICIAL': Cores.VERDE,
    'IMPUGNA��O AO CUMPRIMENTO DE SENTEN�A': Cores.AZUL,
    'IMPUGNA��O AO PEDIDO DE ASSIST�NCIA LITISCONSORCIA': Cores.BRANCA,
    'IMPUGNA��O AO VALOR DA CAUSA': Cores.BRANCA,
    'IMPUGNA��O DO DIREITO A ASSIST�NCIA JUDICI�RIA': Cores.DESCONHECIDA,
    'INCIDENTE DE AVALIA��O DE DEPEND�NCIA DE DROGAS': Cores.VERDE,
    'INCIDENTE DE FALSIDADE': Cores.DESCONHECIDA,
    'INCIDENTE DE FALSIDADE CRIMINAL': Cores.BRANCA,
    'INCIDENTE DE INSANIDADE MENTAL': Cores.AMARELA,
    'INCIDENTE DE RESTITUI��O DE COISAS APREENDIDAS': Cores.BRANCA,
    'INCIDENTE DE TRANSF.ENTRE ESTABELECIMENTOS PENAIS': Cores.DESCONHECIDA,
    'INCIDENTE DE UNIFORMIZA��O DE JURISPRUD�NCIA': Cores.VERDE,
    'INQU�RITO POLICIAL': Cores.VERDE,
    'INTERDITO PROIBIT�RIO': Cores.VERDE,
    'JUSTIFICA��O DE DINHEIRO A RISCO': Cores.VERDE,
    'LIQUIDA��O POR ARBITRAMENTO': Cores.BRANCA,
    'LIQUIDA��O POR ARTIGOS': Cores.BRANCA,
    'LIQUIDA��O PROVIS�RIA POR ARBITRAMENTO': Cores.BRANCA,
    'LIQUIDA��O PROVIS�RIA POR ARTIGOS': Cores.BRANCA,
    'MANDADO DE SEGURAN�A': Cores.PALHA,
    'MANDADO DE SEGURAN�A COLETIVO': Cores.DESCONHECIDA,
    'MEDIDA CAUTELAR DE ALIMENTOS PROVISIONAIS': Cores.AZUL,
    'MEDIDA CAUTELAR DE APREENS�O DE T�TULOS': Cores.CINZA,
    'MEDIDA CAUTELAR DE ARRESTO': Cores.BRANCA,
    'MEDIDA CAUTELAR DE ARROLAMENTO DE BENS': Cores.BRANCA,
    'MEDIDA CAUTELAR DE ATENTADO': Cores.BRANCA,
    'MEDIDA CAUTELAR DE BUSCA E APREENS�O': Cores.DESCONHECIDA,
    'MEDIDA CAUTELAR DE CAU��O': Cores.PALHA,
    'MEDIDA CAUTELAR DE EXIBI��O': Cores.SALM�O,
    'MEDIDA CAUTELAR DE HOMOLOGA��O DO PENHOR LEGAL': Cores.SALM�O,
    'MEDIDA CAUTELAR DE INTERPELA��O': Cores.SALM�O,
    'MEDIDA CAUTELAR DE JUSTIFICA��O': Cores.SALM�O,
    'MEDIDA CAUTELAR DE NOTIFICA��O': Cores.SALM�O,
    'MEDIDA CAUTELAR DE POSSE EM NOME DO NASCITURO': Cores.DESCONHECIDA,
    'MEDIDA CAUTELAR DE PRODU��O ANTECIPADA DE PROVAS': Cores.DESCONHECIDA,
    'MEDIDA CAUTELAR DE PROTESTO': Cores.SALM�O,
    'MEDIDA CAUTELAR DE SEQUESTRO': Cores.SALM�O,
    'MEDIDA CAUTELAR FISCAL': Cores.DESCONHECIDA,
    'MEDIDA CAUTELAR INOMINADA': Cores.SALM�O,
    'NATURALIZA��O': Cores.SALM�O,
    'NOMEA��O DE ADVOGADO': Cores.DESCONHECIDA,
    'NOTIFICA��O PARA EXPLICA��ES': Cores.SALM�O,
    'NOTIFICA��O PARA EXPLICA��ES (LEI DE IMPRENSA)': Cores.AMARELA,
    'OP��O DE NACIONALIDADE': Cores.SALM�O,
    'OPOSI��O': Cores.SALM�O,
    'ORGANIZA��O E FISCALIZA��O DE FUNDA��O': Cores.SALM�O,
    'OUTRAS MEDIDAS PROVISIONAIS': Cores.VERDE,
    'OUTROS PROCEDIMENTOS DE JURISDI��O VOLUNT�RIA': Cores.VERDE,
    'PEDIDO DE ASSIST�NCIA JUDICI�RIA': Cores.SALM�O,
    'PEDIDO DE BUSCA E APREENS�O CRIMINAL': Cores.CINZA,
    'PEDIDO DE LIBERDADE PROVIS�RIA COM OU SEM FIAN�A': Cores.DESCONHECIDA,
    'PEDIDO DE PRIS�O PREVENTIVA': Cores.VERDE,
    'PEDIDO DE PRIS�O TEMPOR�RIA': Cores.BRANCA,
    'PEDIDO DE QUEBRA DE SIGILO DE DADOS E/OU TELEF�NIC': Cores.DESCONHECIDA,
    'PEDIDO DE RESPOSTA OU RETIFICA��O DA LEI DE IMPREN': Cores.VERDE,
    'PEDIDO PRIS�O/LIBERDADE VIGIADA FINS DE EXPULS�O': Cores.CINZA,
    'PRESTA��O DE CONTAS - EXIGIDAS': Cores.VERDE,
    'PRESTA��O DE CONTAS - OFERECIDAS': Cores.VERDE,
    'PROCED.INVESTIGAT�RIO DO MP (PE�AS DE INFORMA��O)': Cores.BRANCA,
    'PROCEDIMENTO ESP.DA LEI ANTIT�XICOS': Cores.BRANCA,
    'PROCEDIMENTO ESP.DA LEI DE COMBATE �S ORGANIZA��ES': Cores.BRANCA,
    'PROCEDIMENTO ESP.DA LEI DE IMPRENSA': Cores.BRANCA,
    'PROCEDIMENTO ESP.DOS CRIMES CONTRA A PROPRIEDADE I': Cores.BRANCA,
    'PROCEDIMENTO ESP.DOS CRIMES DE ABUSO DE AUTORIDADE': Cores.VERDE,
    'PROCEDIMENTO ESP.DOS CRIMES DE CAL�NIA E INJ�RIA': Cores.VERDE,
    'PROCEDIMENTO ESP.DOS CRIMES DE COMPET�NCIA DO J�RI': Cores.AZUL_OU_MARROM,
    'PROCEDIMENTO ESP.DOS CRIMES DE RESPONSABILIDADE DE': Cores.AZUL,
    'PROCEDIMENTO ESP.SUM�RIO': Cores.AZUL,
    'PROTESTO FORMADO A BORDO': Cores.AZUL,
    'RECURSO C�VEL': Cores.BRANCA,
    'RECURSO DE MEDIDA CAUTELAR': Cores.BRANCA,
    'RECURSO EM SENTIDO ESTRITO': Cores.DESCONHECIDA,
    'REINT/MANUTEN��O POSSE PROCED.ESP.JURISD.CONTENC.': Cores.BRANCA,
    'REMI��O DO IM�VEL HIPOTECADO': Cores.BRANCA,
    'REPRESENTA��O CRIMINAL': Cores.DESCONHECIDA,
    'REQUERIMENTO DE REABILITA��O': Cores.DESCONHECIDA,
    'RESTAURA��O DE AUTOS': Cores.AZUL,
    'RETIFICA��O DE REGISTRO DE IM�VEL': Cores.ROSA,
    'SEQ�ESTRO - MEDIDAS ASSECURAT�RIAS': Cores.DESCONHECIDA,
    'SUPERVENI�NCIA DOEN�A MENTAL-INCID.EXEC.CRIMINAL': Cores.BRANCA,
    'TERMO CIRCUNSTANCIADO': Cores.BRANCA
}
// }}}
// {{{ Eproc
var Eproc = {
    // {{{ Vari�veis
    acao: '',
    pagina: '',
    processo: 0,
    windows: [],
    // }}}
    // {{{ citacao_bloco_filtrar_destino()
    citacao_bloco_filtrar_destino: function()
    {
        Eproc.colorirTabela(2, 'Tabela de Processos.');
    },
    // }}}
    // {{{ citacao_bloco_listar_destino()
    citacao_bloco_listar_destino: function()
    {
        Eproc.colorirTabela(2, 'Tabela de Processos.');
    },
    // }}}
    // {{{ colorirTabela()
    colorirTabela: function(col, summary)
    {
        var noCheckbox = (arguments.length <= 2 ? false : arguments[2]);
        for (var tables = document.getElementsByClassName('infraTable'), t = 0, tl = tables.length; (t < tl) && (table = tables[t]); t++) {
            if (table.getAttribute('summary') == summary) {
                table.setAttribute('width', '');
                for (var ths = table.getElementsByTagName('th'), h = 0, hl = ths.length; (h < hl) && (th = ths[h]); h++) {
                    th.setAttribute('width', '');
                }
                for (var trs = table.getElementsByTagName('tr'), r = 0, rl = trs.length; (r < rl) && (tr = trs[r]); r++) {
                    if (!tr.className.match(/infraTr(Clara|Escura)/)) continue;
                    tr.cells[noCheckbox ? 0 : 1].getElementsByTagName('a')[0].setAttribute('target', '_blank');
                    if (col) {
                        var classe = tr.cells[col].innerHTML;
                        if (Classes[classe])
                            tr.style.backgroundColor = Classes[classe];
                    }
                }
            }
        }
    },
    // }}}
    // {{{ entrar()
    entrar: function()
    {
        if (document.getElementsByName('rdoUsuario').length) {
            var padrao = GM_getValue('v2.perfil');
            for (var perfis = document.getElementsByName('rdoUsuario'), pl = perfis.length, p = 0; (p < pl) && (perfil = perfis[p]); p++) {
                var row = perfil.parentNode
                do {
                    row = row.parentNode;
                } while (row.tagName.toLowerCase() != 'tr');
                var id = row.getAttribute('onclick').match(/acaoLogar\('(\d+)'\);/)[1];
                if (id == padrao) {
                    perfil.checked = true;
                    unsafeWindow.infraExibirAviso();
                    unsafeWindow.acaoLogar(id);
                } else {
                    row.addEventListener('click', (function(id) { return function(e)
                    {
                        if (confirm('Definir este usu�rio/lota��o como padr�o?')) {
                            GM_setValue('v2.perfil', id);
                        }
                        unsafeWindow.acaoLogar(id);
                    }; })(id), true);
                }
            }
        }
    },
    // }}}
    // {{{ getProcessoF()
    getProcessoF: function()
    {
        while (String(this.processo).length < 20)
            this.processo = '0' + this.processo;
        return this.processo.substr(0, 7)
             + '-'
             + this.processo.substr(7, 2)
             + '.'
             + this.processo.substr(9, 4)
             + '.'
             + this.processo.substr(13, 1)
             + '.'
             + this.processo.substr(14, 2)
             + '.'
             + this.processo.substr(16, 4);
    },
    // }}}
    // {{{ init()
    init: function()
    {
        this.pagina = location.pathname.split('/eprocV2/')[1];
        this.parametros = {};
        for (var p = 0, params = location.search.split('?').splice(0).join('').split('&'), param; (p < params.length) && (param = params[p]); p++) {
            var nameValue = param.split('=');
            this.parametros[nameValue[0]] = nameValue[1];
        }
        if (this.parametros.acao) {
            this.acao = this.parametros.acao;
            delete this.parametros.acao;
        }
        if (this.parametros.num_processo) {
            this.processo = this.parametros.num_processo;
            delete this.parametros.num_processo;
        }
        if (document.getElementsByClassName('infraMenu').length) {
            var menu = document.getElementById('infraMenuRaizes');
            var cores = document.createElement('li');
            cores.innerHTML = '<a class="infraMenuRaiz"  title="Cor de fundo" ><div class="infraItemMenu"><div class="infraRotuloMenu">Cor de fundo</div><div class="infraSetaMenu">&raquo;</div></div></a><ul></ul>';
            [-30, 0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360]
                .forEach(function(cl, c)
            {
                var h = 0, s = 0, l = 96;
                if (cl < 0) {
                    l = 100;
                } else if (cl >= 360) {
                    l = 96;
                } else {
                    h = cl;
                    s = 66;
                }
                var cor = document.createElement('a');
                cor.className = 'infraMenuFilho';
                cor.style.backgroundColor = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
                cor.style.color = 'hsl(' + h + ', ' + s + '%, 25%)';
                cor.style.border = '1px solid #888';
                cor.innerHTML = 'Cor ' + (c + 1);
                cor.addEventListener('click', (function() { return function()
                {
                    Eproc.mudaFundo(this.style.backgroundColor);
                }; })(), true);
                cores.getElementsByTagName('ul')[0].appendChild(cor);
            });
            menu.appendChild(cores);
        }
        if (document.getElementsByClassName('infraBarraSistema').length) {
            Eproc.mudaFundo(GM_getValue('v2.fundo') || '#ffffff');
        }
        var unidades = document.getElementById('selInfraUnidades');
        if (unidades) {
            unidades.setAttribute('onchange', '');
            unidades.addEventListener('change', function(e)
            {
                for (var options = this.getElementsByTagName('option'), ol = options.length, option, o = 0; (o < ol) && (option = options[o]); o++) {
                    if (option.getAttribute('selected')) break;
                }
                var padrao = prompt('Perfil selecionado: ' + options[this.selectedIndex].textContent + '\n\nDefinir este perfil como padr�o?', 'N');
                if (null === padrao) {
                    this.value = option.value;
                    return;
                } else if (String(padrao).toLowerCase()[0] == 's') {
                    GM_setValue('v2.perfil', this.value);
                }
                this.form.submit();
            }, true);
        }
        if (this.acao && this[this.acao]) {
            this[this.acao]();
        } else if (this.parametros.acao_origem && this[this.parametros.acao_origem + '_destino']) {
            this[this.parametros.acao_origem + '_destino']();
        }
    },
    // }}}
    // {{{ localizador_listar()
    localizador_listar: function()
    {
        this.setLastProcesso();
    },        
    // }}}
    // {{{ localizador_processos_alterar_destino()
    localizador_processos_alterar_destino: function()
    {
        Eproc.colorirTabela(5, 'Tabela de Processos por Localizador.');
    },
    // }}}
    // {{{ localizador_processos_lista()
    localizador_processos_lista: function()
    {
        Eproc.colorirTabela(5, 'Tabela de Processos por Localizador.');
    },
    // }}}
    // {{{ localizador_processos_lista_destino()
    localizador_processos_lista_destino: function()
    {
        Eproc.colorirTabela(5, 'Tabela de Processos por Localizador.');
    },
    // }}}
    // {{{ mudaFundo()
    mudaFundo: function(background)
    {
        GM_setValue('v2.fundo', background);
        document.getElementsByTagName('body')[0].style.backgroundColor = background;
        GM_addStyle(''
+ 'input, select {'
+ '    background-color: hsla(0, 0%, 80%, 0.25);'
+ '}'
+ 'input:focus {'
+ '    background-color: hsla(0, 0%, 50%, 0.5);'
+ '}'
+ 'select:focus {'
+ '    background-color: hsla(0, 0%, 50%, 0.25);'
+ '}'
+ 'select:focus option {'
+ '    background-color: hsla(0, 0%, 100%, 0.25);'
+ '}'
+ 'div.infraAjaxAutoCompletar {'
+ '    background-color: ' + background + ';'
+ '}'
+ 'div.infraAjaxAutoCompletar li {'
+ '    background-color: hsla(0, 0%, 80%, 0.25);'
+ '}'
+ 'div.infraAjaxAutoCompletar li.selected {'
+ '    background-color: Highlight;'
+ '}'
+ 'div.infraAjaxAutoCompletar li.selected a, div.infraAjaxAutoCompletar li.selected b {'
+ '    color: HighlightText;'
+ '}'
+ 'table.infraTable {'
+ '    border-spacing: 0;'
+ '    border: solid #ccc;'
+ '    border-width: 1px 0 0 1px;'
+ '    background-color: transparent;'
+ '}'
+ '.infraTable th, .infraTable td {'
//+ '    border-spacing: 0;'
+ '    border: solid #ccc;'
+ '    border-width: 0 1px 1px 0;'
+ '}'
+ '.infraTable table th, .infraTable table td {'
+ '    border: none;'
+ '}'
+ 'tr.infraTrClara {'
+ '    background-color: hsla(0, 0%, 98%, 0.5);'
+ '}'
+ 'tr.infraTrEscura {'
+ '    background-color: hsla(0, 0%, 94%, 0.5);'
+ '}'
+ 'tr.infraTrSelecionada td {'
+ '    background-color: hsla(0, 0%, 50%, 0.25);'
+ '}'
+ 'tr.infraTrSelecionada td td {'
+ '    background-color: hsla(0, 0%, 50%, 0);'
+ '}'
+ 'tr.infraTrMarcada td {'
+ '    background-color: hsla(0, 0%, 50%, 0.375);'
+ '}'
+ 'div.infraMenu a {'
+ '    background-color: ' + background + ';'
+ '    border-color: ' + background + ';'
+ '}'
+ '.infraTrClara a:visited, .infraTrEscura a:visited {'
+ '    color: #666;'
+ '}'
+ 'a.docLink:visited {'
+ '    color: #666;'
+ '}'
+ '.infraBarraComandos, .infraAreaTelaD, .infraAreaDados {'
+ '    border-color: ' + background + ' !important;'
+ '}'
);
        for (var divs = document.getElementsByTagName('div'), d = divs.length - 1, div; (d >= 0) && (div = divs[d]); d--) {
            if ((div.className && div.className.match(/^infraLegend/)) || (div.id && div.id.match(/^divDes/))) {
                div.style.backgroundColor = background;
            }
        }
    },
    // }}}
    // {{{ prevencao_judicial()
    prevencao_judicial: function()
    {
        this.setLastProcesso();
    },        
    // }}}
    // {{{ prevencao_judicial_bloco()
    prevencao_judicial_bloco: function()
    {
        if (document.getElementById('btnBuscar')) {
            document.getElementById('btnBuscar').setAttribute('onclick', '');
            document.getElementById('btnBuscar').addEventListener('click', function(e)
            {
                this.form.target = '_blank';
                unsafeWindow.submeterFrm('buscar');
                this.form.target = '_top';
                unsafeWindow.infraAvisoCancelar();
            }, true);
            document.getElementById('btnConsultar').setAttribute('onclick', '');
            document.getElementById('btnConsultar').addEventListener('click', function(e)
            {
                document.getElementById('hdnInfraItensSelecionados').value = '';
                unsafeWindow.submeterFrm('');
            }, true);
            for (var hh = document.getElementsByClassName('infraTdSetaOrdenacao'), hl = hh.length, h = 0; (h < hl) && (th = hh[h]); h++) {
                var link = th.getElementsByTagName('a')[0];
                var action = link.getAttribute('onclick');
                link.setAttribute('onclick', '');
                link.addEventListener('click', (function(action) { return function(e)
                {
                    document.getElementById('hdnInfraItensSelecionados').value = '';
                    eval('unsafeWindow.' + action);
                }; })(action), true);
            }
            for (var tables = document.getElementsByClassName('infraTable'), t = 0, tl = tables.length; (t < tl) && (table = tables[t]); t++) {
                if (table.getAttribute('summary') == 'Tabela de Processos.') {
                    table.setAttribute('width', '');
                    for (var ths = table.getElementsByTagName('th'), h = 0, hl = ths.length; (h < hl) && (th = ths[h]); h++) {
                        th.setAttribute('width', '');
                    }
                    for (var trs = table.getElementsByTagName('tr'), r = 0, rl = trs.length; (r < rl) && (tr = trs[r]); r++) {
                        if (!tr.className.match(/infraTr(Clara|Escura)/)) continue;
                        tr.cells[1].getElementsByTagName('a')[0].addEventListener('click', function(e)
                        {
                            e.preventDefault();
                            e.stopPropagation();
                            document.getElementById('hdnInfraItensSelecionados').value = this.parentNode.parentNode.getElementsByTagName('input')[0].value;
                            var link = this.search.match(/\&num_processo=.*$/);
                            var form = document.getElementById('frmProcessoLista');
                            var old = form.action;
                            form.action = old + link;
                            form.target = '_blank';
                            form.submit();
                            form.action = old;
                            form.target = '_top';
                        }, true);
                    }
                }
            }
        } else if (location.search.match(/num_processo/)) {
            for (var tables = document.getElementsByClassName('infraTable'), t = 0, tl = tables.length; (t < tl) && (table = tables[t]); t++) {
                if (table.getAttribute('summary') == 'Tabela de Preventos.') {
                    table.setAttribute('width', '');
                    for (var ths = table.getElementsByTagName('th'), h = 0, hl = ths.length; (h < hl) && (th = ths[h]); h++) {
                        th.setAttribute('width', '');
                    }
                    for (var trs = table.getElementsByTagName('tr'), r = 0, rl = trs.length; (r < rl) && (tr = trs[r]); r++) {
                        if (!tr.className.match(/infraTr(Clara|Escura)/)) continue;
                        var cell = tr.getElementsByTagName('table')[0].rows[0].cells[0];
                        cell.innerHTML = '<b>Processo: <a href="controlador.php?acao=processo_selecionar&acao_origem=prevencao_judicial_bloco' + location.search.match(/\&num_processo.*$/) + '" target="_blank">' + cell.innerHTML.match(/[0-9\.\-]{24}/) + '</a></b>';
                    }
                }
            }
        }
    },
    // }}}
    // {{{ processo_consulta_listar()
    processo_consulta_listar: function()
    {
        var form = document.getElementById('frmProcessoEventoLista');
        form.action = location.pathname + location.search;
        Eproc.colorirTabela(3, 'Tabela de Processos.');
    },
    // }}}
    // {{{ processo_consultar()
    processo_consultar: function()
    {
        this.setLastProcesso();
        Array.forEach(document.getElementsByTagName('table'), function(table)
        {
            if (table.rows[0].cells.length == 5) Eproc.colorirTabela(3, '', true);
        });
    },        
    // }}}
    // {{{ processo_consultar_nome_parte()
    processo_consultar_nome_parte: function()
    {
        Eproc.colorirTabela(3, '', true);
    },
    // }}}
    // {{{ processo_localizador_listar()
    processo_localizador_listar: function()
    {
        this.setLastProcesso();
        document.getElementById('btnFechar').setAttribute('onclick', 'location.href="' + document.referrer + '";');
    },        
    // }}}
    // {{{ processo_movimentar()
    processo_movimentar: function()
    {
        this.setLastProcesso();
    },        
    // }}}
    // {{{ processo_selecionar()
    processo_selecionar: function()
    {
        if (!document.title || document.title.match(/�rvore/))
            return;
        document.title = Eproc.getProcessoF();
        var assuntos = document.getElementById('fldAssuntos');
        var classe = document.getElementById('txtClasse').innerHTML;
        if (Classes[classe])
            assuntos.style.backgroundColor = Classes[classe];
        if (document.getElementById('lblProcRel')) {
            var link = null, relacionado = document.getElementById('lblProcRel').nextSibling;
            if (relacionado.tagName && relacionado.tagName.toLowerCase() == 'br') {
                relacionado = relacionado.nextSibling.nextSibling;
            }
            if (relacionado.tagName && relacionado.tagName.toLowerCase() == 'a') {
                link = relacionado;
            }
            var processo = relacionado.textContent.match(/[\d\.\-]+\/([PRS][RSC])?/)[0].replace(/[\.-]/g, '');
            if (!link) {
                link = document.createElement('a'), tmp = relacionado.textContent.split('  '), numprocf = tmp[0], relacao = tmp[1];
                link.textContent = numprocf;
                relacionado.textContent = '  ' + relacao;
                relacionado.parentNode.insertBefore(link, relacionado);
            }
            link.target = '_blank';
            if (processo[0] != '5' & !link.href.match(/txtValor/)) {
                var tmp = processo.split('/'), numproc = tmp[0], origem = tmp[1];
                link.href = 'http://www.trf4.jus.br/trf4/processos/acompanhamento/resultado_pesquisa.php?selForma=NU&selOrigem=' + origem + '&txtValor=' + numproc;
            }
        }
        for (var tables = document.getElementsByClassName('infraTable'), t = 0, tl = tables.length; (t < tl) && (table = tables[t]); t++) {
            if (table.getAttribute('summary') == 'Eventos') {
                var arvore = document.createElement('a');
                arvore.innerHTML = '�rvore de documentos';
                arvore.href = '#';
                arvore.addEventListener('click', (function(table) {
                    return function(e)
                    {
                        e.stopPropagation();
                        e.preventDefault();
                        var x = window.open('');
                        x.focus();
                        x.document.open();
                        x.document.write(
                            <html>
                                <head><title>�rvore de documentos</title></head>
                                <frameset cols="250,*" marginheight="0" marginwidth="0" rows="*">
                                    <frame name="tree_files" marginwidth="5" marginheight="5"/>
                                    <frame name="show_files" marginwidth="5" marginheight="5"/>
                                </frameset>
                                <noframes>
                                    <body topmargin="0" leftmargin="0">
                                        <p>N�o foi poss�vel exibir o conte�do desta p�gina</p>
                                    </body>
                                </noframes>
                            </html>
                        );
                        x.document.title = Eproc.getProcessoF() + ' - ' + x.document.title;
                        x.frames[0].document.write(
                            <html>
                                <head>
                                    <style type="text/css"><![CDATA[
body
{
    font-family: Verdana;
    font-size: 12px;
}
li
{
    white-space: nowrap;
}
ul
{
    list-style-type: disc;
    margin: 0 20px;
    padding: 0;
}
ul ul
{
    margin: 0;
    list-style-type: none;
}
a:link
{
    text-decoration: none;
    color: #000;
}
a:visited
{
    text-decoration: none;
    color: #848;
}   
img
{
    border: none;
}
                                    ]]></style>
                                </head>
                                <body>
                                    <ul>
                                    </ul>
                                </body>
                            </html>
                        );
                        x.frames[0].document.close();
                        var lista = x.frames[0].document.getElementsByTagName('ul')[0];
                        for (var trs = table.getElementsByTagName('tr'), r = trs.length - 1; (r >= 0) && (tr = trs[r]); r--) {
                            if (!tr.className.match(/infraTr(Clara|Escura)/)) continue;
                            var evento = document.createElement('li');
                            evento.innerHTML = tr.cells[2].innerHTML.split(/<br/)[0] + ' - ' + tr.cells[1].innerHTML;
                            var documentos = document.createElement('ul');
                            for (var links = tr.cells[4].getElementsByTagName('a'), l = 0, ll = links.length; (l < ll) && (link = links[l]); l++) {
                                var item = document.createElement('li');
                                var docLink = document.createElement('a');
                                docLink.target = 'show_files';
                                docLink.href = link.href;
                                docLink.innerHTML = link.innerHTML;
                                item.appendChild(docLink);
                                documentos.appendChild(item);
                            }
                            evento.appendChild(documentos);
                            lista.appendChild(evento);
                        }
                        x.document.close();
                    };
                })(table), true);
                table.parentNode.insertBefore(arvore, table);
                for (var ths = table.getElementsByTagName('th'), h = 0, hl = ths.length; (h < hl) && (th = ths[h]); h++) {
                    th.setAttribute('width', '');
                }
                var eventos = [];
                for (var trs = table.getElementsByTagName('tr'), r = 0, rl = trs.length; (r < rl) && (tr = trs[r]); r++) {
                    if (!tr.className.match(/infraTr(Clara|Escura)/)) continue;
                    if (match = tr.cells[2].innerHTML.match(/Prazo: .* Status:([^<]+)/)) {
                        if (match[1] == 'AGUARD. ABERTURA') {
                            tr.cells[2].style.backgroundColor = '#caa';
                        } else if (match[1] == 'ABERTO') {
                            tr.cells[2].style.backgroundColor = '#cca';
                            if (eventos[tr.cells[0].textContent]) {
                                tr.cells[2].appendChild(document.createElement('br'));
                                tr.cells[2].appendChild(document.createTextNode('br'));
                            }
                        } else if (match[1] == 'FECHADO') {
                            tr.cells[2].style.backgroundColor = '#aca';
                            if (eventos[tr.cells[0].textContent]) {
                                tr.cells[2].appendChild(document.createElement('br'));
                                var ok = tr.cells[2].appendChild(document.createElement('span'));
                                ok.style.backgroundColor = '#cca';
                                ok.innerHTML = eventos[tr.cells[0].textContent];
                                tr.cells[2].appendChild(ok);
                            }
                        }
                    } else if (match = tr.cells[2].innerHTML.match(/(.*) - Refer. ao Evento: (\d+)/)) {
                        eventos[match[2]] = match[1] + '<br/>' + (eventos[match[2]] ? eventos[match[2]] : '');
                    }
                    if (tr.cells[4].getElementsByTagName('table').length) {
                        for (var subtrs = tr.cells[4].getElementsByTagName('tr'), subr = 0, subrl = subtrs.length; (subr < subrl) && (subtr = subtrs[subr]); subr++) {
                            for (var subtds = subtr.cells, subc = 0, subcl = subtds.length; (subc < subcl) && (subtd = subtds[subc]); subc++) {
                                tr.cells[4].appendChild(subtd.firstChild);
                                tr.cells[4].appendChild(subtd.firstChild);
                                tr.cells[4].appendChild(subtd.firstChild);
                                tr.cells[4].appendChild(document.createElement('br'));
                            }
                        }
                        tr.cells[4].removeChild(tr.cells[4].getElementsByTagName('table')[0]);
                    } else {
                        for (var children = tr.cells[4].childNodes, c = children.length - 1; (c >= 0) && (child = children[c]); c--) {
                            if (!child.tagName || (child.tagName == 'BR')) {
                                child.parentNode.removeChild(child);
                            } else {
                                child.parentNode.insertBefore(document.createElement('br'), child.nextSibling);
                            }
                        }
                    }
                    for (var links = tr.cells[4].getElementsByTagName('a'), l = 0, ll = links.length; (l < ll) && (link = links[l]); l++) {
                        if (link.tabIndex) continue;
                        link.className = link.className.split(' ').concat(['docLink']).join(' ');
                        link.addEventListener('click', (function(id, link) {
                            return function(e)
                            {
                                e.stopPropagation();
                                e.preventDefault();
                                if (Eproc.windows[id] && typeof Eproc.windows[id] == 'object' && Eproc.windows[id].document) {
                                    Eproc.windows[id].focus();
                                } else {
                                    var x = Eproc.windows[id] = window.open(link.href,id,'menubar=0,resizable=1,status=0,toolbar=0,location=0,menubar=0,directories=0,scrollbars=1');
                                    x.focus();
                                }
                            };
                        })('' + Eproc.processo + r + link.innerHTML.replace(/<[^>]*>/g, ''), link), true);
                    }
                }
            }
        }
        window.addEventListener('unload', function(e)
        {
            var windows = [];
            for (w in Eproc.windows) {
                var win = Eproc.windows[w];
                if (typeof win == 'object' && win.document) {
                    windows.push(win);
                }
            }
            if (windows.length) {
                if (confirm('Este processo possui ' + windows.length + ' documento(s) aberto(s).\nDeseja fech�-lo(s)?')) {
                    for (var w = windows.length - 1; w >= 0; w--) {
                        windows[w].close();
                    }
                }
            }
        }, true);
    },
    // }}}
    // {{{ relatorio_geral_listar()
    relatorio_geral_listar: function()
    {
        Eproc.colorirTabela(5, 'Lista de Processos');
    },
    // }}}
    // {{{ relatorio_sem_movimentacao_consultar()
    relatorio_sem_movimentacao_consultar: function()
    {
        Eproc.colorirTabela(4, 'Processos');
    },
    // }}}
    // {{{ setLastProcesso()
    setLastProcesso: function()
    {
        var self = this;
        if (document.getElementById('txtNumProcesso')) {
            document.getElementById('txtNumProcesso').addEventListener('change', (function() { return function() { self.onNumprocChange.apply(self, arguments); }; })(), true);
            if (before = document.referrer.match(/\&(txtNumProcesso|num_processo)=([0-9]{20})/)) {
                document.getElementById('txtNumProcesso').value = before[2];
            }
            document.getElementById('txtNumProcesso').select();
        }
    },
    // }}}
    // {{{ onNumprocChange()
    onNumprocChange: function(e)
    {
        var numproc = e.target.value;
        if (numproc.length < 3) return;
        while (numproc.length < 8) {
            numproc = '0' + numproc;
        }
        while (numproc.length < 9) {
            numproc = '5' + numproc;
        }
        while (numproc.length < 13) {
            numproc += '20104047208';
        }
        e.target.value = numproc;
    },
    // }}}
}
// }}}
// {{{ In�cio do programa
Eproc.init();
// }}}
