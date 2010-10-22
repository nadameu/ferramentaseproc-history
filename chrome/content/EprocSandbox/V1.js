/**
 * @name chrome://eproc/content/EprocSandbox/V1.js
 * @fileOverview Define a classe EprocV1
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
 * Lida com as páginas do e-Proc V1
 * 
 * @namespace
 */
EprocSandbox.V1 = {
  /**
   * Menu da página
   * 
   * @type HTMLElement
   */
  menu: null,
  /**
   * Link que abriga o menu compactado
   * 
   * @type HTMLElement
   */
  menuLink: null,
  processos: null,
  submenu: null,
  table: null,
  windows: {},
  abreJanela: function(url, target, little)
  {
    var openWindow = this.windows[target];
    if ('object' == typeof(openWindow) && 'document' in openWindow) {
      openWindow.focus();
    } else {
      this.windows[target] =
        window.open(url, target, 'height=350,width=' + (little ? 600 : 760)
            + ',status=yes,toolbar=no,menubar=no,location=no, left='
            + ((screen.width - (little ? 600 : 760)) / 2) + ', top='
            + ((screen.height - 350) / 2));
    }
  },
  altera_localizador: function(params)
  {
    this.corrigeSePopup();
  },
  altera_localizador_bd: function(params)
  {
    this.fechaSePopup();
  },
  corrigeBloco: function(params)
  {
    for (var br = $$('#body table')[0].nextSibling; !('tagName' in br)
      || br.tagName != 'BR'; br = br.nextSibling);
    br.parentNode.removeChild(br);
    // addStyle('' + 'table { font-family: verdana; font-size: 10pt; }'
    // + 'table thead th { color: green; }'
    // + '#dhtmltooltip { font-family: verdana; font-size: 10pt; }');
    $$('font[face="verdana"][size="2"][color="black"]').forEach(function(font)
      {
        font.innerHTML =
          font.innerHTML.replace(/\&amp;nbsp([^;])/g, '&nbsp;$1');
      }
    );
    if (('cod_localizador' in params) && ('cod_evento_com' in params)
      && ('cod_assunto_com' in params)) {
      var span = document.createElement('span');
      span.innerHTML =
        ' <font color="black">Localizador:</font> '
          + $$('select[name="cod_localizador"] option[value="'
            + params.cod_localizador + '"]')[0].textContent
      $$('#body > center > font > b')[0].appendChild(span);
    }
    if ('cod_localizador' in params) {
      addStyle('.extraBloco td:nth-child(6) { display: none; }');
    }
    if ('cod_assunto_com' in params) {
      addStyle('.extraBloco td:nth-child(13) { display: none; }');
    }
    if (params.magistrados != 'T') {
      addStyle('.extraBloco td:nth-child(7) { display: none; }');
      var span = document.createElement('span');
      span.innerHTML =
        ' <font color="black">Magistrado:</font> ' + params.magistrados;
      $$('#body > center > font > b')[0].appendChild(span);
    }
    if (params.tipoacao != 'NOK') {
      addStyle('.extraBloco td:nth-child(4) { display: none; }');
      var span = document.createElement('span');
      span.innerHTML =
        ' <font color="black">Tipo de ação:</font> '
          + ['', 'REVISÃO', 'CONCESSÃO', 'CÍVEL', 'REVISÃO / MATÉRIA DE FATO'][params.tipoacao];
      $$('#body > center > font > b')[0].appendChild(span);
    }
    var table = $$('table')[1];
    this.processos = new EprocSandbox.V1.Processos(table);
    return;
    this.processos.getData($$('table')[1]);
    this.table = new Table(this.processos);
    this.table.replace($('table').get(1));
    $(window).unload(this.onUnload);
  },
  corrigeFiltros: function()
  {
    var form = $$('form')[1];
    var cod_evento_com = $$('select[name="cod_evento_com"]', form)[0];
    cod_evento_com.innerHTML =
      '<option value="">Todos os eventos</option>' + cod_evento_com.innerHTML;
    cod_evento_com.value = '';
    var cod_localizador = $$('select[name="cod_localizador"]')[0];
    cod_localizador.innerHTML =
      '<option value="">Todos os localizadores</option>'
        + cod_localizador.innerHTML;
    cod_localizador.value = '';
    submit = $$('input[type="submit"]', form)[0];
    form.insertBefore(cod_localizador, submit);
    var before = document.createElement('span');
    before.innerHTML =
      '<font face="verdana" size="3"><br/>&amp;</font> '
        + '<font face="verdana" size="2"><b>Localizador:</b></font>';
    form.insertBefore(before, cod_localizador);
    form
      .insertBefore(document.createElement('br'), cod_localizador.nextSibling);
    var selects = $$('select', form);
    for (var i = 1; i <= 3; i++) {
      form.insertBefore(selects[i], submit);
    }
    $$('form').forEach(function(form, i, forms)
      {
        if (i != 1 && i != forms.length - 1) {
          form.parentNode.removeChild(form);
        }
      });
    $$('form ~ br').forEach(function(br)
      {
        br.parentNode.removeChild(br);
      });
    addListener(form, 'submit', function(e)
      {
        var form = e.target;
        $$('select', form).forEach(function(select)
        {
          if (select.value == ''
            || (select.value == 0 && select.name == 'cod_assunto_com')) {
            select.disabled = true;
          }
        }
        );
        var evento = $$('select[name="cod_evento_com"]', form)[0], assunto =
          $$('select[name="cod_assunto_com"]', form)[0].value > 0, localizador =
          $$('select[name="cod_localizador"]', form)[0].value > 0;
        if (evento.value > 0) {
          if (localizador && !assunto) {
            evento.name = 'cod_evento_localizador';
          } else if (!localizador && !assunto) {
            evento.name = 'cod_evento';
          }
        } else if (!localizador && !assunto) {
          evento.disabled = false;
          evento.name = 'cod_evento';
          $$('option', evento)[0].value = '55555';
          evento.value = '55555';
        }
      });
  },
  corrigeMenu: function()
  {
    var menu = $$('table img[src$="imagens/logo_novo2.jpg"]');
    if (menu.length) {
      for (menu = menu[0].parentNode; menu.tagName != 'TABLE'; menu =
        menu.parentNode);
      this.menu = menu;
      this.menu.className = 'extraMenu';
      this.menu.cellPadding = 0;
      this.menu.cellSpacing = 0;
      this.menu.align = 'center';
      for (var menuLink = $$('a[href^="menu_"]', this.menu.rows[0].cells[4])[0]; menuLink.tagName != 'TD'; menuLink =
        menuLink.parentNode);
      this.menuLink = menuLink;
      this.menuLink.className = 'extraMenuLink';
    }
  },
  corrigeMenuPrincipal: function()
  {
    var ul = $$('#body > ul');
    if (ul.length) {
      ul = ul[0];
      ul.innerHTML =
        ul.innerHTML.replace(/<\/?p>/g, '').replace(
          /<font color="green" face="verdana" size="2"><b>[^<]*<\/b><\/font>/g,
          '<li class="extraMenuTitle">$&<ul class="extraMenuList"></ul></li>'
        ).replace(/<li><a[^>]* href[^>]+>[^<]*<\/a>(<b>[^<]*<\/b>)?/g,
          '$&</li> '
        );
      var last = ul, first = true;
      Array.forEach($$('font', ul)[0].childNodes, function(child)
        {
          if (!('tagName' in child)) return;
          if (child.tagName == 'LI' && child.className == 'extraMenuTitle') {
            last = $$('ul', child)[0];
            if (first) {
              last.className += ' extraMenuActiveList';
              first = false;
            }
            addListener($$('font > b', child)[0], 'click', function(e)
              {
                for (var child = e.target; child.tagName != 'LI'; child =
                  child.parentNode);
                $$('.extraMenuActiveList', ul)[0].className = 'extraMenuList';
                $$('ul', child)[0].className += ' extraMenuActiveList';
              });
          } else if (child.tagName == 'B' || child.tagName == 'LI') {
            last.appendChild(child);
          }
        });
    }
  },
  corrigeSePopup: function()
  {
    if (/^(localizacao|movimentacao)_bloco$/.test(document.referrer
      .split(/(\/eproc\/|\.php)/)[2])) {
      var button = $$('input[type="button"]')[0];
      button.parentNode.removeChild(button);
    }
  },
  corrigeSubmenu: function()
  {
    var submenu = $$('table td[bgcolor="#cccccc"][width="760"]');
    if (this.menuLink && submenu.length) {
      submenu = submenu[0];
      this.submenu = document.createElement('div');
      this.submenu.className = 'extraSubmenu';
      this.submenu.style.width = this.menuLink.clientWidth + 'px';
      $$('a', submenu).forEach(function(link)
        {
          this.submenu.appendChild(link);
        }, this);
      $$('div', this.menuLink)[0].appendChild(this.submenu);
      for (var table = submenu.parentNode; table.tagName != 'TABLE'; table =
        table.parentNode);
      table.parentNode.removeChild(table);
    }
  },
  corrigeTopico: function()
  {
    var topico = $$('img[src$="imagens/topico.gif"]');
    if (this.menu && topico.length) {
      for (var topico = topico[0].parentNode; topico.tagName != 'FONT'; topico =
        topico.parentNode);
      for (var titulo = topico.nextSibling; (!'tagName' in titulo)
        || (titulo.tagName != 'FONT'); titulo = titulo.nextSibling);
      for (var cell = $$('img[src$="imagens/logo_novo2.jpg"]', this.menu)[0]; cell.tagName != 'TD'; cell =
        cell.parentNode);
      cell.innerHTML +=
        '<br/>' + '<font ' + 'size="2" '
          + 'face="Verdana, Arial, Helvetica, sans-serif" '
          + 'color="#008080"><b>'
          + titulo.textContent.replace(' - PROCESSO ELETRÔNICO', '')
          + '</b></font>';
      topico.parentNode.removeChild(topico);
      titulo.parentNode.removeChild(titulo);
    }
  },
  fechaSePopup: function()
  {
    if (window.history.length == 2) window.close();
  },
  init: function()
  {
    addStyle(EprocSandbox.Loader.getUrlContents('chrome://eproc/skin/v1.css'),
      'Eproc_V1'
    );
    this.corrigeMenu();
    this.corrigeSubmenu();
    this.corrigeTopico();
    if (EprocSandbox.Address.controlador in this) {
      this[EprocSandbox.Address.controlador](EprocSandbox.Address.params);
    }
  },
  localizacao_bloco: function(params)
  {
    this.corrigeBloco(params);
  },
  menu_diretor: function(params)
  {
    this.corrigeMenuPrincipal();
  },
  menu_localizacao_bloco: function(params)
  {
    this.corrigeFiltros();
  },
  menu_movimentacao_bloco: function(params)
  {
    this.corrigeFiltros();
  },
  menu_vara: function(params)
  {
    this.corrigeMenuPrincipal();
  },
  movimentacao_bloco: function(params)
  {
    this.corrigeBloco(params);
  },
  onUnload: function(e)
  {
    var i = 0;
    $.each(EprocSandbox.V1.windows, function(w, win)
      {
        if (typeof win == 'object' && win.document) {
          i++;
        } else {
          delete EprocSandbox.V1.windows[w];
        }
      });
    if (i > 0) {
      if (confirm('Esta página possui ' + i
        + ' documentos abertos.\nDeseja fechá-los?')) {
        $.each(EprocSandbox.V1.windows, function(w, win)
          {
            win.close();
          });
      }
    }
  },
  status_justica_gratuita: function(params)
  {
    this.corrigeSePopup();
  },
  status_justica_gratuita_bd: function(params)
  {
    this.fechaSePopup();
  },
  status_manifestacao_mp: function(params)
  {
    this.corrigeSePopup();
  },
  status_manifestacao_mp_bd: function(params)
  {
    this.fechaSePopup();
  },
  status_tutela: function(params)
  {
    this.corrigeSePopup();
  },
  status_tutela_bd: function(params)
  {
    this.fechaSePopup();
  },
  status_prioridade: function(params)
  {
    this.corrigeSePopup();
  },
  status_prioridade_bd: function(params)
  {
    this.fechaSePopup();
  }
};
EprocSandbox.V1.Processos = function(table)
{
  var tableParent = table.parentNode, nextTable = table.nextSibling;
  tableParent.removeChild(table);
  var tbody = table.tBodies[0];
  table.className = 'extraBloco';
  table.cellPadding = '2';
  table.cellSpacing = '0';
  table.rules = 'all';
  tbody.vAlign = 'top';
  var thead = table.createTHead();
  thead.align = 'center';
  var hrow = thead.insertRow(0);
  var input = document.createElement('input');
  input.type = 'checkbox';
  addListener(input, 'click', function(e)
    {
      $$('td:first-child input', tbody).forEach(function(check)
        {
          check.checked = e.target.checked;
        });
    });
  hrow.insertCell(0).appendChild(input);
  ['Processo', 'Advogados', 'Matéria', 'L:Lembrete', 'Localizador', 'J:Juízo',
    'JG:Justiça Gratuita', 'MP:Intervenção do Ministério Público',
    'AT:Antecipação de Tutela', 'Autores', 'Réus', 'Assunto', 'Último evento']
    .forEach(function(coluna, i)
      {
        var texto, explicacao;
        [texto, explicacao] = coluna.split(':');
        if (explicacao) {
          hrow.insertCell(i + 1).innerHTML =
            '<abbr title="' + explicacao + '">' + texto + '</abbr>';
        } else {
          hrow.insertCell(i + 1).textContent = coluna;
        }
      });
  if (tbody.rows[0].cells.length == 10) {
    hrow.cells[8].style.display = 'none';
  }
  tbody.deleteRow(0);
  this.same_protocol = {};
  var cells = tbody.rows[0].cells;
  if (cells.length == 1) {
    cells[0].colSpan = 14;
  } else {
    Array.forEach(tbody.rows, function(row, i)
      {
        var proc = new EprocSandbox.V1.Processo(row);
        this.push(proc);
        if (proc.documentos.length) {
          var protocol = proc.documentos[0].link[0];
          if ('undefined' == typeof(this.same_protocol[protocol])) {
            this.same_protocol[protocol] = [index];
          } else {
            this.same_protocol[protocol].push(index);
          }
        }
      }, this);
  }
  tableParent.insertBefore(table, nextTable);
};
EprocSandbox.V1.Processos.prototype = new Array();
EprocSandbox.V1.Processos.prototype.buscaPrioridades = function()
{
  this.forEach(function(p)
    {
      p.buscaPrioridade();
    });
};
EprocSandbox.V1.Processo = function(row)
{
  var contents = [], cells = row.cells;
  contents.push(cells[0].innerHTML);
  var cellOne = cells[1], numprocAdv = $$('font', cellOne)[0], numproc =
    $$('a', numprocAdv)[0], advs = /> ([^\&]+)\&/.exec(numprocAdv.innerHTML)[1], materia =
    $$('font:last-of-type', cellOne)[0];
  row.setAttribute('data-numproc', numproc.textContent);
  contents.push('<a href="' + numproc.href + '" target="_blank">'
    + numproc.textContent + '</a>');
  contents.push(/Sem ADV\./.test(advs) ? advs : advs.trim().split(/ +/).sort()
    .join('<br/>'));
  var spans = $$('span, font', cellOne), lembrete =
    (spans.length > 2 ? spans[1] : null);
  numproc.setAttribute('onclick', '');
  numproc.target = '_blank';
  var numprocCell = row.insertCell(1);
  numprocCell.appendChild(numproc);
  var materiaCell = row.insertCell(3);
  materiaCell.textContent = materia.textContent;
  contents.push(materia.textContent);
  var lembreteCell = row.insertCell(4);
  /*
   * var lembreteLink = document.createElement('a');
   * lembreteLink.style.textDecoration = 'none'; lembreteLink.href =
   * 'altera_lembrete.php?num_processo_lembrete=' +
   * row.getAttribute('data-numproc'); lembreteLink.setAttribute('onmouseover',
   * 'ddrivetip("Testando", 250);'); lembreteLink.setAttribute('onmouseout',
   * 'hideddrivetip();'); var img = document.createElement('img'); img.border =
   * 0; img.src = 'imagens/bt_lupa_off.gif'; img.width = 16; img.height = 13;
   * lembreteLink.appendChild(img); lembreteCell.appendChild(lembreteLink);
   */
  if (lembrete) {
    if (lembrete.tagName == 'FONT') {
      lembrete.parentNode.removeChild(lembrete);
      lembreteCell.innerHTML =
        '<span onmouseover="ddrivetip(\'Ver Lembrete\', 250);" onmouseout="hideddrivetip();" ><img border="0" src="imagens/bt_lupa_off.gif" width="16" height="13"/></span>';
    } else {
      lembreteCell.appendChild(lembrete);
    }
  } else {
    lembreteCell.textContent = '...';
  }
  cellOne.innerHTML =
    /Sem ADV/.test(numprocAdv.textContent) ? 'Sem&nbsp;ADV.'
      : numprocAdv.textContent.replace(/(^\s+|\s+$)/g, '').split(' ').sort()
        .join('<br/>');
  cells[5].textContent = cells[5].textContent;
  cells[6].style.color = /color="([^"]+)"/.exec(cells[6].innerHTML)[1];
  cells[6].textContent += '';
  cells[7].innerHTML = $$('font', cells[7])[0].innerHTML;
  if (cells.length == 13) {
    row.insertCell(8).style.display = 'none';
  } else {
    cells[8].textContent += '';
  }
  cells[9].style.color = /color="([^"]+)"/.exec(cells[9].innerHTML)[1];
  cells[9].textContent += '';
  var cellPartes = cells[10];
  var autor, x, reu;
  [autor, x, reu] = cellPartes.childNodes;
  var cellReu = row.insertCell(11);
  cellReu.innerHTML = reu.textContent.trim().split(' ').join('<br/>');
  cellPartes.innerHTML = autor.innerHTML;
  cells[12].textContent += '';
  var evento = cells[13];
  var d, m, Y, H, i;
  [d, m, Y, H, i] = evento.textContent.split(/[ \/:]/);
  row.setAttribute('data-date', [Y, m, d].join('-') + ' ' + [H, i].join(':'));
  evento.innerHTML += '<br/>' + cells[14].innerHTML;
  $$('a', evento).forEach(function(link)
  {
    link.parentNode.parentNode.insertBefore(document.createElement('br'),
      link.parentNode.nextSibling
    );
  }
  );
  row.deleteCell(14);
  // row.innerHTML = '<td>' + contents.join('</td><td>') + '</td>';
  return;

  var fields = {
    numproc: [0, /value="(\d+)"/],
    advogados: [1, /<\/a> ?(Sem ADV\.|.* )(\&nbsp;)+<\/font>/, function(v)
      {
        return v[1].replace(/Sem ADV./, '').replace(/ $/, '').split(' ');
      }],
    lembrete: [
      1,
      (row.cells.length == 10
        ? /(Ver Lembrete)/
        : /<TABLE><TR>.*<\/TR><TR>.*<\/TR><TR><TD><font .*>     (.*)<\/font><\/TD><\/TR><TR>.*<\/TR><\/TABLE>/),
      true],
    materia: [1, /<font .*><b>(.*)<\/b><\/font>/],
    localizador: [2, />([^<]+)</],
    juizo: [3, />([^<]+)</],
    gratuita: [4, />([^<]+)</],
    mp: (row.cells.length == 10 ? '?' : [5, />([^<]+)</]),
    tutela: [(row.cells.length == 10 ? 5 : 6), />([^<]+)</],
    autor: [(row.cells.length == 10 ? 6 : 7), /blue[^>]*>([^<]+)</],
    al: [(row.cells.length == 10 ? 6 : 7), /brown[^>]*><b>([^<]+)</, true],
    reus: [(row.cells.length == 10 ? 6 : 7), /red[^>]*> ([^<]+)</, function(v)
      {
        if (v) return v[1].split(' ');
        else return ['N/D'];
      }],
    assunto: [(row.cells.length == 10 ? 7 : 8), />([^<]+)</],
    data: [(row.cells.length == 10 ? 8 : 9),
      />(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})</, function(data)
      {
        return new Date(data[3], data[2] - 1, data[1], data[4], data[5], 0, 0);
      }],
    evento: [(row.cells.length == 10 ? 9 : 10), /blue[^>]*>([^<]+)</, true],
    documentos: [(row.cells.length == 10 ? 9 : 10), />([^<]+)<\/a>/g,
      (function(docs)
      {
        if (docs) {
          for (d = 0; d < docs.length && (doc = docs[d]); d++) {
            docs[d] = /([A-Z]+)\d+/.exec(/>([^<]+)<\/a>/.exec(doc)[1]);
            docs[d] = {
              name: docs[d][0],
              type: docs[d][1]
            };
          }
          return docs;
        } else {
          return [];
        }
      })]
  };
  for (n in fields) {
    var field = fields[n];
    if (field instanceof Array && field.length > 1) {
      var i, x;
      [i, x] = field;
      var f, t;
      if (field.length == 2) {
        this[n] = x.exec(row.cells[i].innerHTML)[1];
      } else if (field.length == 3 && 'boolean' == typeof(t = field[2])) {
        var test;
        if (t && (test = x.exec(row.cells[i].innerHTML))) this[n] = test[1];
      } else if (field.length == 3 && (f = field[2]) instanceof Function) {
        this[n] = f(x.exec(row.cells[i].innerHTML));
      }
    } else {
      this[n] = field;
    }
  }
  for (var d = 0, doc; doc =
    /"download_documento\.php\?num_protocolo=(\d+)&amp;seq_documento=(\d+)&amp;cod_seg=([0-9a-f]+)"/g
      .exec(row.cells[(row.cells.length == 10 ? 9 : 10)].innerHTML); d++) {
    this.documentos[d].link = doc.splice(1);
  }
};
EprocSandbox.V1.Processo.prototype = {
  advogados: [],
  lembrete: '',
  al: '',
  reus: [],
  evento: '',
  documentos: [],
  buscaPrioridade: function()
  {
    $(this.cell)
      .html('<img src="chrome://global/skin/throbber/Throbber-small.gif" width="16" height="16" alt="Carregando..." />');
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'status_prioridade.php?num_processo=' + this.numproc,
      true
    );
    var self = this;
    xmlhttp.onreadystatechange = (function()
    {
      return function()
      {
        return self.onPrioridade.call(self, xmlhttp);
      };
    })();
    xmlhttp.send(null);
  },
  onPrioridade: function(xmlhttp)
  {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      this.pri =
        xmlhttp.responseText
          .match(/document\.forms\[0\]\.prioridade_atendimento\.value = "([^"]?)"/)[1]
          || '-';
      EprocSandbox.V1.table.onPrioridade(this.cell, this);
    }

  }
};
EprocSandbox.V1.Table = function(processos)
{
  this.table = this.getTable();
  $(this.table).append('<tbody></tbody>');
  var last_protocol;
  for (var p = 0, processo; p < processos.length && (processo = processos[p]); p++) {
    var row;
    (row = $(this.table.insertRow(this.table.rows.length)).get(0)).setUserData(
      'index', p, null
    );
    $(row.insertCell(0)).html('<input type="checkbox" name="processo_'
      + processo.numproc + '" value="' + processo.numproc + '" />');
    $(row.insertCell(1))
      .html('<a href="consulta_processo.php?num_processo_consulta='
        + processo.numproc + '" target="_blank">' + processo.numproc + '</a>');
    $(row.insertCell(2)).html(processo.advogados[0] ? processo.advogados
      .join('<br />') : 'Sem ADV.');
    $(row.insertCell(3))
      .html('<a style="text-decoration: none;" href="altera_lembrete.php?num_processo_lembrete='
        + processo.numproc
        + '">'
        + (processo.lembrete
          ? '<span  onMouseover="ddrivetip(\''
            + processo.lembrete
            + '\', 250);" onMouseout="hideddrivetip();" ><img border="0" src="imagens/bt_lupa_off.gif" width="16" height="13"></span>'
          : '...') + '</a>');
    $(row.insertCell(4)).html('<font color="brown"><b>' + processo.materia
      + '</b></font>');
    $(row.insertCell(5))
      .html('<a style="text-decoration: none; color: black;" href="altera_localizador.php?num_processo_localizador='
        + processo.numproc + '">' + processo.localizador + '</a>');
    $(row.insertCell(6)).html('<font color="'
      + (processo.juizo == 'F' ? 'brown' : 'orange') + '"><b>' + processo.juizo
      + '</b></font>');
    $(row.insertCell(7))
      .html('<a style="text-decoration: none; color: black;" href="status_justica_gratuita.php?num_processo='
        + processo.numproc + '">' + processo.gratuita + '</a>');
    $(row.insertCell(8))
      .html('<a style="text-decoration: none; color: black;" href="status_manifestacao_mp.php?num_processo='
        + processo.numproc + '">' + processo.mp + '</a>');
    $(row.insertCell(9)).html('<a style="text-decoration: none; color: '
      + (processo.tutela == 'S' ? 'red' : (processo.tutela == 'I' ? 'orange'
        : (processo.tutela == 'D' ? 'blue' : 'black')))
      + ';" href="status_tutela.php?num_processo=' + processo.numproc + '"><b>'
      + processo.tutela + '</b></a>');
    if (processo.pri) {
      $(row.insertCell(10)).html('<a style="text-decoration: none; color: '
        + (processo.pri == 'S' ? 'red; font-weight: bold' : 'black')
        + ';" href="status_prioridade.php?num_processo=' + processo.numproc
        + '">' + processo.pri + '</a>');
    } else {
      var cell =
        $(row.insertCell(10))
          .html('<span  onMouseover=\'ddrivetip("Clique em \\"carregar\\" no título desta coluna", 250);\' onMouseout="hideddrivetip();" >?</span>');
      processo.cell = cell;
    }
    $(row.insertCell(11)).html('<font color=blue>'
      + processo.autor
      + '</font>'
      + (processo.al ? '<br /><font color=brown><b>' + processo.al
        + '</b></font>' : ''));
    $(row.insertCell(12)).html('<font color=red>'
      + processo.reus.join('<br />') + '</font>');
    var self = this;
    $(row.insertCell(13)).html('<span>' + processo.assunto + '</span>')
      .append($('<small> [x]</small>').css({
          cursor: 'pointer',
          visibility: 'hidden'
        }).click(function(e)
        {
          self.filterCol('assunto', $(this).parent().find('span').html());
        })).hover(function(e)
        {
          $(this).find('small').css({
              visibility: 'visible'
            });
        }, function(e)
        {
          $(this).find('small').css({
              visibility: 'hidden'
            });
        });
    var addCell = true, rowspan = 1;
    if (EprocSandbox.V1.processos.filters.s_ordem == 11
      && processo.documentos.length > 0) {
      if (EprocSandbox.V1.processos.same_protocol[processo.documentos[0].link[0]].length > 1) {
        if (last_protocol == processo.documentos[0].link[0]) {
          addCell = false;
        } else {
          rowspan =
            EprocSandbox.V1.processos.same_protocol[processo.documentos[0].link[0]].length;
        }
        last_protocol = processo.documentos[0].link[0];
      }
    }
    if (addCell) {
      var cellData =
        $(row.insertCell(14)).html(('00' + processo.data.getDate()).substr(-2)
          + '/' + ('00' + (processo.data.getMonth() + 1)).substr(-2) + '/'
          + processo.data.getFullYear() + ' '
          + ('00' + processo.data.getHours()).substr(-2) + ':'
          + ('00' + processo.data.getMinutes()).substr(-2));
      var cell =
        $(row.insertCell(15)).html('('
          + processo.documentos.length
          + ')'
          + (processo.evento ? ' <font color="blue">' + processo.evento
            + '</font>' : ''));
      if (rowspan > 1) {
        cellData.get(0).rowSpan = rowspan;
        cell.get(0).rowSpan = rowspan;
        cellData.css({
            background: '#fda'
          });
        cell.css({
            background: '#fda'
          });
        cellData.prepend('(' + rowspan + ' processos)<br/><br/>');
      }
      if (processo.evento) {
        cell.append($('<small> [x]</small>').css({
            cursor: 'pointer',
            visibility: 'hidden'
          }).click(function(e)
          {
            self.filterCol('evento', $(this).parent().find('font').html());
          }));
      }
      if (processo.documentos.length > 0) {
        var div;
        cell.append(div = $('<div></div>').css({
            position: 'absolute',
            background: document.body.getAttribute('bgcolor'),
            border: '1px solid #888',
            padding: '2px'
          }).hide());
        for (var d = 0, doc, link; d < processo.documentos.length
          && (doc = processo.documentos[d]) && (link = doc.link); d++) {
          div
            .append($('<a></a>')
              .attr({
                href: 'download_documento.php?num_protocolo=' + link[0]
                  + '&seq_documento=' + link[1] + '&cod_seg=' + link[2],
                target: link[0] + '' + link[1]
              }
              )
              .html('<img border="0" src="imagens/icone-texto.gif" width="16" height="13">'
                + doc.name).click(this.onDocClick)).append($('<br />'));
        }
      }
      cell.hover(function(e)
        {
          $(this).find('div').show();
          $(this).find('small').css({
              visibility: 'visible'
            });
        }, function(e)
        {
          $(this).find('div').hide();
          $(this).find('small').css({
              visibility: 'hidden'
            });
        });
    }
  }
  $('<thead><tr></tr></thead>').insertBefore(this.table.firstChild);
  (this.unhide = $('<span>Reexibir colunas ocultas</span>').css({
      fontWeight: 'bold',
      color: 'red',
      cursor: 'pointer'
    }).hide().click(this.unhideCols)).insertBefore(this.table.firstChild)
    .wrap('<caption></caption>');
  this.unhide.parent().css({
      textAlign: 'right'
    });
  row = $(this.table).find('thead tr');
  this.cols = {};
  var cols;
  for (c in cols = {
    checkbox: '<a href="javascript:marcar_itens(0);">Todos</a><br /><a href="javascript:desmarcar_itens();">LIMPAR</a>',
    numproc: 'Processo / Ação',
    advogados: 'Advogado',
    lembrete: 'L',
    materia: 'Mat.',
    localizador: 'Local.',
    juizo: 'J',
    gratuita: 'JG',
    mp: 'MP',
    tutela: 'Tut.',
    pri: 'Pri.',
    autor: 'Autor',
    reus: 'Réu',
    assunto: 'Assunto',
    data: 'Data/Hora<br />do Evento',
    evento: 'Documentos<br />Último<br />Evento'
  }) {
    var th;
    row.append(th = $('<th>' + cols[c] + '</th>'));
    this.cols[c] = th;
    th.get(0).setUserData('name', c, null);
    if (c != 'checkbox') {
      th.prepend($('<div></div>').css({
          position: 'absolute',
          border: '1px solid #888',
          background: $(document.body).attr('bgcolor')
        }).hide()).hover(function(e)
      {
        (div = $(this).find('div')).show().css({
          top: $(this).position().top - $(div).height() + 'px',
          left: $(this).position().left + ($(this).width() / 2)
            - ($(div).width() / 2) + 'px'
        }
        );
      }, function(e)
      {
        $(this).find('div').hide();
      }
      );
      if (c != 'numproc') {
        var self = this;
        var ocultar;
        (div = th.find('div')).append(ocultar = $('<span>ocultar</span>').css({
            cursor: 'pointer'
          }).click(function(e)
          {
            var col = $(e.target).closest('th').get(0).getUserData('name');
            self.hideCol(col);
          })).append('<br />');
      }
      var ordenar;
      (div = th.find('div')).append(ordenar = $('<div></div>'));
      ordenar.append($('<small>[a-z]</small>').css({
          cursor: 'pointer'
        }).click(function(e)
        {
          var col = $(e.target).closest('th').get(0).getUserData('name');
          self.sort(col, 1);
        }));
      ordenar.append(' ').append($('<small>[z-a]</small>').css({
          cursor: 'pointer'
        }).click(function(e)
        {
          var col = $(e.target).closest('th').get(0).getUserData('name');
          self.sort(col, -1);
        }));
      if (c == 'pri' && !this.pri) {
        div.append($('<span>carregar</span>').css({
            cursor: 'pointer'
          }).click(function(e)
          {
            this.parentNode.removeChild(this);
            EprocSandbox.V1.processos.buscaPrioridades();
          }));
      }
    }
  }
  var self = this;
  $(this.table).click(this.onClick);
  $(this.table).find('td').attr({
      vAlign: 'top'
    });
};
EprocSandbox.V1.Table.prototype = {
  pri: false,
  filterCol: function(col, value)
  {
    if (confirm('Deseja retirar desta listagem os processos com ' + col + ' "'
      + value + '"?')) {
      for (var tbody = $('tbody', this.table).get(0), r = tbody.rows.length - 1, row; r >= 0
        && (row = tbody.rows[r]); r--) {
        if (EprocSandbox.V1.processos[r][col] == value) {
          EprocSandbox.V1.processos.splice(r, 1);
          row.parentNode.removeChild(row);
        }
      }
    }
  },
  getTable: function()
  {
    return $('<table></table>').attr({
        border: 1,
        cellPadding: 1,
        cellspacing: 0
      }).get(0);
  },
  hideCol: function(c)
  {
    var col = this.cols[c];
    var i = col.get(0).cellIndex;
    col.closest('table').find('thead tr th:eq(' + i + ')').hide();
    col.closest('table').find('tbody tr').find('td:eq(' + i + ')').hide();
    this.unhide.show();
  },
  onClick: function(e)
  {
    if ($(e.target).closest('tbody').size()) {
      var link;
      if ((link = $(e.target).closest('a')).size()) {
        e.preventDefault();
        var index = link.closest('tr').get(0).rowIndex - 1;
        var td = link.closest('td').get(0);
        var name =
          link.closest('table').find('thead tr:eq(0) th:eq(' + td.cellIndex
            + ')').get(0).getUserData('name');
        switch (name)
        {
          case 'numproc':
            /*
             * var div = $('<div></div>').css({ position: 'absolute', width:
             * '600px', height: '350px', overflowY: 'scroll', border: '3px solid
             * red', background: $(document.body).attr('bgcolor')
             * }).appendTo(td).html('<img
             * src="chrome://global/skin/throbber/Throbber-small.gif" width="16"
             * height="16" alt="Carregando..." />');
             * $(div).load(link.get(0).href + ' table:eq(3)');
             */
            window.open(link.get(0).href);
            break;

          case 'lembrete':
            EprocSandbox.V1.abreJanela(link.get(0).href,
              EprocSandbox.V1.processos[index].numproc + name, true
            );
            break;

          case 'localizador':
          case 'gratuita':
          case 'mp':
          case 'tutela':
          case 'pri':
            EprocSandbox.V1.abreJanela(link.get(0).href,
              EprocSandbox.V1.processos[index].numproc + name
            );
            break;
        }
      }
    }
  },
  onDocClick: function(e)
  {
    e.preventDefault();
    var openWindow = EprocSandbox.V1.windows[this.target];
    if (openWindow && typeof openWindow == 'object' && openWindow.document) {
      openWindow.focus();
    } else {
      EprocSandbox.V1.windows[this.target] =
        window
          .open(
            this.href,
            this.target,
            'menubar=0,resizable=1,status=0,toolbar=0,location=0,menubar=0,directories=0,scrollbars=1'
          );
    }
  },
  onPrioridade: function(cell, processo)
  {
    this.pri = true;
    var link;
    $(cell).html(link =
      $('<a href="status_prioridade.php?num_processo=' + processo.numproc
        + '"></a>').css({
          textDecoration: 'none'
        }).html(processo.pri));
    if (processo.pri == 'S') {
      link.css({
          color: 'red',
          fontWeight: 'bold'
        });
    } else {
      link.css({
          color: 'black'
        });
    }
  },
  replace: function(table)
  {
    table.parentNode.replaceChild(this.table, table);
    if (EprocSandbox.V1.processos.filters.cod_localizador)
      this.hideCol('localizador');
    if (EprocSandbox.V1.processos.filters.cod_assunto_com)
      this.hideCol('assunto');
    if (EprocSandbox.V1.processos.filters.magistrados != 'T')
      this.hideCol('juizo');
    if (EprocSandbox.V1.processos.filters.tipoacao != 'NOK')
      this.hideCol('materia');
    if ($(this.table).width() > $(window).width()) this.hideCol('advogados');
    if ($(this.table).width() > $(window).width()) this.hideCol('materia');
  },
  sort: function(col, mul)
  {
    if (col == 'data') {
      EprocSandbox.V1.processos.filters.s_ordem = 11;
    }
    EprocSandbox.V1.processos.sort(function(a, b)
      {
        if (a[col] > b[col]) return 1 * mul;
        else if (a[col] < b[col]) return -1 * mul;
        else {
          if (col == 'data') {
            if (a.documentos.length > 0 && b.documentos.length > 0) {
              var protocoloA = a.documentos[0].link[0];
              var protocoloB = b.documentos[0].link[0];
              if (protocoloA > protocoloB) {
                return 1 * mul;
              } else if (protocoloA < protocoloB) {
                return -1 * mul;
              } else {
                return 0;
              }
            } else if (a.documentos.length > 0) {
              return 1 * mul;
            } else if (b.documentos.length > 0) {
              return -1 * mul;
            } else {
              return 0;
            }
          } else {
            return 0;
          }
        }
      });
    var hiddenCols = [];
    $(this.table).find('thead th').each(function()
    {
      if ($(this).css('display') == 'none')
        hiddenCols.push(this.getUserData('name'));
    }
    );
    this.init(EprocSandbox.V1.processos);
    var self = this;
    hiddenCols.forEach(function(field)
      {
        self.hideCol(field);
      });
    this.replace($('table').get(1));
  },
  unhideCols: function(e)
  {
    $(this).closest('table').find('th,td').show();
    $(this).hide();
  }
};
(function()
{
  EprocSandbox.V1.init();
})();