 // Datos COMPLETOS de la malla (todos los semestres y ramos)
const malla = {
    años: [
        {
            nombre: "Primer Año",
            semestres: [
                {
                    nombre: "I Semestre",
                    ramos: [
                        { nombre: "Gestión y Empresa", abre: ["Introducción a la gestión de personas", "Introducción al Marketing", "Contabilidad"] },
                        { nombre: "Aplicación de Manejo de Datos", abre: ["Estadistica I", "Tecnología y Sistemas de Información"] },
                        { nombre: "Metodos Matematicos I", abre: ["Estadistica I", "Metodos Matematicos II"] },
                        { nombre: "Introducción a la Economia", abre: ["Introducción a la Microeconomia", "Introducción a la Macroeconomia"] },
                        { nombre: "Inglés I", abre: ["Ingles II"] }
                    ]
                },
                {
                    nombre: "II Semestre",
                    ramos: [
                        { nombre: "Introducción a la Gestion de Personas", abre: ["Tecnologia y Sistemas de Información", "Taller de Negocios", "Gestion de personas I"] },
                        { nombre: "Metodos Matematicos II", abre: ["Metodos Matematicos III", "Introducción a las Finanzas", "Introducción a la Macroeconomia"] },
                        { nombre: "Contabilidad", abre: ["Introduccion a las Finanzas", "Contabilidad Empresarial I", "Taller de Negocios"] },
                        { nombre: "Introducción a la Microeconomia", abre: ["Economia Aplicada"] },
                        { nombre: "Inglés II", abre: ["Ingles III"] },
                        { nombre: "Introducción al pensamiento político", abre: [] }
                    ]
                }
            ]
        },
        {
            nombre: "Segundo Año",
            semestres: [
                {
                    nombre: "III Semestre",
                    ramos: [
                        { nombre: "Introducción al Marketing", abre: ["Marketing I", "Negocios II", "Negocios I"] },
                        { nombre: "Estadistica I", abre: ["Estadistica II", "Introducción a las Finanzas"] },
                        { nombre: "Metodos Matematicos III", abre: ["Metodos Matematicos IV"] },
                        { nombre: "Introduccion a la macroeconomía", abre: ["Economia Aplicada"] },
                        { nombre: "Ingles III", abre: ["Ingles IV"] },
                        { nombre: "Comunicación I", abre: ["Comunicación II"] }
                    ]
                },
                {
                    nombre: "IV Semestre",
                    ramos: [
                        { nombre: "Teconoliga y Sistemas de Informacion", abre: ["Gestion de Personas I", "Metodos Cuantitativos I", "Taller de Negocios"] },
                        { nombre: "Estadistica II", abre: ["Metodos Cuantitativos I"] },
                        { nombre: "Introduccion a las Finanzas", abre: ["Negocios I", "Finanzas I", "Economia para los Negocios"] },
                        { nombre: "Economia Aplicada", abre: ["Economia para los Negocios"] }
                    ]
                }
            ]
        },
        {
            nombre: "Tercer Año",
            semestres: [
                {
                    nombre: "V Semestre",
                    ramos: [
                        { nombre: "Gestion de Personas I", abre: ["Gestión de Personas II", "Negocios III"] },
                        { nombre: "Metodos Cuantitativos I", abre: ["Marketing I"] },
                        { nombre: "Contabilidad Empresarial I", abre: ["Finanzas I", "Contabilidad Empresarial II", "Finanzas II"] },
                        { nombre: "Economia para los Negocios", abre: ["Negocios III"] },
                        { nombre: "Ingles IV", abre: ["Negocios I"] },
                        { nombre: "Comunicación II", abre: [] }
                    ]
                },
                {
                    nombre: "VI Semestre",
                    ramos: [
                        { nombre: "Marketing I", abre: ["Marketing II"] },
                        { nombre: "Taller de Negocios", abre: ["Negocios III"] },
                        { nombre: "Negocios I", abre: ["Negocios III"] },
                        { nombre: "Finanzas I", abre: ["Negocios III", "Finanzas II"] },
                        { nombre: "Contabilidad Empresarial I", abre: ["Finanzas II"] },
                        { nombre: "Electivo de Entorno Social", abre: [] },
                        { nombre: "Libre I", abre: [] }
                    ]
                }
            ]
        },
        {
            nombre: "Cuarto Año",
            semestres: [
                {
                    nombre: "VII Semestre",
                    ramos: [
                        { nombre: "Taller Practico Profesional I", abre: [] },
                        { nombre: "Taller Practico Profesional II", abre: [] },
                        { nombre: "Negocios II", abre: ["Negocios III"] },
                        { nombre: "Electivo de Profundización I", abre: [] },
                        { nombre: "Electivo de Entorno Social II", abre: [] },
                        { nombre: "Libre II", abre: [] }
                    ]
                },
                {
                    nombre: "VIII Semestre",
                    ramos: [
                        { nombre: "Getion de personas II", abre: [] },
                        { nombre: "Marketing II", abre: [] },
                        { nombre: "Negocios III", abre: [] },
                        { nombre: "Finanzas II", abre: [] },
                        { nombre: "Electivo de profundización II", abre: [] },
                        { nombre: "Libre III", abre: [] }
                    ]
                }
            ]
        },
        {
            nombre: "Quinto Año",
            semestres: [
                {
                    nombre: "IX Semestre",
                    ramos: [
                        { nombre: "Electivo Magister I", abre: [] },
                        { nombre: "Electivo Magister II", abre: [] },
                        { nombre: "Electivo Magister III", abre: [] },
                        { nombre: "Electivo Magister IV", abre: [] },
                        { nombre: "Electivo Magister V", abre: [] }
                    ]
                },
                {
                    nombre: "X Semestre",
                    ramos: [
                        { nombre: "Electivo Magister VI", abre: [] },
                        { nombre: "Electivo Magister VII", abre: [] },
                        { nombre: "Electivo Magister VIII", abre: [] },
                        { nombre: "Electivo Magister IX", abre: [] },
                        { nombre: "Electivo Magister X", abre: [] }
                    ]
                }
            ]
        }
    ]
};

