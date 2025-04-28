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
  window.addEventListener('load', function() {
    revealOnScroll();
  
    // Typing animation
    if (target) typeLoop();
  
    // Swiper animation
    new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
    // CountUp numbers
    const codingYears = new CountUp('coding-years', 6, { duration: 2 });
    const languages = new CountUp('languages', 5, { duration: 2 });
    const projects = new CountUp('projects', 10, { duration: 2 });
  
    // Start the counters
    if (!codingYears.error) codingYears.start();
    if (!languages.error) languages.start();
    if (!projects.error) projects.start();
  });
  
  window.addEventListener('scroll', revealOnScroll);