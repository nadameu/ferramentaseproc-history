/**
 * @name chrome://eproc/content/EprocSandbox/V2.js
 * @fileOverview Define a classe EprocV2Loader
 * @author Nadameu
 */
if ('undefined' == typeof(EprocSandbox)) {
  var EprocSandbox = {};
}

/**
 * Adiciona um estilo à página
 * 
 * @param {String} css Código CSS
 */
function addStyle(css, id)
{
  var style, created = false;
  if ('undefined' == typeof(id)) {
    id = null;
  } else {
    style = $('#' + id);
  }
  if (!style) {
    style = document.createElement('style');
    if (id) {
      style.id = id;
    }
    created = true;
  }
  style.innerHTML = css;
  if (created) {
    $('head').appendChild(style);
  }
}

/**
 * Atalho para document.querySelector()
 * 
 * @param {String} sel Seletor CSS
 * @returns {HTMLElement}
 */
function $(sel)
{
  return document.querySelector(sel);
}

/**
 * Atalho para document.querySelectorAll()
 * 
 * @param {String} sel Seletor CSS
 * @param {Object} context Contexto da seleção
 * @returns {HTMLElement[]}
 */
function $$(sel, context)
{
  if ('undefined' == typeof(context)) {
    context = document;
  }
  return [].slice.call(context.querySelectorAll(sel));
}
/**
 * Lida com todas as páginas referentes ao e-Proc V2
 * 
 * @namespace Lida com todas as páginas referentes ao e-Proc V2
 */
