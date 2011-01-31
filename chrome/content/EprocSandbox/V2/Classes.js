/**
 * @name chrome://eproc/content/EprocSandbox/V2/Classes.js
 * @fileOverview Define o objeto EprocSandbox.V2.Classes
 * @author Nadameu
 */

if ('undefined' == typeof(EprocSandbox)) {
  var EprocSandbox = {};
}

if ('undefined' == typeof(EprocSandbox.V2)) {
  EprocSandbox.V2 = {};
}

/**
 * Classes de processos e as respectivas cores
 * 
 * @type Object
 */
EprocSandbox.V2.Classes = {
  'AÇÃO CIVIL PÚBLICA': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO CIVIL PÚBLICA DE IMPROBIDADE ADMINISTRATIVA': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO CIVIL PÚBLICA DO CÓDIGO DE DEFESA DO CONSUMID': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DE ALIMENTOS': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DE ANULAÇÃO E SUBSTITUIÇÃO DE TÍTULOS AO PORT': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DE APREENSÃO E DEPÓSITO DE COISA VENDIDA C/RE': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DE BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DE COBRANÇA DE CÉDULA DE CRÉDITO INDUSTRIAL': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DE COMPROMISSO ARBITRAL': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DE CONSIGNAÇÃO DE ALUGUEL': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DE CONSIGNAÇÃO EM PAGAMENTO': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DE DEPÓSITO': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DE DEPÓSITO DA LEI 8866/94': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DE DESAPROPRIAÇÃO': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DE DESAPROPRIAÇÃO P FINS DE REFORMA AGRÁRIA': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DE DESPEJO': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DE DISSOLUÇÃO E LIQUIDAÇÃO DE SOCIEDADE': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DE EXPROPRIAÇÃO DA LEI 8.257/91': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DE IMISSÃO NA POSSE': EprocSandbox.V2.Cores.CINZA,
  'AÇÃO DE NUNCIAÇÃO DE OBRA NOVA': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DE USUCAPIÃO': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO DISCRIMINATÓRIA': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO MONITÓRIA': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO ORDINÁRIA (PROCEDIMENTO COMUM ORDINÁRIO)': EprocSandbox.V2.Cores.ROSA,
  'AÇÃO PENAL': EprocSandbox.V2.Cores.AZUL_CLARA,
  'AÇÃO POPULAR': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO RENOVATÓRIA': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO REVISIONAL DE ALUGUEL': EprocSandbox.V2.Cores.VERDE,
  'AÇÃO SUMÁRIA (PROCEDIMENTO COMUM SUMÁRIO)': EprocSandbox.V2.Cores.VERDE,
  'AGRAVO DE EXECUÇÃO PENAL': EprocSandbox.V2.Cores.BRANCA,
  'AGRAVO DE INSTRUMENTO': EprocSandbox.V2.Cores.VERDE,
  'Agravo de Instrumento': EprocSandbox.V2.Cores.LARANJA,
  'AGRAVO DE INSTRUMENTO DE DECISÃO DENEGAT.DE REC.EX': EprocSandbox.V2.Cores.VERDE,
  'ALIENAÇÃO JUDICIAL': EprocSandbox.V2.Cores.BRANCA,
  'ALIENAÇÃO JUDICIAL CRIMINAL': EprocSandbox.V2.Cores.VERMELHA,
  'ALVARÁ JUDICIAL': EprocSandbox.V2.Cores.CINZA,
  'APELAÇÃO CRIMINAL': EprocSandbox.V2.Cores.AZUL,
  'Apelação Cível': EprocSandbox.V2.Cores.ROSA,
  'Apelação Criminal': EprocSandbox.V2.Cores.AZUL,
  'Apelação/Reexame Necessário': EprocSandbox.V2.Cores.ROSA,
  'APREENSÃO DE EMBARCAÇÕES': EprocSandbox.V2.Cores.BRANCA,
  'ARRESTO / HIPOTECA LEGAL - MEDIDAS ASSECURATÓRIAS': EprocSandbox.V2.Cores.BRANCA,
  'ARRIBADAS FORÇADAS': EprocSandbox.V2.Cores.BRANCA,
  'AVARIA A CARGO DO SEGURADOR': EprocSandbox.V2.Cores.BRANCA,
  'AVARIAS': EprocSandbox.V2.Cores.BRANCA,
  'CANCELAMENTO DE NATURALIZAÇÃO': EprocSandbox.V2.Cores.BRANCA,
  'CARTA DE ORDEM': EprocSandbox.V2.Cores.CINZA,
  'CARTA PRECATÓRIA': EprocSandbox.V2.Cores.CINZA,
  'CARTA ROGATÓRIA': EprocSandbox.V2.Cores.CINZA,
  'CARTA TESTEMUNHÁVEL': EprocSandbox.V2.Cores.AMARELA,
  'COMUNICAÇÃO DE PRISÃO EM FLAGRANTE': EprocSandbox.V2.Cores.BRANCA,
  'CONFLITO DE COMPETÊNCIA': EprocSandbox.V2.Cores.BRANCA,
  'CRIMES AMBIENTAIS': EprocSandbox.V2.Cores.BRANCA,
  'CUMPRIMENTO DE SENTENÇA': EprocSandbox.V2.Cores.BRANCA,
  'DECLARAÇÃO DE AUSÊNCIA': EprocSandbox.V2.Cores.BRANCA,
  'DECLARAÇÃO DE DÚVIDA NO REGISTRO': EprocSandbox.V2.Cores.BRANCA,
  'DEMARCAÇÃO / DIVISÃO': EprocSandbox.V2.Cores.CINZA,
  'DESAFORAMENTO DE JULGAMENTO': EprocSandbox.V2.Cores.BRANCA,
  'DESPEJO P/FALTA DE PAGAMENTO CUMULADO C/COBRANÇA': EprocSandbox.V2.Cores.VERDE,
  'DESPEJO POR FALTA DE PAGAMENTO': EprocSandbox.V2.Cores.VERDE,
  'EMBARGOS À ADJUDICAÇÃO': EprocSandbox.V2.Cores.VERDE,
  'EMBARGOS À ARREMATAÇÃO': EprocSandbox.V2.Cores.VERDE,
  'EMBARGOS À EXECUÇÃO': EprocSandbox.V2.Cores.VERDE,
  'EMBARGOS À EXECUÇÃO FISCAL': EprocSandbox.V2.Cores.VERDE,
  'EMBARGOS DE RETENÇÃO POR BENFEITORIAS': EprocSandbox.V2.Cores.VERDE,
  'EMBARGOS DE TERCEIRO': EprocSandbox.V2.Cores.VERDE,
  'EMBARGOS DO ACUSADO': EprocSandbox.V2.Cores.VERDE,
  'ESPECIALIZAÇÃO DE HIPOTECA LEGAL': EprocSandbox.V2.Cores.BRANCA,
  'EXCEÇÃO DA VERDADE': EprocSandbox.V2.Cores.BRANCA,
  'EXCEÇÃO DE COISA JULGADA': EprocSandbox.V2.Cores.BRANCA,
  'EXCEÇÃO DE ILEGITIMIDADE DE PARTE': EprocSandbox.V2.Cores.BRANCA,
  'EXCEÇÃO DE IMPEDIMENTO': EprocSandbox.V2.Cores.VERDE,
  'EXCEÇÃO DE IMPEDIMENTO CRIMINAL': EprocSandbox.V2.Cores.BRANCA,
  'EXCEÇÃO DE INCOMPETÊNCIA': EprocSandbox.V2.Cores.VERDE,
  'EXCEÇÃO DE INCOMPETÊNCIA CRIMINAL': EprocSandbox.V2.Cores.BRANCA,
  'EXCEÇÃO DE LITISPENDÊNCIA': EprocSandbox.V2.Cores.BRANCA,
  'EXCEÇÃO DE SUSPEIÇÃO': EprocSandbox.V2.Cores.VERDE,
  'EXCEÇÃO DE SUSPEIÇÃO CRIMINAL': EprocSandbox.V2.Cores.BRANCA,
  'EXCESSO OU DESVIO-INCIDENTES EM EXECUÇÃO CRIMINAL': EprocSandbox.V2.Cores.BRANCA,
  'EXECUÇÃO DE SENTENÇA CONTRA FAZENDA PÚBL': EprocSandbox.V2.Cores.VERDE,
  'EXECUÇÃO DE TÍTULO EXTRAJUDICIAL': EprocSandbox.V2.Cores.AMARELA,
  'EXECUÇÃO FISCAL': EprocSandbox.V2.Cores.LARANJA,
  'EXECUÇÃO HIPOTECÁRIA DO SISTEMA FINANCEIRO DA HABI': EprocSandbox.V2.Cores.AMARELA,
  'EXECUÇÃO PENAL': EprocSandbox.V2.Cores.BRANCA,
  'EXECUÇÃO PENAL PROVISÓRIA': EprocSandbox.V2.Cores.AMARELA,
  'EXECUÇÃO PROVISÓRIA DE SENTENÇA': EprocSandbox.V2.Cores.VERDE,
  'EXIBIÇÃO DE DOCUMENTO OU COISA': EprocSandbox.V2.Cores.LARANJA,
  'HABEAS CORPUS': EprocSandbox.V2.Cores.AMARELA,
  'HABEAS DATA': EprocSandbox.V2.Cores.BRANCA,
  'HABILITAÇÃO': EprocSandbox.V2.Cores.VERDE,
  'HOMOLOGAÇÃO DE TRANSAÇÃO EXTRAJUDICIAL': EprocSandbox.V2.Cores.VERDE,
  'IMPUGNAÇÃO AO CUMPRIMENTO DE SENTENÇA': EprocSandbox.V2.Cores.AZUL,
  'IMPUGNAÇÃO AO PEDIDO DE ASSISTÊNCIA LITISCONSORCIA': EprocSandbox.V2.Cores.BRANCA,
  'IMPUGNAÇÃO AO VALOR DA CAUSA': EprocSandbox.V2.Cores.BRANCA,
  'IMPUGNAÇÃO DO DIREITO A ASSISTÊNCIA JUDICIÁRIA': EprocSandbox.V2.Cores.VERDE,
  'INCIDENTE DE AVALIAÇÃO DE DEPENDÊNCIA DE DROGAS': EprocSandbox.V2.Cores.VERDE,
  'INCIDENTE DE FALSIDADE': EprocSandbox.V2.Cores.VERDE,
  'INCIDENTE DE FALSIDADE CRIMINAL': EprocSandbox.V2.Cores.BRANCA,
  'INCIDENTE DE INSANIDADE MENTAL': EprocSandbox.V2.Cores.AMARELA,
  'INCIDENTE DE RESTITUIÇÃO DE COISAS APREENDIDAS': EprocSandbox.V2.Cores.BRANCA,
  'INCIDENTE DE TRANSF.ENTRE ESTABELECIMENTOS PENAIS': EprocSandbox.V2.Cores.BRANCA,
  'INCIDENTE DE UNIFORMIZAÇÃO DE JURISPRUDÊNCIA': EprocSandbox.V2.Cores.VERDE,
  'INQUÉRITO POLICIAL': EprocSandbox.V2.Cores.VERDE,
  'INQUÉRITO POLICIAL - PORTARIA': EprocSandbox.V2.Cores.VERDE,
  'INQUÉRITO POLICIAL - PRISAO EM FLAGRANTE': EprocSandbox.V2.Cores.VERDE,
  'INTERDITO PROIBITÓRIO': EprocSandbox.V2.Cores.VERDE,
  'JUSTIFICAÇÃO DE DINHEIRO A RISCO': EprocSandbox.V2.Cores.VERDE,
  'LIQUIDAÇÃO POR ARBITRAMENTO': EprocSandbox.V2.Cores.BRANCA,
  'LIQUIDAÇÃO POR ARTIGOS': EprocSandbox.V2.Cores.BRANCA,
  'LIQUIDAÇÃO PROVISÓRIA POR ARBITRAMENTO': EprocSandbox.V2.Cores.BRANCA,
  'LIQUIDAÇÃO PROVISÓRIA POR ARTIGOS': EprocSandbox.V2.Cores.BRANCA,
  'MANDADO DE SEGURANÇA': EprocSandbox.V2.Cores.PALHA,
  'MANDADO DE SEGURANÇA COLETIVO': EprocSandbox.V2.Cores.PALHA,
  'MEDIDA CAUTELAR DE ALIMENTOS PROVISIONAIS': EprocSandbox.V2.Cores.AZUL,
  'MEDIDA CAUTELAR DE APREENSÃO DE TÍTULOS': EprocSandbox.V2.Cores.CINZA,
  'MEDIDA CAUTELAR DE ARRESTO': EprocSandbox.V2.Cores.BRANCA,
  'MEDIDA CAUTELAR DE ARROLAMENTO DE BENS': EprocSandbox.V2.Cores.BRANCA,
  'MEDIDA CAUTELAR DE ATENTADO': EprocSandbox.V2.Cores.BRANCA,
  'MEDIDA CAUTELAR DE BUSCA E APREENSÃO': EprocSandbox.V2.Cores.SALMÃO,
  'MEDIDA CAUTELAR DE CAUÇÃO': EprocSandbox.V2.Cores.PALHA,
  'MEDIDA CAUTELAR DE EXIBIÇÃO': EprocSandbox.V2.Cores.SALMÃO,
  'MEDIDA CAUTELAR DE HOMOLOGAÇÃO DO PENHOR LEGAL': EprocSandbox.V2.Cores.SALMÃO,
  'MEDIDA CAUTELAR DE INTERPELAÇÃO': EprocSandbox.V2.Cores.SALMÃO,
  'MEDIDA CAUTELAR DE JUSTIFICAÇÃO': EprocSandbox.V2.Cores.SALMÃO,
  'MEDIDA CAUTELAR DE NOTIFICAÇÃO': EprocSandbox.V2.Cores.SALMÃO,
  'MEDIDA CAUTELAR DE POSSE EM NOME DO NASCITURO': EprocSandbox.V2.Cores.SALMÃO,
  'MEDIDA CAUTELAR DE PRODUÇÃO ANTECIPADA DE PROVAS': EprocSandbox.V2.Cores.SALMÃO,
  'MEDIDA CAUTELAR DE PROTESTO': EprocSandbox.V2.Cores.SALMÃO,
  'MEDIDA CAUTELAR DE SEQUESTRO': EprocSandbox.V2.Cores.SALMÃO,
  'MEDIDA CAUTELAR FISCAL': EprocSandbox.V2.Cores.SALMÃO,
  'MEDIDA CAUTELAR INOMINADA': EprocSandbox.V2.Cores.SALMÃO,
  'NATURALIZAÇÃO': EprocSandbox.V2.Cores.SALMÃO,
  'NOMEAÇÃO DE ADVOGADO': EprocSandbox.V2.Cores.CINZA,
  'NOTIFICAÇÃO PARA EXPLICAÇÕES': EprocSandbox.V2.Cores.SALMÃO,
  'NOTIFICAÇÃO PARA EXPLICAÇÕES (LEI DE IMPRENSA)': EprocSandbox.V2.Cores.AMARELA,
  'OPÇÃO DE NACIONALIDADE': EprocSandbox.V2.Cores.SALMÃO,
  'OPOSIÇÃO': EprocSandbox.V2.Cores.SALMÃO,
  'ORGANIZAÇÃO E FISCALIZAÇÃO DE FUNDAÇÃO': EprocSandbox.V2.Cores.SALMÃO,
  'OUTRAS MEDIDAS PROVISIONAIS': EprocSandbox.V2.Cores.VERDE,
  'OUTROS PROCEDIMENTOS DE JURISDIÇÃO VOLUNTÁRIA': EprocSandbox.V2.Cores.VERDE,
  'PEDIDO DE ASSISTÊNCIA JUDICIÁRIA': EprocSandbox.V2.Cores.SALMÃO,
  'PEDIDO DE BUSCA E APREENSÃO CRIMINAL': EprocSandbox.V2.Cores.CINZA,
  'PEDIDO DE LIBERDADE PROVISÓRIA COM OU SEM FIANÇA': EprocSandbox.V2.Cores.AMARELA,
  'PEDIDO DE PRISÃO PREVENTIVA': EprocSandbox.V2.Cores.VERDE,
  'PEDIDO DE PRISÃO TEMPORÁRIA': EprocSandbox.V2.Cores.BRANCA,
  'PEDIDO DE QUEBRA DE SIGILO DE DADOS E/OU TELEFÔNIC': EprocSandbox.V2.Cores.BRANCA,
  'PEDIDO DE RESPOSTA OU RETIFICAÇÃO DA LEI DE IMPREN': EprocSandbox.V2.Cores.VERDE,
  'PEDIDO PRISÃO/LIBERDADE VIGIADA FINS DE EXPULSÃO': EprocSandbox.V2.Cores.CINZA,
  'PRESTAÇÃO DE CONTAS - EXIGIDAS': EprocSandbox.V2.Cores.VERDE,
  'PRESTAÇÃO DE CONTAS - OFERECIDAS': EprocSandbox.V2.Cores.VERDE,
  'PROCED.INVESTIGATÓRIO DO MP (PEÇAS DE INFORMAÇÃO)': EprocSandbox.V2.Cores.BRANCA,
  'PROCEDIMENTO ESP.DA LEI ANTITÓXICOS': EprocSandbox.V2.Cores.BRANCA,
  'PROCEDIMENTO ESP.DA LEI DE COMBATE ÀS ORGANIZAÇÕES': EprocSandbox.V2.Cores.BRANCA,
  'PROCEDIMENTO ESP.DA LEI DE IMPRENSA': EprocSandbox.V2.Cores.BRANCA,
  'PROCEDIMENTO ESP.DOS CRIMES CONTRA A PROPRIEDADE I': EprocSandbox.V2.Cores.BRANCA,
  'PROCEDIMENTO ESP.DOS CRIMES DE ABUSO DE AUTORIDADE': EprocSandbox.V2.Cores.VERDE,
  'PROCEDIMENTO ESP.DOS CRIMES DE CALÚNIA E INJÚRIA': EprocSandbox.V2.Cores.VERDE,
  'PROCEDIMENTO ESP.DOS CRIMES DE COMPETÊNCIA DO JÚRI': EprocSandbox.V2.Cores.AZUL_OU_MARROM,
  'PROCEDIMENTO ESP.DOS CRIMES DE RESPONSABILIDADE DE': EprocSandbox.V2.Cores.AZUL,
  'PROCEDIMENTO ESP.SUMÁRIO': EprocSandbox.V2.Cores.AZUL,
  'PROTESTO FORMADO A BORDO': EprocSandbox.V2.Cores.AZUL,
  'RECURSO CÍVEL': EprocSandbox.V2.Cores.BRANCA,
  'Recurso Criminal em Sentido Estrito': EprocSandbox.V2.Cores.AZUL,
  'RECURSO DE MEDIDA CAUTELAR': EprocSandbox.V2.Cores.BRANCA,
  'RECURSO EM SENTIDO ESTRITO': EprocSandbox.V2.Cores.ROSA,
  'Reexame Necessário Cível': EprocSandbox.V2.Cores.ROSA,
  'Reexame Necessário Criminal': EprocSandbox.V2.Cores.AZUL,
  'REINT/MANUTENÇÃO POSSE PROCED.ESP.JURISD.CONTENC.': EprocSandbox.V2.Cores.BRANCA,
  'REMIÇÃO DO IMÓVEL HIPOTECADO': EprocSandbox.V2.Cores.BRANCA,
  'REPRESENTAÇÃO CRIMINAL': EprocSandbox.V2.Cores.BRANCA,
  'REQUERIMENTO DE REABILITAÇÃO': EprocSandbox.V2.Cores.BRANCA,
  'RESTAURAÇÃO DE AUTOS': EprocSandbox.V2.Cores.AZUL,
  'RETIFICAÇÃO DE REGISTRO DE IMÓVEL': EprocSandbox.V2.Cores.ROSA,
  'SEQÜESTRO - MEDIDAS ASSECURATÓRIAS': EprocSandbox.V2.Cores.BRANCA,
  'SUPERVENIÊNCIA DOENÇA MENTAL-INCID.EXEC.CRIMINAL': EprocSandbox.V2.Cores.BRANCA,
  'TERMO CIRCUNSTANCIADO': EprocSandbox.V2.Cores.BRANCA
};