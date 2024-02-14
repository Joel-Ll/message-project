// data.js
const cursos = [
  { 
    id: 1, 
    nombre: "DERECHOS HUMANOS A NIVEL MUNDIAL Y EN BOLIVIA",
    av: 'DERECHOS HUMANOS A NIVEL MUNDIAL Y EN BOLIVIA',
    add: false,
  },
  { 
    id: 2, 
    nombre: "PREVENCION DE LA VIOLENCIA D.S. 3981",
    av: 'D.S. 3981',
    add: false,      
  },
  { 
    id: 3, 
    nombre: "MEDIACION Y RESOLUCION DE CONFLICTOS SOCIALES",
    av: 'MEDIACION Y RESOLUCION DE CONFLICTOS SOCIALES',
    add: false,
  },
  {
    id: 4, 
    nombre: "POLITICA SAFCI - SALUD FAMILIAR COMUNITARIA INTEGRAL",
    av: 'POLÍTICA SAFCI',
    add: false,
  },
  { 
    id: 5, 
    nombre: "MANEJO DE LA CARPETA FAMILIAR SEGUN LA POLITICA SAFCI",
    av: 'MANEJO DE LA CARPETA FAMILIAR',
    add: false,
  },
  { 
    id: 6, 
    nombre: "LEY N.2027 ESTATUTO DEL FUNCIONARIO PUBLICO",
    av: 'LEY 2027',
    add: false,
  },
  { 
    id: 7, 
    nombre: "OFIMITICA - NIVEL BASICO  PROGRAMA EXCEL",
    av: 'OFIMITICA NIVEL BASICO PROGRAMA EXCEL',
    add: false,
  },
  { 
    id: 8, 
    nombre: "OFIMITICA - NIVEL INTERMEDIO  PROGRAMA EXCEL",
    av: 'OFIMATICA NIVEL INTERMEDIO PROGRAMA EXCEL',
    add: false,
  },
  { 
    id: 9, 
    nombre: "OFIMATICA - NIVEL AVANZADO PROGRAMA WORD",
    av: 'OFIMITICA NIVEL AVANZADO PROGRAMA EXCEL',
    add: false,
  },
  { 
    id: 10, 
    nombre: "OFIMITICA - NIVEL AVANZADO PROGRAMA EXCEL",
    av: 'OFIMITICA NIVEL AVANZADO PROGRAMA EXCEL',
    add: false,
  },
  { 
    id: 11, 
    nombre: "OFIMITICA - NIVEL AVANZADO PROGRAMA POWER POINT",
    av: 'OFIMITICA NIVEL AVANZADO PROGRAMA POWER POINT',
    add: false,
  },
  { 
    id: 12, 
    nombre: "PROGRAMACION EN JAVA",
    av: 'PROGRAMACION EN JAVA',
    add: false,
  },
  { 
    id: 13, 
    nombre: "MANEJO DE ANDROID STUDIO",
    av: 'MANEJO DE ANDROID STUDIO',
    add: false,
  },
  { 
    id: 14, 
    nombre: "MANEJO DEL SOFTWARE DE ATENCION PRIMARIA EN SALUD SOAPS",
    av: 'SOAPS',
    add: false,
  },
  { 
    id: 15, 
    nombre: "MANEJO DEL SISTEMA DE ADMINISTRACION LOGISTICA DE MEDICAMENTOS E INSUMOS SALMI",
    av: 'SALMI',
    add: false,
  },
  { 
    id: 16, 
    nombre: "MANEJO DEL SISTEMA NACIONAL DE INFORMACION EN SALUD - VIGILANCIA EPIDEMIOLOGICA SNIS-VE",
    av: 'SNIS-VE',
    add: false,
  },
  { 
    id: 17, 
    nombre: "MANEJO DEL SISTEMA DE INFORMACION PARA LA ADMINISTRACION LOGISTICA DE UNIDADES MEDICAS SIAL",
    av: 'SIAL',
    add: false,
  },
  { 
    id: 18, 
    nombre: "LEY N.3131 DEL EJERCICIO PROFESIONAL MEDICO",
    av: 'LEY 3131',
    add: false,
  },
  { 
    id: 19, 
    nombre: "LEY N° 1152 DEL S.U.S. (SISTEMA UNICO DE SALUD UNIVERSAL Y GRATUITO)",
    av: 'LEY 1152',
    add: false,
  },
  { 
    id: 20, 
    nombre: "BIOSEGURIDAD HOSPITALARIA EN EL CONTEXTO DE LA COVID-19 ACTUALIZADO",
    av: 'BIOSEGURIDAD',
    add: false,
  },
  { 
    id: 21, 
    nombre: "LEY N.1737 DEL MEDICAMENTO",
    av: 'LEY 1737',
    add: false,
  },
  { 
    id: 22, 
    nombre: "LEY N.475 DE PRESTACIONES DE SERVICIOS DE SALUD INTEGRA Y SU MODIFICACION SEGUN LA LEY 1152",
    av: 'LEY 475',
    add: false,
  },
  { 
    id: 23, 
    nombre: "PROGRAMA AMPLIADO DE INMUNIZACION P.A.I. EN SU ASPECTO CLINICO",
    av: 'P.A.I.',
    add: false,
  },
  { 
    id: 24, 
    nombre: "NORMAS DE REFERENCIA Y CONTRAREFERENCIA ACTUALIZADAS",
    av: 'NORMAS DE REFERENCIA Y CONTRAREFERENCIA ACTUALIZADAS',
    add: false,
  },
  { 
    id: 25, 
    nombre: "LEY N.482 DE GOBIERNOS AUTONOMOS MUNICIPALES",
    av: 'LEY 482',
    add: false,
  },
  { 
    id: 26, 
    nombre: "D.S. 0181 NB/SABS - NORMAS BASICAS DEL SISTEMA DE ADMINISTRACION DE BIENES Y SERVICIOS", 
    av: 'D.S. 0181 NB/SABS',
    add: false,
  },
  { 
    id: 27, 
    nombre: "LEY N.348 PARA GARANTIZAR A LAS MUJERES UNA VIDA LIBRE DE VIOLENCIA",
    av: 'LEY 348',
    add: false,
  },
  { 
    id: 28, 
    nombre: "LEY N.548 CODIGO NIÑA NIÑO Y ADOLESCENTE",
    av: 'LEY 548',
    add: false,
  },
  { 
    id: 29, 
    nombre: "LEY N.1178 SAFCO DE ADMINISTRACION Y CONTROL GUBERNAMENTAL",
    av: 'LEY 1178',
    add: false,
  },
  { 
    id: 30, 
    nombre: "POLITICAS PUBLICAS",
    av: 'POLITICAS PUBLICAS',
    add: false,
  },
  { 
    id: 31, 
    nombre: "D.S. 23318 -A DE RESPONSABILIDAD POR LA FUNCION PUBLICA",
    av: 'D.S. 23318 -A DE RESPONSABILIDAD POR LA FUNCION PUBLICA',
    add: false,
  },
  { 
    id: 32, 
    nombre: "RELACIONES HUMANAS",
    av: 'RELACIONES HUMANAS',
    add: false,
  },
  { 
    id: 33, 
    nombre: "LEY N.004 - DE LUCHA CONTRA LA CORRUPCION, ENRIQUECIMIENTO ILICITO E INVESTIGACION DE FORTUNAS MARCELO QUIROGA SANTA CRUZ",
    av: 'LEY 004',
    add: false,
  },
  { 
    id: 34, 
    nombre: "LEY Nº 031 MARCO DE AUTONOMÍAS Y DESCENTRALIZACIÓN “ANDRÉS IBÁÑEZ”",
    av: 'LEY 031',
    add: false,
  },
  { 
    id: 35, 
    nombre: "LEY N°1990 LEY GENERAL DE ADUANAS",
    av: 'LEY 1990',
    add: false,
  },
  { 
    id: 36, 
    nombre: "LEY N° 2492 CODIGO TRIBUTARIO BOLIVIANO Y SUS MODIFICACIONES CON LA LEY N°975",
    av: 'LEY 2492',
    add: false,
  },
  { 
    id: 37, 
    nombre: "LEY N°843 SISTEMA TRIBUTARIO BOLIVIANO - LLENADO DE FORMULARIOS IVA, IT Y RC-IVA",
    av: 'LEY 843',
    add: false,
  },
  { 
    id: 38, 
    nombre: "LEY N° 603 CODIGO DE LAS FAMILIAS Y DEL PROCESO FAMILIAR",
    av: 'LEY 603',
    add: false,
  },
  { 
    id: 39, 
    nombre: "PROCESOS DE LA ASISTENCIA FIMILIAR",
    av: 'PROCESOS DE LA ASISTENCIA FIMILIAR',
    add: false,
  },
  { 
    id: 40, 
    nombre: "LEY N° 223 LEY GENERAL PARA PERSONAS CON DISCAPACIDAD",
    av: 'LEY 223',
    add: false,
  },
  { 
    id: 41, 
    nombre: "LEY N° 045 CONTRA EL RACISMO Y TODA FORMA DE DISCRIMINACION",
    av: 'LEY 045',
    add: false,
  },
  { 
    id: 42, 
    nombre: "LEY N° 369 LEY GENERAL DE LAS PERSONAS ADULTAS MAYORES",
    av: 'LEY 369',
    add: false,
  },
  { 
    id: 43, 
    nombre: "LEY N°974 DE UNIDADES DE TRANSPARENCIA Y LUCHA CONTRA LA CORRUPCION",
    av: 'LEY 974',
    add: false,
  },
  { 
    id: 44, 
    nombre: "LEY Nº 341 DE PARTICIPACIÓN Y CONTROL SOCIAL",
    av: 'LEY 341',
    add: false,
  },
  { 
    id: 45, 
    nombre: "LEY Nº 708 DE ARBITRAJE Y CONCILIACIÓN",
    av: 'LEY 708',
    add: false,
  },
  { 
    id: 46, 
    nombre: "CURSO DE NEGOCIACIÓN",
    av: 'CURSO DE NEGOCIACIÓN',
    add: false,
  },
  { 
    id: 47, 
    nombre: "LEY Nº 342 – LEY DE LA JUVENTUD",
    av: 'LEY 342',
    add: false,
  },
  { 
    id: 48, 
    nombre: "JUSTICIA PENAL JUVENIL",
    av: 'JUSTICIA PENAL JUVENIL',
    add: false,
  },
  { 
    id: 49, 
    nombre: "JUSTICIA RESTAURATIVA PARA ADOLESCENTES CON RESPONSABILIDAD PENAL",
    av: 'JUSTICIA RESTAURATIVA PARA ADOLESCENTES CON RESPONSABILIDAD PENAL',
    add: false,
  },
  { 
    id: 50, 
    nombre: "ATENCION AL CLIENTE",
    av: 'ATENCION AL CLIENTE',
    add: false,
  },
  { 
    id: 51, 
    nombre: "ORATORIA Y LIDERAZGO",
    av: 'ORATORIA Y LIDERAZGO',
    add: false,
  },
  { 
    id: 52, 
    nombre: "RELACIONES PUBLICAS",
    av: 'RELACIONES PUBLICAS',
    add: false,
  },{ 
    id: 53, 
    nombre: "MANEJO DEL SISTEMA DE CONTRATACIONES ESTATALES DE BOLIVIA SI.CO.ES.",
    av: 'SICOES',
    add: false,
  },
  { 
    id: 54, 
    nombre: "ESTRATEGIA CONE-CUIDADO OBSTÉTRICO Y NEONATAL ESENCIAL",
    av: 'ESTRATEGIA CONE',
    add: false,
  },
  { 
    id: 55, 
    nombre: "AIEPI CLINICO - ATENCIÓN INTEGRADA A LAS ENFERMEDADES PREVALENTES DE LA INFANCIA",
    av: 'AIEPI CLINICO',
    add: false,
  },
  { 
    id: 56, 
    nombre: "AIEPI NEONATAL- ATENCIÓN INTEGRADA A LAS ENFERMEDADES PREVALENTES DE LA INFANCIA",
    av: 'AIEPI NEONATAL',
    add: false,
  },
  { 
    id: 57, 
    nombre: "EMERGENCIAS NEONATALES",
    av: 'EMERGENCIAS NEONATALES',
    add: false,
  },
  { 
    id: 58, 
    nombre: "DESCOM – FI (DESARROLLO COMUNITARIO Y FORTALECIMIENTO INSTITUCIONAL) EN PROYECTOS DE AGUA POTABLE",
    av: 'DESCOM – FI EN PROYECTOS DE AGUA POTABLE',
    add: false,
  },
  { 
    id: 59, 
    nombre: "DESCOM – FI (DESARROLLO COMUNITARIO Y FORTALECIMIENTO INSTITUCIONAL) EN PROYECTOS DE SANEAMIENTO BASICO",
    av: 'DESCOM – FI EN PROYECTOS DE SANEAMIENTO BASICO',
    add: false,
  },
  { 
    id: 60, 
    nombre: "PROCESO DE ACREDITACIÓN DE ESTABLECIMIENTOS DE SALUD EN BOLIVIA",
    av: 'PROCESO DE ACREDITACIÓN DE ESTABLECIMIENTOS DE SALUD EN BOLIVIA',
    add: false,
  },
  { 
    id: 61, 
    nombre: "ELABORACIÓN DEL P.O.A. INSTITUCIONAL EN SALUD",
    av: 'ELABORACIÓN DEL P.O.A. INSTITUCIONAL EN SALUD',
    add: false,
  },
  { 
    id: 62, 
    nombre: "EMERGENCIAS OBSTETRICAS",
    av: 'EMERGENCIAS OBSTETRICAS',
    add: false,
  },
  { 
    id: 63, 
    nombre: "SALUD SEXUAL Y REPRODUCTIVA (ESPECIALIZADA)",
    av: 'SALUD SEXUAL Y REPRODUCTIVA (ESPECIALIZADA)',
    add: false,
  },
  { 
    id: 64, 
    nombre: "LEY N° 1333 DEL MEDIO AMBIENTE",
    av: 'LEY 1333',
    add: false,
  },
  { 
    id: 65, 
    nombre: "LEY N° 755 DE GESTION INTEGRAL DE RESIDUOS",
    av: 'LEY 755',
    add: false,
  },
  { 
    id: 66, 
    nombre: "AUDITORIAS AMBIENTALES SEGÚN LA LEY N°1333 EN EL SECTOR MINERO",
    av: 'AUDITORIAS AMBIENTALES SEGÚN LA LEY N°1333 EN EL SECTOR MINERO',
    add: false,
  },
  { 
    id: 67, 
    nombre: "AUDITORIAS AMBIENTALES SEGÚN LA LEY N°1333 EN RESIDUOS SOLIDOS - RELLENENOS SANITARIOS",
    av: 'AUDITORIAS AMBIENTALES SEGÚN LA LEY N°1333 EN RESIDUOS SOLIDOS - RELLENENOS SANITARIOS',
    add: false,
  },
  { 
    id: 68, 
    nombre: "LICENCIAMIENTO AMBIENTAL (SECTOR TURISMO)",
    av: 'LICENCIAMIENTO AMBIENTAL (SECTOR TURISMO)',
    add: false,
  },
  { 
    id: 69, 
    nombre: "FUNCIONES DE TRABAJO DE CAJEROS Y ATENCIÓN AL CLIENTE EN ENTIDADES FINANCIERAS",
    av: 'FUNCIONES DE TRABAJO DE CAJEROS Y ATENCIÓN AL CLIENTE EN ENTIDADES FINANCIERAS',
    add: false,
  },
  { 
    id: 70, 
    nombre: "BILLETAJE, NORMAS DE RIESGO Y SEGURIDAD PARA CAJEROS / U.I.F. (UNIDAD DE INVESTIGACIONES FINANCIERAS)",
    av: 'BILLETAJE, NORMAS DE RIESGO Y SEGURIDAD PARA CAJEROS / U.I.F. (UNIDAD DE INVESTIGACIONES FINANCIERAS)',
    add: false,
  },
  { 
    id: 71, 
    nombre: "MANEJO DE ESTACIÓN DE CAJERO, CHEQUES, APERTURA - CIERRE DE CUENTAS BANCARIAS Y ARQUEO DE CAJAS",
    av: 'MANEJO DE ESTACIÓN DE CAJERO, CHEQUES, APERTURA - CIERRE DE CUENTAS BANCARIAS Y ARQUEO DE CAJAS',
    add: false,
  },{ 
    id: 72, 
    nombre: "LEY N°393 DE SERVICIOS FINANCIEROS CON LA NORMATIVA A.S.F.I.",
    av: 'LEY 393 DE SERVICIOS FINANCIEROS CON LA NORMATIVA A.S.F.I.',
    add: false,
  },
  { 
    id: 73, 
    nombre: "GESTION DE MICROCREDITO Y CREDITOS DE BANCAS PERSONA",
    av: 'GESTION DE MICROCREDITO Y CREDITOS DE BANCAS PERSONA',
    add: false,
  },
  { 
    id: 74, 
    nombre: "GESTION DE CREDITO EMPRESARIAL",
    av: 'GESTION DE CREDITO EMPRESARIAL',
    add: false,
  },
  { 
    id: 75, 
    nombre: "PLANIFICACION Y GESTION DEL TURISMO DEPARTAMENTAL Y MUNICIPAL",
    av: 'PLANIFICACION Y GESTION DEL TURISMO DEPARTAMENTAL Y MUNICIPAL',
    add: false,
  },
  { 
    id: 76, 
    nombre: "ANALISIS DE LA LEY GENERAL DEL TURISMO N° 292",
    av: 'ANALISIS DE LA LEY GENERAL DEL TURISMO N° 292',
    add: false,
  },
  { 
    id: 77, 
    nombre: "COMO REACTIVAR LA ECONOMIA EN EL SECTOR DEL TURISMO",
    av: 'COMO REACTIVAR LA ECONOMIA EN EL SECTOR DEL TURISMO',
    add: false,
  },
  { 
    id: 78, 
    nombre: "IMPLEMENTACION DE SITIOS WEB APLICADOS EN EL SECTOR TURISMO",
    av: 'IMPLEMENTACION DE SITIOS WEB APLICADOS EN EL SECTOR TURISMO',
    add: false,
  },
  { 
    id: 79, 
    nombre: "MANEJO DE REDES SOCIALES PARA EL SECTOR DEL TURISMO",
    av: 'MANEJO DE REDES SOCIALES PARA EL SECTOR DEL TURISMO',
    add: false,
  },
  { 
    id: 80, 
    nombre: "DESARROLLO DE PROYECTOS TURISTICOS (METODOLOGIA DE PREPARACION DEL PROYECTO)",
    av: 'DESARROLLO DE PROYECTOS TURISTICOS (METODOLOGIA DE PREPARACION DEL PROYECTO)',
    add: false,
  },
  { 
    id: 81,
    nombre: "DESARROLLO DE PROYECTOS TURISTICOS (PLAN DE NEGOCIOS DEL PROYECTO)",
    av: 'DESARROLLO DE PROYECTOS TURISTICOS (PLAN DE NEGOCIOS DEL PROYECTO)',
    add: false,
  },
  { 
    id: 82, 
    nombre: "DESARROLLO DE PROYECTOS TURISTICOS (EVALUACION DEL PROYECTO)",
    av: 'DESARROLLO DE PROYECTOS TURISTICOS (EVALUACION DEL PROYECTO)',
    add: false,
  },
  { 
    id: 83,
    nombre: "METODOLOGÍA IPER CON JERARQUIZACIÓN DE MEDIDAS DE PREVENCIÓN Y CONTROL EN SEGURIDAD Y SALUD EN EL TRABAJO EN BOLIVIA",
    av: 'METODOLOGÍA IPER CON JERARQUIZACIÓN DE MEDIDAS DE PREVENCIÓN Y CONTROL EN SEGURIDAD Y SALUD EN EL TRABAJO EN BOLIVIA',
    add: false,
  },
  { 
    id: 84, 
    nombre: "SEGURIDAD Y SALUD EN EL TRABAJO APLICANDO LA LEGISLACIÓN INTERNACIONAL Y BOLIVIANA",
    av: 'SEGURIDAD Y SALUD EN EL TRABAJO APLICANDO LA LEGISLACIÓN INTERNACIONAL Y BOLIVIANA',
    add: false,
  },

  { 
    id: 85, 
    nombre: "MACROS Y LENGUAJE VISUAL BASIC EN MICROSFT EXCEL (NIVEL BASICO)",
    av: 'MACROS Y LENGUAJE VISUAL BASIC EN MICROSFT EXCEL (NIVEL BASICO)',
    add: false,
  },
  { 
    id: 86, 
    nombre: "MACROS Y LENGUAJE VISUAL BASIC EN MICROSFT EXCEL (NIVEL INTERMEDIO)",
    av: 'MACROS Y LENGUAJE VISUAL BASIC EN MICROSFT EXCEL (NIVEL INTERMEDIO)',
    add: false,
  },
  { 
    id: 87, 
    nombre: "MACROS Y LENGUAJE VISUAL BASIC EN MICROSFT EXCEL (NIVEL AVANAZADO)",
    av: 'MACROS Y LENGUAJE VISUAL BASIC EN MICROSFT EXCEL (NIVEL AVANAZADO)',
    add: false,
  },
  { 
    id: 88, 
    nombre: "MANEJO DEL SOFTWARE SPSS ESTATISTICS",
    av: 'MANEJO DEL SOFTWARE SPSS ESTATISTICS',
    add: false,
  }
];


export default cursos;