/**
 * @name chrome://eproc/content/EprocSandbox/V2/Cores.js
 * @fileOverview Define o objeto EprocSandbox.V2.Cores
 * @author Nadameu
 */

if ('undefined' == typeof(EprocSandbox)) {
  var EprocSandbox = {};
}

if ('undefined' == typeof(EprocSandbox.V2)) {
  EprocSandbox.V2 = {};
  alert('undefined');
}

/**
 * Cores das capas dos processos
 * 
 * @type Object
 */
EprocSandbox.V2.Cores = {
  AMARELA: 'Amarela', // 'hsl(60, 60%, 85%)',// '#efef8f',
  AZUL: 'Azul', // 'hsl(210, 50%, 80%)',// '#8fbfef',
  AZUL_CLARA: 'AzulClara', // 'hsl(210, 60%, 85%)',// '#c4dffb',
  AZUL_OU_MARROM: 'Marrom', // 'hsl(30, 30%, 80%)',// '#bf8040',
  BRANCA: 'Branca', // 'hsl(0, 0%, 95%)',// '#fff',
  CINZA: 'Cinza', // 'hsl(0, 0%, 85%)',// '#bfbfbf',
  LARANJA: 'Laranja', // 'hsl(30, 75%, 80%)',// 'hsl(30, 50%, 80%)',//'#f5b574',
  PALHA: 'Palha', // 'hsl(30, 60%, 85%)',// '#efd88f',
  ROSA: 'Rosa', // 'hsl(330, 50%, 85%)',// '#fbc4df',
  SALMÃO: 'Salmao', // 'hsl(15, 60%, 85%)',// '#efa88f',
  VERDE: 'Verde', // 'hsl(120, 60%, 85%)',// '#a7eda7',
  VERMELHA: 'Vermelha' // 'hsl(0, 75%, 80%)'// '#db6464'
};
/*
 * var table = document.createElement('table');
 * table.setAttribute('cellpadding', 10); table.setAttribute('cellspacing', 0);
 * table.setAttribute('border', 1); table.setAttribute('width', '50%'); for (c
 * in Eproc.V2.Cores) { var row = table.insertRow(table.rows.length); var cell =
 * row.insertCell(row.cells.length); cell.style.backgroundColor =
 * Eproc.V2.Cores[c]; cell.innerHTML = c; }
 * document.getElementById('divInfraAreaTelaD').appendChild(table);
 */