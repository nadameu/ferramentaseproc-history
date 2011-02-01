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
    SALMAO: '#efa88f',
    VERDE: '#a7eda7',
    VERMELHA: '#db6464'
}
// }}}
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
    'Agravo de Instrumento': Cores.LARANJA,
    'AGRAVO DE INSTRUMENTO DE DECISÃO DENEGAT.DE REC.EX': Cores.VERDE,
    'ALIENAÇÃO JUDICIAL': Cores.BRANCA,
    'ALIENAÇÃO JUDICIAL CRIMINAL': Cores.VERMELHA,
    'ALVARÁ JUDICIAL': Cores.CINZA,
    'APELAÇÃO CRIMINAL': Cores.AZUL,
    'Apelação Cível': Cores.ROSA,
    'Apelação/Reexame Necessário': Cores.ROSA,
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
    'Conflito de Competência (Seção)': Cores.VERDE,
    'Conflito de Jurisdição (Seção)': Cores.VERDE,
    'CRIMES AMBIENTAIS': Cores.BRANCA,
    'CUMPRIMENTO DE SENTENÇA': Cores.AMARELA,
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
    'EXECUÇÃO DE SENTENÇA CONTRA FAZENDA PÚBL': Cores.AMARELA,
    'EXECUÇÃO DE TÍTULO EXTRAJUDICIAL': Cores.AMARELA,
    'EXECUÇÃO FISCAL': Cores.LARANJA,
    'EXECUÇÃO HIPOTECÁRIA DO SISTEMA FINANCEIRO DA HABI': Cores.AMARELA,
    'EXECUÇÃO PENAL': Cores.BRANCA,
    'EXECUÇÃO PENAL PROVISÓRIA': Cores.AMARELA,
    'EXECUÇÃO PROVISÓRIA DE SENTENÇA': Cores.AMARELA,
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
    'INQUÉRITO POLICIAL - PORTARIA': Cores.VERDE,
    'INQUÉRITO POLICIAL - PRISAO EM FLAGRANTE': Cores.VERDE,
    'INTERDITO PROIBITÓRIO': Cores.VERDE,
    'JUSTIFICAÇÃO DE DINHEIRO A RISCO': Cores.VERDE,
    'LIQUIDAÇÃO POR ARBITRAMENTO': Cores.BRANCA,
    'LIQUIDAÇÃO POR ARTIGOS': Cores.BRANCA,
    'LIQUIDAÇÃO PROVISÓRIA POR ARBITRAMENTO': Cores.BRANCA,
    'LIQUIDAÇÃO PROVISÓRIA POR ARTIGOS': Cores.BRANCA,
    'MANDADO DE SEGURANÇA': Cores.PALHA,
    'Mandado de Segurança (Seção)': Cores.AMARELO,
    'MANDADO DE SEGURANÇA COLETIVO': Cores.PALHA,
    'MEDIDA CAUTELAR DE ALIMENTOS PROVISIONAIS': Cores.AZUL,
    'MEDIDA CAUTELAR DE APREENSÃO DE TÍTULOS': Cores.CINZA,
    'MEDIDA CAUTELAR DE ARRESTO': Cores.BRANCA,
    'MEDIDA CAUTELAR DE ARROLAMENTO DE BENS': Cores.BRANCA,
    'MEDIDA CAUTELAR DE ATENTADO': Cores.BRANCA,
    'MEDIDA CAUTELAR DE BUSCA E APREENSÃO': Cores.SALMAO,
    'MEDIDA CAUTELAR DE CAUÇÃO': Cores.SALMAO,
    'MEDIDA CAUTELAR DE EXIBIÇÃO': Cores.SALMAO,
    'MEDIDA CAUTELAR DE HOMOLOGAÇÃO DO PENHOR LEGAL': Cores.SALMAO,
    'MEDIDA CAUTELAR DE INTERPELAÇÃO': Cores.SALMAO,
    'MEDIDA CAUTELAR DE JUSTIFICAÇÃO': Cores.SALMAO,
    'MEDIDA CAUTELAR DE NOTIFICAÇÃO': Cores.SALMAO,
    'MEDIDA CAUTELAR DE POSSE EM NOME DO NASCITURO': Cores.SALMAO,
    'MEDIDA CAUTELAR DE PRODUÇÃO ANTECIPADA DE PROVAS': Cores.SALMAO,
    'MEDIDA CAUTELAR DE PROTESTO': Cores.SALMAO,
    'MEDIDA CAUTELAR DE SEQUESTRO': Cores.SALMAO,
    'MEDIDA CAUTELAR FISCAL': Cores.SALMAO,
    'MEDIDA CAUTELAR INOMINADA': Cores.SALMAO,
    'NATURALIZAÇÃO': Cores.SALMAO,
    'NOMEAÇÃO DE ADVOGADO': Cores.CINZA,
    'NOTIFICAÇÃO PARA EXPLICAÇÕES': Cores.SALMAO,
    'NOTIFICAÇÃO PARA EXPLICAÇÕES (LEI DE IMPRENSA)': Cores.AMARELA,
    'OPÇÃO DE NACIONALIDADE': Cores.SALMAO,
    'OPOSIÇÃO': Cores.SALMAO,
    'ORGANIZAÇÃO E FISCALIZAÇÃO DE FUNDAÇÃO': Cores.SALMAO,
    'OUTRAS MEDIDAS PROVISIONAIS': Cores.VERDE,
    'OUTROS PROCEDIMENTOS DE JURISDIÇÃO VOLUNTÁRIA': Cores.VERDE,
    'PEDIDO DE ASSISTÊNCIA JUDICIÁRIA': Cores.SALMAO,
    'PEDIDO DE BUSCA E APREENSÃO CRIMINAL': Cores.CINZA,
    'PEDIDO DE LIBERDADE PROVISÓRIA COM OU SEM FIANÇA': Cores.AMARELA,
    'PEDIDO DE PRISÃO PREVENTIVA': Cores.VERDE,
    'PEDIDO DE PRISÃO TEMPORÁRIA': Cores.BRANCA,
    'PEDIDO DE QUEBRA DE SIGILO DE DADOS E/OU TELEFÔNIC': Cores.BRANCA,
    'PEDIDO DE RESPOSTA OU RETIFICAÇÃO DA LEI DE IMPREN': Cores.VERDE,
    'PEDIDO PRISÃO/LIBERDADE VIGIADA FINS DE EXPULSÃO': Cores.CINZA,
    'Petição (Seção)': Cores.AMARELA,
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
    'Reexame Necessário Cível': Cores.ROSA,
    'REINT/MANUTENÇÃO POSSE PROCED.ESP.JURISD.CONTENC.': Cores.BRANCA,
    'REMIÇÃO DO IMÓVEL HIPOTECADO': Cores.BRANCA,
    'REPRESENTAÇÃO CRIMINAL': Cores.BRANCA,
    'REQUERIMENTO DE REABILITAÇÃO': Cores.BRANCA,
    'RESTAURAÇÃO DE AUTOS': Cores.AZUL,
    'RETIFICAÇÃO DE REGISTRO DE IMÓVEL': Cores.ROSA,
    'SEQÜESTRO - MEDIDAS ASSECURATÓRIAS': Cores.BRANCA,
    'SUPERVENIÊNCIA DOENÇA MENTAL-INCID.EXEC.CRIMINAL': Cores.BRANCA,
    'Suspensão de Execução de Sentença': Cores.AMARELA,
    'Suspensão de Liminar ou Antecipação de Tutela': Cores.AMARELA,
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
    // {{{ intimacao_bloco_filtrar_destino()
    intimacao_bloco_filtrar_destino: function()
    {
        Eproc.colorirTabela(2, 'Tabela de Processos.');
    },
    // }}}
    // {{{ intimacao_bloco_listar_destino()
    intimacao_bloco_listar_destino: function()
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
                    if (th.textContent == 'Classe') {
                        col = h;
                    }
                }
                for (var trs = table.getElementsByTagName('tr'), r = 0, rl = trs.length; (r < rl) && (tr = trs[r]); r++) {
                    if (!tr.className.match(/infraTr(Clara|Escura)/)) continue;
                    tr.cells[noCheckbox ? 0 : 1].getElementsByTagName('a')[0].setAttribute('target', '_blank');
                    if (col) {
                        var classe = tr.cells[col].innerHTML.split('<')[0];
                        if (Classes[classe])
                            tr.style.backgroundColor = Classes[classe];
                    }
                }
            }
        }
    },
    // }}}
    // {{{ digitar_documento()
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
                if (!oTexto.IsDirty() || confirm('Todo o texto já digitado será apagado.\nConfirma?')) {
                    oTexto.SetHTML('<html lang="pt-BR" dir="ltr"><head><title>' + sTitulo.replace(/<[^>]+>/g, '') + '</title><style type="text/css">.header { font-family: Helvetica; font-size: 10pt; } .title { font-family: Times; font-size: 14pt; font-weight: bold; } .text { font-family: Times; font-size: 13pt; } .signature { font-family: Times; font-size: 12pt; font-weight: bold; font-style: italic; } .dados { font-family: Times; font-size: 13pt; font-weight: bold; }</style></head><body bgcolor="white"><div class="header" align="center"><img width="85" height="86" src="http://eproc.trf4.gov.br/eproc2trf4/imagens/brasao_pb.jpg"></div><div class="header" align="center">PODER JUDICIÁRIO</div><div class="header" align="center"><strong>JUSTIÇA FEDERAL</div><div class="header" align="center"></strong>' + GM_getValue('v1.secao') + '</div><div class="header" align="center">' + GM_getValue('v1.subsecao') + '</div><div class="header" align="center">' + GM_getValue('v1.vara') + '</div><p class="text" align="justify">&nbsp;</p>' + (info ? '<div class="dados" align="left">PROCESSO: ' + processo + '</div><div class="dados" align="left">AUTOR: ' + autor + '</div><div class="dados" align="left">RÉU: ' + reu + '</div><p class="text" align="justify">&nbsp;</p>' : '') + '<p class="title" align="center">' + sTitulo + '</p><p class="text" align="justify">&nbsp;</p><p class="text" align="justify">' + sConteudo + '</p><p class="text" align="justify">&nbsp;</p><p class="text" align="justify">&nbsp;</p><p class="text" align="justify">&nbsp;</p><p class="signature" align="center">documento assinado eletronicamente</p></body></html>');
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
        criaBotao('Sentença', 'SENTENÇA', 'TextoDaSentença', '14', document.body.firstChild);
        criaBotao('Despacho', 'DESPACHO', 'TextoDoDespacho', '15', document.body.firstChild);
        criaBotao('Decisão', 'DECISÃO', 'TextoDaDecisão', '32', document.body.firstChild);
        criaBotao('Certidão', 'CERTIDÃO', 'CERTIFICO que .', '16', document.body.firstChild);
        criaBotao('Ato', 'ATO DE SECRETARIA', 'De ordem do MM. Juiz Federal, a Secretaria da Vara .', '18', document.body.firstChild);
    },
    // }}}
    // {{{ digitar_documento_oncomplete()
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
                        row.insertCell(row.cells.length).innerHTML = ['Versão ' + reg.getAttribute('numeroVersaoDocumento') + ' por ' + reg.getAttribute('siglaEditor'), reg.getAttribute('dataCriacao')].join('<br/>');
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
                ['','Documento','Número','Ass.','Data Documento','Criação','Edição'].forEach(function (text, i)
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
                    pai.appendChild(document.createTextNode('Página ' + pagina + ' '));
                    if (r >= 21) {
                        criaLinkPaginacaoGedpro(pagina + 1, '>');
                    }
                    pai.appendChild(document.createElement('br'));
                }
                var link = document.createElement('a');
                link.href = '#';
                link.textContent = 'Falta de permissão de acesso?';
                link.addEventListener('click', (function(link) { return function(e) { Eproc.reloginGedpro(e); }; })(), false);
                pai.appendChild(link);
            },
        });
      }
    },
    // }}}
    // {{{ reloginGedpro()
    /**
     * Tenta fazer novo login no Gedpro
     */
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
        document.getElementById('divInfraAreaTelaE').appendChild(iframe);
        Eproc.tester = {
            ev: isEvent,
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
                    var ev = Eproc.tester.ev;
                    delete Eproc.tester;
                    var iframe = document.getElementsByTagName('iframe')[0];
                    iframe.parentNode.removeChild(iframe);
                    if (ev) {
                        document.getElementById('loginGedpro').textContent = 'Falta de permissão de acesso?';
                    } else {
                        document.getElementById('cargaDocsGedpro').getElementsByTagName('a')[0].textContent = 'Carregando documentos do GEDPRO...';
                    }
                    if (success) {
                        if (ev) {
                            alert('Feche o documento e tente novamente agora.');
                        } else {
                            Eproc.getDocsGedpro('arvore');
                        }
                    } else {
                        alert('Não foi possível fazer login no GEDPRO.');
                    }
                }
            }, 500),
            times: 0,
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
        if (location.pathname.match(/\/class\/fckeditor\/editor\/fckeditor\.html/)) {
            unsafeWindow.parent.FCKeditor_OnComplete = this.digitar_documento_oncomplete;
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
+ '.infraTable td label {'
+ '    font-size: 1em;'
+ '}'
+ 'td.prazoAguardaAbertura {'
+ '    background-color: hsl(0, 50%, 80%);'
+ '}'
+ 'td.prazoAberto {'
+ '    background-color: hsl(60, 50%, 80%);'
+ '}'
+ 'table.prazoComDestaque div.prazoFechado {'
+ '    background-color: hsl(120, 50%, 80%);'
+ '}'
+ 'span.prazoExtra {'
+ '    display: none;'
+ '}'
+ 'table.prazoComDestaque span.prazoExtra {'
+ '    display: inline;'
+ '}'
+ 'table.prazoComDestaque div.prazoFechado span.prazoEvento {'
+ '    background-color: hsl(60, 50%, 80%);'
+ '}'
);
        for (var divs = document.getElementsByTagName('div'), d = divs.length - 1, div; (d >= 0) && (div = divs[d]); d--) {
            if ((div.className && div.className.match(/^infraLegend/)) || (div.id && div.id.match(/^divDes/))) {
                div.style.backgroundColor = background;
            }
        }
    },
    // }}}
    // {{{ painel_orgao_processo_listar()
    painel_orgao_processo_listar: function()
    {
        Eproc.colorirTabela(3, 'Tabela de Processos.');
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
        var buscarForm = document.querySelector('#frmProcessoLista');
        var buscar = document.querySelectorAll('#btnBuscar');
        var submeteForm = function(processos, hashes)
        {
            var oldAction = buscarForm.action;
            var oldValue = document.getElementById('hdnInfraItensSelecionados').value;
            buscarForm.action = oldAction + '&num_processo=' + processos.join(',') + '&hashes=' + hashes.join(',');
            buscarForm.target = '_blank';
            document.getElementById('hdnInfraItensSelecionados').value = processos.join(',');
            unsafeWindow.submeterFrm('buscar');
            buscarForm.action = oldAction;
            buscarForm.target = '';
            document.getElementById('hdnInfraItensSelecionados').value = oldValue;
            unsafeWindow.infraAvisoCancelar();
        };
        [].forEach.call(buscar, function(buscar)
        {
            buscar.setAttribute('onclick', '');
            buscar.addEventListener('click', function(e)
            {
                var processos = [], hashes = [];
                [].forEach.call(document.querySelectorAll('tr.infraTrMarcada a[href]'), function(link)
                {
                    var match = link.search.match(/\&num_processo=(.*)\&hash=(.*)$/) 
                    processos.push(match[1]);
                    hashes.push(match[2]);
                });
                submeteForm(processos, hashes);
            }, false);
        });
        if (document.getElementById('btnConsultar')) {
            var paginacao = document.getElementById('selPaginacao');
            var option = document.createElement('option');
            option.value = '10';
            option.textContent = '10 processos por página';
            if (paginacao.querySelectorAll('option[selected]').length == 0) option.selected = true;
            paginacao.insertBefore(option, paginacao.firstChild);
        }
        if (document.getElementById('btnBuscar')) {
            for (var hh = document.querySelectorAll('#btnConsultar, .infraTdSetaOrdenacao a, #divInfraAreaPaginacao a, #divInfraAreaPaginacao select'), h = 0, link; link = hh[h]; h++) {
                var attr = link.hasAttribute('onclick') ? 'onclick' : 'onchange';
                var action = link.getAttribute(attr);
                link.setAttribute(attr, '');
                link.addEventListener(attr.replace(/^on/, ''), (function(action) { return function(e)
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
                            var match = this.search.match(/\&num_processo=(.*)\&hash=(.*)$/);
                            submeteForm([match[1]], [match[2]]);
                        }, false);
                    }
                }
            }
        } else {
            for (var tables = document.getElementsByClassName('infraTable'), t = 0, tl = tables.length; (t < tl) && (table = tables[t]); t++) {
                if (table.getAttribute('summary') == 'Tabela de Preventos.') {
                    table.setAttribute('width', '');
                    for (var ths = table.getElementsByTagName('th'), h = 0, hl = ths.length; (h < hl) && (th = ths[h]); h++) {
                        th.setAttribute('width', '');
                    }
                    for (var links = table.getElementsByTagName('a'), l = 0, ll = links.length, link; (l < ll) && (link = links[l]); l++) {
                        link.target = '_blank';
                    }
                    if (table.rows[1].cells[0].textContent == 'Eproc2' && table.rows[table.rows.length - 1].cells[0].textContent == 'Siapro') {
                        var qtdProcessos = (table.rows.length - 1) / 3;
                        for (var i = 0; i < qtdProcessos; i++) {
                            var eproc2 = table.rows[3*i + 1], eproc = table.rows[2*i + 1 + qtdProcessos], siapro = table.rows[i + 1 + 2*qtdProcessos];
                            eproc2.insertBefore(eproc2.cells[0], eproc2.cells[2]);
                            eproc2.parentNode.insertBefore(eproc, eproc2.nextSibling);
                            eproc.deleteCell(1);
                            eproc.parentNode.insertBefore(siapro, eproc.nextSibling);
                            siapro.deleteCell(1);
                            eproc2.cells[0].rowSpan = 3;
                        }
                    }
                    if (location.search.match(/num_processo/)) {
                        var match = location.search.match(/\&num_processo=(.*)\&hashes=(.*)$/);
                        var processos = match[1].split(',');
                        var hashes = match[2].split(',');
                        for (var trs = table.getElementsByTagName('tr'), r = 0, rl = trs.length; (r < rl) && (tr = trs[r]); r++) {
                            if (!tr.className.match(/infraTr(Clara|Escura)/) || tr.cells.length < 3) continue;
                            var cell = tr.getElementsByTagName('table')[0].rows[0].cells[0];
                            cell.innerHTML = '<b>Processo: <a href="controlador.php?acao=processo_selecionar&acao_origem=prevencao_judicial_bloco&num_processo=' + processos.shift() + '&hash=' + hashes.shift() + '" target="_blank">' + cell.innerHTML.match(/[0-9\.\-]{24}/) + '</a></b>';
                        }
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
                        var x = new IE();
                        x.launch(link.href);
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
                } else if (link.title == 'Link para o GEDPRO não pôde ser gerado.') {
                    link.getElementsByTagName('u')[0].style.textDecoration = 'line-through';
                }
            } else if (/controlador\.php\?acao=prevencao_judicial\&/.exec(link.href) && link.className == 'infraMenuFilho') {
                var informacoes = document.getElementById('fldInformacoesAdicionais').getElementsByTagName('table')[0], row = informacoes.insertRow(informacoes.rows.length), labelCell = row.insertCell(0), cell = row.insertCell(1);
                labelCell.align = 'right';
                labelCell.innerHTML = '<label>Preventos:</label>';
                var myLink = document.createElement('a'), myLinkClicked = false;
                myLink.href = link.href;
                myLink.textContent = 'Buscar preventos'
                myLink.addEventListener('click', function(e)
                {
                    if (e.ctrlKey || e.shiftKey) return;
                    e.preventDefault();
                    e.stopPropagation();
                    if (myLinkClicked) return;
                    myLinkClicked = true;
                    var myOldText = myLink.textContent;
                    myLink.textContent = 'Aguarde, carregando...';
                    var data = 'hdnInfraTipoPagina=1&selSistema=Todos&txtNumProcesso=' + Eproc.processo + '&hdnInfraSelecoes=&hdnInfraTotalRegistros=0';
                    var restore = function()
                    {
                        alert('Ocorreu um erro durante a busca. Favor tentar novamente.');
                        myLink.textContent = myOldText;
                        myLinkClicked = false;
                    }
                    GM_xmlhttpRequest({
                        url: e.target.href,
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: data,
                        onload: function(response)
                        {
                            var div = document.createElement('div');
                            div.innerHTML = response.responseText;
                            var semPreventos = div.textContent.match(/Não há preventos/g);
                            var resultLinks = div.querySelectorAll('#divInfraAreaTela a');
                            if (semPreventos && semPreventos.length == 3) {
                                myLink.parentNode.replaceChild(document.createTextNode('Não há preventos.'), myLink);
                            } else if (resultLinks.length) {
                                var parentNode = myLink.parentNode;
                                parentNode.innerHTML = '';
                                for (var rl = 0, resultLink; resultLink = resultLinks[rl]; rl++) {
                                    resultLink.target = '_blank';
                                    parentNode.appendChild(resultLink);
                                    parentNode.appendChild(document.createElement('br'));
                                }
                            } else {
                                restore();
                            }
                        },
                        onerror: function(response)
                        {
                            restore();
                        }
                    });
                }, false);
                myLink.style.fontWeight = 'bold';
                myLink.style.color = 'rgb(102, 102, 102)';
                var label = document.createElement('label');
                label.className = 'infraLabelObrigatorio';
                label.appendChild(myLink);
                cell.appendChild(label);
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
                for (var ths = table.getElementsByTagName('th'), h = 1, hl = ths.length; (h < hl) && (th = ths[h]); h++) {
                    th.setAttribute('width', '');
                }
                var check = document.createElement('input');
                check.type = 'checkbox';
                check.id = 'extraSemDestaque';
                table.parentNode.insertBefore(check, table.nextSibling);
                var label = document.createElement('label');
                label.textContent = ' Não destacar prazos fechados';
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
                for (var trs = table.getElementsByTagName('tr'), r = 0, rl = trs.length; (r < rl) && (tr = trs[r]); r++) {
                    if (!tr.className.match(/infraTr(Clara|Escura)/)) continue;
                    if (match = tr.cells[2].innerHTML.match(/Prazo: .* Status:([^<]+)/)) {
                        if (match[1] == 'AGUARD. ABERTURA') {
                            tr.cells[2].className = 'prazoAguardaAbertura';
                        } else if (match[1] == 'ABERTO') {
                            tr.cells[2].className = 'prazoAberto';
                        } else if (match[1] == 'FECHADO') {
                            var extraContent = '', fechamento = tr.cells[0].getElementsByTagName('a')[0].getAttribute('onmouseover').match(/Fechamento do Prazo:.*\D(\d+ - [^<]+).*Citado\(s\) \/ Intimado\(s\)/);
                            if (fechamento) {
                                var evento = fechamento[1]
                                if (! evento.match(/^\d+ - Decurso de Prazo$/)) {
                                    evento = '<span class="prazoEvento">' + evento + '</span>';
                                }
                                extraContent = '<span class="prazoExtra"> (' + evento + ')</span>';
                            }
                            tr.cells[2].innerHTML = tr.cells[2].innerHTML.replace(/(Prazo: .* Status:FECHADO)<br>/, '<div class="prazoFechado">$1' + extraContent + '</div>');
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
            }
        }
        window.addEventListener('beforeunload', function(e)
        {
            var windows = [];
            var gedpro = [];
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
        var txtNumProcesso = document.getElementById('txtNumProcesso');
        if (txtNumProcesso) {
            txtNumProcesso.setAttribute('maxlength', 20);
            txtNumProcesso.setAttribute('onkeypress', '');
            var valorAntigo;
            function limpa(elemento)
            {
                var inicio = elemento.selectionStart;
                var fim = elemento.selectionEnd;
                var valor = elemento.value;
                if (/^(\d{2}|\d{4})\/\d*$/.exec(valor)) return;
                var segmentos = valor.split(/[^0-9_]/);
                segmentos.forEach(function(segmento, s)
                {
                    if (s == 0) {
                        valor = segmento;
                    } else {
                        if (inicio > valor.length) inicio--;
                        if (fim > valor.length) fim--;
                        valor += segmento;
                    }
                });
                elemento.value = valor;
                elemento.setSelectionRange(inicio, fim);
            }
            txtNumProcesso.addEventListener('keydown', function(e)
            {
                if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
                    limpa(this);
                }
                if (/^\d{2}\/\d*$/.exec(this.value)) this.setAttribute('maxlength', 11);
                else if (/^\d{4}\/\d*$/.exec(this.value)) this.setAttribute('maxlength', 13);
                else this.setAttribute('maxlength', 20);
            }, false);
            txtNumProcesso.addEventListener('keyup', function(e)
            {
                var inicio = this.selectionStart;
                var fim = this.selectionEnd;
                var valor = this.value;
                if (/^(\d{2}|\d{4})\/\d*$/.exec(valor)) return;
                if (valor != valorAntigo) {
                    limpa(this);
                    var inicio = this.selectionStart;
                    var fim = this.selectionEnd;
                    var valor = this.value;
                    function quebra(posicao, caractere)
                    {
                        if (valor.length > posicao) {
                            valor = valor.substr(0, posicao) + caractere + valor.substr(posicao);
                            if (inicio > posicao) inicio++;
                            if (fim > posicao) fim++;
                        }
                    }
                    quebra(16, '.');
                    quebra(14, '.');
                    quebra(13, '.');
                    quebra(9, '.');
                    quebra(7, '-');
                    this.value = valor;
                    this.setSelectionRange(inicio, fim);
                }
                valorAntigo = this.value;
            }, false);
            txtNumProcesso.addEventListener('change', (function() { return function() { self.onNumprocChange.apply(self, arguments); }; })(), false);
            if (before = document.referrer.match(/\&(txtNumProcesso|num_processo)=([0-9]{20})/)) {
                txtNumProcesso.value = before[2];
            }
            txtNumProcesso.select();
        }
    },
    // }}}
    // {{{ onNumprocChange()
    onNumprocChange: function(e)
    {
        var ano, anoAtual = new Date().getFullYear();
        var numproc = e.target.value;
        var lixo, novoAno, novoNumproc;
        var match = /^(\d{2}|\d{4})\/(\d*)$/.exec(numproc);
        if (match) {
            var novoAno = match[1], novoNumproc = match[2];
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
        if (numproc.length < 3 || numproc.length > 8) return;
        var dd = numproc.substr(numproc.length - 2);
        numproc = numproc.substr(0, numproc.length - 2);
        while (numproc.length < 6) {
            numproc = '0' + numproc;
        }
        while (numproc.length < 7) {
            numproc = '5' + numproc;
        }
        if (!ano) {
            for (var a = 2009; a <= anoAtual; a++) {
                var r1 = numproc % 97;
                var r2 = ('' + r1 + a + '404') % 97;
                var r3 = ('' + r2 + GM_getValue('v2.secao') + GM_getValue('v2.subsecao') + dd) % 97;
                if (r3 == 1) ano = a;
            }
            if (!ano) throw new Error('Dígito verificador inválido!');
        }
        numproc = numproc + '-' + dd;
        while (numproc.length < 14) {
            numproc += '.' + ano + '.4.04.' + GM_getValue('v2.secao') + GM_getValue('v2.subsecao');
        }
        e.target.value = numproc;
    },
    // }}}
}
// }}}
// {{{ Início do programa
Eproc.init();
// }}}
