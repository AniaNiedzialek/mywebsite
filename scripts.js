const phrases = [
  "CS @ SJSU  ",
  "Python • Java • C++ • JavaScript   ",
  "AI/ML • Web • Testing • UI/UX  ",
  "Software Engineer   ",
];

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
   new Swiper(".testimonials .mySwiper", {
    loop: true,
    autoHeight: true,
    spaceBetween: 24,
    autoplay: { delay: 5000, disableOnInteraction: false },
    navigation: { nextEl: ".testimonials .swiper-button-next", prevEl: ".testimonials .swiper-button-prev" },
    pagination: { el: ".testimonials .swiper-pagination", clickable: true }
});
  
    // CountUp numbers
    const codingYears = new CountUp('coding', 6);
    const languages = new CountUp('languages', 5);
    const projects = new CountUp('projects', 10);
    
    
  
    // Start the counters
    if (!codingYears.error) codingYears.start();
    if (!languages.error) languages.start();
    if (!projects.error) projects.start();
  });
  
  window.addEventListener('scroll', revealOnScroll);


  document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const statusElement = document.getElementById("form-status");
  
    try {
      const response = await fetch("https://formspree.io/f/xyzbrwvo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

  
      // After you get a response:
      if (response.ok) {
        statusElement.textContent = "Message sent successfully!";
        statusElement.classList.remove('err');   // add
        statusElement.classList.add('ok');       // add
        document.getElementById("contact-form").reset();
      } else {
        statusElement.textContent = "Error sending message. Please try again.";
        statusElement.classList.remove('ok');    // add
        statusElement.classList.add('err');      // add
      }

    } catch (error) {
      statusElement.textContent = "An error occurred. Try again later.";
      statusElement.style.color = "red";
      console.error("Error:", error);
    }
  });
  
