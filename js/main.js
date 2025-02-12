document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("main-header");
    const navLinks = header.querySelectorAll("a"); // Selecciona los enlaces del menú
    const title = header.querySelector("h1"); // Selecciona el h1 dentro del header
    const projectsSection = document.getElementById("projects");

    function checkScroll() {
        const startFade = 100; // Altura en px donde empieza la transición
        const endFade = projectsSection.offsetTop - 100; // Altura donde se completa la transición

        let scrollY = window.scrollY;

        if (scrollY <= startFade) {
            header.style.background = "rgba(255, 255, 255, 0)"; // Totalmente transparente
            navLinks.forEach(link => link.style.color = "white"); // Letras blancas
            if (title) title.style.color = "white"; // Asegura que el h1 también sea blanco
        } else if (scrollY >= endFade) {
            header.style.background = "rgba(255, 255, 255, 0.8)"; // Fondo blanco semitransparente
            navLinks.forEach(link => link.style.color = "black"); // Letras negras
            if (title) title.style.color = "black"; // Cambia el color del h1 a negro
        } else {
            let opacity = (scrollY - startFade) / (endFade - startFade); // Interpolación
            header.style.background = `rgba(255, 255, 255, ${opacity * 0.5})`; // Aparece progresivamente

            // Cambio gradual del color de texto
            let textColor = Math.round(255 * opacity); // Calcula el color entre blanco y negro
            navLinks.forEach(link => link.style.color = `rgb(${textColor}, ${textColor}, ${textColor})`);
            if (title) title.style.color = `rgb(${textColor}, ${textColor}, ${textColor})`; // Aplica el mismo color al h1
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Ejecutar al cargar
});






// Efecto de maquina de escribir en el title
const words = ["Mobile", "Web"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
    let currentWord = words[wordIndex];
    let displayedText = isDeleting
        ? currentWord.substring(0, charIndex--)
        : currentWord.substring(0, charIndex++);

    typingElement.textContent = displayedText;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Espera antes de borrar
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500); // Espera antes de escribir la siguiente palabra
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100); // Velocidad de escritura y borrado
    }
}

typeEffect();




/*Funcionalidad del boton del menu Desplegable*/
document.getElementById('menu-toggle').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links-responsive');
    navLinks.classList.toggle('active');
});






