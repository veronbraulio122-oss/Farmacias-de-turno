const farmaciaElemento = document.getElementById("nombre-farmacia");
const fechaElemento = document.getElementById("fecha");
const btnMaps = document.getElementById("btn-maps");
const btnWpp = document.getElementById("btn-wpp");
const logoRed = document.querySelector(".logo-red");

/* ===============================
   BASE DE DATOS MARZO 2026
   ================================= */
const turnos = {
    "2026-03-01":{farmacia:"Red Farmako Farmacia Central",maps:"https://maps.app.goo.gl/tEC8riH4RKpigxkw9",whatsapp:"https://wa.link/qpba4b"},
    "2026-03-02":{farmacia:"Farma Fiorella (Ex Sol Del Norte)",maps:"https://maps.app.goo.gl/SG5ZjdTk6BvRHFAaA",whatsapp:"https://wa.link/vyzpgz"},
    "2026-03-03":{farmacia:"Farmacia Vital",maps:"https://maps.app.goo.gl/rEbphDL5EbjfG1YZA",whatsapp:"https://wa.link/gzim66"},
    "2026-03-04":{farmacia:"Andresito",maps:"https://maps.app.goo.gl/LvWpQRcGqmw3KtP9A",whatsapp:"https://wa.link/ilssy6"},
    "2026-03-05":{farmacia:"Avenida",maps:"https://maps.app.goo.gl/5bQAsLomLDrukSbV9",whatsapp:"https://wa.link/qo56va"},
    "2026-03-06":{farmacia:"Red Farmako Farmacia Central",maps:"https://maps.app.goo.gl/tEC8riH4RKpigxkw9",whatsapp:"https://wa.link/qpba4b"},
    "2026-03-07":{farmacia:"Farmanat",maps:"https://maps.app.goo.gl/mDYA4AhvEz3kJPRH9",whatsapp:"https://wa.link/7g8t67"},
    "2026-03-08":{farmacia:"Red Farmako Farmavida",maps:"https://maps.app.goo.gl/tuUsAGeGT3jeeg7B8",whatsapp:"https://wa.link/mpvw1p"},
    "2026-03-09":{farmacia:"Red Farmako Libertad",maps:"https://maps.app.goo.gl/yzxJ5dzcD6AhPzae6",whatsapp:"https://wa.link/wts1ui"},
    "2026-03-10":{farmacia:"Farma Fiorella (Ex Sol Del Norte)",maps:"https://maps.app.goo.gl/SG5ZjdTk6BvRHFAaA",whatsapp:"https://wa.link/vyzpgz"},
    "2026-03-11":{farmacia:"Farmacia Vital",maps:"https://maps.app.goo.gl/rEbphDL5EbjfG1YZA",whatsapp:"https://wa.link/gzim66"},
    "2026-03-12":{farmacia:"Andresito",maps:"https://maps.app.goo.gl/LvWpQRcGqmw3KtP9A",whatsapp:"https://wa.link/ilssy6"},
    "2026-03-13":{farmacia:"Avenida",maps:"https://maps.app.goo.gl/5bQAsLomLDrukSbV9",whatsapp:"https://wa.link/qo56va"},
    "2026-03-14":{farmacia:"Red Farmako Farmacia Central",maps:"https://maps.app.goo.gl/tEC8riH4RKpigxkw9",whatsapp:"https://wa.link/qpba4b"},
    "2026-03-15":{farmacia:"Farmanat",maps:"https://maps.app.goo.gl/mDYA4AhvEz3kJPRH9",whatsapp:"https://wa.link/7g8t67"},
    "2026-03-16":{farmacia:"Red Farmako Farmavida",maps:"https://maps.app.goo.gl/tuUsAGeGT3jeeg7B8",whatsapp:"https://wa.link/mpvw1p"},
    "2026-03-17":{farmacia:"Red Farmako Libertad",maps:"https://maps.app.goo.gl/yzxJ5dzcD6AhPzae6",whatsapp:"https://wa.link/wts1ui"},
    "2026-03-18":{farmacia:"Farma Fiorella (Ex Sol Del Norte)",maps:"https://maps.app.goo.gl/SG5ZjdTk6BvRHFAaA",whatsapp:"https://wa.link/vyzpgz"},
    "2026-03-19":{farmacia:"Farmacia Vital",maps:"https://maps.app.goo.gl/rEbphDL5EbjfG1YZA",whatsapp:"https://wa.link/gzim66"},
    "2026-03-20":{farmacia:"Andresito",maps:"https://maps.app.goo.gl/LvWpQRcGqmw3KtP9A",whatsapp:"https://wa.link/ilssy6"},
    "2026-03-21":{farmacia:"Avenida",maps:"https://maps.app.goo.gl/5bQAsLomLDrukSbV9",whatsapp:"https://wa.link/qo56va"},
    "2026-03-22":{farmacia:"Red Farmako Farmacia Central",maps:"https://maps.app.goo.gl/tEC8riH4RKpigxkw9",whatsapp:"https://wa.link/qpba4b"},
    "2026-03-23":{farmacia:"Farmanat",maps:"https://maps.app.goo.gl/mDYA4AhvEz3kJPRH9",whatsapp:"https://wa.link/7g8t67"},
    "2026-03-24":{farmacia:"Red Farmako Farmavida",maps:"https://maps.app.goo.gl/tuUsAGeGT3jeeg7B8",whatsapp:"https://wa.link/mpvw1p"},
    "2026-03-25":{farmacia:"Red Farmako Libertad",maps:"https://maps.app.goo.gl/yzxJ5dzcD6AhPzae6",whatsapp:"https://wa.link/wts1ui"},
    "2026-03-26":{farmacia:"Farma Fiorella (Ex Sol Del Norte)",maps:"https://maps.app.goo.gl/SG5ZjdTk6BvRHFAaA",whatsapp:"https://wa.link/vyzpgz"},
    "2026-03-27":{farmacia:"Farmacia Vital",maps:"https://maps.app.goo.gl/rEbphDL5EbjfG1YZA",whatsapp:"https://wa.link/gzim66"},
    "2026-03-28":{farmacia:"Andresito",maps:"https://maps.app.goo.gl/LvWpQRcGqmw3KtP9A",whatsapp:"https://wa.link/ilssy6"},
    "2026-03-29":{farmacia:"Avenida",maps:"https://maps.app.goo.gl/5bQAsLomLDrukSbV9",whatsapp:"https://wa.link/qo56va"},
    "2026-03-30":{farmacia:"Red Farmako Farmacia Central",maps:"https://maps.app.goo.gl/tEC8riH4RKpigxkw9",whatsapp:"https://wa.link/qpba4b"},
    "2026-03-31":{farmacia:"Farmanat",maps:"https://maps.app.goo.gl/mDYA4AhvEz3kJPRH9",whatsapp:"https://wa.link/7g8t67"}
};