// Estado de los ramos (aprobados/bloqueados)
const estadoRamos = {};

// Generar la malla en el DOM
function generarMalla() {
    const container = document.getElementById('malla-container');
    container.className = 'semestres-container'; // Contenedor flexible horizontal

    malla.años.forEach(año => {
        año.semestres.forEach(semestre => {
            const divSemestre = document.createElement('div');
            divSemestre.className = 'semestre';
            divSemestre.innerHTML = `<h3>${semestre.nombre}</h3>`;
            
            semestre.ramos.forEach(ramo => {
                estadoRamos[ramo.nombre] = false;
                const divRamo = document.createElement('div');
                divRamo.className = 'ramo';
                divRamo.textContent = ramo.nombre;
                
                // Solo bloquear ramos que no sean del primer semestre
                if (año.nombre !== "Primer Año" || semestre.nombre !== "I Semestre") {
                    divRamo.classList.add('bloqueado');
                }
                
                divRamo.addEventListener('click', () => toggleRamo(ramo));
                divSemestre.appendChild(divRamo);
            });
            
            container.appendChild(divSemestre);
        });
    });
}

// Aprobar/desaprobar ramos
function toggleRamo(ramo) {
    const ramoElement = [...document.querySelectorAll('.ramo')].find(el => el.textContent === ramo.nombre);
    
    if (ramoElement.classList.contains('bloqueado')) return; // No hacer nada si está bloqueado
    
    if (!estadoRamos[ramo.nombre]) {
        // Aprobar ramo
        estadoRamos[ramo.nombre] = true;
        ramoElement.classList.add('aprobado');
        
        // Desbloquear ramos dependientes
        ramo.abre.forEach(ramoDependiente => {
            document.querySelectorAll('.ramo').forEach(el => {
                if (el.textContent === ramoDependiente) {
                    el.classList.remove('bloqueado');
                }
            });
        });
    }
}

// Inicializar al cargar la página
window.onload = generarMalla;
