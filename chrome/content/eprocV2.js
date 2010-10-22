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
    SALMÃO: '#efa88f',
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
    'AÇÃO CIVIL PÚBLICA': Cores.VERDE,
    'AÇÃO CIVIL PÚBLICA DE IMPROBIDADE ADMINISTRATIVA': Cores.VERDE,
    'AÇÃO CIVIL PÚBLICA DO CÓDIGO DE DEFESA DO CONSUMID': Cores.VERDE,
    'AÇÃO DE ALIMENTOS': Cores.VERDE,
    'AÇÃO DE ANULAÇÃO E SUBSTITUIÇÃO DE TÍTULOS AO PORT': Cores.VERDE,
    'AÇÃO DE APREENSÃO E DEPÓSITO DE COISA VENDIDA C/RE': Cores.VERDE,
    'AÇÃO DE BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA': Cores.VERDE,
    'AÇÃO DE COBRANÇA DE CÉDULA DE CRÉDITO INDUSTRIAL': Cores.VERDE,
    'AÇÃO DE COMPROMISSO ARBITRAL': Cores.VERDE,
    'AÇÃO DE CONSIGNAÇÃO DE ALUGUEL': Cores.VERDE,
    'AÇÃO DE CONSIGNAÇÃO EM PAGAMENTO': Cores.VERDE,
    'AÇÃO DE DEPÓSITO': Cores.VERDE,
    'AÇÃO DE DEPÓSITO DA LEI 8866/94': Cores.VERDE,
    'AÇÃO DE DESAPROPRIAÇÃO': Cores.VERDE,
    'AÇÃO DE DESAPROPRIAÇÃO P FINS DE REFORMA AGRÁRIA': Cores.VERDE,
    'AÇÃO DE DESPEJO': Cores.VERDE,
    'AÇÃO DE DISSOLUÇÃO E LIQUIDAÇÃO DE SOCIEDADE': Cores.VERDE,
    'AÇÃO DE EXPROPRIAÇÃO DA LEI 8.257/91': Cores.VERDE,
    'AÇÃO DE IMISSÃO NA POSSE': Cores.CINZA,
    'AÇÃO DE NUNCIAÇÃO DE OBRA NOVA': Cores.VERDE,
    'AÇÃO DE USUCAPIÃO': Cores.VERDE,
    'AÇÃO DISCRIMINATÓRIA': Cores.VERDE,
    'AÇÃO MONITÓRIA': Cores.VERDE,
    'AÇÃO ORDINÁRIA (PROCEDIMENTO COMUM ORDINÁRIO)': Cores.ROSA,
    'AÇÃO PENAL': Cores.AZUL_CLARA,
    'AÇÃO POPULAR': Cores.VERDE,
    'AÇÃO RENOVATÓRIA': Cores.VERDE,
    'AÇÃO REVISIONAL DE ALUGUEL': Cores.VERDE,
    'AÇÃO SUMÁRIA (PROCEDIMENTO COMUM SUMÁRIO)': Cores.VERDE,
    'AGRAVO DE EXECUÇÃO PENAL': Cores.BRANCA,
    'AGRAVO DE INSTRUMENTO': Cores.VERDE,
    'AGRAVO DE INSTRUMENTO DE DECISÃO DENEGAT.DE REC.EX': Cores.VERDE,
    'ALIENAÇÃO JUDICIAL': Cores.BRANCA,
    'ALIENAÇÃO JUDICIAL CRIMINAL': Cores.VERMELHA,
    'ALVARÁ JUDICIAL': Cores.CINZA,
    'APELAÇÃO CRIMINAL': Cores.AZUL,
    'APREENSÃO DE EMBARCAÇÕES': Cores.BRANCA,
    'ARRESTO / HIPOTECA LEGAL - MEDIDAS ASSECURATÓRIAS': Cores.BRANCA,
    'ARRIBADAS FORÇADAS': Cores.BRANCA,
    'AVARIA A CARGO DO SEGURADOR': Cores.BRANCA,
    'AVARIAS': Cores.BRANCA,
    'CANCELAMENTO DE NATURALIZAÇÃO': Cores.BRANCA,
    'CARTA DE ORDEM': Cores.CINZA,
    'CARTA PRECATÓRIA': Cores.CINZA,
    'CARTA ROGATÓRIA': Cores.CINZA,
    'CARTA TESTEMUNHÁVEL': Cores.AMARELA,
    'COMUNICAÇÃO DE PRISÃO EM FLAGRANTE': Cores.BRANCA,
    'CONFLITO DE COMPETÊNCIA': Cores.BRANCA,
    'CRIMES AMBIENTAIS': Cores.BRANCA,
    'CUMPRIMENTO DE SENTENÇA': Cores.BRANCA,
    'DECLARAÇÃO DE AUSÊNCIA': Cores.BRANCA,
    'DECLARAÇÃO DE DÚVIDA NO REGISTRO': Cores.BRANCA,
    'DEMARCAÇÃO / DIVISÃO': Cores.CINZA,
    'DESAFORAMENTO DE JULGAMENTO': Cores.BRANCA,
    'DESPEJO P/FALTA DE PAGAMENTO CUMULADO C/COBRANÇA': Cores.VERDE,
    'DESPEJO POR FALTA DE PAGAMENTO': Cores.VERDE,
    'EMBARGOS À ADJUDICAÇÃO': Cores.VERDE,
    'EMBARGOS À ARREMATAÇÃO': Cores.VERDE,
    'EMBARGOS À EXECUÇÃO': Cores.VERDE,
    'EMBARGOS À EXECUÇÃO FISCAL': Cores.VERDE,
    'EMBARGOS DE RETENÇÃO POR BENFEITORIAS': Cores.VERDE,
    'EMBARGOS DE TERCEIRO': Cores.VERDE,
    'EMBARGOS DO ACUSADO': Cores.VERDE,
    'ESPECIALIZAÇÃO DE HIPOTECA LEGAL': Cores.BRANCA,
    'EXCEÇÃO DA VERDADE': Cores.BRANCA,
    'EXCEÇÃO DE COISA JULGADA': Cores.BRANCA,
    'EXCEÇÃO DE ILEGITIMIDADE DE PARTE': Cores.BRANCA,
    'EXCEÇÃO DE IMPEDIMENTO': Cores.VERDE,
    'EXCEÇÃO DE IMPEDIMENTO CRIMINAL': Cores.BRANCA,
    'EXCEÇÃO DE INCOMPETÊNCIA': Cores.VERDE,
    'EXCEÇÃO DE INCOMPETÊNCIA CRIMINAL': Cores.BRANCA,
    'EXCEÇÃO DE LITISPENDÊNCIA': Cores.BRANCA,
    'EXCEÇÃO DE SUSPEIÇÃO': Cores.VERDE,
    'EXCEÇÃO DE SUSPEIÇÃO CRIMINAL': Cores.BRANCA,
    'EXCESSO OU DESVIO-INCIDENTES EM EXECUÇÃO CRIMINAL': Cores.BRANCA,
    'EXECUÇÃO DE SENTENÇA CONTRA FAZENDA PÚBL': Cores.VERDE,
    'EXECUÇÃO DE TÍTULO EXTRAJUDICIAL': Cores.AMARELA,
    'EXECUÇÃO FISCAL': Cores.LARANJA,
    'EXECUÇÃO HIPOTECÁRIA DO SISTEMA FINANCEIRO DA HABI': Cores.AMARELA,
    'EXECUÇÃO PENAL': Cores.BRANCA,
    'EXECUÇÃO PENAL PROVISÓRIA': Cores.AMARELA,
    'EXECUÇÃO PROVISÓRIA DE SENTENÇA': Cores.VERDE,
    'EXIBIÇÃO DE DOCUMENTO OU COISA': Cores.LARANJA,
    'HABEAS CORPUS': Cores.AMARELA,
    'HABEAS DATA': Cores.BRANCA,
    'HABILITAÇÃO': Cores.VERDE,
    'HOMOLOGAÇÃO DE TRANSAÇÃO EXTRAJUDICIAL': Cores.VERDE,
    'IMPUGNAÇÃO AO CUMPRIMENTO DE SENTENÇA': Cores.AZUL,
    'IMPUGNAÇÃO AO PEDIDO DE ASSISTÊNCIA LITISCONSORCIA': Cores.BRANCA,
    'IMPUGNAÇÃO AO VALOR DA CAUSA': Cores.BRANCA,
    'IMPUGNAÇÃO DO DIREITO A ASSISTÊNCIA JUDICIÁRIA': Cores.VERDE,
    'INCIDENTE DE AVALIAÇÃO DE DEPENDÊNCIA DE DROGAS': Cores.VERDE,
    'INCIDENTE DE FALSIDADE': Cores.VERDE,
    'INCIDENTE DE FALSIDADE CRIMINAL': Cores.BRANCA,
    'INCIDENTE DE INSANIDADE MENTAL': Cores.AMARELA,
    'INCIDENTE DE RESTITUIÇÃO DE COISAS APREENDIDAS': Cores.BRANCA,
    'INCIDENTE DE TRANSF.ENTRE ESTABELECIMENTOS PENAIS': Cores.BRANCA,
    'INCIDENTE DE UNIFORMIZAÇÃO DE JURISPRUDÊNCIA': Cores.VERDE,
    'INQUÉRITO POLICIAL': Cores.VERDE,
    'INTERDITO PROIBITÓRIO': Cores.VERDE,
    'JUSTIFICAÇÃO DE DINHEIRO A RISCO': Cores.VERDE,
    'LIQUIDAÇÃO POR ARBITRAMENTO': Cores.BRANCA,
    'LIQUIDAÇÃO POR ARTIGOS': Cores.BRANCA,
    'LIQUIDAÇÃO PROVISÓRIA POR ARBITRAMENTO': Cores.BRANCA,
    'LIQUIDAÇÃO PROVISÓRIA POR ARTIGOS': Cores.BRANCA,
    'MANDADO DE SEGURANÇA': Cores.PALHA,
    'MANDADO DE SEGURANÇA COLETIVO': Cores.PALHA,
    'MEDIDA CAUTELAR DE ALIMENTOS PROVISIONAIS': Cores.AZUL,
    'MEDIDA CAUTELAR DE APREENSÃO DE TÍTULOS': Cores.CINZA,
    'MEDIDA CAUTELAR DE ARRESTO': Cores.BRANCA,
    'MEDIDA CAUTELAR DE ARROLAMENTO DE BENS': Cores.BRANCA,
    'MEDIDA CAUTELAR DE ATENTADO': Cores.BRANCA,
    'MEDIDA CAUTELAR DE BUSCA E APREENSÃO': Cores.SALMÃO,
    'MEDIDA CAUTELAR DE CAUÇÃO': Cores.PALHA,
    'MEDIDA CAUTELAR DE EXIBIÇÃO': Cores.SALMÃO,
    'MEDIDA CAUTELAR DE HOMOLOGAÇÃO DO PENHOR LEGAL': Cores.SALMÃO,
    'MEDIDA CAUTELAR DE INTERPELAÇÃO': Cores.SALMÃO,
    'MEDIDA CAUTELAR DE JUSTIFICAÇÃO': Cores.SALMÃO,
    'MEDIDA CAUTELAR DE NOTIFICAÇÃO': Cores.SALMÃO,
    'MEDIDA CAUTELAR DE POSSE EM NOME DO NASCITURO': Cores.SALMÃO,
    'MEDIDA CAUTELAR DE PRODUÇÃO ANTECIPADA DE PROVAS': Cores.SALMÃO,
    'MEDIDA CAUTELAR DE PROTESTO': Cores.SALMÃO,
    'MEDIDA CAUTELAR DE SEQUESTRO': Cores.SALMÃO,
    'MEDIDA CAUTELAR FISCAL': Cores.SALMÃO,
    'MEDIDA CAUTELAR INOMINADA': Cores.SALMÃO,
    'NATURALIZAÇÃO': Cores.SALMÃO,
    'NOMEAÇÃO DE ADVOGADO': Cores.CINZA,
    'NOTIFICAÇÃO PARA EXPLICAÇÕES': Cores.SALMÃO,
    'NOTIFICAÇÃO PARA EXPLICAÇÕES (LEI DE IMPRENSA)': Cores.AMARELA,
    'OPÇÃO DE NACIONALIDADE': Cores.SALMÃO,
    'OPOSIÇÃO': Cores.SALMÃO,
    'ORGANIZAÇÃO E FISCALIZAÇÃO DE FUNDAÇÃO': Cores.SALMÃO,
    'OUTRAS MEDIDAS PROVISIONAIS': Cores.VERDE,
    'OUTROS PROCEDIMENTOS DE JURISDIÇÃO VOLUNTÁRIA': Cores.VERDE,
    'PEDIDO DE ASSISTÊNCIA JUDICIÁRIA': Cores.SALMÃO,
    'PEDIDO DE BUSCA E APREENSÃO CRIMINAL': Cores.CINZA,
    'PEDIDO DE LIBERDADE PROVISÓRIA COM OU SEM FIANÇA': Cores.AMARELA,
    'PEDIDO DE PRISÃO PREVENTIVA': Cores.VERDE,
    'PEDIDO DE PRISÃO TEMPORÁRIA': Cores.BRANCA,
    'PEDIDO DE QUEBRA DE SIGILO DE DADOS E/OU TELEFÔNIC': Cores.BRANCA,
    'PEDIDO DE RESPOSTA OU RETIFICAÇÃO DA LEI DE IMPREN': Cores.VERDE,
    'PEDIDO PRISÃO/LIBERDADE VIGIADA FINS DE EXPULSÃO': Cores.CINZA,
    'PRESTAÇÃO DE CONTAS - EXIGIDAS': Cores.VERDE,
    'PRESTAÇÃO DE CONTAS - OFERECIDAS': Cores.VERDE,
    'PROCED.INVESTIGATÓRIO DO MP (PEÇAS DE INFORMAÇÃO)': Cores.BRANCA,
    'PROCEDIMENTO ESP.DA LEI ANTITÓXICOS': Cores.BRANCA,
    'PROCEDIMENTO ESP.DA LEI DE COMBATE ÀS ORGANIZAÇÕES': Cores.BRANCA,
    'PROCEDIMENTO ESP.DA LEI DE IMPRENSA': Cores.BRANCA,
    'PROCEDIMENTO ESP.DOS CRIMES CONTRA A PROPRIEDADE I': Cores.BRANCA,
    'PROCEDIMENTO ESP.DOS CRIMES DE ABUSO DE AUTORIDADE': Cores.VERDE,
    'PROCEDIMENTO ESP.DOS CRIMES DE CALÚNIA E INJÚRIA': Cores.VERDE,
    'PROCEDIMENTO ESP.DOS CRIMES DE COMPETÊNCIA DO JÚRI': Cores.AZUL_OU_MARROM,
    'PROCEDIMENTO ESP.DOS CRIMES DE RESPONSABILIDADE DE': Cores.AZUL,
    'PROCEDIMENTO ESP.SUMÁRIO': Cores.AZUL,
    'PROTESTO FORMADO A BORDO': Cores.AZUL,
    'RECURSO CÍVEL': Cores.BRANCA,
    'RECURSO DE MEDIDA CAUTELAR': Cores.BRANCA,
    'RECURSO EM SENTIDO ESTRITO': Cores.ROSA,
    'REINT/MANUTENÇÃO POSSE PROCED.ESP.JURISD.CONTENC.': Cores.BRANCA,
    'REMIÇÃO DO IMÓVEL HIPOTECADO': Cores.BRANCA,
    'REPRESENTAÇÃO CRIMINAL': Cores.BRANCA,
    'REQUERIMENTO DE REABILITAÇÃO': Cores.BRANCA,
    'RESTAURAÇÃO DE AUTOS': Cores.AZUL,
    'RETIFICAÇÃO DE REGISTRO DE IMÓVEL': Cores.ROSA,
    'SEQÜESTRO - MEDIDAS ASSECURATÓRIAS': Cores.BRANCA,
    'SUPERVENIÊNCIA DOENÇA MENTAL-INCID.EXEC.CRIMINAL': Cores.BRANCA,
    'TERMO CIRCUNSTANCIADO': Cores.BRANCA
}
// }}}
// {{{ Eproc
var Eproc = {
    // {{{ Variáveis
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
        document.title = Eproc.getProcessoF() + ' - Árvore de documentos';
        Array.forEach(document.getElementsByClassName('infraAcaoBarraSistema'), function(acao)
        {
            acao.style.display = 'none';
        });
        document.getElementById('divInfraBarraSistemaE').style.display = 'none';
        document.getElementById('divInfraBarraLocalizacao').textContent = unsafeWindow.opener.document.getElementById('divInfraBarraLocalizacao').textContent + ' - Árvore de documentos';
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
                        if (confirm('Definir este usuário/lotação como padrão?')) {
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
     * Obtém os documentos do Gedpro
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
                ['','Documento','Número','Ass.','Data Documento','Criação','Edição'].forEach(function (text, i)
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
                        row.insertCell(row.cells.length).innerHTML = ['Versão ' + reg.getAttribute('numeroVersaoDocumento') + ' por ' + reg.getAttribute('siglaEditor'), reg.getAttribute('dataCriacao')].join('<br/>');
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
                link.textContent = 'Falta de permissão de acesso?';
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
                                document.getElementById('loginGedpro').textContent = 'Falta de permissão de acesso?';
                                if (success) {
                                    alert('Feche o documento e tente novamente agora.');
                                } else {
                                    alert('Não foi possível fazer novo login no GEDPRO.');
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
                var padrao = prompt('Perfil selecionado: ' + options[this.selectedIndex].textContent + '\n\nDefinir este perfil como padrão?', 'N');
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
                } else if (link.title == 'Link para o GEDPRO não pôde ser gerado.') {
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
                arvore.textContent = 'Árvore de documentos';
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
                if (confirm('Este processo possui ' + windows.length + ' ' + (windows.length > 1 ? 'janelas abertas' : 'janela aberta') + '.\nDeseja fechá-' + (windows.length > 1 ? 'las' : 'la') + '?')) {
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
// {{{ Início do programa
Eproc.init();
// }}}
