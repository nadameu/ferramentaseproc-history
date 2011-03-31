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
    SALMAO: '#efa88f',
    VERDE: '#a7eda7',
    VERMELHA: '#db6464'
}
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
    'Agravo de Instrumento': Cores.LARANJA,
    'AGRAVO DE INSTRUMENTO DE DECIS�O DENEGAT.DE REC.EX': Cores.VERDE,
    'ALIENA��O JUDICIAL': Cores.BRANCA,
    'ALIENA��O JUDICIAL CRIMINAL': Cores.VERMELHA,
    'ALVAR� JUDICIAL': Cores.CINZA,
    'APELA��O CRIMINAL': Cores.AZUL,
    'Apela��o C�vel': Cores.ROSA,
    'Apela��o/Reexame Necess�rio': Cores.ROSA,
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
    'Conflito de Compet�ncia (Se��o)': Cores.VERDE,
    'Conflito de Jurisdi��o (Se��o)': Cores.VERDE,
    'CRIMES AMBIENTAIS': Cores.BRANCA,
    'CUMPRIMENTO DE SENTEN�A': Cores.AMARELA,
    'DECLARA��O DE AUS�NCIA': Cores.BRANCA,
    'DECLARA��O DE D�VIDA NO REGISTRO': Cores.BRANCA,
    'DEMARCA��O / DIVIS�O': Cores.CINZA,
    'DESAFORAMENTO DE JULGAMENTO': Cores.BRANCA,
    'DESPEJO P/FALTA DE PAGAMENTO CUMULADO C/COBRAN�A': Cores.VERDE,
    'DESPEJO POR FALTA DE PAGAMENTO': Cores.VERDE,
    'EMBARGOS � ADJUDICA��O': Cores.VERDE,
    'EMBARGOS � ARREMATA��O': Cores.VERDE,
    'EMBARGOS � EXECU��O': Cores.VERDE,
    'EMBARGOS � EXECU��O FISCAL': Cores.VERDE,
    'EMBARGOS DE RETEN��O POR BENFEITORIAS': Cores.VERDE,
    'EMBARGOS DE TERCEIRO': Cores.VERDE,
    'EMBARGOS DO ACUSADO': Cores.VERDE,
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
    'EXECU��O DE SENTEN�A CONTRA FAZENDA P�BL': Cores.AMARELA,
    'EXECU��O DE T�TULO EXTRAJUDICIAL': Cores.AMARELA,
    'EXECU��O FISCAL': Cores.LARANJA,
    'EXECU��O HIPOTEC�RIA DO SISTEMA FINANCEIRO DA HABI': Cores.AMARELA,
    'EXECU��O PENAL': Cores.BRANCA,
    'EXECU��O PENAL PROVIS�RIA': Cores.AMARELA,
    'EXECU��O PROVIS�RIA DE SENTEN�A': Cores.AMARELA,
    'EXIBI��O DE DOCUMENTO OU COISA': Cores.LARANJA,
    'HABEAS CORPUS': Cores.AMARELA,
    'HABEAS DATA': Cores.BRANCA,
    'HABILITA��O': Cores.VERDE,
    'HOMOLOGA��O DE TRANSA��O EXTRAJUDICIAL': Cores.VERDE,
    'IMPUGNA��O AO CUMPRIMENTO DE SENTEN�A': Cores.AZUL,
    'IMPUGNA��O AO PEDIDO DE ASSIST�NCIA LITISCONSORCIA': Cores.BRANCA,
    'IMPUGNA��O AO VALOR DA CAUSA': Cores.BRANCA,
    'IMPUGNA��O DO DIREITO A ASSIST�NCIA JUDICI�RIA': Cores.VERDE,
    'INCIDENTE DE AVALIA��O DE DEPEND�NCIA DE DROGAS': Cores.VERDE,
    'INCIDENTE DE FALSIDADE': Cores.VERDE,
    'INCIDENTE DE FALSIDADE CRIMINAL': Cores.BRANCA,
    'INCIDENTE DE INSANIDADE MENTAL': Cores.AMARELA,
    'INCIDENTE DE RESTITUI��O DE COISAS APREENDIDAS': Cores.BRANCA,
    'INCIDENTE DE TRANSF.ENTRE ESTABELECIMENTOS PENAIS': Cores.BRANCA,
    'INCIDENTE DE UNIFORMIZA��O DE JURISPRUD�NCIA': Cores.VERDE,
    'INQU�RITO POLICIAL': Cores.VERDE,
    'INQU�RITO POLICIAL - PORTARIA': Cores.VERDE,
    'INQU�RITO POLICIAL - PRISAO EM FLAGRANTE': Cores.VERDE,
    'INTERDITO PROIBIT�RIO': Cores.VERDE,
    'JUSTIFICA��O DE DINHEIRO A RISCO': Cores.VERDE,
    'LIQUIDA��O POR ARBITRAMENTO': Cores.BRANCA,
    'LIQUIDA��O POR ARTIGOS': Cores.BRANCA,
    'LIQUIDA��O PROVIS�RIA POR ARBITRAMENTO': Cores.BRANCA,
    'LIQUIDA��O PROVIS�RIA POR ARTIGOS': Cores.BRANCA,
    'MANDADO DE SEGURAN�A': Cores.PALHA,
    'Mandado de Seguran�a (Se��o)': Cores.AMARELO,
    'MANDADO DE SEGURAN�A COLETIVO': Cores.PALHA,
    'MEDIDA CAUTELAR DE ALIMENTOS PROVISIONAIS': Cores.AZUL,
    'MEDIDA CAUTELAR DE APREENS�O DE T�TULOS': Cores.CINZA,
    'MEDIDA CAUTELAR DE ARRESTO': Cores.BRANCA,
    'MEDIDA CAUTELAR DE ARROLAMENTO DE BENS': Cores.BRANCA,
    'MEDIDA CAUTELAR DE ATENTADO': Cores.BRANCA,
    'MEDIDA CAUTELAR DE BUSCA E APREENS�O': Cores.SALMAO,
    'MEDIDA CAUTELAR DE CAU��O': Cores.SALMAO,
    'MEDIDA CAUTELAR DE EXIBI��O': Cores.SALMAO,
    'MEDIDA CAUTELAR DE HOMOLOGA��O DO PENHOR LEGAL': Cores.SALMAO,
    'MEDIDA CAUTELAR DE INTERPELA��O': Cores.SALMAO,
    'MEDIDA CAUTELAR DE JUSTIFICA��O': Cores.SALMAO,
    'MEDIDA CAUTELAR DE NOTIFICA��O': Cores.SALMAO,
    'MEDIDA CAUTELAR DE POSSE EM NOME DO NASCITURO': Cores.SALMAO,
    'MEDIDA CAUTELAR DE PRODU��O ANTECIPADA DE PROVAS': Cores.SALMAO,
    'MEDIDA CAUTELAR DE PROTESTO': Cores.SALMAO,
    'MEDIDA CAUTELAR DE SEQUESTRO': Cores.SALMAO,
    'MEDIDA CAUTELAR FISCAL': Cores.SALMAO,
    'MEDIDA CAUTELAR INOMINADA': Cores.SALMAO,
    'NATURALIZA��O': Cores.SALMAO,
    'NOMEA��O DE ADVOGADO': Cores.CINZA,
    'NOTIFICA��O PARA EXPLICA��ES': Cores.SALMAO,
    'NOTIFICA��O PARA EXPLICA��ES (LEI DE IMPRENSA)': Cores.AMARELA,
    'OP��O DE NACIONALIDADE': Cores.SALMAO,
    'OPOSI��O': Cores.SALMAO,
    'ORGANIZA��O E FISCALIZA��O DE FUNDA��O': Cores.SALMAO,
    'OUTRAS MEDIDAS PROVISIONAIS': Cores.VERDE,
    'OUTROS PROCEDIMENTOS DE JURISDI��O VOLUNT�RIA': Cores.VERDE,
    'PEDIDO DE ASSIST�NCIA JUDICI�RIA': Cores.SALMAO,
    'PEDIDO DE BUSCA E APREENS�O CRIMINAL': Cores.CINZA,
    'PEDIDO DE LIBERDADE PROVIS�RIA COM OU SEM FIAN�A': Cores.AMARELA,
    'PEDIDO DE PRIS�O PREVENTIVA': Cores.VERDE,
    'PEDIDO DE PRIS�O TEMPOR�RIA': Cores.BRANCA,
    'PEDIDO DE QUEBRA DE SIGILO DE DADOS E/OU TELEF�NIC': Cores.BRANCA,
    'PEDIDO DE RESPOSTA OU RETIFICA��O DA LEI DE IMPREN': Cores.VERDE,
    'PEDIDO PRIS�O/LIBERDADE VIGIADA FINS DE EXPULS�O': Cores.CINZA,
    'Peti��o (Se��o)': Cores.AMARELA,
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
    'RECURSO EM SENTIDO ESTRITO': Cores.ROSA,
    'Reexame Necess�rio C�vel': Cores.ROSA,
    'REINT/MANUTEN��O POSSE PROCED.ESP.JURISD.CONTENC.': Cores.BRANCA,
    'REMI��O DO IM�VEL HIPOTECADO': Cores.BRANCA,
    'REPRESENTA��O CRIMINAL': Cores.BRANCA,
    'REQUERIMENTO DE REABILITA��O': Cores.BRANCA,
    'RESTAURA��O DE AUTOS': Cores.AZUL,
    'RETIFICA��O DE REGISTRO DE IM�VEL': Cores.ROSA,
    'SEQ�ESTRO - MEDIDAS ASSECURAT�RIAS': Cores.BRANCA,
    'SUPERVENI�NCIA DOEN�A MENTAL-INCID.EXEC.CRIMINAL': Cores.BRANCA,
    'Suspens�o de Execu��o de Senten�a': Cores.AMARELA,
    'Suspens�o de Liminar ou Antecipa��o de Tutela': Cores.AMARELA,
    'TERMO CIRCUNSTANCIADO': Cores.BRANCA
}
var Eproc = {
    acao: '',
    pagina: '',
    processo: 0,
    windows: [],
    colorirLembretes: function()
    {
        var tables = document.querySelectorAll('.infraTable[summary="Lembretes"]');
        if (tables.length == 0) return;
        Array.prototype.forEach.call(tables, function(table)
        {
            var separator = document.createElement('div');
            separator.className = 'extraSeparador';
            table.parentNode.insertBefore(separator, table);
            Array.prototype.forEach.call(table.querySelectorAll('tr.infraTrClara, tr.infraTrEscura'), function(tr, r)
            {
                var destino = tr.cells[3].textContent, classes = ['extraLembrete'];
                var pessoa = document.querySelector('#lblInfraUnidades');
                if (!pessoa) {
                    pessoa = window.parent.document.querySelector('#lblInfraUnidades');
                }
                if (new RegExp(destino + '$').test(pessoa.textContent)) {
                    destino = 'VOC�';
                    classes.push('extraLembreteVoce');
                }
                var inicio = tr.cells[6].textContent == ' - ' ? null : tr.cells[6].textContent;
                var fim = tr.cells[7].textContent == ' - ' ? null : tr.cells[7].textContent;
                var floater = document.createElement('div');
                floater.innerHTML =
                    '<div class="extraLembretePara">Para: '
                        + destino
                        + (tr.cells[8].textContent == 'N' ? ' (<abbr '
                            + 'onmouseover="return infraTooltipMostrar('
                            + '\'Este lembrete n�o ser� exibido na movimenta��o processual\','
                            + '\'Movimenta��o processual\',' + '400);" '
                            + 'onmouseout="return infraTooltipOcultar();">N</abbr>)' : '')
                        + (inicio ? ' (<abbr ' + 'onmouseover="return infraTooltipMostrar('
                            + '\'Vis�vel de ' + inicio + '<br/>at� ' + fim + '\','
                            + '\'Prazo de exibi��o\',' + '400);" '
                            + 'onmouseout="return infraTooltipOcultar();">P</abbr>)' : '')
                        + '</div>' + tr.cells[4].textContent
                        + '<div class="extraLembreteData">' + tr.cells[5].textContent
                        + '<br/>' + tr.cells[1].textContent + '</div>';
                floater.className = classes.join(' ');
                floater.childNodes[0].appendChild(tr.cells[9].childNodes[0]);
                table.parentNode.insertBefore(floater, separator);
            });
            table.parentNode.removeChild(table);
        });
        GM_addStyle(
'.extraLembrete {'
+ '    float: left;'
+ '    font-size: 12px;'
+ '    min-width: 20ex;'
+ '    max-width: 60ex;'
+ '    margin-bottom: 0.5em;'
+ '    margin-right: 1ex;'
+ '    padding: 0 1ex;'
+ '    text-align: center;'
+ '    background-color: hsl(60, 100%, 80%);'
+ '    color: hsl(0, 0%, 0%);'
+ '}'
+ '.extraLembreteVoce {'
+ '    background-color: hsl(60, 100%, 70%);'
+ '}'
+ '.extraLembrete a {'
+ '    float: right;'
+ '    margin: -0.5em 0.5ex 0;'
+ '}'
+ '.extraLembretePara, .extraLembreteData {'
+ '    margin-left: -1ex;'
+ '    margin-right: -1ex;'
+ '    color: hsl(0, 0%, 33%);'
+ '}'
+ '.extraLembretePara {'
+ '    margin-bottom: 0.5em;'
+ '}'
+ '.extraLembreteData {'
+ '    margin-top: 0.5em;'
+ '    text-align: right;'
+ '}'
+ '.extraLembrete abbr {'
+ '    color: hsl(240, 50%, 25%);'
+ '    border-bottom: 1pt dotted;'
+ '}'
+ '.extraSeparador {'
+ '    clear: both;'
+ '}'
);
    },
    colorirTabela: function()
    {
        var setas = document.querySelectorAll('a[onclick="infraAcaoOrdenar(\'DesClasseJudicial\',\'ASC\');"]');
        if (setas.length != 1) {
            var th = null;
            Array.prototype.forEach.call(document.querySelectorAll('.infraTh'), function(possibleTh){
                if (possibleTh.textContent == 'Classe') th = possibleTh;
            });
            if (!th) return;
        } else {
            var th = setas[0].parentNode;
            while (th.tagName.toLowerCase() != 'th') {
                th = th.parentNode;
            }
        }
        var table = th.parentNode.parentNode;
        while (table.tagName.toLowerCase() != 'table') {
            table = table.parentNode;
        }
        table.setAttribute('width', '');
        Array.prototype.forEach.call(table.querySelectorAll('th'), function(th, h)
        {
            th.setAttribute('width', '');
        });
        Array.prototype.forEach.call(table.rows, function(tr)
        {
            if (!tr.className.match(/infraTr(Clara|Escura)/)) return;
            tr.querySelectorAll('a[href]')[0].setAttribute('target', '_blank');
            var col = th.cellIndex;
            var classe = tr.cells[col].innerHTML.split('<')[0];
            var cor = Classes[classe];
            if (cor) {
                tr.style.backgroundColor = cor;
            }
        });
    },
    digitar_documento: function()
    {
        if (null == document.getElementById('txt_fck___Frame')) return;
        var infoWindow = unsafeWindow.opener;
        if (infoWindow) {
            var info = infoWindow.document.getElementById('tbInfoProcesso');
            if (info) {
                var processo;
                for (var labels = info.getElementsByTagName('label'), i = 0, label; label = labels[i]; i++) {
                    if (label.textContent == 'Processo:') {
                        processo = label.nextSibling.textContent;
                    }
                }
                var autor = info.rows[1].cells[2].innerHTML.replace(/<br[^>]*>/g, ' ');
                var reu = info.rows[1].cells[3].innerHTML.replace(/<br[^>]*>/g, ' ');
            }
        }
        function criaBotao (sTexto, sTitulo, sConteudo, iTipo, oElemento)
        {
            var oBotao = document.createElement('button');
            oBotao.innerHTML = sTexto;
            oBotao.addEventListener('click', function(evt)
            {
                var oTexto = unsafeWindow.FCKeditorAPI.GetInstance('txt_fck');
                if (!oTexto.IsDirty() || confirm('Todo o texto j� digitado ser� apagado.\nConfirma?')) {
                    oTexto.SetHTML('<html lang="pt-BR" dir="ltr"><head><title>' + sTitulo.replace(/<[^>]+>/g, '') + '</title><style type="text/css">.header { font-family: Helvetica; font-size: 10pt; } .title { font-family: Times; font-size: 14pt; font-weight: bold; } .text { font-family: Times; font-size: 13pt; } .signature { font-family: Times; font-size: 12pt; font-weight: bold; font-style: italic; } .dados { font-family: Times; font-size: 13pt; font-weight: bold; }</style></head><body bgcolor="white"><div class="header" align="center"><img width="85" height="86" src="http://eproc.trf4.gov.br/eproc2trf4/imagens/brasao_pb.jpg"></div><div class="header" align="center">PODER JUDICI�RIO</div><div class="header" align="center"><strong>JUSTI�A FEDERAL</div><div class="header" align="center"></strong>' + GM_getValue('v1.secao') + '</div><div class="header" align="center">' + GM_getValue('v1.subsecao') + '</div><div class="header" align="center">' + GM_getValue('v1.vara') + '</div><p class="text" align="justify">&nbsp;</p>' + (info ? '<div class="dados" align="left">PROCESSO: ' + processo + '</div><div class="dados" align="left">AUTOR: ' + autor + '</div><div class="dados" align="left">R�U: ' + reu + '</div><p class="text" align="justify">&nbsp;</p>' : '') + '<p class="title" align="center">' + sTitulo + '</p><p class="text" align="justify">&nbsp;</p><p class="text" align="justify">' + sConteudo + '</p><p class="text" align="justify">&nbsp;</p><p class="text" align="justify">&nbsp;</p><p class="text" align="justify">&nbsp;</p><p class="signature" align="center">documento assinado eletronicamente</p></body></html>');
                    document.getElementById('selTipoArquivo').value = iTipo;
                }
            }, true);
            document.body.insertBefore(oBotao, oElemento);
        }
        if (screen.availWidth >= 780 && screen.availHeight >= 630) {
            var w = 780;
            var h = Math.floor((screen.availHeight - 30) / 100) * 100 + 30;
            document.getElementById('txt_fck___Frame').height = h - 330;
            window.moveTo((screen.availWidth - w) / 2, (screen.availHeight - h) / 2);
            window.resizeTo(w, h);
        }
        document.body.insertBefore(document.createTextNode(' '), document.body.firstChild);
        criaBotao('Senten�a', 'SENTEN�A', 'TextoDaSenten�a', '14', document.body.firstChild);
        criaBotao('Despacho', 'DESPACHO', 'TextoDoDespacho', '15', document.body.firstChild);
        criaBotao('Decis�o', 'DECIS�O', 'TextoDaDecis�o', '32', document.body.firstChild);
        criaBotao('Certid�o', 'CERTID�O', 'CERTIFICO que .', '16', document.body.firstChild);
        criaBotao('Ato', 'ATO DE SECRETARIA', 'De ordem do MM. Juiz Federal, a Secretaria da Vara .', '18', document.body.firstChild);
    },
    digitar_documento_oncomplete: function(ed)
    {
        ed.Events.AttachEvent('OnAfterSetHTML', function(e) { e.ResetIsDirty(); });
        ed.Config.FullPage = true;
        ed.Config.ToolbarSets['eProcv2'] = [
            ['Cut','Copy','Paste','PasteText','PasteWord'],
            ['Undo','Redo'],
            ['Bold','Italic','Underline'],
            ['JustifyLeft','JustifyCenter','JustifyRight','JustifyFull'],
            ['OrderedList','UnorderedList'],
            ['TextColor'],
            ['Source']
        ];
        ed.ToolbarSet.Load('eProcv2');
    },
    entrar: function()
    {
        function Perfil(perfil)
        {
            for (n in perfil) {
                if (n in this) this[n] = perfil[n];
            }
        }
        Perfil.prototype = {
            get isPadrao()
            {
                var idPadrao = GM_getValue('v2.perfil');
                return this.id == idPadrao;
            },
            id: null,
            sigla: null,
            nome: null,
            tipo: null,
            orgao: null,
            siglaOrgao: null,
            get row()
            {
                return this._row;
            },
            set row(row)
            {
                this._row = row;
                var me = this;
                this.addListener(function(){me.selecionar();});
            },
            addButton: function()
            {
                var button = document.createElement('button');
                button.textContent = 'Tornar padr�o';
                var me = this;
                button.addEventListener('click', function(e)
                {
                    if (confirm('Deseja tornar o perfil "' + me + '" o padr�o para os pr�ximos logins neste computador?')) {
                        me.definirComoPadrao();
                    } else {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }, false);
                if (this.isPadrao) button.disabled = true;
                var row = this.row, cell = row.insertCell(row.cells.length);
                cell.appendChild(button);
            },
            addListener: function(fn)
            {
                this.row.addEventListener('click', fn, false);
            },
            definirComoPadrao: function()
            {
                GM_setValue('v2.perfil', this.id);
            },
            removerNome: function()
            {
                this.row.cells[1].textContent = this.sigla;
            },
            selecionar: function()
            {
                this.row.cells[0].getElementsByTagName('input')[0].checked = true;
            },
            toString: function()
            {
                return [this.siglaOrgao, this.tipo].join(' / ');
            }            
        };
        Perfil.fromRow = function(row)
        {
            var perfil = {};
            perfil.id = row.getAttribute('onclick').match(/^acaoLogar\('(\d+)'\);$/)[1];
            var siglaNome = row.cells[1].getElementsByTagName('div')[0].innerHTML.split('&nbsp;&nbsp;/&nbsp;&nbsp;');
            perfil.sigla = siglaNome[0];
            perfil.nome = siglaNome[1];
            perfil.tipo = row.cells[2].textContent;
            var orgaoSigla = row.cells[3].textContent.match(/^(.*) +\((.*)\)$/);
            perfil.orgao = orgaoSigla[1];
            perfil.siglaOrgao = orgaoSigla[2];
            perfil = new Perfil(perfil);
            perfil.row = row;
            return perfil;
        };
        function Perfis(perfis)
        {
            var me = this;
            perfis.forEach(function(perfil)
            {
                me.push(perfil);
            });
        }
        Perfis.prototype = new Array();
        Perfis.prototype.toString = function()
        {
            return this.join(',');
        };
        Perfis.prototype.__defineGetter__('hasPadrao', function()
        {
            return 'undefined' != typeof this.getPadrao();
        });
        Perfis.prototype.getPadrao = function()
        {
            var padrao = false;
            this.forEach(function(perfil)
            {
                if (perfil.isPadrao) padrao = perfil;
            });
            if (padrao) return padrao;
        }
        Perfis.prototype.createAviso = function()
        {
            var aviso = new Aviso();
            aviso.inserir(this.fieldset);
            return aviso;
        }
        Perfis.fromFieldset = function(fieldset)
        {
            var perfis = [];
            var table = fieldset.getElementsByTagName('table')[0];
            Array.prototype.forEach.call(table.rows, function(row)
            {
                var perfil = Perfil.fromRow(row);
                perfis.push(perfil);
            });
            perfis = new Perfis(perfis);
            perfis.fieldset = fieldset;
            return perfis;
        };
        function Aviso()
        {
            this.aviso = document.createElement('div');
            this.mensagem = document.createElement('label');
            this.mensagem.style.color = 'red';
            this.cancelar = document.createElement('button');
            this.cancelar.textContent = 'Cancelar login autom�tico';
            this.aviso.appendChild(this.mensagem);
            this.aviso.appendChild(this.cancelar);
        }
        Aviso.prototype = {
            inserir: function(parentNode)
            {
                this.parentNode = parentNode;
                this.parentNode.appendChild(this.aviso);
            },
            esconder: function()
            {
                this.parentNode.removeChild(this.aviso);
            },
            atualizar: function(t) {
                var text = 'Carregando perfil padr�o em ' + t + ' ' + (t > 1 ? 'segundos' : 'segundo') + '...';
                this.mensagem.textContent = text;
            },
            createTimer: function(padrao)
            {
                var timer = new Timer(this, padrao.id);
                padrao.selecionar();
                this.cancelar.addEventListener('click', function(e)
                {
                    e.preventDefault();
                    e.stopPropagation();
                    timer.cancelar();
                }, false);
                return timer;
            }
        }
        function Timer(aviso, id)
        {
            var timer;
            var timeRemaining = 3;
            aviso.atualizar(timeRemaining);
            var me = this;
            this.executa = function()
            {
                if (timeRemaining > 1) {
                    timeRemaining -= 1;
                    aviso.atualizar(timeRemaining);
                } else {
                    me.cancelar();
                    unsafeWindow.acaoLogar(id);
                }
            };
            this.cancelar = function()
            {
                window.clearInterval(timer);
                aviso.esconder();
            };
            timer = window.setInterval(me.executa, 1000);
        }
        var fieldset = document.getElementById('fldLogin');
        var perfis = Perfis.fromFieldset(fieldset);
        if (perfis.length > 0) {
            document.getElementById('fldLogin').style.left = '15%';
            if (perfis.hasPadrao) {
                var padrao = perfis.getPadrao();
                var aviso = perfis.createAviso();
                var timer = aviso.createTimer(padrao);
                perfis.forEach(function(perfil)
                {
                    perfil.addListener(timer.cancelar);
                });
            }
            perfis.forEach(function(perfil)
            {
                perfil.removerNome();
                perfil.addButton();
            });
        }
    },
    getDocsGedpro: function()
    {
      if (arguments.length == 0) {
        return Eproc.reloginGedpro();
      } else if (arguments[0] == 'arvore') {
        GM_xmlhttpRequest({
            method: 'GET',
            url: 'http://' + Eproc.loginGedpro.host + '/arvore2.asp?modulo=Textos do Processo&processo=' + Eproc.processo + '&numeroProcessoVisual=NPV&localizadorProcesso=LP',
            mimeType: 'application/xml; charset=ISO-8859-1',
            onload: function(obj)
            {
                var xml = obj.responseText.match(/[^']PathXMLOriginal =  "([^"]+)"/)[1];
                if (xml.match(/grupos=$/)) {
                    return Eproc.reloginGedpro();
                } else {
                    Eproc.loginGedpro.docs = xml;
                    return window.setTimeout(function() { Eproc.getDocsGedpro(1); }, 100);
                }
            }
        });
      } else {
        var pagina = arguments[0];
        GM_xmlhttpRequest({
            method: 'GET',
            url: Eproc.loginGedpro.docs + '&pgtree=' + pagina,
            mimeType: 'application/xml; charset=ISO-8859-1',
            onload: function(obj)
            {
                var div = document.createElement('div');
                div.innerHTML = obj.responseText;
                var maiorIcone = 0;
                for (var rr = div.getElementsByTagName('reg'), rl = rr.length, r = 0, reg; (r < rl) && (reg = rr[r]); r++) {
                    if (reg.getAttribute('icones').length / 3 > maiorIcone) maiorIcone = reg.getAttribute('icones').length / 3;
                }
                var table = document.createElement('table');
                table.className = 'infraTable';
                var arvore = [];
                for (var rr = div.getElementsByTagName('reg'), rl = rr.length, r = 0, reg; (r < rl) && (reg = rr[r]); r++) {
                    var row = table.insertRow(table.rows.length);
                    row.className = (r % 2 == 0) ? 'infraTrClara' : 'infraTrEscura';
                    var icones = reg.getAttribute('icones');
                    for (var i = 0; i < reg.getAttribute('icones').length; i += 3) {
                        var icone = {
                            iWO: 'Word.gif',
                            iPO: 'Papiro.gif',
                            PDF: 'pdfgedpro.gif',                                    
                            iPF: 'PastaAberta.gif',
                            'iL+': 'L-.gif',
                            'iT+': 'T-.gif',
                            iL0: 'L.gif',
                            iT0: 'T.gif',
                            i00: 'Vazio.gif',
                            iI0: 'I.gif',
                        }[icones.substr(i, 3)];
                        row.insertCell(row.cells.length).innerHTML = '<img style="cursor: inherit;" src="http://' + Eproc.loginGedpro.host + '/images/' + icone + '"/>';
                    }
                    var rotulo = row.insertCell(row.cells.length);
                    rotulo.colSpan = maiorIcone - (icones.length / 3) + 1;
                    if (reg.getAttribute('codigoTipoNodo') == 2) {
                        rotulo.textContent = reg.getAttribute('nomeTipoDocumentoExibicao');
                        rotulo.style.cursor = 'pointer';
                        if (reg.getAttribute('MaiorAcesso') >= 8) {
                            rotulo.style.color = 'green';
                        } else if (reg.getAttribute('MaiorAcesso') >= 2) {
                            rotulo.style.color = 'blue';
                        } else {
                            rotulo.style.color = 'gray';
                            rotulo.style.cursor = 'inherit';
                        }
                        row.insertCell(row.cells.length).textContent = reg.getAttribute('codigoDocumento');
                        if (reg.getAttribute('assinaturaDigital')) {
                            row.insertCell(row.cells.length).innerHTML = '<img style="cursor: inherit;" src="http://' + Eproc.loginGedpro.host + '/images/assinatura.gif"/>';
                        } else {
                            row.insertCell(row.cells.length).innerHTML = '&nbsp;';
                        }
                        row.insertCell(row.cells.length).textContent = reg.getAttribute('dataDocumento');
                        row.insertCell(row.cells.length).innerHTML = [reg.getAttribute('siglaCriador'), reg.getAttribute('dataCriacao')].join('<br/>');
                        row.insertCell(row.cells.length).innerHTML = ['Vers�o ' + reg.getAttribute('numeroVersaoDocumento') + ' por ' + reg.getAttribute('siglaEditor'), reg.getAttribute('dataCriacao')].join('<br/>');
                      if (rotulo.style.color != 'gray') {
                        rotulo.addEventListener('click', (function(reg) {
                            return function(e)
                            {
                                e.preventDefault();
                                e.stopPropagation();
                                var win = Eproc.windows['' + Eproc.processo + reg.getAttribute('codigoNodo')];
                                var isClosed = typeof win == 'undefined';
                                if (!isClosed && win.focus) {
                                    try {
                                        win.window;
                                        isClosed = true;
                                    } catch (ex) {
                                        return win.focus();
                                    }
                                }
                                if (isClosed) {
                                    Eproc.windows['' + Eproc.processo + reg.getAttribute('codigoNodo')] = window.open('http://' + Eproc.loginGedpro.host + '/visualizarDocumentos.asp?codigoDocumento=' + reg.getAttribute('codigoDocumento'), '' + Eproc.processo + reg.getAttribute('codigoNodo'), 'menubar=0,resizable=1,status=0,toolbar=0,location=0,menubar=0,directories=0,scrollbars=1');
                                }
                            };
                        })(reg), false);
                      }
                    } else {
                        if (reg.getAttribute('codigoTipoNodo') == 0) {
                            rotulo.textContent = 'Documentos do GEDPRO';

                        } else if (reg.getAttribute('codigoTipoNodo') == 1) {
                            rotulo.textContent = reg.getAttribute('descricaoIncidente');
                        } else if (reg.getAttribute('codigoTipoNodo') == -1) {
                            rotulo.textContent = reg.getAttribute('nomeTipoDocComposto') + ' ' + reg.getAttribute('identificador') + '/' + reg.getAttribute('ano');
                        }
                        var cell = row.insertCell(row.cells.length);
                        cell.colSpan = 5;
                    }
                }
                var head = table.createTHead().insertRow(0);
                ['','Documento','N�mero','Ass.','Data Documento','Cria��o','Edi��o'].forEach(function (text, i)
                {
                    var th = document.createElement('th');
                    if (i == 1) th.colSpan = maiorIcone;
                    th.className = 'infraTh';
                    th.textContent = text;
                    head.appendChild(th);
                });
                table.tHead.rows[0].cells[3].title = 'Assinado digitalmente';
                var pai = document.getElementById('cargaDocsGedpro');
                pai.textContent = '';
                pai.appendChild(table);
                function criaLinkPaginacaoGedpro(pagina, texto)
                {
                    var link = document.createElement('a');
                    link.href = '#cargaDocsGedpro';
                    link.textContent = texto;
                    link.addEventListener('click', function(e) {
                        var newLink = document.createElement('a');
                        newLink.href = 'http://' + Eproc.loginGedpro.host + '/XMLInterface.asp?processo=' + Eproc.processo + '&ProcessoVisual=PV&grupos=0&pgtree=' + pagina;
                        newLink.textContent = 'Carregando documentos do GEDPRO...';
                        newLink.addEventListener('click', function(e)
                        {
                            e.preventDefault();
                            e.stopPropagation();
                            this.textContent = 'Tentando fazer login no GEDPRO...';
                            Eproc.getDocsGedpro(pagina);
                        }, false);
                        pai.textContent = '';
                        pai.appendChild(newLink);
                        return Eproc.getDocsGedpro(pagina);
                    }, false);
                    pai.appendChild(link);
                }
                if (pagina > 1 || r >= 21) {
                    if (pagina > 2) {
                        criaLinkPaginacaoGedpro(1, '|<');
                        pai.appendChild(document.createTextNode(' '));
                    }
                    if (pagina > 1) {
                        criaLinkPaginacaoGedpro(pagina - 1, '<');
                        pai.appendChild(document.createTextNode(' '));
                    }
                    pai.appendChild(document.createTextNode('P�gina ' + pagina + ' '));
                    if (r >= 21) {
                        criaLinkPaginacaoGedpro(pagina + 1, '>');
                    }
                    pai.appendChild(document.createElement('br'));
                }
                var link = document.createElement('a');
                link.href = '#';
                link.textContent = 'Falta de permiss�o de acesso?';
                link.addEventListener('click', (function(link) { return function(e) { Eproc.reloginGedpro(e); }; })(), false);
                pai.appendChild(link);
            },
        });
      }
    },
    reloginGedpro: function(e)
    {
        var isEvent = false;
        if (e) {
            isEvent = true;
            e.target.id = 'loginGedpro';
            e.target.textContent = 'Tentando fazer login no GEDPRO...';
            e.preventDefault();
            e.stopPropagation();
        }
        var iframe = document.createElement('iframe');
        iframe.src = Eproc.loginGedpro.url;
        iframe.style.display = 'none';
        iframe.addEventListener('load', function(e)
        {
            if (isEvent) {
                document.getElementById('loginGedpro').textContent = 'Falta de permiss�o de acesso?';
            } else {
                document.getElementById('cargaDocsGedpro').getElementsByTagName('a')[0].textContent = 'Carregando documentos do GEDPRO...';
            }
            if (isEvent) {
                alert('Feche o documento e tente novamente agora.');
            } else {
                Eproc.getDocsGedpro('arvore');
            }
        }, false);
        document.getElementById('divInfraAreaTelaE').appendChild(iframe);
    },
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
                cor.textContent = 'Cor ' + (c + 1);
                cor.addEventListener('click', (function() { return function()
                {
                    Eproc.mudaFundo(this.style.backgroundColor);
                }; })(), false);
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
                var padrao = {value: false};
                var msgPadrao = (this.value != GM_getValue('v2.perfil')) ? 'Definir este perfil como padr�o' : '';
                var mudanca = GM_confirmCheck('Mudan�a de perfil',
                    'Perfil selecionado: ' + options[this.selectedIndex].textContent, msgPadrao, padrao);
                if (!mudanca) {
                    this.value = option.value;
                    return;
                } else if (padrao.value == true) {
                    GM_setValue('v2.perfil', this.value);
                }
                this.form.submit();
            }, false);
        }
        var pesquisaRapida = document.getElementById('txtNumProcessoPesquisaRapida');
        if (pesquisaRapida) {
            pesquisaRapida.addEventListener('change', this.onNumProcessoChange, false);
        }
        this.colorirLembretes();
        this.colorirTabela();
        this.setCorCapa();
        this.setLastProcesso();
        if (this.acao && this[this.acao]) {
            this[this.acao]();
        } else if (this.parametros.acao_origem && this[this.parametros.acao_origem + '_destino']) {
            this[this.parametros.acao_origem + '_destino']();
        } else if (location.pathname.match(/\/eproc(V2|v2_homologacao|v2_apresentacao)\/(index.php)?/)) {
            document.createElement('img').src = '/infra_css/imagens/fndtransp.gif';
        }
        if (location.pathname.match(/\/class\/fckeditor\/editor\/fckeditor\.html/)) {
            unsafeWindow.parent.FCKeditor_OnComplete = this.digitar_documento_oncomplete;
        }
        window.addEventListener('beforeunload', function(e)
        {
            var windows = [];
            for (w in Eproc.windows) {
                var win = Eproc.windows[w];
                if (typeof win == 'object' && !win.closed) {
                    windows.push(win);
                }
            }
            if (windows.length) {
                var resposta = GM_yesNo('Janelas abertas', 'Este processo possui ' + windows.length + ' ' + (windows.length > 1 ? 'janelas abertas' : 'janela aberta') + '.\nDeseja fech�-' + (windows.length > 1 ? 'las' : 'la') + '?');
                if (resposta == 0) {
                    for (var w = windows.length - 1; w >= 0; w--) {
                        windows[w].close();
                    }
                } else {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
            delete Eproc;
        }, false);
    },
    mudaFundo: function(background)
    {
        GM_setValue('v2.fundo', background);
        document.getElementsByTagName('body')[0].style.backgroundColor = background;
        GM_addStyle(''
+ '#divInfraAreaTela input, select {'
+ '    background-color: hsla(0, 0%, 80%, 0.25);'
+ '}'
+ '#divInfraAreaTela input:focus {'
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
+ 'div.infraBarraTribunal {'
+ '    -moz-background-size: 1px 80px;'
+ '    background-size: 1px 80px;'
+ '}'
+ '.infraTable td label {'
+ '    font-size: 1em;'
+ '}'
+ '.prazoAguardaAbertura {'
+ '    background-color: hsl(0, 50%, 80%);'
+ '}'
+ '.prazoAberto {'
+ '    background-color: hsl(60, 50%, 80%);'
+ '}'
+ 'table.prazoComDestaque .prazoFechado {'
+ '    background-color: hsla(120, 50%, 50%, 0.2);'
+ '}'
+ '.prazoExtra {'
+ '    display: none;'
+ '}'
+ '.prazoComDestaque .prazoExtra {'
+ '    display: inline;'
+ '}'
+ '.prazoComDestaque .prazoFechado .prazoEvento {'
+ '    background-color: hsl(60, 40%, 85%);'
+ '}'
+ '*[disabled] {'
+ '    color: #aaa;'
+ '}'
+ 'button {'
+ '    background-color: #eee;'
+ '}'
+ 'div.infraAjaxAutoCompletar { max-height: 30em; overflow-y: scroll; } div.infraAjaxAutoCompletar li a { display: block; margin-left: 3ex; text-indent: -3ex; } div.infraAjaxAutoCompletar li.selected { background-color: Highlight; } div.infraAjaxAutoCompletar li.selected a, div.infraAjaxAutoCompletar li.selected b { color: HighlightText; }'
);
	Array.prototype.forEach.call(document.querySelectorAll('label[onclick^="listarTodos"], label[onclick^="listarEventos"], #txtEntidade, #txtPessoaEntidade'), function(auto)
        {
          var id = auto.id.replace('lblListar', 'txt');
          auto = document.querySelector('#' + id);
          if (auto) {
            auto.style.width = auto.clientWidth + 'px';
          }
        }, this);
	Array.prototype.forEach.call(document.querySelectorAll('div[class^=infraLegend], div[id^=divDes]'), function(div) {
                div.style.backgroundColor = background;
	});
    },
    painel_secretaria_listar: function()
    {
        document.getElementById('divInfraAreaDados').style.height = 'auto';
    },
    prevencao_judicial: function()
    {
        if (document.referrer.match(/\?acao=processo_selecionar&/)) {
            var voltarem = document.querySelectorAll('button[id=btnVoltar]');
            Array.prototype.forEach.call(voltarem, function(voltar)
            {
                voltar.setAttribute('onclick', 'location.href="' + document.referrer + '";');
            });
        }
    },        
    prevencao_judicial_bloco: function()
    {
        var buscarForm = document.querySelector('#frmProcessoLista');
        var selecionados = document.getElementById('hdnInfraItensSelecionados');
        if (selecionados) {
            Array.prototype.forEach.call(document.querySelectorAll('#btnConsultar, .infraTdSetaOrdenacao a, #divInfraAreaPaginacao a, #divInfraAreaPaginacao select'), function(el) {
                var attr = el.hasAttribute('onclick') ? 'onclick' : 'onchange';
                var action = el.getAttribute(attr);
                el.setAttribute(attr, '');
                el.addEventListener(attr.replace(/^on/, ''), (function(action) { return function(e)
                {
                    selecionados.value = '';
                    eval('unsafeWindow.' + action);
                }; })(action), true);
            });
        }
        var botoes = document.querySelectorAll('button[onclick^="submeterFrm("]');
        Array.prototype.forEach.call(botoes, function(botao)
        {
            var onclick = botao.getAttribute('onclick');
            botao.setAttribute('onclick', '');
            var action = onclick.match(/'([^']*)'/)[1];
            var newWindow = action == 'buscar' ? true : false;
            botao.addEventListener('click', (function(newWindow, action) { return function(e)
            {
                buscarForm.target = newWindow ? '_blank' : '';
                unsafeWindow.submeterFrm(action);
                unsafeWindow.infraOcultarAviso();
                buscarForm.target = '';
            }; })(newWindow, action), false);
        });
        if (document.getElementById('btnConsultar')) {
            var paginacao = document.getElementById('selPaginacao');
            var option = document.createElement('option');
            option.value = '10';
            option.textContent = '10 processos por p�gina';
            if (paginacao.querySelectorAll('option[selected]').length == 0) option.selected = true;
            paginacao.insertBefore(option, paginacao.firstChild);
            Array.prototype.forEach.call(document.querySelectorAll('.infraTable[summary="Tabela de Processos."]'), function(table)
            {
                table.setAttribute('width', '');
                Array.prototype.forEach.call(table.getElementsByTagName('th'), function(th)
                {
                    th.setAttribute('width', '');
                });
                Array.prototype.forEach.call(table.querySelectorAll('tr[class^="infraTr"] td:nth-of-type(2) a'), function(link, l)
                {
                    link.target = '_blank';
                    var tr = link.parentNode.parentNode;
                    var button = document.createElement('button');
                    button.className = 'infraButton';
                    button.textContent = 'Buscar Preventos';
                    button.style.fontSize = '.8em';
                    if (l == 0) {
                        var th = table.querySelector('th:nth-of-type(2)');
                        var newTh = document.createElement('th');
                        newTh.className = 'infraTh';
                        newTh.textContent = 'Buscar Preventos';
                        th.parentNode.insertBefore(newTh, th);
                    }
                    var cell = tr.insertCell(1);
                    button.addEventListener('click', function(e)
                    {
                        e.preventDefault();
                        e.stopPropagation();
                        var oldSelecionados = selecionados.value;
                        var match, processo;
                        [match, processo] = link.search.match(/\&num_processo=(\d{20})\&/);
                        var box = document.getElementById('lnkInfraID-' + processo).nextSibling;
                        var checked = box.checked;
                        selecionados.value = processo;
                        buscarForm.target = '_blank';
                        box.checked = true;
                        unsafeWindow.submeterFrm('buscar');
                        unsafeWindow.infraOcultarAviso();
                        box.checked = checked;
                        buscarForm.target = '';
                        selecionados.value = oldSelecionados;
                    }, false);
                    cell.appendChild(button);
                });
            });
        }
    },
    processo_consulta_listar: function()
    {
        var form = document.getElementById('frmProcessoEventoLista');
        form.action = location.pathname + location.search;
        var docsGedpro = document.getElementById('divDocumentosGedpro');
        if (docsGedpro) {
            var linkSecao = document.getElementById('divInfraBarraTribunalE').getElementsByTagName('a')[0];
            var estado = linkSecao.hostname.match(/\.jf(pr|rs|sc)\.(?:gov|jus)\.br/);
            var linkGedpro = (estado && 'sc' == estado[1]) ? 'http://gedpro.jfsc.jus.br/visualizarDocumentos.asp?codigoDocumento=' : '';
            var Doc = function(processo, numero, tipo)
            {
                this.toString = function() { return [tipo, numero].join(' '); };
                if (!linkGedpro) {
                    this.link = '';
                } else {
                    this.link = document.createElement('a');
                    this.link.textContent = this.toString();
                    this.link.href = linkGedpro + numero;
                    this.link.target='_blank';
                    this.link.addEventListener('click', (function(processo, numero) {
                        return function(e)
                        {
                            e.preventDefault();
                            e.stopPropagation();
                            var win = Eproc.windows['' + processo + numero];
                            var isClosed = typeof win == 'undefined';
                            if (!isClosed && win.focus) {
                                try {
                                    win.window;
                                    isClosed = true;
                                } catch (ex) {
                                    return win.focus();
                                }
                            }
                            if (isClosed) {
                                Eproc.windows['' + processo + numero] = window.open(e.target.href, '' + processo + numero, 'menubar=0,resizable=1,status=0,toolbar=0,location=0,menubar=0,directories=0,scrollbars=1');
                            }
                        };
                    })(processo, numero), false);
                }
            };
            Doc.fromRow = function(row) {
                var processo = row.cells[0].textContent;
                var numero = row.cells[1].textContent.replace(/^ged_/, '');
                var tipo = row.cells[2].textContent;
                return new Doc(processo, numero, tipo);
            }
            var thead = form.querySelector('.infraTable > tbody > tr:first-child');
            var th = document.createElement('th');
            th.className = 'infraTh';
            th.textContent = 'Documento Gedpro';
            thead.appendChild(th);
            var processos = form.querySelectorAll('.infraTable > tbody > tr[class^=infraTr]');
            Array.prototype.forEach.call(docsGedpro.querySelectorAll('tr[class^=infraTr]'), function(row, r)
            {
                var doc = Doc.fromRow(row);
                var newCell = processos[r].insertCell(processos[r].cells.length);
                newCell.appendChild(doc.link);
                row.parentNode.removeChild(row);
            });
        }
    },
    processo_selecionar: function()
    {
        document.title = Eproc.getProcessoF();
        for (var links = document.querySelectorAll('a'), l = 0, ll = links.length; (l < ll) && (link = links[l]); l++) {
            if (!link.href && link.textContent.match(/GEDPRO/)) {
                if (link.getAttribute('onclick')) {
                    link.textContent = 'GEDPRO';
                    link.parentNode.insertBefore(document.createTextNode(' | '), link.nextSibling);
                    link.href = link.getAttribute('onclick').match(/window.open\('([^']+)'/)[1];
                    Eproc.loginGedpro = {
                        host: link.host,
                        url: link.href,
                    }
                    link.setAttribute('onclick', '');
                    link.target = '_blank';
                    link.addEventListener('click', (function(link) { return function(e)
                    {
                        e.preventDefault();
                        e.stopPropagation();
                        var x = IELauncher(link.href);
                    }; })(link), false);
                    var processo = document.getElementById('divInfraAreaProcesso');
                    var tabelas = processo.getElementsByClassName('infraTable');
                    var div = document.createElement('div');
                    div.id = 'cargaDocsGedpro';
                    var link = document.createElement('a');
                    link.href = 'http://' + Eproc.loginGedpro.host + '/XMLInterface.asp?processo=' + Eproc.processo + '&ProcessoVisual=PV&grupos=0&pgtree=1';
                    link.textContent = 'Carregar documentos do GEDPRO';                
                    link.addEventListener('click', function(e)
                    {
                        e.preventDefault();
                        e.stopPropagation();
                        this.textContent = 'Tentando fazer login no GEDPRO...';
                        Eproc.getDocsGedpro();
                    }, false);
                    div.appendChild(link);
                    processo.insertBefore(div, tabelas[tabelas.length - 1]);
                    processo.insertBefore(document.createElement('br'), tabelas[tabelas.length - 1]);
                    processo.insertBefore(document.createElement('br'), tabelas[tabelas.length - 1]);
                } else if (link.title == 'Link para o GEDPRO n�o p�de ser gerado.') {
                    link.getElementsByTagName('u')[0].style.textDecoration = 'line-through';
                }
            } else if (link.id == 'Prevencao') {
                if (link.textContent.match(/N�O executada/)) {
                    var linkPrevencao = link, linkPrevencaoClicado = false, linkPrevencaoOldText = linkPrevencao.textContent;
                    var onLinkPrevencaoClick;
                    var restore = function()
                    {
                        alert('Ocorreu um erro. Favor tentar novamente.');
                        linkPrevencao.textContent = linkPrevencaoOldText;
                        linkPrevencao.removeEventListener('click', onLinkPrevencaoClick, false);
                        linkPrevencaoClicado = false;
                    };
                    onLinkPrevencaoClick = function(e)
                    {
                        if (e.ctrlKey || e.shiftKey) return;
                        e.preventDefault();
                        e.stopPropagation();
                        if (linkPrevencaoClicado) return;
                        linkPrevencaoClicado = true;
                        e.target.textContent = 'Aguarde, executando...';
                        GM_xmlhttpRequest({
                            url: e.target.href.replace(/'\);$/, ''),
                            method: 'GET',
                            onload: function(response)
                            {
                                var div = document.createElement('div');
                                div.innerHTML = response.responseText;
                                var form = div.querySelector('#frmProcessoLista');
                                if (form) {
                                    form.action = response.responseText.match(/controlador\.php\?acao=prevencao_judicial&[^']+/);
                                    form.querySelector('#acao').value = 'prevencao_judicial';
                                    form.style.display = 'none';
                                    document.body.appendChild(form);
                                    form.submit();
                                } else {
                                    restore();
                                }
                            },
                            onerror: restore
                        });
                    };
                    link.addEventListener('click', onLinkPrevencaoClick, false);
                }
            }
        }
        if (document.getElementById('tableRelacionado')) {
            var links = document.querySelectorAll('#tableRelacionado td:nth-of-type(1) a');
            Array.prototype.forEach.call(links, function(link)
            {
                link.target = '_blank';
            });
        }
        for (var tables = document.getElementsByClassName('infraTable'), t = 0, tl = tables.length; (t < tl) && (table = tables[t]); t++) {
            if (table.getAttribute('summary') == 'Eventos') {
                for (var ths = table.getElementsByTagName('th'), h = 1, hl = ths.length; (h < hl) && (th = ths[h]); h++) {
                    th.setAttribute('width', '');
                }
		var haPrazosFechados = false;
                for (var trs = table.getElementsByTagName('tr'), r = 0, rl = trs.length; (r < rl) && (tr = trs[r]); r++) {
                    if (!tr.className.match(/infraTr(Clara|Escura)/)) continue;
                    if (match = tr.cells[2].innerHTML.match(/Prazo: .* Status:([^<]+)/)) {
                        if (match[1] == 'AGUARD. ABERTURA') {
                            tr.cells[2].className = 'prazoAguardaAbertura';
                        } else if (match[1] == 'ABERTO') {
                            tr.cells[2].className = 'prazoAberto';
                        } else if (match[1] == 'FECHADO') {
                            haPrazosFechados = true;
                            var extraContent = '', fechamento = tr.cells[0].getElementsByTagName('a')[0].getAttribute('onmouseover').match(/Fechamento do Prazo:.*?\d+ - ([^<]+)/);
                            if (fechamento) {
                                var evento = fechamento[1]
                                if (evento != 'Decurso de Prazo') {
                                    evento = '<span class="prazoEvento">' + evento + '</span>';
                                }
                                extraContent = '<span class="prazoExtra"> (' + evento + ')</span>';
                            }
                            tr.cells[2].className = 'prazoFechado';
                            tr.cells[2].innerHTML = tr.cells[2].innerHTML.replace(/Prazo: .* Status:FECHADO/, '$&' + extraContent);
                        }
                    }
                    if (tr.cells[4].getElementsByTagName('table').length) {
                        for (var subtrs = tr.cells[4].getElementsByTagName('tr'), subr = 0, subrl = subtrs.length; (subr < subrl) && (subtr = subtrs[subr]); subr++) {
                            for (var subtds = subtr.cells, subc = 0, subcl = subtds.length; (subc < subcl) && (subtd = subtds[subc]); subc++) {
                                var child = null;
                                while (child = subtd.firstChild) {
                                    tr.cells[4].appendChild(child);
                                }
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
                        if (!/\?acao=acessar_documento\&/.test(link.href)) continue;
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
                        })('' + Eproc.processo + r + link.innerHTML.replace(/<[^>]*>/g, ''), link), false);
                    }
                }
		if (haPrazosFechados) {
                    var check = document.createElement('input');
                    check.type = 'checkbox';
                    check.id = 'extraSemDestaque';
                    table.parentNode.insertBefore(check, table.nextSibling);
                    var label = document.createElement('label');
                    label.textContent = ' N�o destacar prazos fechados';
                    label.htmlFor = 'extraSemDestaque';
                    check.parentNode.insertBefore(label, check.nextSibling);
                    if (GM_getValue('v2.semdestaque')) {
                        check.checked = true;
                        table.className += ' prazoSemDestaque';
                    } else {
                        check.checked = false;
                        table.className += ' prazoComDestaque';
                    }
                    var thisTable = table;
                    check.addEventListener('change', function(e)
                    {
                        var me = e.target;
                        var thisTableClasses = thisTable.className.split(' ');
                        ['prazoSemDestaque', 'prazoComDestaque'].forEach(function(nomeClasse)
                        {
                            var indexOfPrazo = thisTableClasses.indexOf(nomeClasse);
                            if (indexOfPrazo > -1) {
                                thisTableClasses.splice(indexOfPrazo, 1);
                            }
                        });
                        if (me.checked) {
                            GM_setValue('v2.semdestaque', true);
                            thisTableClasses.push('prazoSemDestaque');
                        } else {
                            GM_setValue('v2.semdestaque', false);
                            thisTableClasses.push('prazoComDestaque');
                        }
                        thisTable.className = thisTableClasses.join(' ');
                    }, false);
		}
            }
        }
    },
    setCorCapa: function()
    {
        var assuntos = document.querySelector('#fldAssuntos');
        if (assuntos) var classe = assuntos.querySelector('#txtClasse');
        if (classe) {
            var cor = Classes[classe.textContent];
            if (cor) {
                assuntos.style.backgroundColor = cor;
            }
        }
    },
    setLastProcesso: function()
    {
        var txtNumProcesso = document.getElementById('txtNumProcesso');
        if (txtNumProcesso && txtNumProcesso.tagName.toLowerCase() == 'input' && txtNumProcesso.type == 'text') {
            var before = document.referrer.match(/\&(txtNumProcesso|num_processo)=([0-9]{20})/);
            if (before) {
                txtNumProcesso.value = before[2];
            }
            txtNumProcesso.select();
            txtNumProcesso.addEventListener('change', this.onNumProcessoChange, false);
        }
    },
    onNumProcessoChange: function(e)
    {
        var txtNumProcesso = e.target;
        var possiveis = Eproc.getPossiveis(txtNumProcesso.value);
        if (possiveis.length == 1) {
            txtNumProcesso.value = possiveis[0];
            return;
        } else if (possiveis.length > 1) {
            var message = [];
            for (var i = 0, possivel; possivel = possiveis[i]; i++) {
                message.push((i + 1) + '. ' + Eproc.getNumprocF(possivel));
            }
            var escolha = prompt('Escolha:\n' + message.join('\n'));
            if (escolha) {
                txtNumProcesso.value = possiveis[escolha - 1];
            }
            return;
        }
    },
    getPossiveis: function(numproc)
    {
        var possibilidades = [];
        var ano, anoAtual = new Date().getFullYear();
        var novoAno, novoNumproc;
        var match = /^(\d*)\/(\d{2}|\d{4})$/.exec(numproc);
        if (match) {
            var novoNumproc = match[1], novoAno = match[2];
            if (novoAno.length == 2) novoAno = '20' + novoAno;
            if (novoAno >= 2009 && novoAno <= anoAtual) {
                ano = novoAno;
                numproc = novoNumproc;
            }
        }
        var segmentos = numproc.split(/[^0-9]/);
        segmentos.forEach(function(segmento, s)
        {
            if (s == 0) {
                numproc = segmento;
            } else {
                numproc += segmento;
            }
        }, this);
        if (numproc.length < 3 || numproc.length > 8) return possibilidades;
        var dd = numproc.substr(numproc.length - 2);
        numproc = numproc.substr(0, numproc.length - 2);
        while (numproc.length < 6) {
            numproc = '0' + numproc;
        }
        while (numproc.length < 7) {
            numproc = '5' + numproc;
        }
        var secoesMaxSu = {};
        var linkSecao = document.getElementById('divInfraBarraTribunalE').getElementsByTagName('a')[0];
        var estado = linkSecao.hostname.match(/\.jf(pr|rs|sc)\.(?:gov|jus)\.br/);
        if (!estado) {
            secoesMaxSu['00'] = 0;
        }
        if (!estado || estado[1] == 'pr') {
            secoesMaxSu['70'] = 17;
        }
        if (!estado || estado[1] == 'rs') {
            secoesMaxSu['71'] = 20;
        }
        if (!estado || estado[1] == 'sc') {
            secoesMaxSu['72'] = 16;
        }
        var se;
        for (se in secoesMaxSu) {
            var maxSu = secoesMaxSu[se];
            for (var su = 0; su <= maxSu; su++) {
                if (su.toString().length == 1) su = '0' + su;
                for (var a = 2009; a <= anoAtual; a++) {
                    var r1 = numproc % 97;
                    var r2 = ('' + r1 + a + '404') % 97;
                    var r3 = ('' + r2 + se + su + dd) % 97;
                    if (r3 == 1) possibilidades.push(numproc + dd + a + '404' + se + su);
                }
            }
        }
        return possibilidades;
    },
    getNumprocF: function(numproc)
    {
        var numprocF = '';
        for (var i = 0, d; d = numproc.substr(i, 1); i++) {
            if (i == 7) numprocF += '-';
            if (i == 9 || i == 13 || i == 14 || i == 16) numprocF += '.';
            numprocF += d;
        }
        return numprocF;
    }
}
Eproc.init();

