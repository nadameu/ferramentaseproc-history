function $(selector, baseElement)
{
    if (typeof baseElement == 'undefined') {
        baseElement = document;
    }
    return baseElement.querySelector(selector);
}
function $$(selector, baseElement)
{
    if (typeof baseElement == 'undefined') {
        baseElement = document;
    }
    var elements = baseElement.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
}
var Eproc = {
    acao: '',
    pagina: '',
    processo: 0,
    windows: [],
    acessar_documento: function()
    {
        var m;
        if (m = location.search.match(/\&titulo_janela=([^&]+)/)) {
            document.title = decodeURIComponent(m[1]);
        }
    },
    acessar_documento_publico: function()
    {
        this.acessar_documento();
    },
    addCssRule: function(rule)
    {
        var extraStyle = Eproc.getExtraStyle();
        extraStyle.innerHTML += rule + '\n';
    },
    closeAllWindows: function(e)
    {
        var windows = [];
        for (w in Eproc.windows) {
            var win = Eproc.windows[w];
            if (typeof win == 'object' && !win.closed) {
                windows.push(win);
            }
        }
        if (windows.length) {
            var tela = /^\d{7}-\d{2}\.\d{4}\.\d{3}\.\d{4}$/.test(document.title) ? 'Este processo' : 'Esta tela';
            var resposta = GM_yesNo('Janelas abertas', tela + ' possui ' + windows.length + ' ' + (windows.length > 1 ? 'janelas abertas' : 'janela aberta') + '.\nDeseja fech�-' + (windows.length > 1 ? 'las' : 'la') + '?');
            if (resposta == 0) {
                for (var w = windows.length - 1; w >= 0; w--) {
                    windows[w].close();
                }
                var menuFechar = $('#extraFechar');
                if (menuFechar) {
                    menuFechar.style.visibility = 'hidden';
                }
            } else if (typeof e != 'undefined') {
                e.preventDefault();
                e.stopPropagation();
            }
        } else {
            var menuFechar = $('#extraFechar');
            if (menuFechar) {
                menuFechar.style.visibility = 'hidden';
            }
        }
    },
    colorirLembretes: function()
    {
        var tables = $$('.infraTable[summary="Lembretes"]');
        if (tables.length == 0) return;
        tables.forEach(function(table)
        {
            var separator = document.createElement('div');
            separator.className = 'extraSeparador';
            table.parentNode.insertBefore(separator, table);
            $$('tr.infraTrClara, tr.infraTrEscura', table).forEach(function(tr, r)
            {
                var destino = tr.cells[3].textContent, classes = ['extraLembrete'];
                var pessoa = $('#lblInfraUnidades');
                if (!pessoa) {
                    pessoa = $('#lblInfraUnidades', window.parent.document);
                }
                if (new RegExp(destino).test(pessoa.textContent)) {
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
                        + '</div>' + tr.cells[4].textContent.replace(/\n/g, '<br/>')
                        + '<div class="extraLembreteData">' + tr.cells[5].textContent
                        + '<br/>' + tr.cells[1].textContent + '</div>';
                floater.className = classes.join(' ');
                var celulaBotoes = tr.cells[tr.cells.length - 1];
                floater.childNodes[0].appendChild(celulaBotoes.childNodes[2]);
                floater.childNodes[0].appendChild(celulaBotoes.childNodes[0]);
                table.parentNode.insertBefore(floater, separator);
            });
            table.parentNode.removeChild(table);
        });
    },
    colorirTabela: function()
    {
        var findTh = function(campo, texto)
        {
            var th = null, setas = $$('a[onclick="infraAcaoOrdenar(\'' + campo + '\',\'ASC\');"]');
            if (setas.length != 1) {
                $$('.infraTh').forEach(function(possibleTh){
                    if (possibleTh.textContent == texto) th = possibleTh;
                });
            } else {
                var th = setas[0].parentNode;
                while (th.tagName.toLowerCase() != 'th') {
                    th = th.parentNode;
                }
            }
            return th;
        };
        var classeTh = findTh('DesClasseJudicial', 'Classe');
        var juizoTh = findTh('SigOrgaoJuizo', 'Ju�zo');
        var th = (classeTh !== null) ? classeTh : juizoTh;
        if (th == null) {
            var tr = $$('tr[data-classe]');
            if (tr.length > 0) {
                for (var table = tr[0].parentNode; table.tagName.toUpperCase() != 'TABLE'; table = table.parentNode);
                $$('.infraTh', table).forEach(function(th)
                {
                    if (/^Classe( Judicial)?$/.test(th.textContent)) {
                        classeTh = th;
                    }
                });
            }
            th = classeTh;
        }
        if (th == null) {
            $$('.infraTh').forEach(function(th)
            {
                if (/^Classe( Judicial)?$/.test(th.textContent.trim())) {
                    classeTh = th;
                }
            });
            th = classeTh;
        }
        if (th !== null) {
            var table = th.parentNode.parentNode;
            while (table.tagName.toLowerCase() != 'table') {
                table = table.parentNode;
            }
            table.setAttribute('width', '');
            $$('th', table).forEach(function(th, h)
            {
                th.setAttribute('width', '');
            });
            Array.prototype.forEach.call(table.rows, function(tr)
            {
                if (!tr.className.match(/infraTr(Clara|Escura)/)) return;
                var links = tr.querySelectorAll('a[href]');
                if (links.length) links[0].setAttribute('target', '_blank');
                if (juizoTh) {
                    var color = null, juizoIndex = juizoTh.cellIndex, juizoCell = tr.cells[juizoIndex], juizoText = juizoCell.textContent, juizo = juizoText[juizoText.length - 1];
                    if (/^\s*[A-Z]{5}TR/.test(juizoText)) {
                        switch (juizo) {
                            case 'A':
                            case 'F':
                                color = 'black';
                                break;

                            case 'B':
                            case 'G':
                                color = 'green';
                                break;

                            case 'C':
                            case 'H':
                                color = 'red';
                                break;

                            case 'D':
                                color = 'brown';
                                break;

                            case 'E':
                                color = 'orange';
                                break;

                            default:
                                color = 'black';
                        }
                    }
                    if (color) {
                        juizoCell.style.color = color;
                    }
                }
            });
        }
    },
    corrigirCss: function(rule)
    {
        var extra = Eproc.getStyle('extraCorrecaoCss');
        extra.innerHTML = 'div.infraAreaDados { height: auto !important; overflow: inherit; }';
        extra.innerHTML += rule;
    },
    digitar_documento: function()
    {
        unsafeWindow.FCKeditor_OnComplete = this.digitar_documento_oncomplete;
        if (null == $('#txt_fck___Frame')) return;
        var infoWindow = unsafeWindow.opener;
        if (infoWindow) {
            var info = $('#tbInfoProcesso', infoWindow.document);
            if (info) {
                var processo;
                $$('label', info).forEach(function(label)
                {
                    if (label.textContent == 'Processo:') {
                        processo = label.nextSibling.textContent;
                    }
                });
                function getCellContent(cellIndex)
                {
                    return info.rows[1].cells[cellIndex].innerHTML.replace(/<br[^>]*>/g, ' ');
                }
                var autor = getCellContent(2);
                var reu = getCellContent(3);
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
                    var imgUrl = location.href.split('/');
                    imgUrl.pop();
                    imgUrl.push('imagens');
                    imgUrl.push('brasao_pb.jpg');
                    imgUrl = imgUrl.join('/');
                    imgUrl = 'data:image/jpeg;base64,' + GM_getBase64('chrome://eproc/skin/Logo_JF.jpg') + '==.jpg';
                    oTexto.SetHTML('<html lang="pt-BR" dir="ltr"><head><title>' + sTitulo.replace(/<[^>]+>/g, '') + '</title><style type="text/css">.header { font-family: Calibri, Helvetica, sans-serif; font-size: 9pt; } .title { font-family: Times; font-size: 14pt; font-weight: bold; } .text { font-family: Times; font-size: 13pt; } .signature { font-family: Times; font-size: 12pt; font-weight: bold; font-style: italic; } .dados { font-family: Times; font-size: 13pt; font-weight: bold; }</style></head><body bgcolor="white"><div class="header" align="center"><img width="135" height="100" src="' + imgUrl + '" alt="Logo JF"></div><div class="header" align="center"></strong>' + GM_getValue('v1.secao') + '</div><div class="header" align="center">' + GM_getValue('v1.subsecao') + '</div><div class="header" align="center">' + GM_getValue('v1.vara') + '</div><p class="text" align="justify">&nbsp;</p>' + (info ? '<div class="dados" align="left">PROCESSO: ' + processo + '</div><div class="dados" align="left">AUTOR: ' + autor + '</div><div class="dados" align="left">R�U: ' + reu + '</div><p class="text" align="justify">&nbsp;</p>' : '') + '<p class="title" align="center">' + sTitulo + '</p><p class="text" align="justify">&nbsp;</p><p class="text" align="justify">' + sConteudo + '</p><p class="text" align="justify">&nbsp;</p><p class="text" align="justify">&nbsp;</p><p class="text" align="justify">&nbsp;</p><p class="signature" align="center">documento assinado eletronicamente</p></body></html>');
                    $('#selTipoArquivo').value = iTipo;
                }
            }, true);
            document.body.insertBefore(oBotao, oElemento);
        }
        if (screen.availWidth >= 780 && screen.availHeight >= 630) {
            var w = 780;
            var h = Math.floor((screen.availHeight - 30) / 100) * 100 + 30;
            $('#txt_fck___Frame').height = h - 330;
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
        ed.Config.ToolbarSets['eProcv2custom'] = [
            ['Cut','Copy','Paste','PasteText','PasteWord'],
            ['Undo','Redo'],
            ['Bold','Italic','Underline'],
            ['JustifyLeft','JustifyCenter','JustifyRight','JustifyFull'],
            ['OrderedList','UnorderedList'],
            ['TextColor'],
            ['Source']
        ];
        ed.ToolbarSet.Load('eProcv2custom');
    },
    entrar: function()
    {
	    $$('#divInfraBarraTribunalD .infraAcaoBarraSistema').forEach(function(barra, b, barras)
        {
            if (b < (barras.length - 1)) barra.parentNode.removeChild(barra);
    	});
        Eproc.corrigirCss('#fldLogin { position: static; margin: 6% auto; }');
        function Perfil(perfil)
        {
            for (n in perfil) {
                if (n in this) this[n] = perfil[n];
            }
        }
        Perfil.prototype = {
            get isPadrao()
            {
                var idPadrao = GM_getValue('v2.perfil.' + GM_MD5(this.nome), '');
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
                button.className = 'infraButton';
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
                GM_setValue('v2.perfil.' + GM_MD5(this.nome), this.id);
            },
            desmarcar: function()
            {
                $('input', this.row.cells[0]).checked = false;
            },
            disparar: function()
            {
                var evento = document.createEvent('MouseEvents');
                evento.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                this.row.dispatchEvent(evento);
            },
            removeListener: function(fn)
            {
                this.row.removeEventListener('click', fn, false);
            },
            removerNome: function()
            {
                this.row.cells[1].textContent = this.sigla;
            },
            selecionar: function()
            {
                $('input', this.row.cells[0]).checked = true;
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
            var siglaNome = $('div', row.cells[1]).innerHTML.split('&nbsp;&nbsp;/&nbsp;&nbsp;');
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
        };
        Perfis.prototype.createAviso = function()
        {
            var aviso = new Aviso();
            aviso.inserir(this.fieldset);
            return aviso;
        };
        Perfis.prototype.addListener = function(fn)
        {
            this.forEach(function(perfil)
            {
                perfil.addListener(fn);
            });
        };
        Perfis.prototype.removeListener = function(fn)
        {
            this.forEach(function(perfil)
            {
                perfil.removeListener(fn);
            });
        };
        Perfis.fromFieldset = function(fieldset)
        {
            var perfis = [];
            $$('tr', fieldset).forEach(function(row)
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
            this.cancelar.className = 'infraButton';
            this.cancelar.textContent = 'Cancelar login autom�tico';
            this.aviso.appendChild(this.mensagem);
            this.aviso.appendChild(this.cancelar);
        }
        Aviso.prototype = {
            inserir: function(parentNode)
            {
                this.parentNode = parentNode;
                this.parentNode.insertBefore(this.aviso, parentNode.firstChild);
            },
            esconder: function()
            {
                this.aviso.style.visibility = 'hidden';
            },
            atualizar: function(t) {
                var text = 'Carregando perfil padr�o em ' + t + ' ' + (t > 1 ? 'segundos' : 'segundo') + '...';
                this.mensagem.textContent = text;
            },
            createTimer: function(padrao, perfis)
            {
                var timer = new Timer(this, padrao);
                padrao.selecionar();
                this.cancelar.addEventListener('click', function(e)
                {
                    e.preventDefault();
                    e.stopPropagation();
                    timer.cancelar();
                    padrao.desmarcar();
                    perfis.removeListener(timer.cancelar);
                }, false);
                return timer;
            }
        }
        function Timer(aviso, perfil)
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
                    perfil.disparar();
                }
            };
            this.cancelar = function()
            {
                window.clearInterval(timer);
                aviso.esconder();
            };
            timer = window.setInterval(me.executa, 1000);
        }
        var fieldset = $('#fldLogin');
        var perfis = Perfis.fromFieldset(fieldset);
        if (perfis.length > 0) {
            if (perfis.hasPadrao) {
                var padrao = perfis.getPadrao();
                var aviso = perfis.createAviso();
                var timer = aviso.createTimer(padrao, perfis);
                perfis.addListener(timer.cancelar);
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
      var docsGedproStatus = {
        0: 'Em edi��o',
        1: 'Bloqueado',
        2: 'Pronto para assinar',
        3: 'Assinado',
        4: 'Movimentado',
        5: 'Devolvido',
        6: 'Arquivado',
        7: 'Anulado',
        8: 'Conferido'
      };
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
                $$('reg', div).forEach(function(reg)
                {
                    if (reg.getAttribute('icones').length / 3 > maiorIcone) maiorIcone = reg.getAttribute('icones').length / 3;
                });
                var table = document.createElement('table');
                table.className = 'infraTable';
                var arvore = [];
                $$('reg', div).forEach(function(reg, r)
                {
                    var row = table.insertRow(table.rows.length);
                    row.className = (r % 2 == 0) ? 'infraTrClara' : 'infraTrEscura';
                    var icones = reg.getAttribute('icones');
                    for (var i = 0; i < reg.getAttribute('icones').length; i += 3) {
                        var icone = {
                            'iWO': 'Word.gif',
                            'iPO': 'Papiro.gif',
                            'PDF': 'pdfgedpro.gif',                                    
                            'iPF': 'PastaAberta.gif',
                            'iL+': 'L-.gif',
                            'iT+': 'T-.gif',
                            'iL0': 'L.gif',
                            'iT0': 'T.gif',
                            'i00': 'Vazio.gif',
                            'iI0': 'I.gif',
                        }[icones.substr(i, 3)];
                        row.insertCell(row.cells.length).innerHTML = '<img class="extraGedproImg" src="http://' + Eproc.loginGedpro.host + '/images/' + icone + '"/>';
                    }
                    var rotulo = row.insertCell(row.cells.length);
                    rotulo.colSpan = maiorIcone - (icones.length / 3) + 1;
                    if (reg.getAttribute('codigoTipoNodo') == 2) {
                        rotulo.textContent = reg.getAttribute('nomeTipoDocumentoExibicao');
                        if (reg.getAttribute('MaiorAcesso') >= 8) {
                            rotulo.className = 'extraGedproRotuloGreen';
                        } else if (reg.getAttribute('MaiorAcesso') >= 2) {
                            rotulo.className = 'extraGedproRotuloBlue';
                        } else {
                            rotulo.className = 'extraGedproRotuloGray';
                        }
                        row.insertCell(row.cells.length).textContent = reg.getAttribute('codigoDocumento');
                        row.insertCell(row.cells.length).textContent = docsGedproStatus[reg.getAttribute('statusDocumento')];
                        if (reg.getAttribute('assinaturaDigital')) {
                            row.insertCell(row.cells.length).innerHTML = '<img class="extraGedproImg" src="http://' + Eproc.loginGedpro.host + '/images/assinatura.gif"/>';
                        } else {
                            row.insertCell(row.cells.length).innerHTML = '&nbsp;';
                        }
                        row.insertCell(row.cells.length).textContent = reg.getAttribute('dataDocumento');
                        row.insertCell(row.cells.length).innerHTML = [reg.getAttribute('siglaCriador'), reg.getAttribute('dataCriacao')].join('<br/>');
                        row.insertCell(row.cells.length).innerHTML = ['Vers�o ' + reg.getAttribute('numeroVersaoDocumento') + ' por ' + reg.getAttribute('siglaEditor'), reg.getAttribute('dataCriacao')].join('<br/>');
                      if (rotulo.className != 'extraGedproRotuloGray') {
                        rotulo.addEventListener('click', (function(reg) {
                            return function(e)
                            {
                                e.preventDefault();
                                e.stopPropagation();
                                var win = Eproc.windows['' + Eproc.processo + reg.getAttribute('codigoNodo')];
                                if (typeof win == 'object' && !win.closed) {
                                    return win.focus();
                                } else {
                                    Eproc.windows['' + Eproc.processo + reg.getAttribute('codigoNodo')] = window.open('http://' + Eproc.loginGedpro.host + '/visualizarDocumentos.asp?origem=pesquisa&ignoraframes=sim&codigoDocumento=' + reg.getAttribute('codigoDocumento'), '' + Eproc.processo + reg.getAttribute('codigoNodo'), 'menubar=0,resizable=1,status=0,toolbar=0,location=0,directories=0,scrollbars=1');
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
                        cell.colSpan = 6;
                    }
                });
                var head = table.createTHead().insertRow(0);
                ['','Documento','N�mero','Status','Ass.','Data Documento','Cria��o','Edi��o'].forEach(function (text, i)
                {
                    var th = document.createElement('th');
                    if (i == 1) th.colSpan = maiorIcone;
                    th.className = 'infraTh';
                    th.textContent = text;
                    head.appendChild(th);
                });
                table.tHead.rows[0].cells[4].title = 'Assinado digitalmente';
                var pai = $('#cargaDocsGedpro');
                pai.textContent = '';
                pai.appendChild(table);
                function criaLinkPaginacaoGedpro(pagina, texto)
                {
                    var link = document.createElement('a');
                    link.href = '#cargaDocsGedpro';
                    link.textContent = texto;
                    link.addEventListener('click', function(e) {
                        var newLink = document.createElement('a');
                        newLink.className = 'extraLinkAcao';
                        newLink.href = '#';
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
                var r = table.tBodies[0].rows.length;
                if (pagina > 1 || r >= 20) {
                    if (pagina > 2) {
                        criaLinkPaginacaoGedpro(1, '|<');
                        pai.appendChild(document.createTextNode(' '));
                    }
                    if (pagina > 1) {
                        criaLinkPaginacaoGedpro(pagina - 1, '<');
                        pai.appendChild(document.createTextNode(' '));
                    }
                    pai.appendChild(document.createTextNode('P�gina ' + pagina + ' '));
                    if (r >= 20) {
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
    getStyle: function(id)
    {
        var extraStyle = $('#' + id);
        if (! extraStyle) {
            var extraStyle = document.createElement('style');
            extraStyle.id = id;
            $('head').appendChild(extraStyle);
        }
        this.caller = function() { return extraStyle; };
        return this.caller();
    },
    getExtraStyle: function()
    {
        return Eproc.getStyle('extraStyle');
    },
    getExtraMainStyle: function()
    {
        return Eproc.getStyle('extraMainStyle');
    },
    getMenu: function()
    {
        var menu = $('#infraMenuRaizes');
        if (menu) return menu;
        else return false;
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
             + this.processo.substr(13, 3)
             + '.'
             + this.processo.substr(16, 4);
    },
    init: function()
    {
        if (unsafeWindow.FeP) {
            GM_analisarVersao(unsafeWindow.FeP);
        }
        if (document.body && document.body.hasAttribute('onload')) {
            document.body.setAttribute('onload', document.body.getAttribute('onload').replace('infraProcessarResize();', ''));
        }
        if (unsafeWindow.infraResize instanceof Function) {
            window.removeEventListener('resize', unsafeWindow.infraResize, false);
        }
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
        var brasao = $('#imgBrasao');
        if (brasao) {
            brasao.src = 'data:image/png;base64,' + GM_getBase64('chrome://eproc/skin/brasao.png');
        }
        var menu = Eproc.getMenu();
        if (menu) {
            var cores = document.createElement('li');
            cores.innerHTML = '<a class="infraMenuRaiz"  title="Cor de fundo" ><div class="infraItemMenu"><div class="infraRotuloMenu">Cor de fundo</div><div class="infraSetaMenu">&raquo;</div></div></a><ul></ul>';
            var coresMenu = cores.querySelector('ul');
            var extraStyle = Eproc.getExtraStyle();
            function Cor(c, h, s, l)
            {
                var cor = document.createElement('a');
                cor.className = 'infraMenuFilho extraCor' + c;
                extraStyle.innerHTML += 'div.infraMenu a.extraCor' + c + ' { ';
                extraStyle.innerHTML += 'background-color: hsl(' + h + ', ' + s + '%, ' + l + '%);';
                extraStyle.innerHTML += 'color: hsl(' + h + ', ' + s + '%, 25%);';
                extraStyle.innerHTML += 'border: 1px solid #888;';
                extraStyle.innerHTML += '}\n';
                cor.textContent = 'Cor ' + c;
                cor.addEventListener('click', function()
                {
                    Eproc.salvaFundo(h, s, l, (s == 0 ? (Eproc.isSegundoGrau() ? 10 : 210) : h), (s == 0 && l < 100 ? 0 : 100), 100);
                }, false);
                cor.addEventListener('mouseover', function()
                {
                    Eproc.mudaEstilosTemporariamente(h, s, l, (s == 0 ? (Eproc.isSegundoGrau() ? 10 : 210) : h), (s == 0 && l < 100 ? 0 : 100), 100);
                }, false);
                cor.addEventListener('mouseout', Eproc.removeEstilosTemporarios, false);
                return cor;
            }
            for (var c = 1; c <= 14; c++) {
                var h = 0, s = 0, l = 96;
                if (c == 1) {
                    l = 100;
                } else if (c == 14) {
                    // do nothing
                } else {
                    h = (c - 2) * 30;
                    s = 66;
                }
                var cor = new Cor(c, h, s, l);
                coresMenu.appendChild(cor);
            }
            menu.appendChild(cores);
        }
        var barraSistema = $('.infraBarraSistema'), lembretes = $$('.infraTable[summary="Lembretes"]');
        var getFundoUsuario = function()
        {
            return getCorUsuario('fundo');
        };
        var getBarraUsuario = function()
        {
            return getCorUsuario('barra');
        };
        var getCorUsuario = function(prop)
        {
            var hsl = /^\d+\/\d+\/\d+$/.test(GM_getValue('v2.' + prop + '.' + (Eproc.isSegundoGrau() ? '2g' : '1g'), '')) ? GM_getValue('v2.' + prop + '.' + (Eproc.isSegundoGrau() ? '2g' : '1g')) : (prop == 'fundo' ? '0/0/100' : (Eproc.isSegundoGrau() ? '10/100/100' : '210/100/100'));
            var h, s, l;
            [h, s, l] = hsl.split('/');
            var corUsuario = { hsl: hsl, h: h, s: s, l: l };
            return corUsuario;
        };
        if (barraSistema || lembretes.length) {
            var fundoUsuario = getFundoUsuario();
            var barraUsuario = getBarraUsuario();
            Eproc.mudaEstilos(fundoUsuario.h, fundoUsuario.s, fundoUsuario.l, barraUsuario.h, barraUsuario.s, barraUsuario.l);
        }
        var unidades = $('#selInfraUnidades');
        if (unidades) {
            unidades.removeAttribute('onchange');
            unidades.addEventListener('change', function(e)
            {
                var options = $$('option'), previousOption = null;
                options.forEach(function(option) { if (option.getAttribute('selected')) previousOption = option; });
                var msg = 'Perfil selecionado: ' + options[this.selectedIndex].textContent;
                var nome = $('#lblInfraUnidades').textContent.match(/ - (?:Nome\: )?(.*) \(.*\)$/)[1];
                var msgPadrao = (this.value != GM_getValue('v2.perfil.' + GM_MD5(nome), '')) ? 'Definir este perfil como padr�o' : '';
                var padrao = {value: false};
                var mudanca = GM_confirmCheck('Mudan�a de perfil', msg, msgPadrao, padrao);
                if (!mudanca) {
                    this.value = previousOption.value;
                    return;
                } else if (padrao.value == true) {
                    GM_setValue('v2.perfil.' + GM_MD5(nome), this.value);
                }
                this.form.submit();
            }, false);
        }
        var pesquisaRapida = $('#txtNumProcessoPesquisaRapida');
        if (pesquisaRapida) {
            if ('placeholder' in pesquisaRapida) {
                pesquisaRapida.setAttribute('placeholder', 'N�. processo');
                pesquisaRapida.removeAttribute('value');
                pesquisaRapida.removeAttribute('style');
                pesquisaRapida.removeAttribute('onclick');
            }
        }
        var global = $('#divInfraAreaGlobal');
        if (global) {
            var wrapper = document.createElement('div');
            wrapper.className = 'extraWrapper';
            global.parentNode.insertBefore(wrapper, global);
            wrapper.appendChild(global);
        }
        var barra = $('#divInfraBarraTribunalD');
        if (barra) {
            var div = document.createElement('div');
            div.className = 'infraAcaoBarraSistema';
            var a = document.createElement('a');
            a.addEventListener('click', function(e)
            {
                GM_showPreferences();
            }, false);
            var img = document.createElement('img');
            img.className = 'infraImg'
            img.src = 'data:image/png;base64,' + GM_getBase64('chrome://eproc/skin/stapler-16.png');
            a.appendChild(img);
            div.appendChild(a);
            if (pesquisaRapida) {
                for (var upperDiv = pesquisaRapida.parentNode; upperDiv.className != 'infraAcaoBarraSistema'; upperDiv = upperDiv.parentNode);
                upperDiv.parentNode.insertBefore(div, upperDiv.nextSibling.nextSibling.nextSibling);
            } else {
                barra.appendChild(div);
            }
        }
        switch (this.acao) {
            case 'processo_lembrete_destino_listar_subfrm':
            case 'processo_selecionar':
                this.colorirLembretes();
                break;
        }
        this.colorirTabela();
        if (this.acao && this[this.acao]) {
            this[this.acao]();
        } else if (this.parametros.acao_origem && this[this.parametros.acao_origem + '_destino']) {
            this[this.parametros.acao_origem + '_destino']();
        }
        window.addEventListener('beforeunload', function(e)
        {
            Eproc.closeAllWindows(e);
            delete Eproc;
        }, false);
        function Icone()
        {
            var getIcone = function()
            {
                var icone = document.createElement('img');
                icone.width = 16;
                icone.height = 16;
                icone.className = 'extraIconeAcao';
                getIcone = function() { return icone; };
                return getIcone();
            }
            
            this.addToLink = function(link)
            {
                link.insertBefore(getIcone(), link.firstChild);
            };

            this.setSrc = function(src)
            {
                getIcone().src = src;
            };
        }
        function InfraIcone (arquivo)
        {
            Icone.call(this);
            this.setSrc('../infra_css/imagens/' + arquivo);
        }
        InfraIcone.prototype = new Icone;
        function ChromeIcone (arquivo)
        {
            Icone.call(this);
            var mime = 'image/' + /...$/.exec(arquivo);
            this.setSrc('data:' + mime + ';base64,' + GM_getBase64('chrome://eproc/skin/' + arquivo));
        }
        ChromeIcone.prototype = new Icone;
        var acoes = getAcoes();
        if (acoes) {
            var fieldset = $('#fldAcoes');
            var legend = $('legend', fieldset);
            if (legend) {
                var span = document.createElement('span');
                span.className = 'extraAcoesLegend';
                span.textContent = legend.textContent;
                legend.textContent = '';
                legend.appendChild(span);
                var mostrar = GM_getValue('v2.mostraricones');
                if (! mostrar) {
                    fieldset.className += ' extraNaoMostrar';
                }
                var label = document.createElement('label');
                label.htmlFor = 'naoMostrarIcones';
                label.className = 'extraNaoMostrarIcones';
                var naoMostrar = document.createElement('input');
                naoMostrar.id = 'naoMostrarIcones';
                naoMostrar.type = 'checkbox';
                naoMostrar.checked = ! mostrar;
                naoMostrar.addEventListener('change', function(e)
                {
                    var naoMostrar = e.target, mostrar = (! naoMostrar.checked);
                    GM_setValue('v2.mostraricones', mostrar);
                    var fieldset = $('#fldAcoes');
                    if (mostrar) {
                        fieldset.className = fieldset.className.replace(/ ?extraNaoMostrar/, '');
                    } else {
                        var fieldsetClasses = (fieldset.className == '') ? [] : fieldset.className.split(/\s+/);
                        fieldsetClasses.push('extraNaoMostrar');
                        fieldset.className = fieldsetClasses.join(' ');
                    }
                }, false);
                label.appendChild(naoMostrar);
                label.appendChild(document.createTextNode(' N�o mostrar �cones'));
                legend.appendChild(label);
                var divAcoesDestacadas = document.createElement('div');
                divAcoesDestacadas.className = 'extraAcoesDestacadas';
                fieldset.appendChild(divAcoesDestacadas);
            }
            acoes.forEach(function(acao)
            {
                var classes = (acao.className == '') ? [] : acao.className.split(' ');
                classes.push('extraLinkAcao');
                acao.className = classes.join(' ');
                var sublinhados = $$('u', acao);
                if (sublinhados.length == 1) {
                    var u = sublinhados[0];
                    u.parentNode.replaceChild(u.childNodes[0], u);
                }
                if (! acao.href) {
                    if (/window\.open/.test(acao.getAttribute('onclick'))) {
                        acao.href = /window\.open\(['"]([^'"]+)/.exec(acao.getAttribute('onclick'))[1];
                    } else {
                        acao.href = '#';
                    }
                    acao.addEventListener('click', function(e) { e.preventDefault(); }, false);
                }
                var acaoControlador = /\?acao=([^&]+)/.exec(acao.href);
                var destacar = false;
                if (acaoControlador.length == 2) {
                    var icone = null;
                    switch (acaoControlador[1]) {
                        case 'acessar_processo_gedpro':
                            icone = new ChromeIcone('ie.png');
                            destacar = true;
                            break;

                        case 'acesso_usuario_processo_listar':
                            icone = new InfraIcone('menos.gif');
                            break;

                        case 'arvore_documento_listar':
                            icone = new ChromeIcone('tree.gif');
                            break;

                        case 'audiencia_listar':
                            icone = new ChromeIcone('microphone.png');
                            break;

                        case 'criar_mandado':
                            icone = new ChromeIcone('knight-crest.gif');
                            break;

                        case 'gerenciamento_partes_listar':
                            icone = new InfraIcone('grupo.gif');
                            break;

                        case 'processo_gerenciar_proc_individual_listar':
                        case 'gerenciamento_partes_situacao_listar':
                            icone = new InfraIcone('marcar.gif');
                            break;

                        case 'gerenciamento_peritos_listar':
                            icone = new ChromeIcone('graduation-hat.png');
                            break;

                        case 'intimacao_bloco_filtrar':
                            icone = new InfraIcone('versoes.gif');
                            break;

                        case 'processo_agravar':
                        case 'processo_cadastrar':
                            icone = new InfraIcone('atualizar.gif');
                            break;

                        case 'redistribuicao_processo_embargo_infrigente':
                            icone = new InfraIcone('hierarquia.gif');
                            break;

                        case 'processo_apelacao':
                        case 'processo_remessa_tr':
                        case 'selecionar_processos_remessa_instancia_superior':
                        case 'selecionar_processos_remessa_instancia_superior_stf':
                            icone = new ChromeIcone('up.png');
                            break;

                        case 'processo_citacao':
                            icone = new ChromeIcone('newspaper.png');
                            destacar = true;
                            break;

                        case 'processo_consultar':
                            icone = new InfraIcone('lupa.gif');
                            break;

                        case 'processo_edicao':
                            icone = new InfraIcone('assinar.gif');
                            break;

                        case 'processo_expedir_carta_subform':
                            icone = new InfraIcone('email.gif');
                            break;

                        case 'processo_intimacao':
                        case 'processo_intimacao_bloco':
                            icone = new InfraIcone('encaminhar.gif');
                            destacar = true;
                            break;

                        case 'processo_intimacao_aps_bloco':
                            icone = new InfraIcone('transportar.gif');
                            destacar = true;
                            break;

                        case 'processo_lembrete_destino_cadastrar':
                            icone = new InfraIcone('tooltip.gif');
                            destacar = true;
                            break;

                        case 'processo_movimento_consultar':
                            icone = new InfraIcone('receber.gif');
                            destacar = true;
                            break;

                        case 'processo_movimento_desativar_consulta':
                            icone = new InfraIcone('remover.gif');
                            break;

                        case 'procurador_parte_associar':
                        case 'procurador_parte_listar':
                            icone = new InfraIcone('mais.gif');
                            break;

                        case 'requisicao_pagamento_cadastrar':
                            icone = new ChromeIcone('money.png');
                            break;

                        case 'selecionar_processos_arquivo_completo':
                            icone = new InfraIcone('pdf.gif');
                            break;
                    }
                    if (icone instanceof Icone) {
                        icone.addToLink(acao);
                    }
                }
                if (acao.nextSibling.nodeType == document.TEXT_NODE) {
                    acao.parentNode.removeChild(acao.nextSibling);
                }
                if (destacar) {
                    divAcoesDestacadas.appendChild(acao);
                }
            });
        }
        function getAcoes()
        {
            var acoes = $$('#fldAcoes a');
            if (acoes.length == 0) return false;
            return acoes;
        }
    },
    mudaEstilos: function(h, s, l, hB, sB, lB, temporario)
    {
        if (typeof temporario == 'undefined') temporario = false;
        if (typeof h == 'undefined') {
            h = 0, s = 0, l = 100;
        }
        if (typeof hB == 'undefined') {
            hB = 210, sB = 100, lB = 100;
        }
        var background = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
        var css = atob(GM_getBase64('chrome://eproc/skin/eprocV2.css'));
        css = css.replace(/\$background/g, background);
        css = css.replace(/(hsla?)\(\$h, *(\d+)%, *(\d+)%\)/g, function(expr, fn, sPercent, lPercent)
        {
            return fn + '(' + h + ', ' + (s * Number(sPercent) / 100) + '%, ' + lPercent + '%)';
        });
        css = css.replace(/(hsla?)\(\$hB, *(\d+)%, *(\d+)%\)/g, function(expr, fn, sPercent, lPercent)
        {
            return fn + '(' + hB + ', ' + (sB * Number(sPercent) / 100) + '%, ' + (lB * Number(lPercent) / 100) + '%)';
        });
        css = css.replace(/\$s/g, s);
        css = css.replace(/\$l/g, l);
        var estilo = temporario ? Eproc.getStyle('extraMainTemp') : Eproc.getExtraMainStyle();
        estilo.innerHTML = css;
        $$('label[onclick^="listarTodos"], label[onclick^="listarEventos"], #txtEntidade, #txtPessoaEntidade').forEach(function(auto)
        {
          var id = auto.id.replace('lblListar', 'txt');
          auto = $('#' + id);
          if (auto) {
            auto.style.width = auto.clientWidth + 'px';
          }
        }, this);
    },
    mudaEstilosTemporariamente: function(h, s, l, hB, sB, lB)
    {
        Eproc.mudaEstilos(h, s, l, hB, sB, lB, true);
    },
    removeEstilosTemporarios: function()
    {
        var estilos = Eproc.getStyle('extraMainTemp');
        estilos.parentNode.removeChild(estilos);
    },
    salvaFundo: function(h, s, l, hB, sB, lB)
    {
        var grau = Eproc.isSegundoGrau() ? '2g' : '1g';
        GM_setValue('v2.fundo.' + grau, h + '/' + s + '/' + l);
        GM_setValue('v2.barra.' + grau, hB + '/' + sB + '/' + lB);
        Eproc.mudaEstilos(h, s, l, hB, sB, lB);
    },
    painel_secretaria_listar: function()
    {
        Eproc.addCssRule('#divInfraAreaDados { height: auto !important; }');
    },
    prevencao_judicial: function()
    {
        if (document.referrer.match(/\?acao=processo_selecionar&/)) {
            var voltarem = $$('button[id=btnVoltar]');
            voltarem.forEach(function(voltar)
            {
                voltar.setAttribute('onclick', 'location.href="' + document.referrer + '";');
            });
        }
    },        
    prevencao_judicial_bloco: function()
    {
        var buscarForm = $('#frmProcessoLista');
        var selecionados = $('#hdnInfraItensSelecionados');
        if (selecionados) {
            $$('#btnConsultar, .infraTdSetaOrdenacao a, #divInfraAreaPaginacao a, #divInfraAreaPaginacao select').forEach(function(el) {
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
        var botoes = $$('button[onclick^="submeterFrm("]');
        botoes.forEach(function(botao)
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
        if ($('#btnConsultar')) {
            var paginacao = $('#selPaginacao');
            var option = document.createElement('option');
            option.value = '10';
            option.textContent = '10 processos por p�gina';
            if (paginacao.querySelectorAll('option[selected]').length == 0) option.selected = true;
            paginacao.insertBefore(option, paginacao.firstChild);
            $$('.infraTable[summary="Tabela de Processos."]').forEach(function(table)
            {
                table.setAttribute('width', '');
                $$('th', table).forEach(function(th)
                {
                    th.setAttribute('width', '');
                });
                $$('tr[class^="infraTr"] td:nth-of-type(2) a:first-of-type', table).forEach(function(link, l)
                {
                    link.target = '_blank';
                    var tr = link.parentNode.parentNode;
                    var button = document.createElement('button');
                    button.className = 'infraButton extraBuscarPreventosButton';
                    button.textContent = 'Buscar Preventos';
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
                        var box = $('#lnkInfraID-' + processo).nextSibling;
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
    processo_cadastrar_2: function()
    {
        var auto = $('#txtDesAssunto');
        if (auto) {
            auto.style.width = auto.clientWidth + 'px';
        }
    },
    processo_consulta_listar: function()
    {
        var form = $('#frmProcessoEventoLista');
        form.action = location.pathname + location.search;
        var docsGedpro = $('#divDocumentosGedpro');
        if (docsGedpro) {
            var linkSecao = $('#divInfraBarraTribunalE').getElementsByTagName('a')[0];
            var estado = linkSecao.hostname.match(/\.jf(pr|rs|sc)\.(?:gov|jus)\.br/), host = 'trf4', linkGedpro = null;
            if (estado) {
                host = 'jf' + estado[1];
            }
            linkGedpro = 'http://gedpro.' + host + '.jus.br/visualizarDocumentos.asp?codigoDocumento=';
            var Doc = function(processo, numero, tipo)
            {
                this.toString = function() { return [tipo, numero].join(' '); };
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
                        if (typeof win == 'object' && !win.closed) {
                            return win.focus();
                        } else {
                            Eproc.windows['' + processo + numero] = window.open(e.target.href, '' + processo + numero, 'menubar=0,resizable=1,status=0,toolbar=0,location=0,directories=0,scrollbars=1');
                        }
                    };
                })(processo, numero), false);
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
            $$('tr[class^=infraTr]', docsGedpro).forEach(function(row, r)
            {
                var doc = Doc.fromRow(row);
                var newCell = processos[r].insertCell(processos[r].cells.length);
                newCell.appendChild(doc.link);
                row.parentNode.removeChild(row);
            });
        }
    },
    processo_evento_paginacao_listar: function()
    {
        this.processo_selecionar();
    },
    processo_seleciona_publica: function()
    {
        this.processo_selecionar();
    },
    obterLinkGedpro: function(onsuccess, onfailure)
    {
        if (typeof onfailure == 'undefined') onfailure = function(){};
        if (typeof onsuccess == 'undefined') onsuccess = function(){};
        var xhr = new XMLHttpRequest();
        xhr.open('HEAD', Eproc.loginGedpro.url);
        xhr.setRequestHeader('X-Ferramentas-e-Proc', '1');
        xhr.onreadystatechange = function(ev)
        {
            var url;
            if (this.readyState == 4 && this.status == 200 && (url = this.getResponseHeader('X-Ferramentas-e-Proc-Redirect'))) {
                onsuccess(url);
            } else if (this.readyState == 4) {
                onfailure();
            }
        };
        xhr.send();
    },
    processo_selecionar: function()
    {
        document.title = Eproc.getProcessoF();
        var linkGedpro = getLinkGedpro();
        if (linkGedpro) {
            linkGedpro.href = linkGedpro.getAttribute('onclick').match(/window.open\('([^']+)'/)[1];
            Eproc.loginGedpro = {
                host: null,
                url: linkGedpro.href
            }
            linkGedpro.removeAttribute('onclick');
            linkGedpro.target = '_blank';
            var linkCargaDocs = document.createElement('a');
            linkCargaDocs.className = 'extraLinkAcao';
            linkGedpro.addEventListener('click', function(e)
            {
                e.preventDefault();
                e.stopPropagation();
                if (Eproc.loginGedpro.host == null) {
                    linkCargaDocs.textContent = 'Obtendo link para o GEDPRO...';
                    return Eproc.obterLinkGedpro(
                        function(url)
                        {
                            var tempLink = document.createElement('a');
                            tempLink.href = url;
                            Eproc.loginGedpro.url = url;
                            Eproc.loginGedpro.host = tempLink.host;
                            linkCargaDocs.textContent = 'Carregar documentos do GEDPRO';                
                            linkCargaDocs.href = '#';
                            IELauncher(Eproc.loginGedpro.url);
                        },
                        function()
                        {
                            linkCargaDocs.textContent = 'Carregar documentos do GEDPRO';                
                            alert('N�o foi poss�vel obter o link para o Gedpro.');
                        }
                    );
                }
                IELauncher(Eproc.loginGedpro.url);
            }, false);
            var processo = $('#divInfraAreaProcesso');
            var tabelas = processo.getElementsByClassName('infraTable');
            var div = document.createElement('div');
            div.id = 'cargaDocsGedpro';
            var onLinkCargaDocsClick =  function()
            {
                if (Eproc.loginGedpro.host == null) {
                    var self = this;
                    self.textContent = 'Obtendo link para o GEDPRO...';
                    return Eproc.obterLinkGedpro(
                        function(url)
                        {
                            var tempLink = document.createElement('a');
                            tempLink.href = url;
                            Eproc.loginGedpro.url = url;
                            Eproc.loginGedpro.host = tempLink.host;
                            self.textContent = 'Tentando fazer login no GEDPRO...';
                            self.href = '#';
                            Eproc.getDocsGedpro();
                        },
                        function()
                        {
                            self.textContent = 'Carregar documentos do GEDPRO';
                            alert('N�o foi poss�vel obter o link para o Gedpro.');
                        }
                    );
                }
                this.textContent = 'Tentando fazer login no GEDPRO...';
                Eproc.getDocsGedpro();
            };
            var linkCargaDocs = new VirtualLink('Carregar documentos do GEDPRO', onLinkCargaDocsClick);
            linkCargaDocs.className = 'extraLinkAcao';
            div.appendChild(linkCargaDocs);
            processo.insertBefore(div, tabelas[tabelas.length - 1]);
            processo.insertBefore(document.createElement('br'), tabelas[tabelas.length - 1]);
            processo.insertBefore(document.createElement('br'), tabelas[tabelas.length - 1]);
        }
        function getLinkGedpro()
        {
            var linkGedpro = $$('a[onclick^="window.open(\'processo/acessar_processo_gedpro.php?acao=acessar_processo_gedpro"]');
            if (linkGedpro.length == 1) return linkGedpro[0];
            else return false;
        }
        var linkPrevencao = getLinkPrevencaoNaoExecutada();
        if (linkPrevencao) {
            var linkPrevencaoClicado = false, linkPrevencaoOldText = linkPrevencao.textContent;
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
                var xhr = new XMLHttpRequest();
                xhr.open('GET', e.target.href.replace(/'\);$/, ''));
                xhr.onreadystatechange = function()
                {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        var div = document.createElement('div');
                        div.innerHTML = xhr.responseText;
                        var form = div.querySelector('#frmProcessoLista');
                        if (form) {
                            form.action = xhr.responseText.match(/controlador\.php\?acao=prevencao_judicial&[^']+/);
                            form.querySelector('#acao').value = 'prevencao_judicial';
                            form.style.display = 'none';
                            document.body.appendChild(form);
                            form.submit();
                        } else {
                            restore();
                        }
                    } else if (this.readyState == 4) {
                        restore();
                    }
                };
                xhr.send('');
            };
            linkPrevencao.addEventListener('click', onLinkPrevencaoClick, false);
        }
        function getLinkPrevencaoNaoExecutada()
        {
            var linkPrevencao = $('#Prevencao');
            if (linkPrevencao && /N�O executada/.test(linkPrevencao.textContent)) return linkPrevencao;
            else return false;
        }
        var linkLembrete = getLinkLembrete();
        if (linkLembrete  && isCompetenciaCriminal()) {
        }
        function getLinkLembrete()
        {
            var linkLembrete = $$('a[href*="?acao=processo_lembrete_destino_cadastrar"]');
            if (linkLembrete.length == 1) return linkLembrete[0];
            else return false;
        }
        function isCompetenciaCriminal()
        {
            var txtCompetencia = $('#txtCompetencia');
            if (txtCompetencia) {
                var competencia = txtCompetencia.textContent;
                if (/Criminal/.test(competencia)) {
                    return true;
                }
            }
            return false;
        }
        function isInquerito()
        {
            var capa = $('#fldAssuntos');
            if (capa) {
                var classe = capa.getAttribute('data-classe');
                if (classe == '000120') {
                    return true;
                }
            }
            return false;
        }
        function VirtualLink(texto, funcao)
        {
            var vLink = document.createElement('a');
            vLink.href = '#';
            vLink.innerHTML = texto;
            vLink.addEventListener('click', function(e)
            {
                e.preventDefault();
                e.stopPropagation();
                funcao.call(this, e);
            }, false);
            return vLink;
        }
        var processosRelacionados = getProcessosRelacionados();
        if (processosRelacionados) {
            processosRelacionados.forEach(function(linkProcessoRelacionado)
            {
                linkProcessoRelacionado.target = '_blank';
            });
        }
        function getProcessosRelacionados()
        {
            var processosRelacionados = $$('#tableRelacionado td:nth-of-type(1) a');
            return (processosRelacionados.length > 0) ? processosRelacionados : false;
        }
        var iconTrueColor = {};
        iconTrueColor['DOC' ] = 'imagens/tree_icons/page_word.gif';
        iconTrueColor['RTF' ] = 'imagens/tree_icons/page_word.gif';
        iconTrueColor['XLS' ] = 'imagens/tree_icons/page_excel.gif';
        iconTrueColor['TXT' ] = 'imagens/tree_icons/page_white.gif';
        iconTrueColor['PDF' ] = 'imagens/tree_icons/page_white_acrobat.gif';
        iconTrueColor['GIF' ] = 'imagens/tree_icons/page_white_picture.gif';
        iconTrueColor['JPEG'] = 'imagens/tree_icons/page_white_picture.gif';
        iconTrueColor['JPG' ] = 'imagens/tree_icons/page_white_picture.gif';
        iconTrueColor['PNG' ] = 'imagens/tree_icons/page_white_picture.gif';
        iconTrueColor['HTM' ] = 'imagens/tree_icons/page_world.gif';
        iconTrueColor['HTML'] = 'imagens/tree_icons/page_world.gif';
        iconTrueColor['MP3' ] = 'imagens/tree_icons/page_white_cd.gif';
        iconTrueColor['N/A' ] = 'imagens/tree_icons/page_white_error.gif';
        function formatSize(size)
        {
            var kPowers = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var kPower = 0;
            while (size >= 1000) {
                size /= 1000;
                kPower++;
            }
            if (kPower > 0) {
                size = Math.floor(size * 10) / 10;
            }
            return size + kPowers[kPower];
        }
        $$('.infraTable').forEach(function(table, t, tables)
        {
            if (table.getAttribute('summary') == 'Eventos' || table.rows[0].cells[0].textContent == 'Evento') {
                $$('th', table).forEach(function(th)
                {
                    th.setAttribute('width', '');
                });
                $$('tr[class^="infraTr"]', table).forEach(function(tr, r, trs)
                {
                    var colunaDocumentos = tr.cells[4];
                    var tabelaDocumentos = $('table', colunaDocumentos);
                    if (tabelaDocumentos) {
                        $$('td', colunaDocumentos).forEach(function(subtd, subc, subtds)
                        {
                            var child = null, lembrete = null, onmouseover = null, onmouseout = null;
                            while (child = subtd.firstChild) {
                                var append = true;
                                if (child instanceof HTMLElement) {
                                    if (child.tagName.toUpperCase() == 'IMG') {
                                        onmouseover = child.getAttribute('onmouseover');
                                        onmouseout = child.getAttribute('onmouseout');
                                        var textoLembrete = /\('(Obs: .*)','',400\)/.exec(child.getAttribute('onmouseover'))[1];
                                        textoLembrete = /^Obs: (.*) \/ .*\(.*\)(?:<br \/>)?$/.exec(textoLembrete)[1];
                                        lembrete = document.createElement('div');
                                        lembrete.className = 'extraDocumentoObservacao';
                                        lembrete.appendChild(document.createTextNode(textoLembrete));
                                        lembrete.innerHTML = lembrete.innerHTML.replace(/&lt;br \/&gt;/g, '<br />');
                                        append = false;
                                    } else if (child instanceof HTMLAnchorElement && /^\?acao=processo_evento_documento_tooltip_alterar/.test(child.search)) {
                                        var textoLembrete = /\('(Obs: .*)','',400\)/.exec(child.getAttribute('onmouseover'))[1];
                                        textoLembrete = textoLembrete.split('<div style="margin-bottom:0.3em;" class="infraTooltipTitulo"></div>')[0];
                                        textoLembrete = /^Obs: (.*) \/ .*\(.*\)(?:<br \/>)?$/.exec(textoLembrete)[1];
                                        lembrete = document.createElement('div');
                                        lembrete.className = 'extraDocumentoLembrete';
                                        lembrete.appendChild(document.createTextNode(textoLembrete));
                                        lembrete.innerHTML = lembrete.innerHTML.replace(/\\'/g, "'").replace(/&lt;br \/&gt;/g, '<br />');
                                    } else if (lembrete && child instanceof HTMLAnchorElement && /^\?acao=processo_evento_documento_tooltip_cadastrar/.test(child.search)) {
                                        child.setAttribute('onmouseover', onmouseover);
                                        child.setAttribute('onmouseout', onmouseout);
                                    }
                                }
                                if (! append) {
                                    subtd.removeChild(child);
                                    if (subtd.firstChild instanceof Text && subtd.firstChild.textContent == '�') {
                                        subtd.removeChild(subtd.firstChild);
                                    }
                                } else if (append instanceof HTMLElement) {
                                    colunaDocumentos.appendChild(append);
                                } else {
                                    colunaDocumentos.appendChild(child);
                                }
                            }
                            colunaDocumentos.appendChild(document.createElement('br'));
                            if (lembrete) {
                                colunaDocumentos.appendChild(lembrete);
                            }
                        });
                        colunaDocumentos.removeChild(tabelaDocumentos);
                    } else {
                        var children = Array.prototype.slice.call(colunaDocumentos.childNodes);
                        children.forEach(function(child)
                        {
                            if (!child.tagName || (child.tagName.toUpperCase() == 'BR')) {
                                colunaDocumentos.removeChild(child);
                            } else if (child.tagName.toUpperCase() == 'A' && /^\?acao=acessar_documento/.test(child.search)) {
                                colunaDocumentos.insertBefore(document.createElement('br'), child.nextSibling);
                            }
                        });
                    }
                    $$('a[href*="?acao=acessar_documento"]', colunaDocumentos).forEach(function(docLink, l, docLinks)
                    {
                        docLink.href += '&titulo_janela=' + encodeURIComponent(tr.cells[0].textContent.trim() + ' - ' + docLink.textContent);
                        docLink.className = 'docLink';
                        var ext = docLink.getAttribute('data-mimetype');
                        if (ext) {
                            docLink.href += '&tipo_doc=' + ext;
                            ext = ext.toUpperCase();
                            if (! (ext in iconTrueColor)) {
                                ext = 'N/A';
                            }
                            var img = $('img', docLink);
                            if (img) {
                                img.src = iconTrueColor[ext];
                            } else {
                                img = docLink.previousSibling;
                                if (('tagName' in img) && (img.tagName.toUpperCase() == 'IMG')) { 
                                    img.src = iconTrueColor[ext];
                                }
                            }
                        }
                        var size = docLink.getAttribute('data-bytes');
                        if (size) {
                            if (docLink.hasAttribute('onmouseover')) {
                                docLink.setAttribute('onmouseover', docLink.getAttribute('onmouseover').replace(/(\('Sigilo:.*)(','',400\))/, '$1[' + formatSize(size) + ']$2'));
                            } else if (docLink.hasAttribute('title')) {
                                docLink.setAttribute('title', docLink.getAttribute('title').replace(/(Sigilo:.*)$/, '$1 [' + formatSize(size) + ']'));
                            }
                        }
                        var id = Eproc.processo + r + docLink.innerHTML.replace(/<[^>]*>/g, '');
                        docLink.addEventListener('click', function(e)
                        {
                            e.stopPropagation();
                            e.preventDefault();
                            for (var docLink = e.target; docLink.tagName.toUpperCase() != 'A'; docLink = docLink.parentNode);
                            var mime = getLinkMimeType(docLink);
                            if (! isEmbeddable(mime)) {
                                window.open(docLink.href.replace('?acao=acessar_documento&', '?acao=acessar_documento_implementacao&'), id, 'menubar=0');
                                return;
                            }
                            var lastClicked = $('#lastClicked');
                            if (lastClicked) {
                                lastClicked.removeAttribute('id');
                            }
                            docLink.id = 'lastClicked';
                            var menuFechar = $('#extraFechar');
                            if (menuFechar) {
                                menuFechar.style.visibility = 'visible';
                            }
                            var win = Eproc.windows[id];
                            if (typeof win == 'object' && !win.closed) {
                                win.focus();
                            } else {
                                Eproc.windows[id] = window.open(docLink.href, id, 'menubar=0,resizable=1,status=0,toolbar=0,location=0,directories=0,scrollbars=1');
                            }
                        }, false);
                    })
                });
                table.className += ' extraTabelaEventos';
                function getLinkMimeType(docLink)
                {
                    var type = docLink.getAttribute('data-mimetype');
                    return type ? type.toUpperCase() : 'PDF';
                }
                function isEmbeddable(mime)
                {
                    if (mime == 'PDF') {
                        var mimetype = navigator.mimeTypes.namedItem('application/pdf');
                        if (mimetype) return mimetype.enabledPlugin;
                        return false;
                    }
                    return /^(TXT|PDF|GIF|JPEG|JPG|PNG|HTM|HTML)$/.exec(mime);
                }
            }
        });
        var tableRelacionado = $('#tableRelacionado');
        var labelRelacionado = $('#lblRelac') || $('#lblProcRel');
        if (tableRelacionado && labelRelacionado) {
            if (tableRelacionado.rows.length > 2) {
                var div = document.createElement('div');
                labelRelacionado.parentNode.insertBefore(div, labelRelacionado);
                div.appendChild(labelRelacionado);
                div.appendChild(tableRelacionado);
                $$('tr', tableRelacionado).forEach(function(row)
                {
                    if (row.cells.length == 0) {
                        tableRelacionado.deleteRow(row.rowIndex);
                    }
                });
                tableRelacionado.appendChild(document.createElement('tfoot'));
                tableRelacionado.tFoot.insertRow(0).insertCell(0).innerHTML = 'E OUTROS (' + (tableRelacionado.tBodies[0].rows.length - 1) + ')...';
                div.className = 'extraRelacionados';
                var br = div.previousSibling.previousSibling;
                if ('tagName' in br && br.tagName.toUpperCase() == 'BR') {
                    br.parentNode.removeChild(br);
                }
                Eproc.addCssRule('#tableRelacionado { display: table; }');
                Eproc.addCssRule('#labelRelacionado { display: block; }');
                Eproc.addCssRule('.extraRelacionados tr { display: none; }');
                Eproc.addCssRule('.extraRelacionados tr:first-of-type { display: inherit; }');
                Eproc.addCssRule('.extraRelacionados tfoot tr { display: inherit; }');
                Eproc.addCssRule('.extraRelacionados:hover tfoot tr { display: none; }');
                Eproc.addCssRule('.extraRelacionados:hover tr { display: inherit; }');
            }
        }
        var menu = Eproc.getMenu();
        if (menu) {
            var fechar = document.createElement('li');
            fechar.id = 'extraFechar';
            fechar.style.visibility = 'hidden';
            var fecharLink = new VirtualLink('<div class="infraItemMenu"><div class="infraRotuloMenu">Fechar as janelas abertas</div></div>', Eproc.closeAllWindows);
            $('.infraRotuloMenu', fecharLink).textContent = 'Fechar as janelas abertas';
            fecharLink.className = 'infraMenuRaiz';
            fechar.appendChild(fecharLink);
            menu.appendChild(fechar);
            var setFecharProperties = function(pos, y, w)
            {
                var staticArgs = Array.prototype.slice.call(arguments);
                ['position', 'top', 'width'].forEach(function(property, p)
                {
                    fechar.style[property] = staticArgs[p];
                });
            };
            var onWindowScroll = function(e)
            {
                setFecharProperties('', '', '');
                var fecharOffsetTop = fechar.offsetTop;
                var fecharHeight = fechar.clientHeight;
                var minimumOffset = (window.innerHeight - fecharHeight) / 2;
                if (fecharOffsetTop - window.pageYOffset < minimumOffset) {
                    setFecharProperties('fixed', minimumOffset + 'px', menu.clientWidth + 'px');
                }
            };
            ['scroll', 'resize'].forEach(function(eventName)
            {
                window.addEventListener(eventName, onWindowScroll, false);
            });
        }

        function MarkersContainer(container)
        {
            var cssRules = {};

            this.setSelectorRules = function(selector, rules)
            {
                if (! (selector in cssRules)) {
                    Eproc.addCssRule('.' + selector + ' { ' + rules + ' }');
                    cssRules[selector] = rules;
                }
            };
            this.add = function(marker)
            {
                this.setSelectorRules(marker.selector, marker.cssRules);
                marker.appendTo(container);
            };

            this.setSelectorRules('extraMarker', 'float: left; padding: 5px; -moz-border-radius: 5px; font-size: 1.2em; color: white; margin-left: 5px; font-weight: bold;');
        }

        function Marker()
        {
            var marker;

            this.create = function (text)
            {
                marker = document.createElement('div');
                marker.className = 'extraMarker ' + this.selector;
                marker.textContent = text;
            };
            this.appendTo = function(container)
            {
                container.appendChild(marker);
            };
        }

        function ReuPresoMarker()
        {
            this.create('R�U PRESO');
        }
        ReuPresoMarker.prototype = new Marker();
        ReuPresoMarker.prototype.selector = 'extraMarkerReuPreso';
        ReuPresoMarker.prototype.cssRules = 'background-color: red;';

        function PrioridadeMarker()
        {
            this.create('Tramita��o priorit�ria');
        }
        PrioridadeMarker.prototype = new Marker();
        PrioridadeMarker.prototype.selector = 'extraMarkerPrioridade';
        PrioridadeMarker.prototype.cssRules = 'background-color: brown;';

        var comandos = $('#divInfraBarraComandosSuperior');
        if (comandos) {
            var markers = new MarkersContainer(comandos);
            var reuPreso = getReuPreso();
            if (reuPreso) {
                markers.add(new ReuPresoMarker());
                removeReuPreso(reuPreso);
            }
            var prioridade = getPrioridadeText();
            if (prioridade == 'Sim') {
                markers.add(new PrioridadeMarker());
            }
        }

        function removeReuPreso(reuPreso)
        {
            var container = reuPreso.parentNode;
            if (/^(FIELDSET|DIV)$/.test(container.tagName.toUpperCase())) {
                var next = container.nextSibling;
                if ('tagName' in next && next.tagName.toUpperCase() == 'BR') {
                    container.parentNode.removeChild(next);
                }
                container.parentNode.removeChild(container);
            }
        }
        function getPrioridadeText()
        {
            return getLabelValue('Prioridade Atendimento: ');
        }
        function getLabelValue(text)
        {
            var labelFound = null;
            $$('#conteudoInfAdicional td label').forEach(function(label)
            {
                if (label.textContent == text) {
                    labelFound = label;
                }
            });
            try {
                var label = labelFound.parentNode.nextSibling.childNodes[0];
	            return label.textContent;
            } catch (e) {
                return null;
            }
        }
        function getReuPreso()
        {
            var lblTextoAtencao = $('#lblTextoAtencao');
            if (lblTextoAtencao && lblTextoAtencao.textContent == 'PROCESSO COM R�U PRESO') return lblTextoAtencao;
            return null;
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
        iframe.style.display = 'none';
        iframe.addEventListener('load', function(e)
        {
            var erroNoLogin = false;
            try {
                erroNoLogin = e.target.contentDocument.querySelectorAll('.infraExcecao').length > 0;
            } catch (ex) {
            }
            if (erroNoLogin) {
                alert('N�o foi poss�vel fazer login no GEDPRO.');
                if (isEvent) {
                    $('#loginGedpro').textContent = 'Falta de permiss�o de acesso?';
                } else {
                    $('#cargaDocsGedpro a').textContent = 'Carregar documentos do GEDPRO';
                }
                throw 'Erro de login GEDPRO';
            }
            if (isEvent) {
                $('#loginGedpro').textContent = 'Falta de permiss�o de acesso?';
            } else {
                $('#cargaDocsGedpro a').textContent = 'Carregando documentos do GEDPRO...';
            }
            if (isEvent) {
                alert('Feche o documento e tente novamente agora.');
            } else {
                Eproc.getDocsGedpro('arvore');
            }
        }, false);
        $('#divInfraAreaTelaE').appendChild(iframe);
        iframe.src = Eproc.loginGedpro.url;
    },
    isSegundoGrau: function()
    {
        return this.getEstado() == null;
    },
    getEstado: function()
    {
        var linkSecao = $('#divInfraBarraTribunalE a');
        var estado = (linkSecao ? linkSecao.hostname : location.hostname).match(/\.jf(pr|rs|sc)\.(?:gov|jus)\.br/);
        if (estado) return estado[1];
        else return null;
    },
    getNumprocF: function(numproc)
    {
        var numprocF = '';
        for (var i = 0, d; d = numproc.substr(i, 1); i++) {
            if (i == 7) numprocF += '-';
            if (i == 9 || i == 13 || i == 16) numprocF += '.';
            numprocF += d;
        }
        return numprocF;
    }
};
Eproc.init();

