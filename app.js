
//Generating on scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Initializing ScrollMagic
    const controller = new ScrollMagic.Controller();

    // Selecting all elements with class .animup
    const animUpElements = document.querySelectorAll('.animup');

    // For each element, create a new ScrollMagic scene
    animUpElements.forEach(element => {
        new ScrollMagic.Scene({
            triggerElement: element,  // Element activating the animation
            triggerHook: 0.9,         // When animation should be activated (0 = top part of viewport, 1 = lower of viewport)
            offset: 0                 // offset trigger position
        })
        .on("enter", function () {
            // Adding classes to the element when it enters the viewport
            element.classList.add('animate__animated', 'animate__fadeInUp','final-opacity-transition');
        })
        .addTo(controller);  // Adding scene to controller ScrollMagic
    });
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

    //Debugging if container is found
    // if (!serviceListContainer) {
    //     console.error('No se encontró el contenedor con clase .services-list-container');
    //     return;
    // }

    serviceListContainer.addEventListener('click', function(event) {        
        const serviceContainer = event.target.closest('.service-container').querySelector('.service-description a').getAttribute('href');

        if (serviceContainer) {
            window.location.href = serviceContainer;
        } else {
            console.log('The click was not on a services container.');
        }
    });
});


// Preventing pausing video when is resized
window.addEventListener('resize', function() {
    const video = document.querySelector('video');
    if (video && !video.paused) {
        video.play(); // Start playing the video
    }
});