/* ===============================
   LOGICA DE TURNO (REGLA 08:00 AM)
   ================================= */

function actualizarTurno() {
    const ahora = new Date();
    
    // RESTAMOS 8 HORAS para manejar el turno correctamente.
    // Si son las 07:00 AM, el sistema "pensará" que son las 23:00 del día anterior.
    const fechaConAjuste = new Date(ahora.getTime() - (8 * 60 * 60 * 1000));
    
    // Formato YYYY-MM-DD para buscar en el objeto 'turnos'
    const año = fechaConAjuste.getFullYear();
    const mes = String(fechaConAjuste.getMonth() + 1).padStart(2, '0');
    const dia = String(fechaConAjuste.getDate()).padStart(2, '0');
    const fechaISO = `${año}-${mes}-${dia}`;

    // Mostrar fecha actual en la UI (No la ajustada, la real para el usuario)
    const opciones = { weekday:'long', year:'numeric', month:'long', day:'numeric' };
    let fechaTexto = ahora.toLocaleDateString('es-AR', opciones);
    fechaElemento.textContent = fechaTexto.charAt(0).toUpperCase() + fechaTexto.slice(1);

    if (turnos[fechaISO]) {
        const info = turnos[fechaISO];
        let nombreMostrar = info.farmacia;

        if (info.farmacia.includes("Red Farmako")) {
            logoRed.style.display = "block";
            nombreMostrar = info.farmacia
                .replace("Red Farmako", "")
                .replace("Farmacia", "")
                .trim();
            lanzarConfetti();
        } else {
            logoRed.style.display = "none";
        }

        farmaciaElemento.textContent = nombreMostrar;
        btnMaps.onclick = () => window.open(info.maps, "_blank");
        btnWpp.onclick = () => window.open(info.whatsapp, "_blank");
    } else {
        farmaciaElemento.textContent = "Sin turno cargado";
        logoRed.style.display = "none";
    }
}

// Ejecutar al cargar
actualizarTurno();

// Opcional: Revisar cada 1 minuto por si alguien tiene la web abierta a las 08:00 AM
setInterval(actualizarTurno, 60000);

/* ===============================
   CONFETTI
   ================================= */
function lanzarConfetti(){
    const colores=["#72bd99","#5da685","#8fd6b7","#4fae88"];
    const cantidad=50; // Reducido un poco para performance

    for(let i=0;i<cantidad;i++){
        const confetti=document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left=Math.random()*100+"vw";
        confetti.style.width=(Math.random()*6+4)+"px";
        confetti.style.height=(Math.random()*10+6)+"px";
        confetti.style.backgroundColor=colores[Math.floor(Math.random()*colores.length)];
        const duracion=Math.random()*2+2;
        confetti.style.animationDuration=duracion+"s";
        document.body.appendChild(confetti);
        setTimeout(()=>confetti.remove(),duracion*1000);
    }
}