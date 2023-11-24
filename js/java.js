document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const header = document.querySelector("header");

    document.body.addEventListener("mouseenter", function () {
        header.style.backgroundColor = "blue"; // Cambia el color de fondo del encabezado al acercarse
    });

    document.body.addEventListener("mouseleave", function () {
        header.style.backgroundColor = "#333"; // Restaura el color de fondo original del encabezado al alejarse
    });

    navLinks.forEach(link => {
        link.style.transition = "background-color 0.3s, color 0.3s"; // Agregar transición suave para los enlaces

        link.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "white"; // Cambia el color de fondo del enlace al acercarse
            this.style.color = "black"; // Cambia el color del texto del enlace al acercarse
        });

        link.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "#444"; // Restaura el color de fondo original del enlace al alejarse
            this.style.color = "white"; // Restaura el color del texto original del enlace al alejarse
        });
    });

    // Llamada a la función para iniciar la animación de nieve en la sección de inicio
    iniciarAnimacionNieve();
});

function iniciarAnimacionNieve() {
    // Lógica para iniciar la animación de nieve
    // Puedes usar bibliotecas como particles.js o implementar tu propia animación.
    // Aquí hay un ejemplo básico utilizando particles.js:
    particlesJS('inicio', {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: false,
                distance: 500,
                color: "#ffffff",
                opacity: 0.4,
                width: 2
            },
            move: {
                enable: true,
                speed: 6,
                direction: "bottom",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false,
                    mode: "repulse"
                },
                onclick: {
                    enable: false,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
}

// Asegúrate de mantener el código JavaScript que ya tenías para otras secciones...

function añadirAlCarrito() {
    var imagenInput = document.getElementById('imagen');
    var mensaje = document.createElement('p');
    mensaje.style.marginTop = '10px';

    if (imagenInput.files.length > 0) {
        var imagen = imagenInput.files[0];

        // Aquí puedes realizar acciones adicionales, como enviar la imagen a un servidor, etc.
        mensaje.textContent = 'Producto añadido al carrito';
        mensaje.style.color = 'green';
    } else {
        mensaje.textContent = 'Por favor, selecciona una imagen antes de añadir al carrito.';
        mensaje.style.color = 'red';
    }

    // Inserta el mensaje después del formulario
    var formulario = document.getElementById('formCompra');
    formulario.parentNode.insertBefore(mensaje, formulario.nextSibling);
}
