const malla = document.querySelector(".malla");

const semestres = [
  {
    titulo: "Año 1 - Semestre 1",
    ramos: [
      "Morfología básica",
      "Biología celular",
      "Matemática básica",
      "Fundamentos del movimiento humano",
      "Orientación a la kinesiología",
      "Antropología"
    ]
  },
  {
    titulo: "Año 1 - Semestre 2",
    ramos: [
      "Morfología aplicada al movimiento humano",
      "Integrado fisiología – fisiopatología I",
      "Física kinesiológica",
      "Psicología aplicada a la salud",
      "Bioenergética y metabolismo"
    ]
  },
  {
    titulo: "Año 2 - Semestre 3",
    ramos: [
      "Salud digital",
      "Integrado fisiología – fisiopatología II",
      "Análisis del movimiento humano I",
      "Innovación y tecnología en salud",
      "Motricidad humana",
      "Ética"
    ]
  },
  {
    titulo: "Año 2 - Semestre 4",
    ramos: [
      "Salud poblacional",
      "Análisis del movimiento humano II",
      "Primeros auxilios y atención prehospitalaria",
      "Fisiología del ejercicio aplicada al rendimiento humano",
      "Persona y sociedad"
    ]
  },
  {
    titulo: "Año 3 - Semestre 5",
    ramos: [
      "Epidemiología",
      "Deficiencias y disfunciones kinesiológicas",
      "Recursos clínicos para la kinesiología",
      "Fisiología clínica y prescripción del ejercicio",
      "Gerontología",
      "Gestión de equipos para el alto rendimiento"
    ]
  },
  {
    titulo: "Año 3 - Semestre 6",
    ramos: [
      "Metodología de la investigación",
      "Intervención kinesiológica neurológica I",
      "Intervención kinesiológica musculoesquelética I",
      "Intervención kinesiológica cardiorrespiratoria I",
      "Gestión en salud, emprendimiento e innovación",
      "Electivo I: Formación e identidad"
    ]
  },
  {
    titulo: "Año 4 - Semestre 7",
    ramos: [
      "Bioética",
      "Intervención kinesiológica neurológica II",
      "Intervención kinesiológica musculoesquelética II",
      "Intervención kinesiológica cardiorrespiratoria II",
      "Investigación en ciencias del movimiento",
      "Electivo II: Formación e identidad"
    ]
  },
  {
    titulo: "Año 4 - Semestre 8",
    ramos: [
      "Integrado de kinesiología",
      "Kinesiología deportiva",
      "Proyecto en ciencias del movimiento",
      "Electivo III: Formación e identidad",
      "Gestión de carrera y desarrollo profesional"
    ]
  },
  {
    titulo: "Año 5 - Semestre 9",
    ramos: [
      "Práctica profesional musculoesquelética",
      "Práctica profesional cardiorrespiratoria",
      "Electivo I"
    ]
  },
  {
    titulo: "Año 5 - Semestre 10",
    ramos: [
      "Práctica profesional neurológica",
      "Práctica profesional atención primaria u hospitalaria",
      "Electivo II"
    ]
  }
];

semestres.forEach((sem, idx) => {
  const container = document.createElement("div");
  container.className = "semestre";
  container.innerHTML = `<h2>${sem.titulo}</h2>`;
  sem.ramos.forEach((ramo, i) => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = ramo;
    div.dataset.id = `${idx}-${i}`;
    container.appendChild(div);
  });
  malla.appendChild(container);
});
