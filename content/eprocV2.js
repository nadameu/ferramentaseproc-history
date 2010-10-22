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
    'DESPEJO POR FALTA DE PAGAMENTO': Cores.DESCONHECIDA,
    'EMBARGOS À ADJUDICAÇÃO': Cores.VERDE,
    'EMBARGOS À ARREMATAÇÃO': Cores.VERDE,
    'EMBARGOS À EXECUÇÃO': Cores.VERDE,
    'EMBARGOS À EXECUÇÃO FISCAL': Cores.VERDE,
    'EMBARGOS DE RETENÇÃO POR BENFEITORIAS': Cores.VERDE,
    'EMBARGOS DE TERCEIRO': Cores.VERDE,
    'EMBARGOS DO ACUSADO': Cores.DESCONHECIDA,
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
    'EXECUÇÃO DE TÍTULO EXTRAJUDICIAL': Cores.DESCONHECIDA,
    'EXECUÇÃO FISCAL': Cores.LARANJA,
    'EXECUÇÃO HIPOTECÁRIA DO SISTEMA FINANCEIRO DA HABI': Cores.DESCONHECIDA,
    'EXECUÇÃO PENAL': Cores.DESCONHECIDA,
    'EXECUÇÃO PENAL PROVISÓRIA': Cores.AMARELA,
    'EXECUÇÃO PROVISÓRIA DE SENTENÇA': Cores.VERDE,
    'EXIBIÇÃO DE DOCUMENTO OU COISA': Cores.LARANJA,
    'HABEAS CORPUS': Cores.AMARELA,
    'HABEAS DATA': Cores.DESCONHECIDA,
    'HABILITAÇÃO': Cores.DESCONHECIDA,
    'HOMOLOGAÇÃO DE TRANSAÇÃO EXTRAJUDICIAL': Cores.VERDE,
    'IMPUGNAÇÃO AO CUMPRIMENTO DE SENTENÇA': Cores.AZUL,
    'IMPUGNAÇÃO AO PEDIDO DE ASSISTÊNCIA LITISCONSORCIA': Cores.BRANCA,
    'IMPUGNAÇÃO AO VALOR DA CAUSA': Cores.BRANCA,
    'IMPUGNAÇÃO DO DIREITO A ASSISTÊNCIA JUDICIÁRIA': Cores.DESCONHECIDA,
    'INCIDENTE DE AVALIAÇÃO DE DEPENDÊNCIA DE DROGAS': Cores.VERDE,
    'INCIDENTE DE FALSIDADE': Cores.DESCONHECIDA,
    'INCIDENTE DE FALSIDADE CRIMINAL': Cores.BRANCA,
    'INCIDENTE DE INSANIDADE MENTAL': Cores.AMARELA,
    'INCIDENTE DE RESTITUIÇÃO DE COISAS APREENDIDAS': Cores.BRANCA,
    'INCIDENTE DE TRANSF.ENTRE ESTABELECIMENTOS PENAIS': Cores.DESCONHECIDA,
    'INCIDENTE DE UNIFORMIZAÇÃO DE JURISPRUDÊNCIA': Cores.VERDE,
    'INQUÉRITO POLICIAL': Cores.VERDE,
    'INTERDITO PROIBITÓRIO': Cores.VERDE,
    'JUSTIFICAÇÃO DE DINHEIRO A RISCO': Cores.VERDE,
    'LIQUIDAÇÃO POR ARBITRAMENTO': Cores.BRANCA,
    'LIQUIDAÇÃO POR ARTIGOS': Cores.BRANCA,
    'LIQUIDAÇÃO PROVISÓRIA POR ARBITRAMENTO': Cores.BRANCA,
    'LIQUIDAÇÃO PROVISÓRIA POR ARTIGOS': Cores.BRANCA,
    'MANDADO DE SEGURANÇA': Cores.PALHA,
    'MANDADO DE SEGURANÇA COLETIVO': Cores.DESCONHECIDA,
    'MEDIDA CAUTELAR DE ALIMENTOS PROVISIONAIS': Cores.AZUL,
    'MEDIDA CAUTELAR DE APREENSÃO DE TÍTULOS': Cores.CINZA,
    'MEDIDA CAUTELAR DE ARRESTO': Cores.BRANCA,
    'MEDIDA CAUTELAR DE ARROLAMENTO DE BENS': Cores.BRANCA,
    'MEDIDA CAUTELAR DE ATENTADO': Cores.BRANCA,
    'MEDIDA CAUTELAR DE BUSCA E APREENSÃO': Cores.DESCONHECIDA,
    'MEDIDA CAUTELAR DE CAUÇÃO': Cores.PALHA,
    'MEDIDA CAUTELAR DE EXIBIÇÃO': Cores.SALMÃO,
    'MEDIDA CAUTELAR DE HOMOLOGAÇÃO DO PENHOR LEGAL': Cores.SALMÃO,
    'MEDIDA CAUTELAR DE INTERPELAÇÃO': Cores.SALMÃO,
    'MEDIDA CAUTELAR DE JUSTIFICAÇÃO': Cores.SALMÃO,
    'MEDIDA CAUTELAR DE NOTIFICAÇÃO': Cores.SALMÃO,
    'MEDIDA CAUTELAR DE POSSE EM NOME DO NASCITURO': Cores.DESCONHECIDA,
    'MEDIDA CAUTELAR DE PRODUÇÃO ANTECIPADA DE PROVAS': Cores.DESCONHECIDA,
    'MEDIDA CAUTELAR DE PROTESTO': Cores.SALMÃO,
    'MEDIDA CAUTELAR DE SEQUESTRO': Cores.SALMÃO,
    'MEDIDA CAUTELAR FISCAL': Cores.DESCONHECIDA,
    'MEDIDA CAUTELAR INOMINADA': Cores.SALMÃO,
    'NATURALIZAÇÃO': Cores.SALMÃO,
    'NOMEAÇÃO DE ADVOGADO': Cores.DESCONHECIDA,
    'NOTIFICAÇÃO PARA EXPLICAÇÕES': Cores.SALMÃO,
    'NOTIFICAÇÃO PARA EXPLICAÇÕES (LEI DE IMPRENSA)': Cores.AMARELA,
    'OPÇÃO DE NACIONALIDADE': Cores.SALMÃO,
    'OPOSIÇÃO': Cores.SALMÃO,
    'ORGANIZAÇÃO E FISCALIZAÇÃO DE FUNDAÇÃO': Cores.SALMÃO,
    'OUTRAS MEDIDAS PROVISIONAIS': Cores.VERDE,
    'OUTROS PROCEDIMENTOS DE JURISDIÇÃO VOLUNTÁRIA': Cores.VERDE,
    'PEDIDO DE ASSISTÊNCIA JUDICIÁRIA': Cores.SALMÃO,
    'PEDIDO DE BUSCA E APREENSÃO CRIMINAL': Cores.CINZA,
    'PEDIDO DE LIBERDADE PROVISÓRIA COM OU SEM FIANÇA': Cores.DESCONHECIDA,
    'PEDIDO DE PRISÃO PREVENTIVA': Cores.VERDE,
    'PEDIDO DE PRISÃO TEMPORÁRIA': Cores.BRANCA,
    'PEDIDO DE QUEBRA DE SIGILO DE DADOS E/OU TELEFÔNIC': Cores.DESCONHECIDA,
    'PEDIDO DE RESPOSTA OU RETIFICAÇÃO DA LEI DE IMPREN': Cores.VERDE,
    'PEDIDO PRISÃO/LIBERDADE VIGIADA FINS DE EXPULSÃO': Cores.CINZA,
    'PRESTAÇÃO DE CONTAS - EXIGIDAS': Cores.VERDE,
    'PRESTAÇÃO DE CONTAS - OFERECIDAS': Cores.VERDE,
    'PROCED.INVESTIGATÓRIO DO MP (PEÇAS DE INFORMAÇÃO)': Cores.VERDE,
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
    'RECURSO EM SENTIDO ESTRITO': Cores.DESCONHECIDA,
    'REINT/MANUTENÇÃO POSSE PROCED.ESP.JURISD.CONTENC.': Cores.BRANCA,
    'REMIÇÃO DO IMÓVEL HIPOTECADO': Cores.BRANCA,
    'REPRESENTAÇÃO CRIMINAL': Cores.DESCONHECIDA,
    'REQUERIMENTO DE REABILITAÇÃO': Cores.DESCONHECIDA,
    'RESTAURAÇÃO DE AUTOS': Cores.AZUL,
    'RETIFICAÇÃO DE REGISTRO DE IMÓVEL': Cores.ROSA,
    'SEQÜESTRO - MEDIDAS ASSECURATÓRIAS': Cores.DESCONHECIDA,
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
            ['#fff','#fee','#f6f6ee','#eef6ee','#eef6f6','#eef','#f6eef6','#f3f3f3']
                .forEach(function(cl, c)
            {
                var cor = document.createElement('a');
                cor.className = 'infraMenuFilho';
                cor.style.backgroundColor = cl;
                cor.style.border = '1px solid #888';
                cor.innerHTML = '&nbsp;';
                cor.addEventListener('click', (function() { return function()
                {
                    Eproc.mudaFundo(this.style.backgroundColor);
                }; })(), true);
                cores.getElementsByTagName('ul')[0].appendChild(cor);
            });
            menu.appendChild(cores);
        }
        Eproc.mudaFundo(GM_getValue('background') || '#ffffff');
        if (this.acao && this[this.acao]) {
            this[this.acao]();
        }
    },
    // }}}
    // {{{ localizador_listar()
    localizador_listar: function()
    {
        this.setLastProcesso();
    },        
    // }}}
    // {{{ mudaFundo()
    mudaFundo: function(background)
    {
        GM_setValue('background', background);
        document.getElementsByTagName('body')[0].style.backgroundColor = background;
        GM_addStyle('.infraTrClara, .infraTrEscura { background-color: ' + background + ' !important; } div.infraMenu a { background-color: ' + background + '; border-color: ' + background + '; }');
        for (var divs = document.getElementsByTagName('div'), d = divs.length - 1, div; (d >= 0) && (div = divs[d]); d--) {
            if ((div.className && div.className.match(/^infraLegend/)) || (div.id && div.id.match(/^divDes(Criterios|Ordenacao|Paginacao)$/))) {
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
    // {{{ processo_consultar_listar()
    processo_consulta_listar: function()
    {
        for (var tables = document.getElementsByClassName('infraTable'), t = 0, tl = tables.length; (t < tl) && (table = tables[t]); t++) {
            if (table.getAttribute('summary') == 'Tabela de Processos.') {
                table.setAttribute('width', '');
/*
 *
 */
                
var form = document.getElementById('hdnInfraCampoOrd').form;
form.action = form.action.replace('?&', '?acao=processo_consulta_listar&');
form.action = location.pathname + location.search;
/*
 *
 */

              for (var ths = table.getElementsByTagName('th'), h = 0, hl = ths.length; (h < hl) && (th = ths[h]); h++) {
                    th.setAttribute('width', '');
                }
                for (var trs = table.getElementsByTagName('tr'), r = 0, rl = trs.length; (r < rl) && (tr = trs[r]); r++) {
                    if (!tr.className.match(/infraTr(Clara|Escura)/)) continue;
                    tr.cells[1].getElementsByTagName('a')[0].setAttribute('target', '_blank');
                    var classe = tr.cells[3].innerHTML;
                    if (Classes[classe])
                        for (var cells = tr.cells, c = 0, cl = cells.length; (c < cl) && (cell = cells[c]); c++) {
                            cell.style.backgroundColor = Classes[classe];
                        }
                }
            }
        }
    },
    // }}}
    // {{{ processo_consultar()
    processo_consultar: function()
    {
        this.setLastProcesso();
    },        
    // }}}
    // {{{ processo_localizador_listar()
    processo_localizador_listar: function()
    {
        this.setLastProcesso();
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
        if (!document.title || document.title.match(/Árvore/))
            return;
        document.title = Eproc.getProcessoF();
        var assuntos = document.getElementById('fldAssuntos');
        var classe = document.getElementById('txtClasse').innerHTML;
        for (var links = document.getElementsByClassName('infraMenuFilho'), l = 0, ll = links.length; (l < ll) && (link = links[l]); l++) {
            if (link.title == 'Localizadores do Processo') {
                var localizador = document.getElementById('txtLocalizador');
                var locLink = document.createElement('a');
                locLink.href = link.href;
                locLink.style.fontSize = '1em';
                localizador.style.cursor = 'pointer';
                localizador.parentNode.insertBefore(locLink, localizador);
                locLink.appendChild(localizador);
                locLink.addEventListener('click', (function(link) {
                    return function(e)
                    {
                        e.cancelBubble = true;
                        e.preventDefault();
                        var xml = GM_xmlhttpRequest({
                            method: 'GET',
                            url: link.href,
                            onload: function(a)
                            {
                                var html = document.createElement('html');
                                html.innerHTML = a.responseText;
                                for (var forms = html.getElementsByTagName('form'), f = 0, fl = forms.length; (f < fl) && (form = forms[f]); f++) {
                                    if (form.id == 'frmProcessoLocalizadorLista') {
                                        form.getElementsByClassName('infraText')[0].value = Eproc.processo;
                                        form.target = '_blank';
                                        form.style.display = 'none';
                                        document.getElementsByTagName('body')[0].appendChild(form);
                                        form.submit();
                                    }
                                }
                            },
                            onerror: function()
                            {
                                window.open(link.href);
                            }
                        });
                    }
                })(link), true);
            }
        }
        if (Classes[classe])
            assuntos.style.backgroundColor = Classes[classe];
        for (var tables = document.getElementsByClassName('infraTable'), t = 0, tl = tables.length; (t < tl) && (table = tables[t]); t++) {
            if (table.getAttribute('summary') == 'Eventos') {
                var arvore = document.createElement('a');
                arvore.innerHTML = 'Árvore de documentos';
                arvore.href = '#';
                arvore.addEventListener('click', (function(table) {
                    return function(e)
                    {
                        e.cancelBubble = true;
                        e.preventDefault();
                        var x = window.open('');
                        x.focus();
                        x.document.open();
                        x.document.write(
                            <html>
                                <head><title>Árvore de documentos</title></head>
                                <frameset cols="250,*" marginheight="0" marginwidth="0" rows="*">
                                    <frame name="tree_files" marginwidth="5" marginheight="5"/>
                                    <frame name="show_files" marginwidth="5" marginheight="5"/>
                                </frameset>
                                <noframes>
                                    <body topmargin="0" leftmargin="0">
                                        <p>Não foi possível exibir o conteúdo desta página</p>
                                    </body>
                                </noframes>
                            </html>
                        );
                        x.document.title = Eproc.getProcessoF() + ' - ' + x.document.title;
                        x.frames[0].document.write(
                            <html>
                                <head>
                                    <style type="text/css"><![CDATA[
body {
    font-family: Verdana;
    font-size: 12px;
}
li {
    white-space: nowrap;
}
ul {
    list-style-type: disc;
    margin: 0 20px;
    padding: 0;
}
ul ul {
    margin: 0;
    list-style-type: none;
}
a:link {
    text-decoration: none;
    color: #000;
}
a:visited {
    text-decoration: none;
    color: #848;
}   
img {
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
                for (var trs = table.getElementsByTagName('tr'), r = 0, rl = trs.length; (r < rl) && (tr = trs[r]); r++) {
                    if (!tr.className.match(/infraTr(Clara|Escura)/)) continue;
                    if (match = tr.cells[2].innerHTML.match(/Prazo: .*(\&nbsp;){3}Status:([^<]+)/)) {
                        if (match[2] == 'AGUARD. ABERTURA') {
                            tr.cells[2].style.backgroundColor = '#caa';
                        } else if (match[2] == 'ABERTO') {
                            tr.cells[2].style.backgroundColor = '#cca';
                        } else if (match[2] == 'FECHADO') {
                            tr.cells[2].style.backgroundColor = '#aca';
                        }
                    }
                    for (var children = tr.cells[4].childNodes, c = children.length - 1; (c >= 0) && (child = children[c]); c--) {
                        if (!child.tagName || (child.tagName == 'BR')) {
                            child.parentNode.removeChild(child);
                        } else {
                            child.parentNode.insertBefore(document.createElement('br'), child.nextSibling);
                        }
                    }
                    for (var links = tr.cells[4].getElementsByTagName('a'), l = 0, ll = links.length; (l < ll) && (link = links[l]); l++) {
                        link.className = link.className.split(' ').concat(['docLink']).join(' ');
                        link.addEventListener('click', (function(id, link) {
                            return function(e)
                            {
                                e.cancelBubble = true;
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
                if (confirm('Este processo possui ' + windows.length + ' documento(s) aberto(s).\nDeseja fechá-lo(s)?')) {
                    for (var w = windows.length - 1; w >= 0; w--) {
                        windows[w].close();
                    }
                }
            }
        }, true);
    },
    // }}}
    // {{{ setLastProcesso()
    setLastProcesso: function()
    {
        if (before = document.referrer.match(/\&(txtNumProcesso|num_processo)=([0-9]{20})/))
            document.getElementById('txtNumProcesso').value = before[2];
    }
    // }}}
}
// }}}
// {{{ encode64()
/*
 * This code was written by Tyler Akins and has been placed in the
 * public domain.  It would be nice if you left this header intact.
 * Base64 code from Tyler Akins -- http://rumkin.com
 */
function encode64(input)
{
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = new StringMaker();
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    while (i < input.length) {
        chr1 = input.charCodeAt(i++) & 0xff;
        chr2 = input.charCodeAt(i++) & 0xff;
        chr3 = input.charCodeAt(i++) & 0xff;

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output.append(keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4));
   }
   
   return output.toString();
}
// }}}
// {{{ StringMaker()
var StringMaker = function () {
    this.str = "";
    this.length = 0;
    this.append = function (s) {
        this.str += s;
        this.length += s.length;
    }
    this.prepend = function (s) {
        this.str = s + this.str;
        this.length += s.length;
    }
    this.toString = function () {
        return this.str;
    }
}
// }}}
// {{{ Início do programa
GM_addStyle(' .infraTrSelecionada { background-color: inherit; } .infraTrSelecionada td { background-color: rgba(0,0,0,.25); } .infraTrClara a:visited, .infraTrEscura a:visited { color: #666; } a.docLink:visited { color: #666; } .infraBarraComandos, .infraAreaTelaD, .infraAreaDados { border-color: transparent !important; }');
Eproc.init();
// }}}
