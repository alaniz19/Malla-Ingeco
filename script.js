// script.js
const ramos = [
  // --- PRIMER AÑO ---
  { nombre: "Gestión y Empresa", id: "gestion", requisitos: [], desbloquea: ["gestion-personas", "marketing", "contabilidad"] },
  { nombre: "Aplicación de Manejo de Datos", id: "datos", requisitos: [], desbloquea: ["estadistica1", "tsi"] },
  { nombre: "Métodos Matemáticos I", id: "mat1", requisitos: [], desbloquea: ["estadistica1", "mat2"] },
  { nombre: "Introducción a la Economía", id: "intro-economia", requisitos: [], desbloquea: ["micro", "macro"] },
  { nombre: "Inglés I", id: "ingles1", requisitos: [], desbloquea: ["ingles2"] },

  { nombre: "Introducción a la Gestión de Personas", id: "gestion-personas", requisitos: ["gestion"], desbloquea: ["tsi", "taller-negocios", "gestion-personas1"] },
  { nombre: "Métodos Matemáticos II", id: "mat2", requisitos: ["mat1"], desbloquea: ["mat3", "finanzas", "macro"] },
  { nombre: "Contabilidad", id: "contabilidad", requisitos: ["gestion"], desbloquea: ["finanzas", "contab1", "taller-negocios"] },
  { nombre: "Introducción a la Microeconomía", id: "micro", requisitos: ["intro-economia"], desbloquea: ["economia-aplicada"] },
  { nombre: "Inglés II", id: "ingles2", requisitos: ["ingles1"], desbloquea: ["ingles3"] },
  { nombre: "Introducción al pensamiento político", id: "pensamiento", requisitos: [], desbloquea: [] },

  // --- SEGUNDO AÑO ---
  { nombre: "Introducción al Marketing", id: "marketing", requisitos: ["gestion"], desbloquea: ["marketing1", "negocios2", "negocios1"] },
  { nombre: "Estadística I", id: "estadistica1", requisitos: ["datos", "mat1"], desbloquea: ["estadistica2", "finanzas"] },
  { nombre: "Métodos Matemáticos III", id: "mat3", requisitos: ["mat2"], desbloquea: ["mat4"] },
  { nombre: "Introducción a la Macroeconomía", id: "macro", requisitos: ["intro-economia", "mat2"], desbloquea: ["economia-aplicada"] },
  { nombre: "Inglés III", id: "ingles3", requisitos: ["ingles2"], desbloquea: ["ingles4"] },
  { nombre: "Comunicación I", id: "com1", requisitos: [], desbloquea: ["com2"] },

  { nombre: "Tecnología y Sistemas de Información", id: "tsi", requisitos: ["datos", "gestion-personas"], desbloquea: ["gestion-personas1", "cuantitativos", "taller-negocios"] },
  { nombre: "Estadística II", id: "estadistica2", requisitos: ["estadistica1"], desbloquea: ["cuantitativos"] },
  { nombre: "Introducción a las Finanzas", id: "finanzas", requisitos: ["mat2", "estadistica1", "contabilidad"], desbloquea: ["negocios1", "finanzas1", "eco-negocios"] },
  { nombre: "Economía Aplicada", id: "economia-aplicada", requisitos: ["micro", "macro"], desbloquea: ["eco-negocios"] },

  // --- TERCER AÑO ---
  { nombre: "Gestión de Personas I", id: "gestion-personas1", requisitos: ["gestion-personas", "tsi"], desbloquea: ["gestion-personas2", "negocios3"] },
  { nombre: "Métodos Cuantitativos I", id: "cuantitativos", requisitos: ["tsi", "estadistica2"], desbloquea: ["marketing1"] },
  { nombre: "Contabilidad Empresarial I", id: "contab1", requisitos: ["contabilidad"], desbloquea: ["finanzas1", "contab2", "finanzas2"] },
  { nombre: "Economía para los Negocios", id: "eco-negocios", requisitos: ["economia-aplicada", "finanzas"], desbloquea: ["negocios3"] },
  { nombre: "Inglés IV", id: "ingles4", requisitos: ["ingles3"], desbloquea: ["negocios1"] },
  { nombre: "Comunicación II", id: "com2", requisitos: ["com1"], desbloquea: [] },

  { nombre: "Marketing I", id: "marketing1", requisitos: ["marketing", "cuantitativos"], desbloquea: ["marketing2"] },
  { nombre: "Taller de Negocios", id: "taller-negocios", requisitos: ["gestion-personas", "contabilidad", "tsi"], desbloquea: ["negocios3"] },
  { nombre: "Negocios I", id: "negocios1", requisitos: ["marketing", "ingles4", "finanzas"], desbloquea: ["negocios3"] },
  { nombre: "Finanzas I", id: "finanzas1", requisitos: ["finanzas", "contab1"], desbloquea: ["negocios3", "finanzas2"] },
  { nombre: "Electivo de Entorno Social I", id: "entorno1", requisitos: [], desbloquea: [] },
  { nombre: "Libre I", id: "libre1", requisitos: [], desbloquea: [] },

  // --- CUARTO AÑO ---
  { nombre: "Taller Práctico Profesional I", id: "tpp1", requisitos: [], desbloquea: [] },
  { nombre: "Taller Práctico Profesional II", id: "tpp2", requisitos: [], desbloquea: [] },
  { nombre: "Negocios II", id: "negocios2", requisitos: ["marketing"], desbloquea: ["negocios3"] },
  { nombre: "Electivo de Profundización I", id: "prof1", requisitos: [], desbloquea: [] },
  { nombre: "Electivo de Entorno Social II", id: "entorno2", requisitos: [], desbloquea: [] },
  { nombre: "Libre II", id: "libre2", requisitos: [], desbloquea: [] },

  { nombre: "Gestión de Personas II", id: "gestion-personas2", requisitos: ["gestion-personas1"], desbloquea: [] },
  { nombre: "Marketing II", id: "marketing2", requisitos: ["marketing1"], desbloquea: [] },
  { nombre: "Negocios III", id: "negocios3", requisitos: ["gestion-personas1", "eco-negocios", "taller-negocios", "negocios1", "negocios2", "finanzas1"], desbloquea: [] },
  { nombre: "Finanzas II", id: "finanzas2", requisitos: ["finanzas1", "contab1"], desbloquea: [] },
  { nombre: "Electivo de Profundización II", id: "prof2", requisitos: [], desbloquea: [] },
  { nombre: "Libre III", id: "libre3", requisitos: [], desbloquea: [] },

  // --- QUINTO AÑO ---
  { nombre: "Electivo Magíster I", id: "mag1", requisitos: [], desbloquea: [] },
  { nombre: "Electivo Magíster II", id: "mag2", requisitos: [], desbloquea: [] },
  { nombre: "Electivo Magíster III", id: "mag3", requisitos: [], desbloquea: [] },
  { nombre: "Electivo Magíster IV", id: "mag4", requisitos: [], desbloquea: [] },
  { nombre: "Electivo Magíster V", id: "mag5", requisitos: [], desbloquea: [] },

  { nombre: "Electivo Magíster VI", id: "mag6", requisitos: [], desbloquea: [] },
  { nombre: "Electivo Magíster VII", id: "mag7", requisitos: [], desbloquea: [] },
  { nombre: "Electivo Magíster VIII", id: "mag8", requisitos: [], desbloquea: [] },
  { nombre: "Electivo Magíster IX", id: "mag9", requisitos: [], desbloquea: [] },
  { nombre: "Electivo Magíster X", id: "mag10", requisitos: [], desbloquea: [] }
];

function crearMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";
  ramos.forEach(r => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = r.id;
    div.innerText = r.nombre;

    if (r.requisitos.length > 0) {
      div.classList.add("bloqueado");
    }

    div.addEventListener("click", () => aprobarRamo(r.id));
    container.appendChild(div);
  });
}

function aprobarRamo(id) {
  const ramo = document.getElementById(id);
  if (ramo.classList.contains("bloqueado")) return;
  ramo.classList.toggle("aprobado");

  const aprobados = Array.from(document.querySelectorAll(".ramo.aprobado")).map(r => r.id);

  ramos.forEach(r => {
    const div = document.getElementById(r.id);
    if (!r.requisitos.length || r.requisitos.every(req => aprobados.includes(req))) {
      div.classList.remove("bloqueado");
    } else {
      if (!div.classList.contains("aprobado")) {
        div.classList.add("bloqueado");
      }
    }
  });
}

crearMalla();
