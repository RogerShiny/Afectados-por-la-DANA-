const textos = {
    es: {
        titulo: "Foro DANA",
        bienvenida: "Bienvenido al Foro DANA",
        introduccion: "Comparte tus experiencias y ofrece ayuda a quienes lo necesitan.",
        tituloExperiencias: "Experiencias",
        botonCompartir: "Compartir",
        tituloAyuda: "Ayuda",
        botonAyuda: "Ofrecer/Pedir Ayuda",
        tituloVictimas: "Víctimas y Desaparecidos",
        victimasInfo1: "Si eres víctima de la DANA:",
        victimasLista1: [
            "Busca refugio seguro y contacta a los servicios de emergencia si es necesario.",
            "Informa a tus familiares y amigos sobre tu estado.",
            "Accede a servicios de atención psicológica si lo necesitas."
        ],
        victimasInfo2: "Si buscas a personas desaparecidas:",
        victimasLista2: [
            "Publica su información en redes sociales y grupos comunitarios.",
            "Contacta a las autoridades locales y presenta una denuncia.",
            "Visita refugios y centros de ayuda para obtener información."
        ]
    },
    ca: {
        titulo: "Fòrum DANA",
        bienvenida: "Benvingut al Fòrum DANA",
        introduccion: "Comparteix les teves experiències i ofereix ajuda a qui ho necessita.",
        tituloExperiencias: "Experiències",
        botonCompartir: "Compartir",
        tituloAyuda: "Ajuda",
        botonAyuda: "Oferir/Pedir Ajuda",
        tituloVictimas: "Víctimes i Desapareguts",
        victimasInfo1: "Si ets víctima de la DANA:",
        victimasLista1: [
            "Busca refugi segur i contacta amb els serveis d'emergència si és necessari.",
            "Informa els teus familiars i amics sobre el teu estat.",
            "Accedeix a serveis d'atenció psicològica si ho necessites."
        ],
        victimasInfo2: "Si busques persones desaparegudes:",
        victimasLista2: [
            "Publica la seva informació a les xarxes socials i grups comunitaris.",
            "Contacta amb les autoritats locals i presenta una denúncia.",
            "Visita refugis i centres d'ajuda per obtenir informació."
        ]
    }
};

function cambiarIdioma() {
    const idiomaSeleccionado = document.getElementById('language-selector').value;
    
    document.getElementById('titulo').textContent = textos[idiomaSeleccionado].titulo;
    document.getElementById('bienvenida').textContent = textos[idiomaSeleccionado].bienvenida;
    document.getElementById('introduccion').textContent = textos[idiomaSeleccionado].introduccion;
    
    document.getElementById('titulo-experiencias').textContent = textos[idiomaSeleccionado].tituloExperiencias;
    document.getElementById('boton-compartir').textContent = textos[idiomaSeleccionado].botonCompartir;
    
    document.getElementById('titulo-ayuda').textContent = textos[idiomaSeleccionado].tituloAyuda;
    document.getElementById('boton-ayuda').textContent = textos[idiomaSeleccionado].botonAyuda;

    document.getElementById('titulo-victimas').textContent = textos[idiomaSeleccionado].tituloVictimas;
    document.getElementById('victimas-info1').textContent = textos[idiomaSeleccionado].victimasInfo1;
    document.getElementById('victimas-info2').textContent = textos[idiomaSeleccionado].victimasInfo2;
    
    const lista1 = document.getElementById('victimas-lista1');
    lista1.innerHTML = '';
    textos[idiomaSeleccionado].victimasLista1.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        lista1.appendChild(li);
    });
    
    const lista2 = document.getElementById('victimas-lista2');
    lista2.innerHTML = '';
    textos[idiomaSeleccionado].victimasLista2.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        lista2.appendChild(li);
    });
}

// El resto del código (compartirExperiencia, compartirAyuda, enviarRespuesta, etc.) permanece igual.