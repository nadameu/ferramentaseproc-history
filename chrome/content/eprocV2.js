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
    'EXECU��O DE SENTEN�A CONTRA FAZENDA P�BL': Cores.VERDE,
    'EXECU��O DE T�TULO EXTRAJUDICIAL': Cores.AMARELA,
    'EXECU��O FISCAL': Cores.LARANJA,
    'EXECU��O HIPOTEC�RIA DO SISTEMA FINANCEIRO DA HABI': Cores.AMARELA,
    'EXECU��O PENAL': Cores.BRANCA,
    'EXECU��O PENAL PROVIS�RIA': Cores.AMARELA,
    'EXECU��O PROVIS�RIA DE SENTEN�A': Cores.VERDE,
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
    'INTERDITO PROIBIT�RIO': Cores.VERDE,
    'JUSTIFICA��O DE DINHEIRO A RISCO': Cores.VERDE,
    'LIQUIDA��O POR ARBITRAMENTO': Cores.BRANCA,
    'LIQUIDA��O POR ARTIGOS': Cores.BRANCA,
    'LIQUIDA��O PROVIS�RIA POR ARBITRAMENTO': Cores.BRANCA,
    'LIQUIDA��O PROVIS�RIA POR ARTIGOS': Cores.BRANCA,
    'MANDADO DE SEGURAN�A': Cores.PALHA,
    'MANDADO DE SEGURAN�A COLETIVO': Cores.PALHA,
    'MEDIDA CAUTELAR DE ALIMENTOS PROVISIONAIS': Cores.AZUL,
    'MEDIDA CAUTELAR DE APREENS�O DE T�TULOS': Cores.CINZA,
    'MEDIDA CAUTELAR DE ARRESTO': Cores.BRANCA,
    'MEDIDA CAUTELAR DE ARROLAMENTO DE BENS': Cores.BRANCA,
    'MEDIDA CAUTELAR DE ATENTADO': Cores.BRANCA,
    'MEDIDA CAUTELAR DE BUSCA E APREENS�O': Cores.SALM�O,
    'MEDIDA CAUTELAR DE CAU��O': Cores.PALHA,
    'MEDIDA CAUTELAR DE EXIBI��O': Cores.SALM�O,
    'MEDIDA CAUTELAR DE HOMOLOGA��O DO PENHOR LEGAL': Cores.SALM�O,
    'MEDIDA CAUTELAR DE INTERPELA��O': Cores.SALM�O,
    'MEDIDA CAUTELAR DE JUSTIFICA��O': Cores.SALM�O,
    'MEDIDA CAUTELAR DE NOTIFICA��O': Cores.SALM�O,
    'MEDIDA CAUTELAR DE POSSE EM NOME DO NASCITURO': Cores.SALM�O,
    'MEDIDA CAUTELAR DE PRODU��O ANTECIPADA DE PROVAS': Cores.SALM�O,
    'MEDIDA CAUTELAR DE PROTESTO': Cores.SALM�O,
    'MEDIDA CAUTELAR DE SEQUESTRO': Cores.SALM�O,
    'MEDIDA CAUTELAR FISCAL': Cores.SALM�O,
    'MEDIDA CAUTELAR INOMINADA': Cores.SALM�O,
    'NATURALIZA��O': Cores.SALM�O,
    'NOMEA��O DE ADVOGADO': Cores.CINZA,
    'NOTIFICA��O PARA EXPLICA��ES': Cores.SALM�O,
    'NOTIFICA��O PARA EXPLICA��ES (LEI DE IMPRENSA)': Cores.AMARELA,
    'OP��O DE NACIONALIDADE': Cores.SALM�O,
    'OPOSI��O': Cores.SALM�O,
    'ORGANIZA��O E FISCALIZA��O DE FUNDA��O': Cores.SALM�O,
    'OUTRAS MEDIDAS PROVISIONAIS': Cores.VERDE,
    'OUTROS PROCEDIMENTOS DE JURISDI��O VOLUNT�RIA': Cores.VERDE,
    'PEDIDO DE ASSIST�NCIA JUDICI�RIA': Cores.SALM�O,
    'PEDIDO DE BUSCA E APREENS�O CRIMINAL': Cores.CINZA,
    'PEDIDO DE LIBERDADE PROVIS�RIA COM OU SEM FIAN�A': Cores.AMARELA,
    'PEDIDO DE PRIS�O PREVENTIVA': Cores.VERDE,
    'PEDIDO DE PRIS�O TEMPOR�RIA': Cores.BRANCA,
    'PEDIDO DE QUEBRA DE SIGILO DE DADOS E/OU TELEF�NIC': Cores.BRANCA,
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
    'RECURSO EM SENTIDO ESTRITO': Cores.ROSA,
    'REINT/MANUTEN��O POSSE PROCED.ESP.JURISD.CONTENC.': Cores.BRANCA,
    'REMI��O DO IM�VEL HIPOTECADO': Cores.BRANCA,
    'REPRESENTA��O CRIMINAL': Cores.BRANCA,
    'REQUERIMENTO DE REABILITA��O': Cores.BRANCA,
    'RESTAURA��O DE AUTOS': Cores.AZUL,
    'RETIFICA��O DE REGISTRO DE IM�VEL': Cores.ROSA,
    'SEQ�ESTRO - MEDIDAS ASSECURAT�RIAS': Cores.BRANCA,
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
    // {{{ arvore_processo()
    arvore_processo: function()
    {
        GM_addStyle('dt { font-size: 12px; } dd { font-size: 11px; }');
        if (!unsafeWindow.opener) return window.close();
        document.title = Eproc.getProcessoF() + ' - �rvore de documentos';
        Array.forEach(document.getElementsByClassName('infraAcaoBarraSistema'), function(acao)
        {
            acao.style.display = 'none';
        });
        document.getElementById('divInfraBarraSistemaE').style.display = 'none';
        document.getElementById('divInfraBarraLocalizacao').textContent = unsafeWindow.opener.document.getElementById('divInfraBarraLocalizacao').textContent + ' - �rvore de documentos';
        document.getElementById('divInfraAreaTela').style.display = 'none';
        var area = document.createElement('div');
        area.className = 'infraAreaTela';
        for (var tables = unsafeWindow.opener.document.getElementsByTagName('table'), tl = tables.length, t = 0, t; (t < tl) && (table = tables[t]); t++) {
            if (table.getAttribute('summary') == 'Eventos') {
                var arvore = document.createElement('div');
                arvore.style.cssFloat = 'left';
                arvore.style.width = '20%';
                arvore.style.overflowY = 'scroll';
                for (var rows = table.rows, rl = rows.length, r = rl - 1, row; (r >= 0) && (row = rows[r]); r--) {
                    if (!row.className.match(/infraTr(Clara|Escura)/)) continue;
                    var evento = document.createElement('dl');
                    var descricao = document.createElement('dt');
                    descricao.textContent = row.cells[0].textContent + '. ' + row.cells[1].textContent;
                    evento.appendChild(descricao);
                    var descricao = document.createElement('dd');
                    descricao.textContent = row.cells[2].innerHTML.split('<br')[0] + ' (' + row.cells[3].innerHTML + ')';
                    evento.appendChild(descricao);
                    for (var links = row.cells[4].getElementsByTagName('a'), l = 0, ll = links.length; (l < ll) && (link = links[l]); l++) {
                        if (link.search.match(/processo_evento_documento_tooltip_cadastrar/)) continue;
                        var documento = document.createElement('dd');
                        if (link.search.match(/processo_evento_documento_tooltip_alterar/)) {
                            var link = link.cloneNode(true);
                            link.addEventListener('click', function(e) { if (!e.shiftKey && !e.ctrlKey) { e.preventDefault(); e.stopPropagation(); } }, false);
                            documento.appendChild(link);
                            l++;
                            if (l >= ll) continue;
                            link = links[l];
                        }
                        var link = link.cloneNode(true);
                        link.target = 'show_files';
                        link.addEventListener('click', (function(link) { return function(e)
                        {
                            e.preventDefault();
                            e.stopPropagation();
                            document.getElementsByClassName('docActiveFrame')[0].className = 'docFrame';
                            var id = link.href.match(/doc=([0-9]+)/)[1];
                            var iframe = document.getElementById('frame' + id) || (function()
                            {
                                var iframe = document.createElement('iframe');
                                iframe.id = 'frame' + id;
                                iframe.src = link.href;
                                area.appendChild(iframe);
                                return iframe;
                            })();
                            iframe.className = 'docFrame docActiveFrame';
                        }; })(link), false);
                        documento.appendChild(link);
                        evento.appendChild(documento);
                    }
                    arvore.appendChild(evento);
                }
                area.appendChild(arvore);
            }
        }
        var iframe = document.createElement('iframe');
        iframe.name = 'show_files';
        iframe.className = 'docFrame docActiveFrame';
        area.appendChild(iframe);
        var falta = window.innerHeight - document.getElementById('divInfraAreaGlobal').offsetHeight - 20;
        document.getElementById('divInfraAreaTela').parentNode.insertBefore(area, document.getElementById('divInfraAreaTela').nextSibling);
        arvore.style.height = falta + 'px';
        GM_addStyle('iframe.docFrame { display: none; float: left; width: 80%; border: none; height: ' + falta + 'px; } iframe.docActiveFrame { display: block; }');
},
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
                        var classe = tr.cells[col].textContent;
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
                    }; })(id), false);
                }
            }
        }
    },
    // }}}
    // {{{ getDocsGedpro()
    /**
     * Obt�m os documentos do Gedpro
     */
    getDocsGedpro: function()
    {
        var grupos = arguments.length > 0 ? arguments[0] : '0';
        if (grupos == '') {
            grupos = 0;
        }
        GM_xmlhttpRequest({
            method: 'GET',
            url: 'http://' + Eproc.loginGedpro.host + '/XMLInterface.asp?processo=' + Eproc.processo + '&ProcessoVisual=PV&grupos=' + grupos,
            mimeType: 'application/xml; charset=ISO-8859-1',
            onload: function(obj)
            {
                var div = document.createElement('div');
                div.innerHTML = obj.responseText;
                if (div.getElementsByTagName('erro').length) {
                    return GM_xmlhttpRequest({
                        method: 'GET',
                        url: Eproc.loginGedpro.url,
                        onload: function() { Eproc.getDocsGedpro(); },
                    });
                }
                if (grupos === '0') {
                    grupos = [];
                    for (var rr = div.getElementsByTagName('reg'), rl = rr.length, r = 0, reg; (r < rl) && (reg = rr[r]); r++) {
                        if (reg.getAttribute('codigoGrupoProprietario')) {
                            grupos[reg.getAttribute('codigoGrupoProprietario')] = reg.getAttribute('codigoGrupoProprietario');
                        }
                    }
                    return window.setTimeout((function(grupos) { return function() { Eproc.getDocsGedpro(grupos); }; })(grupos.join(',')), 100);
                }
                var div = document.createElement('div');
                div.innerHTML = obj.responseText;
                var maiorIcone = 0;
                for (var rr = div.getElementsByTagName('reg'), rl = rr.length, r = 0, reg; (r < rl) && (reg = rr[r]); r++) {
                    if (reg.getAttribute('icones').length / 3 > maiorIcone) maiorIcone = reg.getAttribute('icones').length / 3;
                }
                var table = document.createElement('table');
                table.className = 'infraTable';
                var head = table.insertRow(0);
                ['','Documento','N�mero','Ass.','Data Documento','Cria��o','Edi��o'].forEach(function (text, i)
                {
                    var th = document.createElement('th');
                    if (i == 1) th.colSpan = maiorIcone;
                    th.className = 'infraTh';
                    th.textContent = text;
                    head.appendChild(th);
                });
                table.rows[0].cells[3].title = 'Assinado digitalmente';
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
                        if (reg.getAttribute('MaiorAcesso') >= 8) {
                            rotulo.style.color = 'green';
                        } else if (reg.getAttribute('MaiorAcesso') >= 2) {
                            rotulo.style.color = 'blue';
                        } else {
                            rotulo.style.color = 'gray';
                        }
                        rotulo.style.cursor = 'pointer';
                        row.insertCell(row.cells.length).textContent = reg.getAttribute('codigoDocumento');
                        if (reg.getAttribute('assinaturaDigital')) {
                            row.insertCell(row.cells.length).innerHTML = '<img style="cursor: inherit;" src="http://' + Eproc.loginGedpro.host + '/images/assinatura.gif"/>';
                        } else {
                            row.insertCell(row.cells.length).innerHTML = '&nbsp;';
                        }
                        row.insertCell(row.cells.length).textContent = reg.getAttribute('dataDocumento');
                        row.insertCell(row.cells.length).innerHTML = [reg.getAttribute('siglaCriador'), reg.getAttribute('dataCriacao')].join('<br/>');
                        row.insertCell(row.cells.length).innerHTML = ['Vers�o ' + reg.getAttribute('numeroVersaoDocumento') + ' por ' + reg.getAttribute('siglaEditor'), reg.getAttribute('dataCriacao')].join('<br/>');
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
                    } else {
                        if (reg.getAttribute('codigoTipoNodo') == 0) {
                            rotulo.textContent = 'Documentos do GEDPRO';

                        } else if (reg.getAttribute('codigoTipoNodo') == 1) {
                            rotulo.textContent = reg.getAttribute('descricaoIncidente');
                        }
                        var cell = row.insertCell(row.cells.length);
                        cell.colSpan = 5;
                    }
                }
                var pai = document.getElementById('cargaDocsGedpro').parentNode;
                pai.replaceChild(table, document.getElementById('cargaDocsGedpro'));
                var link = document.createElement('a');
                link.href = '#';
                link.textContent = 'Falta de permiss�o de acesso?';
                link.addEventListener('click', function(e)
                {
                    this.id = 'loginGedpro';
                    this.textContent = 'Tentando fazer login no GEDPRO novamente...';
                    e.preventDefault();
                    e.stopPropagation();
                    var iframe = document.createElement('iframe');
                    iframe.src = Eproc.loginGedpro.url;
                    iframe.style.display = 'none';
                    document.getElementById('divInfraAreaTelaE').appendChild(iframe);
                    Eproc.tester = {
                        id: window.setInterval(function()
                        {
                            var limit = 30;
                            var success = false;
                            try {
                                var x = frames[0].window;
                                Eproc.tester.times++;
                            } catch (ex) {
                                success = true;
                            }
                            if (success || Eproc.tester.times >= limit) {
                                window.clearInterval(Eproc.tester.id);
                                delete Eproc.tester;
                                var iframe = document.getElementsByTagName('iframe')[0];
                                iframe.parentNode.removeChild(iframe);
                                document.getElementById('loginGedpro').textContent = 'Falta de permiss�o de acesso?';
                                if (success) {
                                    alert('Feche o documento e tente novamente agora.');
                                } else {
                                    alert('N�o foi poss�vel fazer novo login no GEDPRO.');
                                }
                            }
                        }, 500),
                        times: 0,
                    }
                }, false);
                pai.insertBefore(link, table.nextSibling);
            },
        });
    },
    // }}]
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
                var padrao = prompt('Perfil selecionado: ' + options[this.selectedIndex].textContent + '\n\nDefinir este perfil como padr�o?', 'N');
                if (null === padrao) {
                    this.value = option.value;
                    return;
                } else if (String(padrao).toLowerCase()[0] == 's') {
                    GM_setValue('v2.perfil', this.value);
                }
                this.form.submit();
            }, false);
        }
        if (this.acao && this[this.acao]) {
            this[this.acao]();
        } else if (this.parametros.acao_origem && this[this.parametros.acao_origem + '_destino']) {
            this[this.parametros.acao_origem + '_destino']();
        } else if (location.pathname.match(/\/eproc(V2|v2_homologacao|v2_apresentacao)\/(index.php)?/)) {
            document.createElement('img').src = '/infra_css/imagens/fndtransp.gif';
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
            }, false);
            document.getElementById('btnConsultar').setAttribute('onclick', '');
            document.getElementById('btnConsultar').addEventListener('click', function(e)
            {
                document.getElementById('hdnInfraItensSelecionados').value = '';
                unsafeWindow.submeterFrm('');
            }, false);
            for (var hh = document.getElementsByClassName('infraTdSetaOrdenacao'), hl = hh.length, h = 0; (h < hl) && (th = hh[h]); h++) {
                var link = th.getElementsByTagName('a')[0];
                var action = link.getAttribute('onclick');
                link.setAttribute('onclick', '');
                link.addEventListener('click', (function(action) { return function(e)
                {
                    document.getElementById('hdnInfraItensSelecionados').value = '';
                    eval('unsafeWindow.' + action);
                }; })(action), false);
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
                        }, false);
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
        document.title = Eproc.getProcessoF();
        var assuntos = document.getElementById('fldAssuntos');
        var classe = document.getElementById('txtClasse').textContent;
        if (Classes[classe])
            assuntos.style.backgroundColor = Classes[classe];
        for (var links = document.getElementsByTagName('a'), l = 0, ll = links.length; (l < ll) && (link = links[l]); l++) {
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
                        var x = new IE();
                        x.launch(link.href);
                    }; })(link), false);
                    var processo = document.getElementById('divInfraAreaProcesso');
                    var tabelas = processo.getElementsByClassName('infraTable');
                    var div = document.createElement('div');
                    div.id = 'cargaDocsGedpro';
                    var link = document.createElement('a');
                    link.href = 'http://' + Eproc.loginGedpro.host + '/XMLInterface.asp?processo=' + Eproc.processo + '&ProcessoVisual=PV&grupos=0';
                    link.textContent = 'Carregar documentos do GEDPRO';                
                    link.addEventListener('click', function(e)
                    {
                        e.preventDefault();
                        e.stopPropagation();
                        this.textContent = 'Carregando...';
                        Eproc.getDocsGedpro();
                    }, false);
                    div.appendChild(link);
                    processo.insertBefore(div, tabelas[tabelas.length - 1]);
                    processo.insertBefore(document.createElement('br'), tabelas[tabelas.length - 1]);
                    processo.insertBefore(document.createElement('br'), tabelas[tabelas.length - 1]);
                } else if (link.title == 'Link para o GEDPRO n�o p�de ser gerado.') {
                    link.getElementsByTagName('u')[0].style.textDecoration = 'line-through';
                }
            }
        }
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
            if (table.getAttribute('summary') == 'Lembretes') {
                Lembretes = 'eea eaa eae aae aee aea'.split(' ');
                table.setAttribute('width', '');
                for (var ths = table.getElementsByTagName('th'), h = 0, hl = ths.length; (h < hl) && (th = ths[h]); h++) {
                    th.setAttribute('width', '');
                }
                for (var trs = table.getElementsByTagName('tr'), r = 0, rl = trs.length; (r < rl) && (tr = trs[r]); r++) {
                    if (!tr.className.match(/infraTr(Clara|Escura)/)) continue;
                    tr.cells[4].style.backgroundColor = '#' + Lembretes[(r - 1) % Lembretes.length];
                }
            } else if (table.getAttribute('summary') == 'Eventos') {
                var arvore = document.createElement('a');
                arvore.textContent = '�rvore de documentos';
                arvore.href = '#';
                arvore.addEventListener('click', function(e)
                {
                    e.preventDefault();
                    e.stopPropagation();
                    if (typeof Eproc.windows['arvore'] != 'undefined' && Eproc.windows['arvore'].document) {
                        Eproc.windows['arvore'].close();
                    }
                    var win = Eproc.windows['arvore'] = window.open(location.search.replace('processo_selecionar', 'arvore_processo'), Eproc.processo + 'arvore');
//                    win.focus();
                }, false);
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
                    } else if (match = tr.cells[2].textContent.match(/(.*) - Refer. ao Evento: (\d+)/)) {
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
                        })('' + Eproc.processo + r + link.innerHTML.replace(/<[^>]*>/g, ''), link), false);
                    }
                }
            }
        }
        window.addEventListener('unload', function(e)
        {
            var windows = [];
            var gedpro = [];
            if (typeof Eproc.windows['arvore'] != 'undefined' && Eproc.windows['arvore'].document) {
                Eproc.windows['arvore'].close();
                delete Eproc.windows['arvore'];
            }
            for (w in Eproc.windows) {
                var win = Eproc.windows[w];
                if (typeof win == 'object') {
                    try {
                        if (win.document) {
                            windows.push(win);
                        }
                    } catch (ex) {
                        try {
                            var x = win.window;
                        } catch (ex2) {
                            windows.push(win);
                        }
                    }
                }
            }
            if (windows.length) {
                if (confirm('Este processo possui ' + windows.length + ' ' + (windows.length > 1 ? 'janelas abertas' : 'janela aberta') + '.\nDeseja fech�-' + (windows.length > 1 ? 'las' : 'la') + '?')) {
                    for (var w = windows.length - 1; w >= 0; w--) {
                        windows[w].close();
                    }
                }
            }
            delete Eproc;
        }, false);
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
            document.getElementById('txtNumProcesso').addEventListener('change', (function() { return function() { self.onNumprocChange.apply(self, arguments); }; })(), false);
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
            numproc += '2010404' + GM_getValue('v2.secao') + GM_getValue('v2.subsecao');
        }
        e.target.value = numproc;
    },
    // }}}
}
// }}}
// {{{ In�cio do programa
Eproc.init();
// }}}