EprocSandbox.V2 = {
  /**
   * Janelas abertas
   * 
   * @type Array
   */
  windows: [],
  apenso_processo_listar: function()
  {
    this.setCorCapa();
    this.colorirTabela('Tabela de Apensos do Processo', true);
  },
  citacao_bloco_filtrar_destino: function()
  {
    this.colorirTabela('Tabela de Processos.');
  },
  citacao_bloco_listar_destino: function()
  {
    this.colorirTabela('Tabela de Processos.');
  },
  /**
   * Pinta os lembretes com cores aleatórias
   * 
   * @param {HTMLTableElement} table Tabela que contém os lembretes
   */
  colorirLembretes: function(table)
  {
    var separator = document.createElement('div');
    separator.className = 'extraSeparador';
    table.parentNode.insertBefore(separator, table);
    $$('tr.infraTrClara, tr.infraTrEscura', table).forEach(function(tr, r)
    {
      var destino = tr.cells[3].textContent, classes = ['extraLembrete'];
      var pessoa = $('#lblInfraUnidades');
      if (!pessoa) {
        pessoa = window.parent.document.querySelector('#lblInfraUnidades');
      }
      if (new RegExp(destino + '$').test(pessoa.textContent)) {
        destino = 'VOCÊ';
        classes.push('extraLembreteVoce');
      }
      var inicio =
        tr.cells[6].textContent == ' - ' ? null : tr.cells[6].textContent, fim =
        tr.cells[7].textContent == ' - ' ? null : tr.cells[7].textContent;
      var floater = document.createElement('div');
      floater.innerHTML =
        '<div class="extraLembretePara">Para: '
          + destino
          + (tr.cells[8].textContent == 'N' ? ' (<abbr '
            + 'onmouseover="return infraTooltipMostrar('
            + '\'Este lembrete não será exibido na movimentação processual\','
            + '\'Movimentação processual\',' + '400);" '
            + 'onmouseout="return infraTooltipOcultar();">N</abbr>)' : '')
          + (inicio ? ' (<abbr ' + 'onmouseover="return infraTooltipMostrar('
            + '\'Visível de ' + inicio + '<br/>até ' + fim + '\','
            + '\'Prazo de exibição\',' + '400);" '
            + 'onmouseout="return infraTooltipOcultar();">P</abbr>)' : '')
          + '</div>' + tr.cells[4].textContent
          + '<div class="extraLembreteData">' + tr.cells[5].textContent
          + '<br/>' + tr.cells[1].textContent + '</div>';
      floater.className = classes.join(' ');
      floater.childNodes[0].appendChild(tr.cells[9].childNodes[0]);
      table.parentNode.insertBefore(floater, separator);
    }, this
    );
    table.parentNode.removeChild(table);
  },
  /**
   * Pinta uma tabela com as cores das classes
   * 
   * @param {String} summary Texto do attributo "summary" da tabela
   * @param {Boolean} [noCheckbox=false] Verdadeiro se a tabela não possui
   *        checkbox na primeira coluna
   */
  colorirTabela: function(summary, noCheckbox)
  {
    if ('undefined' == typeof(noCheckbox)) {
      noCheckbox = false;
    }
    var col;
    var table = $('table[summary="' + summary + '"]');
    if (!table) return;
    table.setAttribute('width', '');
    $$('th', table).forEach(function(th, h)
      {
        th.setAttribute('width', '');
        if (th.textContent == 'Classe') {
          col = h;
        }
      });
    if (col) {
      this.getClasses();
    }
    $$('tr.infraTrClara, tr.infraTrEscura', table).forEach(function(tr)
    {
      $$('a', tr.cells[noCheckbox ? 0 : 1])[0].setAttribute('target', '_blank');
      if (col) {
        var classe = tr.cells[col].innerHTML.split('<')[0], cor;
        if (cor = EprocSandbox.V2.Classes[classe]) {
          tr.setAttribute('data-cor', cor);
        }
      }
    }
    );
  },
  corrigirPreventos: function()
  {
    var numproc = /\&num_processo.*$/.exec(location.search);
    $$('.infraTable[summary="Tabela de Preventos."]').forEach(
      function(originalTable)
      {
        var div = document.createElement('div');
        originalTable.parentNode.insertBefore(div, originalTable);
        var table = originalTable.parentNode.removeChild(originalTable);
        table.setAttribute('width', '');
        var cabecalhos = $$('th', table);
        cabecalhos.forEach(function(th)
          {
            th.setAttribute('width', '');
          });
        cabecalhos[0].parentNode.insertBefore(cabecalhos[1], cabecalhos[0]);
        $$('tr.infraTrClara, tr.infraTrEscura', table).forEach(function(tr)
        {
          tr.insertBefore(tr.cells[1], tr.cells[0]);
          if (numproc) {
            var cell = $$('table', tr)[0].rows[0].cells[0];
            cell.innerHTML =
              '<b>Processo: <a href="controlador.php?acao=processo_selecionar&acao_origem=prevencao_judicial_bloco'
                + numproc
                + '" target="_blank">'
                + /[0-9\.\-]{24}/.exec(cell.innerHTML) + '</a></b>';
          }
        }
        );
        var todos =
          /Eproc2/.test(table.rows[1].cells[1].textContent)
            && /Siapro/
              .test(table.rows[table.rows.length - 1].cells[1].textContent);
        if (todos) {
          var linhas = table.rows.length - 1, processos = linhas / 2;
          for (var i = processos; i > 0; i--) {
            var eproc = table.rows[i], siapro = table.rows[linhas];
            eproc.parentNode.insertBefore(siapro, eproc.nextSibling);
            siapro.deleteCell(siapro.cells[0]);
            eproc.cells[0].rowSpan = 2;
          }
        }
        div.parentNode.insertBefore(table, div);
        div.parentNode.removeChild(div);
      }
    );
    $$('.tabSubTab').forEach(function(tab)
    {
      if (tab.rows.length > 9) {
        var html = tab.parentNode.innerHTML;
        tab.parentNode.innerHTML =
          html.split('<tr><td><br></td><td><br></td></tr>')
            .join('</tbody></table><br/>' + /<table[^>]+>/.exec(html)
              + '<tbody>')
      }
    }
    );
    this.getClasses();
    $$('.tabSubTab').forEach(function(tab)
      {
        $$('a', tab.rows[0].cells[0]).forEach(function(link)
          {
            link.target = '_blank';
          });
        var classe = /^\d+ - (.*)$/.exec(tab.rows[1].cells[1].textContent)[1];
        var cor = EprocSandbox.V2.Classes[classe];
        if (cor) {
          tab.className += ' extraCapa';
          tab.setAttribute('data-cor', cor);
        }
      });
  },
  entrar: function()
  {
    var config = $('#lnkConfiguracaoSistema');
    if (config) {
      config.parentNode.removeChild(config);
    }
    var perfis = document.getElementsByName('rdoUsuario');
    if (perfis.length == 0) return;
    var timer;
    var padrao = EprocSandbox.Preferences.get('v2.perfil');
    Array.forEach(perfis, function(perfil)
      {
        var row = perfil.parentNode;
        do {
          row = row.parentNode;
        } while (row.tagName.toLowerCase() != 'tr');
        var id = /acaoLogar\('(\d+)'\);/.exec(row.getAttribute('onclick'))[1];
        row.setAttribute('onclick', '');
        var perfilName = [/\(([^\)]*)\)/.exec(row.cells[3].textContent)[1]];
        if (perfilName[0] == '') {
          perfilName = [];
        }
        perfilName.push(row.cells[2].textContent);
        perfilName = perfilName.join(' / ');
        addListener(row, 'click', function(e)
          {
            perfil.checked = true;
            if (timer) {
              window.clearInterval(timer);
            }
            this.onPerfilSelected(e, id, perfilName);
            window.wrappedJSObject.acaoLogar(id);
          }, this);
        if (id == padrao) {
          perfil.checked = true;
          var nb = chromeWindow.getNotificationBox(window);
          var updateBar = function(sec)
          {
            var oldBar = nb.getNotificationWithValue('eproc-perfil-padrao');
            if (sec == 0) {
              window.clearInterval(timer);
              nb.removeNotification(oldBar);
            } else if (oldBar) {
              oldBar.setLabel(EprocSandbox.Strings.get(
                'perfil.autologin.message', [perfilName, sec]
              ));
            }
          }
          var newBar =
            addNotification(nb, EprocSandbox.Strings.get(
                'perfil.autologin.message', [perfilName, 3]
              ), 'eproc-perfil-padrao',
              'chrome://eproc/skin/stapler-blue-32.png',
              nb.PRIORITY_WARNING_MEDIUM, [{
                label: EprocSandbox.Strings.get('perfil.autologin.cancel'),
                accessKey: EprocSandbox.Strings
                  .get('perfil.autologin.cancel.key'),
                popup: null,
                callback: function()
                {
                  updateBar(0);
                  perfil.checked = false;
                }
              }]
            );
          var times = 0;
          timer = window.setInterval(function()
            {
              times++;
              updateBar(3 - times);
              if (times == 3) {
                window.wrappedJSObject.acaoLogar(id);
              }
            }, 1000);
        }
      }, this);

  },
  gerenciamento_partes_listar: function()
  {
    this.setCorCapa();
  },
  /**
   * Obtém as classes e as respectivas cores
   */
  getClasses: function()
  {
    evalInSandbox('chrome://eproc/content/EprocSandbox/V2/Cores.js');
    evalInSandbox('chrome://eproc/content/EprocSandbox/V2/Classes.js');
  },
  /**
   * Obtém os documentos do Gedpro
   */
  getDocsGedpro: function(url)
  {
    if ('undefined' == typeof(url)) {
      this.reloginGedpro();
      return;
    } else if (url == 'arvore') {
      var that = this;
      GM_xmlhttpRequest({
          method: 'GET',
          url: 'http://' + that.loginGedpro.host
            + '/arvore2.asp?modulo=Textos do Processo&processo='
            + EprocSandbox.Address.params.num_processo
            + '&numeroProcessoVisual=NPV&localizadorProcesso=LP',
          mimeType: 'application/xml; charset=ISO-8859-1',
          onload: function(obj)
          {
            that.loginGedpro.docs = /[^']PathXMLOriginal =  "([^"]+)"/.exec(obj.responseText)[1];
            var bogusTimer, bogusFunction = function()
            {
              window.clearTimeout(bogusTimer);
              that.getDocsGedpro(1);
            };
            bogusTimer = window.setTimeout(bogusFunction, 100);
            return;
          }
        });
    } else {
      var that = this;
      GM_xmlhttpRequest({
        method: 'GET',
        url: that.loginGedpro.docs + '&pgtree=' + url,
        mimeType: 'application/xml; charset=ISO-8859-1',
        onload: function(obj)
        {
          var div = document.createElement('div');
          div.innerHTML = obj.responseText;
          var maiorIcone = 0;
          $$('reg', div).forEach(function(reg)
            {
              var tamanho = reg.getAttribute('icones').length / 3
              if (tamanho > maiorIcone) {
                maiorIcone = tamanho;
              }
            });
          var table = document.createElement('table');
          table.className = 'infraTable';
          var head = table.insertRow(0);
          ['', 'Documento', 'Número', 'Ass.', 'Data Documento', 'Criação',
            'Edição'].forEach(function(text, i)
            {
              var th = document.createElement('th');
              if (i == 1) {
                th.colSpan = maiorIcone;
              }
              th.className = 'infraTh';
              th.textContent = text;
              head.appendChild(th);
            });
          table.rows[0].cells[3].title = 'Assinado digitalmente';
          var arvore = [], qtdDocs = 0;
          $$('reg', div).forEach(function(reg, r)
          {
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
                iI0: 'I.gif'
              }[icones.substr(i, 3)];
              row.insertCell(row.cells.length).innerHTML =
                '<img style="cursor: inherit;" src="http://'
                  + that.loginGedpro.host + '/images/' + icone + '"/>';
            }
            var rotulo = row.insertCell(row.cells.length);
            rotulo.colSpan = maiorIcone - (icones.length / 3) + 1;
            if (reg.getAttribute('codigoTipoNodo') == 2) {
              rotulo.textContent =
                reg.getAttribute('nomeTipoDocumentoExibicao');
              rotulo.style.cursor = 'pointer';
              if (reg.getAttribute('MaiorAcesso') >= 8) {
                rotulo.style.color = 'green';
              } else if (reg.getAttribute('MaiorAcesso') >= 2) {
                rotulo.style.color = 'blue';
              } else {
                rotulo.style.color = 'gray';
                rotulo.style.cursor = 'inherit';
              }
              row.insertCell(row.cells.length).textContent =
                reg.getAttribute('codigoDocumento');
              if (reg.getAttribute('assinaturaDigital')) {
                row.insertCell(row.cells.length).innerHTML =
                  '<img style="cursor: inherit;" src="http://'
                    + that.loginGedpro.host + '/images/assinatura.gif"/>';
              } else {
                row.insertCell(row.cells.length).innerHTML = '&nbsp;';
              }
              row.insertCell(row.cells.length).textContent =
                reg.getAttribute('dataDocumento');
              row.insertCell(row.cells.length).innerHTML =
                [reg.getAttribute('siglaCriador'),
                  reg.getAttribute('dataCriacao')].join('<br/>');
              row.insertCell(row.cells.length).innerHTML =
                [
                  'Versão ' + reg.getAttribute('numeroVersaoDocumento')
                    + ' por ' + reg.getAttribute('siglaEditor'),
                  reg.getAttribute('dataCriacao')].join('<br/>');
              if (rotulo.style.color != 'gray') {
                var codigoNodo = reg.getAttribute('codigoNodo'), codigoDocumento =
                  reg.getAttribute('codigoDocumento');
                addListener(rotulo, 'click', function(e)
                {
                  e.preventDefault();
                  e.stopPropagation();
                  var win =
                    that.windows['' + EprocSandbox.Address.params.num_processo
                      + codigoNodo];
                  var isClosed = 'undefined' == typeof(win);
                  if (!isClosed && ('focus' in win)) {
                    try {
                      win.window;
                      isClosed = true;
                    } catch (ex) {
                      return win.focus();
                    }
                  }
                  if (isClosed) {
                    that.windows['' + EprocSandbox.Address.params.num_processo
                      + codigoNodo] =
                      window
                        .open(
                          'http://' + that.loginGedpro.host
                            + '/visualizarDocumentos.asp?codigoDocumento='
                            + codigoDocumento,
                          '' + EprocSandbox.Address.params.num_processo
                            + codigoNodo,
                          'menubar=0,resizable=1,status=0,toolbar=0,location=0,menubar=0,directories=0,scrollbars=1'
                        );
                  }
                }
                );
              }
            } else {
              if (reg.getAttribute('codigoTipoNodo') == 0) {
                rotulo.textContent = 'Documentos do GEDPRO';

              } else if (reg.getAttribute('codigoTipoNodo') == 1) {
                rotulo.textContent = reg.getAttribute('descricaoIncidente');
              }
              var cell = row.insertCell(row.cells.length);
              cell.colSpan = 5;
            }
            qtdDocs++;
          }
          );
          var pai = $('#cargaDocsGedpro');
          pai.textContent = '';
          pai.appendChild(table);
          var next = table.nextSibling;
          if (url > 1) {
            var link = document.createElement('a');
            link.href = '#';
            link.textContent = '<';
            addListener(link, 'click', function(e)
            {
              e.preventDefault();
              e.stopPropagation();
              return that.getDocsGedpro(url - 1);
            }, that);
            pai.appendChild(link);
            pai.appendChild(document.createTextNode(' '));
          }
          pai.appendChild(document.createTextNode('Página ' + url + ' '));
          var link = document.createElement('a');
          link.href = '#';
          link.textContent = '>';
          addListener(link, 'click', function(e)
          {
            e.preventDefault();
            e.stopPropagation();
            return that.getDocsGedpro(url + 1);
          }, that);
          pai.appendChild(link);
          pai.appendChild(document.createElement('br'));
          var link = document.createElement('a');
          link.href = '#';
          link.textContent = 'Falta de permissão de acesso?';
          addListener(link, 'click', that.reloginGedpro, that);
          pai.appendChild(link);
        }
      }
      );
    }
  },
  /**
   * Retorna o número do processo atual, formatado.
   * 
   * @returns {String} Número do processo formatado
   */
  getProcessoF: function()
  {
    var processo = EprocSandbox.Address.params.num_processo;
    while (String(processo).length < 20)
      processo = '0' + processo;
    return processo.substr(0, 7) + '-' + processo.substr(7, 2) + '.'
      + processo.substr(9, 4) + '.' + processo.substr(13, 1) + '.'
      + processo.substr(14, 2) + '.' + processo.substr(16, 4);
  },
  /**
   * Adiciona os menus de seleção da cor de fundo e da cor da barra
   */
  infra_configurar: function()
  {
    var grau = EprocSandbox.Address.grau == 2 ? '2grau' : '1grau';
    var selected = 0, current = EprocSandbox.Preferences.get('v2.cor.' + grau);
    var menu = $('#selInfraCores');
    menu.setAttribute('onchange', '');
    menu.textContent = '';
    for (var steps = 15, i = 0, cl; (cl = Math.floor(i * steps)) < (360 + steps); i++) {
      var h = 0, s = 25, sBS = 64, l = 96;
      if (cl >= 360) {
        s = 0, sBS = 0, l = 96;
      } else {
        h = Math.floor(cl);
      }
      var valor = [h, s, l].join('/');
      var cor = document.createElement('option');
      cor.textContent = EprocSandbox.Strings.get('cor.label', [i + 1]);
      cor.style.backgroundColor = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
      cor.style.color = 'hsl(' + h + ', ' + sBS + '%, 50%)';
      cor.style.border = '1px solid #888';
      cor.setAttribute('data-cor', valor);
      if (h == 0 && s > 0) {
        cor.textContent +=
          ' (' + EprocSandbox.Strings.get('cor.vermelho.label') + ')';
        cor.value = 'vermelho';
      } else if (h == 120 /* 118 */) {
        cor.textContent +=
          ' (' + EprocSandbox.Strings.get('cor.verde.label') + ')';
        cor.value = 'verde_limao';
      } else if (h == 195 /* 196 */) {
        cor.textContent +=
          ' (' + EprocSandbox.Strings.get('cor.azul.label') + ')';
        cor.value = 'azul_celeste';
      } else if (h == 345) {
        cor.textContent +=
          ' (' + EprocSandbox.Strings.get('cor.cereja.label') + ')';
        cor.value = 'cereja';
      }
      if (valor == current) {
        selected = i;
      }
      menu.appendChild(cor);
    }
    menu.selectedIndex = selected;
    function onChange(e)
    {
      var selected = e.target.childNodes[e.target.selectedIndex];
      this.setCores(grau, selected.getAttribute('data-cor'), true);
      if (!e.keyCode && selected.getAttribute('value')) {
        window.wrappedJSObject.infraEsquemaCoresSistema(selected.value);
        e.target.form.submit();
      }
    }
    addListener(menu, 'change', onChange, this);
    addListener(menu, 'keyup', onChange, this);
  },
  init: function()
  {
    if ($$('.infraAreaGlobal').length) {
      var grau = EprocSandbox.Address.grau == 2 ? '2grau' : '1grau';
      this.setCores(grau);
    }
    var unidades = $('#selInfraUnidades');
    if (unidades) {
      unidades.setAttribute('onchange', '');
      addListener(unidades, 'change', function(e)
        {
          var options = $$('option', unidades);
          this.onPerfilSelected(e, unidades.value,
            options[unidades.selectedIndex].textContent
          );
          unidades.form.submit();
        }, this);
    }
    if ($('#divInfraAreaProcesso')) {
      addStyle(' #infraDivImpressao { display: none; } @media print { #divInfraAreaGlobal { display: none; } #infraDivImpressao { display: block; } }');
      $('#infraDivImpressao').textContent =
        $('#divInfraAreaProcesso').innerHTML;
      $$('#btnImprimir').forEach(function(btn)
        {
          btn.setAttribute('onclick', 'window.print();');
        });
    }
    if (EprocSandbox.Address.acao in this) {
      this[EprocSandbox.Address.acao]();
    }
    if ($('#divInfraAreaProcesso')) {
      $('#infraDivImpressao').innerHTML = $('#infraDivImpressao').textContent;
    }
  },
  intimacao_bloco_filtrar_destino: function()
  {
    this.colorirTabela('Tabela de Processos.');
  },
  intimacao_bloco_listar_destino: function()
  {
    this.colorirTabela('Tabela de Processos.');
  },
  localizador_listar: function()
  {
    this.setLastProcesso();
  },
  localizador_processos_alterar_destino: function()
  {
    this.colorirTabela('Tabela de Processos por Localizador.');
  },
  localizador_processos_lista: function()
  {
    this.colorirTabela('Tabela de Processos por Localizador.');
  },
  localizador_processos_lista_destino: function()
  {
    this.colorirTabela('Tabela de Processos por Localizador.');
  },
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
      numproc +=
        '2010404' + EprocSandbox.Preferences.get('v2.secao')
          + EprocSandbox.Preferences.get('v2.subsecao');
    }
    e.target.value = numproc;
  },
  onPerfilSelected: function(e, id, name)
  {
    var padrao = EprocSandbox.Preferences.get('v2.perfil');
    var nb = chromeWindow.getNotificationBox(window);
    var oldBar = nb.getNotificationWithValue('eproc-perfil-padrao');
    if (padrao != id) {
      addNotification(nb, EprocSandbox.Strings.get('perfil.prompt.message',
          [name]
        ), 'eproc-perfil-padrao', 'chrome://eproc/skin/stapler-blue-32.png',
        nb.PRIORITY_INFO_MEDIUM, [{
            label: EprocSandbox.Strings.get('perfil.prompt.accept'),
            accessKey: EprocSandbox.Strings.get('perfil.prompt.accept.key'),
            popup: null,
            callback: function()
            {
              EprocSandbox.Preferences.set('v2.perfil', id);
            }
          }, {
            label: EprocSandbox.Strings.get('perfil.prompt.refuse'),
            accessKey: EprocSandbox.Strings.get('perfil.prompt.refuse.key'),
            popup: null,
            callback: function()
            {
            }
          }], true
      );
    }
    if (oldBar) {
      nb.removeNotification(oldBar);
    }
  },
  onWindowBeforeUnload: function(e)
  {
    var windows = [];
    var gedpro = [];
    if (typeof this.windows['arvore'] != 'undefined'
      && this.windows['arvore'].document) {
      this.windows['arvore'].close();
      delete this.windows['arvore'];
    }
    for (w in this.windows) {
      var win = this.windows[w];
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
      if (confirm('Há ' + windows.length + ' '
        + (windows.length > 1 ? 'janelas abertas' : 'janela aberta')
        + '.\nDeseja fechá-' + (windows.length > 1 ? 'las' : 'la') + '?')) {
        for (var w = windows.length - 1; w >= 0; w--) {
          windows[w].close();
        }
      }
    }
    delete Eproc;
  },
  painel_orgao_processo_listar: function()
  {
    this.colorirTabela('Tabela de Processos.');
  },
  plantao_magistrado_cadastrar: function()
  {
    this.setDatasPlantao();
  },
  plantao_servidor_cadastrar: function()
  {
    this.setDatasPlantao();
  },
  prepara_movimentacao_bloco: function()
  {
    this.processo_consulta_listar();
  },
  prevencao_judicial: function()
  {
    this.setLastProcesso();
    this.corrigirPreventos();
  },
  prevencao_judicial_bloco: function()
  {
    var buscar = $('#btnBuscar'), consultar = $('#btnConsultar');
    if (buscar) {
      buscar.setAttribute('onclick', '');
      addListener(buscar, 'click', function(e)
        {
          e.target.form.target = '_blank';
          window.wrappedJSObject.submeterFrm('buscar');
          e.target.form.target = '_top';
          window.wrappedJSObject.infraAvisoCancelar();
        });
      consultar.setAttribute('onclick', '');
      addListener(consultar, 'click', function(e)
        {
          $('#hdnInfraItensSelecionados').value = '';
          window.wrappedJSObject.submeterFrm('');
        });
      $$('.infraTdSetaOrdenacao a').forEach(function(link)
        {
          var action = link.getAttribute('onclick');
          link.setAttribute('onclick', '');
          addListener(link, 'click', function(e)
            {
              $('#hdnInfraItensSelecionados').value = '';
              eval(action, window.wrappedJSObject);
            });
        });
      $$('.infraTable[summary="Tabela de Processos."]').forEach(function(table)
      {
        table.setAttribute('width', '');
        $$('th', table).forEach(function(th)
          {
            th.setAttribute('width', '');
          });
        $$('tr.infraTrClara, tr.infraTrEscura', table).forEach(function(tr)
        {
          addListener($$('a', tr.cells[1])[0], 'click', function(e)
            {
              e.preventDefault();
              e.stopPropagation();
              var selecionados = $('#hdnInfraItensSelecionados'), antigaSelecao =
                selecionados.value;
              selecionados.value =
                $$('input', e.target.parentNode.parentNode)[0].value;
              var link = /\&num_processo=.*$/.exec(e.target.search);
              var form = $('#frmProcessoLista');
              var old = form.action;
              form.action = old + link;
              form.target = '_blank';
              form.submit();
              form.action = old;
              form.target = '_top';
              selecionados.value = antigaSelecao;
            }
          );
        }
        );
      }
      );
    } else if (!consultar) {
      this.corrigirPreventos();
    }
  },
  /**
   * https://eproc/eprocV2/externo_controlador.php?acao=principal
   */
  principal: function()
  {
    var brasao = $('#imgBrasao');
    if (brasao) {
      brasao.src =
        'data:image/png;base64,'
          + EprocSandbox.Loader
            .getUrlContents('chrome://eproc/skin/brasao.base64');
    }
  },
  processo_consulta_listar: function()
  {
    var summary = 'Tabela de Processos.';
    this.colorirTabela(summary);
    var docsGedpro = $('#divDocumentosGedpro');
    if (!docsGedpro) return;
    var address = EprocSandbox.Address, gedpro;
    if (address.producao) {
      gedpro =
        location.host.replace(/^[^\.]+\.([^\.]+)\.(gov|jus)\.br$/,
          'gedpro.$1.gov.br'
        ).replace(/\.jfsc\.gov\./, '.jfsc.jus.');
    } else {
      if (address.grau == 2) {
        gedpro = 'barcelona.trf4.gov.br';
      } else {
        gedpro = 'gedproteste.trf4.gov.br';
      }
    }
    var processos = $$('table[summary="' + summary + '"]')[0], titulo =
      document.createElement('th');
    titulo.className = 'infraTh';
    titulo.textContent = 'Documento';
    processos.rows[0].appendChild(titulo);
    $$('tr.infraTrClara, tr.infraTrEscura', docsGedpro).forEach(function(tr, i)
    {
      var row = processos.rows[i + 1], cell = row.insertCell(row.cells.length);
      cell.style.whiteSpace = 'nowrap';
      var link = document.createElement('a'), doc =
        /^ged_(\d+)$/.exec(tr.cells[1].textContent)[1];
      link.textContent = tr.cells[2].textContent + ' ' + doc;
      link.target = '_blank';
      link.href =
        'http://' + gedpro + '/visualizarDocumentos.asp?codigoDocumento=' + doc;
      var id = '' + row.cells[0].textContent + doc;
      addListener(link, 'click', function(e)
      {
        if (e.shiftKey || e.ctrlKey) return;
        e.preventDefault();
        e.stopPropagation();
        var win = this.windows[id];
        var isClosed = 'undefined' == typeof(win);
        if (!isClosed && ('focus' in win)) {
          try {
            win.window;
            isClosed = true;
          } catch (ex) {
            return win.focus();
          }
        }
        if (isClosed) {
          this.windows[id] =
            window
              .open(
                e.target.href,
                id,
                'menubar=0,resizable=1,status=0,toolbar=0,location=0,menubar=0,directories=0,scrollbars=1'
              );
        }
      }, this
      );
      cell.appendChild(link);
    }, this
    );
    addListener(window, 'beforeunload', this.onWindowBeforeUnload, this);
  },
  processo_consulta_publica: function()
  {
    this.setLastProcesso();
  },
  processo_consultar: function()
  {
    this.setLastProcesso();
    $$('table').forEach(function(table)
      {
        if (table.rows[0].cells.length == 5) this.colorirTabela('', true);
      }, this);
  },
  processo_consultar_nome_parte: function()
  {
    this.setLastProcesso();
    this.colorirTabela('', true);
  },
  processo_edicao: function()
  {
    this.setCorCapa();
  },
  processo_lembrete_destino_cadastrar: function()
  {
    this.setCorCapa();
    $$('#txaDescricao').forEach(function(descricao)
      {
        addListener(descricao, 'keyup', function(e)
          {
            if (e.target.textLength > 200) {
              e.target.value = e.target.value.substr(0, 200);
            }
          });
      }, this);
    $$('.infraTable[summary="Lembretes"]').forEach(function(table)
      {
        this.colorirLembretes(table);
      }, this);
  },
  processo_lembrete_destino_listar_grupo_subfrm: function()
  {
    $$('.infraTable[summary="Lembretes"]').forEach(function(table)
      {
        this.colorirLembretes(table);
      }, this);
  },
  processo_lembrete_destino_listar_subfrm: function()
  {
    $$('.infraTable[summary="Lembretes"]').forEach(function(table)
      {
        this.colorirLembretes(table);
      }, this);
  },
  processo_localizador_listar: function()
  {
    this.setLastProcesso();
    document.getElementById('btnFechar').setAttribute('onclick',
      'location.href="' + document.referrer + '";'
    );
  },
  processo_movimentar: function()
  {
    this.setLastProcesso();
  },
  processo_selecionar: function()
  {
    document.title = this.getProcessoF();
    this.setCorCapa();
    $$('a').forEach(function(link)
    {
      if (!link.href && /GEDPRO/.test(link.textContent)) {
        if (link.getAttribute('onclick')) {
          link.textContent = 'GEDPRO';
          link.parentNode.insertBefore(document.createTextNode(' | '),
            link.nextSibling
          );
          link.href =
            /window.open\('([^']+)'/.exec(link.getAttribute('onclick'))[1];
          /**
           * @type Object
           */
          this.loginGedpro = {
            /**
             * Host do Gedpro
             * 
             * @type String
             */
            host: link.host,
            /**
             * Link para fazer login no Gedpro
             * 
             * @type String
             */
            url: link.href
          };
          link.setAttribute('onclick', '');
          link.target = '_blank';
          addListener(link, 'click', function(e)
            {
              e.preventDefault();
              e.stopPropagation();
              EprocSandbox.IE(e.target.href);
            });
          var processo = $('#divInfraAreaProcesso');
          var tabelas = $$('.infraTable', processo);
          var div = document.createElement('div');
          div.id = 'cargaDocsGedpro';
          link = document.createElement('a');
          link.href =
            'http://' + this.loginGedpro.host + '/XMLInterface.asp?processo='
              + EprocSandbox.Address.params.num_processo
              + '&ProcessoVisual=PV&grupos=0';
          link.textContent = 'Carregar documentos do GEDPRO';
          addListener(link, 'click', function(e)
            {
              e.preventDefault();
              e.stopPropagation();
              e.target.textContent = 'Tentando fazer login no GEDPRO...';
              this.getDocsGedpro();
            }, this);
          div.appendChild(link);
          processo.insertBefore(div, tabelas[tabelas.length - 1]);
          processo.insertBefore(document.createElement('br'),
            tabelas[tabelas.length - 1]
          );
          processo.insertBefore(document.createElement('br'),
            tabelas[tabelas.length - 1]
          );
        } else if (link.title == 'Link para o GEDPRO não pôde ser gerado.') {
          link.getElementsByTagName('u')[0].style.textDecoration =
            'line-through';
        }
      }
    }, this
    );
    if ($('#lblProcRel')) {
      var link = null, relacionado = $('#lblProcRel').nextSibling;
      if ('tagName' in relacionado && relacionado.tagName.toLowerCase() == 'br') {
        relacionado = relacionado.nextSibling.nextSibling;
      }
      if ('tagName' in relacionado && relacionado.tagName.toLowerCase() == 'a') {
        link = relacionado;
      }
      var processo =
        /[\d\.\-]+\/([PRS][RSC])?/.exec(relacionado.textContent)[0].replace(
          /[\.-]/g, ''
        );
      if (!link) {
        link = document.createElement('a');
        var tmp = relacionado.textContent.split('  '), numprocf = tmp[0], relacao =
          tmp[1];
        link.textContent = numprocf;
        relacionado.textContent = '  ' + relacao;
        relacionado.parentNode.insertBefore(link, relacionado);
      }
      link.target = '_blank';
      if (processo[0] != '5' & !/txtValor/.test(link.href)) {
        var numproc, origem;
        [numproc, origem] = processo.split('/');
        link.href =
          'http://www.trf4.jus.br/trf4/processos/acompanhamento/resultado_pesquisa.php?selForma=NU&selOrigem='
            + origem + '&txtValor=' + numproc;
      }
    }
    $$('.infraTable').forEach(function(table)
    {
      if (table.getAttribute('summary') == 'Lembretes') {
        this.colorirLembretes(table);
      } else if (table.getAttribute('summary') == 'Eventos') {
        $$('th', table).forEach(function(th)
          {
            th.setAttribute('width', '');
          });
        // var eventos = [];
        $$('tr.infraTrClara, tr.infraTrEscura', table).forEach(function(tr, r)
        {
          var match;
          if (match = /Prazo: .* Status:([^<]+)/.exec(tr.cells[2].innerHTML)) {
            if (match[1] == 'AGUARD. ABERTURA') {
              tr.cells[2].style.backgroundColor = 'hsl(0, 50%, 80%)';
            } else if (match[1] == 'ABERTO') {
              tr.cells[2].style.backgroundColor = 'hsl(60, 50%, 80%)';
            }
            /*
             * var evts = eventos[tr.cells[0].textContent]; if (evts) {
             * tr.cells[2].appendChild(document.createElement('br'));
             * tr.cells[2].appendChild(document.createElement('br'));
             * evts.forEach(function(evt) { var div =
             * tr.cells[2].appendChild(document.createElement('div'));
             * div.textContent = 'Evento ' + evt.n + ': ' + evt.text;
             * tr.cells[2].appendChild(div); }, this); }
             */
          } /*
             * else if (match = /(.*) - Refer\. ao Evento:
             * (\d+)/.exec(tr.cells[2].textContent)) { var evt = { n:
             * tr.cells[0].textContent, text: match[1] }; if (eventos[match[2]]) {
             * eventos[match[2]].unshift(evt); } else { eventos[match[2]] =
             * [evt]; } }
             */
          var docs = tr.cells[4];
          if ($$('table', docs).length) {
            $$('tr', docs).forEach(function(subtr)
              {
                Array.forEach(subtr.cells, function(subtd)
                  {
                    var child = null;
                    while (child = subtd.firstChild) {
                      docs.appendChild(child);
                    }
                    docs.appendChild(document.createElement('br'));
                  });
              });
            docs.removeChild($$('table', docs)[0]);
          } else {
            for (var children = docs.childNodes, c = children.length - 1, child; (c >= 0)
              && (child = children[c]); c--) {
              if (!('tagName' in child) || (child.tagName == 'BR')) {
                child.parentNode.removeChild(child);
              } else {
                child.parentNode.insertBefore(document.createElement('br'),
                  child.nextSibling
                );
              }
            }
          }
          $$('a', tr.cells[4]).forEach(function(link)
          {
            if (!/\?acao=acessar_documento\&/.test(link.href)) return;
            link.className =
              link.className.split(' ').concat(['docLink']).join(' ');
            var name = link.innerHTML.replace(/<[^>]*>/g, '').replace(' ', '_'), ev =
              /^\d+/.exec(tr.cells[0].textContent), id =
              '' + EprocSandbox.Address.params.num_processo + ev + name;
            link.href = link.href + '#' + ev + '/' + name;
            addListener(link, 'click', function(e)
            {
              e.stopPropagation();
              e.preventDefault();
              if (this.windows[id] && typeof this.windows[id] == 'object'
                && this.windows[id].document) {
                this.windows[id].focus();
              } else {
                var x =
                  this.windows[id] =
                    window
                      .open(
                        link.href,
                        id,
                        'menubar=0,resizable=1,status=0,toolbar=0,location=0,menubar=0,directories=0,scrollbars=1'
                      );
                x.focus();
              }
            }, this
            );
          }, this
          );
        }, this
        );
      }
    }, this
    );
    addListener(window, 'beforeunload', this.onWindowBeforeUnload, this);
  },
  processo_sigilo_consultar: function()
  {
    this.setLastProcesso();
  },
  redistribuicao_processo: function()
  {
    this.setCorCapa();
  },
  relatorio_conclusos_julgados_listar: function()
  {
    this.colorirTabela('Processos Conclusos aguardando Julgamento ', true);
  },
  relatorio_geral_listar: function()
  {
    this.colorirTabela('Lista de Processos');
  },
  relatorio_resumo_movimentacao_listar_destino: function()
  {
    this.colorirTabela('Lista de Processos')
  },
  relatorio_sem_movimentacao_consultar: function()
  {
    this.colorirTabela('Processos');
  },
  /**
   * Tenta fazer novo login no Gedpro
   */
  reloginGedpro: function(e)
  {
    var isEvent = 'undefined' != typeof(e) ? true : false;
    if (isEvent) {
      e.target.id = 'loginGedpro';
      e.target.textContent = 'Tentando fazer login no GEDPRO...';
      e.preventDefault();
      e.stopPropagation();
    }
    var iframe = document.createElement('iframe');
    iframe.src = this.loginGedpro.url;
    iframe.style.display = 'none';
    $('#divInfraAreaTelaE').appendChild(iframe);
    var that = this;
    function tester()
    {
      var limit = 30;
      var success = false;
      try {
        var x = frames[0].window;
        that.tester.times++;
      } catch (ex) {
        success = true;
      }
      if (success || that.tester.times >= limit) {
        window.clearInterval(that.tester.id);
        var ev = that.tester.ev;
        delete that.tester;
        var iframe = $('iframe');
        iframe.parentNode.removeChild(iframe);
        if (success) {
          if (ev) {
            $('#loginGedpro').textContent = 'Falta de permissão de acesso?';
            alert('Feche o documento e tente novamente agora.');
          } else {
            $('#cargaDocsGedpro a').textContent =
              'Carregando documentos do GEDPRO...';
            that.getDocsGedpro.call(that, 'arvore');
          }
        } else {
          $('#cargaDocsGedpro a').textContent = 'Carregar documentos do GEDPRO';
          alert('Não foi possível fazer login no GEDPRO.');
        }
      }
    }
    this.tester = {
      ev: isEvent,
      id: window.setInterval(tester, 500),
      times: 0
    };
  },
  representacao_partes_cadastrar: function()
  {
    this.setCorCapa();
  },
  setCorCapa: function()
  {
    var assuntos = $('#fldAssuntos');
    if (assuntos) {
      var classe = $('#txtClasse').textContent;
      this.getClasses();
      var cor = EprocSandbox.V2.Classes[classe];
      if (cor) {
        assuntos.className += ' extraCapa';
        assuntos.setAttribute('data-cor', cor);
      }
    }
  },
  /**
   * Altera as cores da página
   * 
   * @param {String} grau Grau do sistema utilizado. Pode ser: "1grau" ou
   *        "2grau".
   * @param {String} [cor=Preferência do usuário] Cor no formato "H/S/L".
   * @param {Boolean} [save=false] Se verdadeiro, salva a cor nas preferências
   *        do usuário.
   */
  setCores: function(grau, cor, save)
  {
    if ('undefined' == typeof(cor)) {
      cor = EprocSandbox.Preferences.get('v2.cor.' + grau);
    }
    if ('undefined' == typeof(save)) {
      save = false;
    }
    var h, s, l;
    [h, s, l] = cor.split('/');
    var hBS = h, hBT = (360 + hBS - 9) % 360, sBS = 60, sBT = 64, lBS = 40, lBT =
      50;
    if (h == 0 && s == 0) {
      sBT = 0, sBS = 0;
    }
    if (h >= 0 && s > 0 && h < 120) {
      // vermelho
      var delta = (h - 0) / (120 - 0);
      hBT = 8 + delta * (71 - 8), sBT = 69 + delta * (57 - 69), lBT =
        47 + delta * (60 - 47);
      hBS = 0 + delta * (118 - 0), sBS = 31 + delta * (33 - 31), lBS =
        33 + delta * (66 - 33);
    } else if (h >= 120 /* 118 */&& h < 195 /* 196 */) {
      // verde_limao
      var delta = (h - 120) / (195 - 120);
      hBT = 71 + delta * (207 - 71), sBT = 57 + delta * (75 - 57), lBT =
        60 + delta * (35 - 60);
      hBS = 118 + delta * (196 - 118), sBS = 33 + delta * (94 - 33), lBS =
        66 + delta * (39 - 66);
    } else if (h >= 195 && h <= 345/* 196 */) {
      // azul_celeste
      var delta = (h - 195) / (345 - 195);
      hBT = 207 + delta * (337 - 207), sBT = 75 + delta * (59 - 75), lBT =
        35 + delta * (38 - 35);
      hBS = 196 + delta * (345 - 196), sBS = 94 + delta * (58 - 94), lBS =
        39 + delta * (66 - 39);
    }
    var hsl = h + ', ' + s + '%, ' + l + '%', background = 'hsl(' + hsl + ')', s2 =
      s / 2, s4 = s / 4, s38 = s * 3 / 8;
    addStyle(EprocSandbox.Loader.getUrlContents('chrome://eproc/skin/v2.css')
        .replace(/\$\w+/g, function(n)
          {
            return eval(n.replace(/^\$/, ''));
          }), 'Eproc_V2_setCores');
    if (save) {
      EprocSandbox.Preferences.set('v2.cor.' + grau, cor);
    }
    var myDiv = $('#divInfraBarraLocalizacao').previousSibling;
    if (myDiv.childNodes.length == 1 && myDiv.childNodes[0].tagName == 'IMG') {
      myDiv.style.backgroundImage = 'url("' + myDiv.childNodes[0].src + '")';
      myDiv.textContent = '';
      var newDiv = document.createElement('div');
      newDiv.style.cssFloat = 'left';
      newDiv.appendChild(document.createElement('div'));
      myDiv.parentNode.insertBefore(newDiv, myDiv.nextSibling);
    }
    $$('label[onclick^="listarTodos"], label[onclick^="listarEventos"], #txtEntidade, #txtPessoaEntidade')
      .forEach(function(auto)
        {
          var id = auto.id.replace('lblListar', 'txt');
          auto = $('#' + id);
          if (auto) {
            auto.style.width = auto.clientWidth + 'px';
          }
        }, this);
  },
  setDatasPlantao: function()
  {
    var inicio = $('#txtDataInicio'), fim = $('#txtDataFim');
    if (!inicio || !fim) return;
    var dtHoje = new Date();
    dtHoje.setHours(18);
    dtHoje.setMinutes(0);
    var dtAmanha = new Date(dtHoje.valueOf() + (19 * 3600 * 1000));
    inicio.value = dtHoje.toLocaleFormat('%d/%m/%Y %H:%M');
    fim.value = dtAmanha.toLocaleFormat('%d/%m/%Y %H:%M');
  },
  setLastProcesso: function()
  {
    var txtNumProcesso = document.getElementById('lblNumProcesso');
    while (txtNumProcesso && txtNumProcesso.tagName != 'INPUT') {
      txtNumProcesso = txtNumProcesso.nextSibling;
    }
    if (txtNumProcesso) {
      txtNumProcesso.setAttribute('onkeypress', '');
      addListener(txtNumProcesso, 'change', this.onNumprocChange, this);
      var before =
        /\&(txtNumProcesso|num_processo)=([0-9]{20})/.exec(document.referrer);
      if (before) {
        txtNumProcesso.value = before[2];
      }
      txtNumProcesso.select();
    }
  }
};
(function()
{
  EprocSandbox.V2.init();
})();
