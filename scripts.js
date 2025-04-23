const phrases = ["Welcome to my website!     "];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
const target = document.getElementById("typing-text");
if (target) typeLoop();

function typeLoop(){
    const text = phrases[currentPhrase];
    if(!isDeleting){
        target.innerHTML = text.substring(0, currentChar + 1);
        currentChar++;
        if(currentChar === text.length){
            isDeleting = true;
            setTimeout(typeLoop, 1000);
            return;
        }
    } else {
        target.innerHTML = text.substring(0, currentChar - 1);
        currentChar--;
        if (currentChar === 0){
            isDeleting = false;
            currentPhrase  = (currentPhrase + 1) % phrases.length;
        }
    }
    const speed = isDeleting ? 80 : 200;
    setTimeout(typeLoop, speed);
}

function sayHello() {
    alert("Hello from JavaScript!");
}
function ananasWord(){
    alert("... is ananas!");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark);

    const button = document.getElementById("darkModeBtn");
    button.textContent = isDark ? "Light Mode" : "Dark Mode";
}

window.onload = function () {
    const darkModeSetting = localStorage.getItem("darkMode");
    const button = document.getElementById("darkModeBtn");
    if (darkModeSetting === "true") {
        document.body.classList.add("dark-mode");
        if(button) button.textContent  = "Light Mode";
    } else {
        if (button) button.textContent = "Dark Mode";
    }
    if (target) typeLoop();
    };

function displayGreeting() {
    const hour = new Date().getHours();
    let message = "Hello!";
    if (hour < 12) {
        message = "Good morning";
    } else if (hour < 18) {
        message = "Good afternoon";
    } else {
        message = "Good evening";
    }
    alert(message);
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior:'smooth'});
}

function revealOnScroll() {
    const elements = document.querySelectorAll(
        '.project-card, .about-photo, .about-content, .skills i, .custom-skill'
      );
      
  
    const windowHeight = window.innerHeight;
  
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // <- This was missing
  