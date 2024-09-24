
document.addEventListener('DOMContentLoaded', function() {
    // Inicializamos el controlador de ScrollMagic
    const controller = new ScrollMagic.Controller();

    // Seleccionamos todos los elementos que queremos animar
    const animUpElements = document.querySelectorAll('.animup');

    // Para cada elemento, creamos una escena de ScrollMagic
    animUpElements.forEach(element => {
        new ScrollMagic.Scene({
            triggerElement: element,  // El elemento que activará la animación
            triggerHook: 0.9,         // Cuándo debería activarse la animación (0 = parte superior, 1 = parte inferior del viewport)
            offset: 0                 // Si necesitas ajustar el punto de disparo
        })
        .on("enter", function () {
            // Añadir clases de animación al entrar en el viewport
            element.classList.add('animate__animated', 'animate__fadeInUp','final-opacity-transition');
        })
        .addTo(controller);  // Añadir la escena al controlador de ScrollMagic
    });
});

document.addEventListener('click', function(e){
    if(e.target.classList.contains('service-container')){
        console.log('hola');
    }
});

//scrolling buttons

document.querySelectorAll('.scroll-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const serviceListContainer = document.querySelector('.clickeable-service');

    if (!serviceListContainer) {
        console.error('No se encontró el contenedor con clase .services-list-container');
        return;
    }

    serviceListContainer.addEventListener('click', function(event) {        
        const serviceContainer = event.target.closest('.service-container').querySelector('.service-description a').getAttribute('href');

        if (serviceContainer) {
            window.location.href = serviceContainer;
        } else {
            console.log('El clic no fue en un contenedor de servicios.');
        }
    });
});