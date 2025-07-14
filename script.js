// Datos de la malla curricular
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
        // ... (Agrega los demás años y semestres siguiendo la misma estructura)
    ]
};

// Estado de los ramos
const estadoRamos = {};

function generarMalla() {
    const container = document.getElementById('malla-container');
    
    malla.años.forEach(año => {
        const divAño = document.createElement('div');
        divAño.className = 'año';
        divAño.innerHTML = `<h2>${año.nombre}</h2>`;
        container.appendChild(divAño);

        año.semestres.forEach(semestre => {
            const divSemestre = document.createElement('div');
            divSemestre.className = 'semestre';
            divSemestre.innerHTML = `<h3>${semestre.nombre}</h3><div class="ramos-container"></div>`;
            divAño.appendChild(divSemestre);

            const ramosContainer = divSemestre.querySelector('.ramos-container');
            
            semestre.ramos.forEach(ramo => {
                estadoRamos[ramo.nombre] = false;
                
                const divRamo = document.createElement('div');
                divRamo.className = 'ramo';
                divRamo.textContent = ramo.nombre;
                divRamo.addEventListener('click', () => toggleRamo(ramo));
                
                ramosContainer.appendChild(divRamo);
            });
        });
    });
}

function toggleRamo(ramo) {
    if (estadoRamos[ramo.nombre]) {
        // Si ya está aprobado, no hacer nada (o implementar desaprobación si lo deseas)
        return;
    }

    // Marcar como aprobado
    estadoRamos[ramo.nombre] = true;
    document.querySelectorAll('.ramo').forEach(element => {
        if (element.textContent === ramo.nombre) {
            element.classList.add('aprobado');
        }
    });

    // Desbloquear ramos dependientes
    ramo.abre.forEach(ramoDependiente => {
        document.querySelectorAll('.ramo').forEach(element => {
            if (element.textContent === ramoDependiente) {
                element.classList.remove('bloqueado');
            }
        });
    });
}

// Inicializar malla al cargar la página
window.onload = generarMalla;
