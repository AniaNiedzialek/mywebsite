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
    const codingYears = new CountUp('coding', 6);
    const languages = new CountUp('languages', 5);
    const projects = new CountUp('projects', 10);
    
    
  
    // Start the counters
    if (!codingYears.error) codingYears.start();
    if (!languages.error) languages.start();
    if (!projects.error) projects.start();
  });
  
  window.addEventListener('scroll', revealOnScroll);


  ddocument.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const statusEl = document.getElementById("form-status");

    try {
        const response = await fetch("http://localhost:3000/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            statusEl.textContent = "Message sent successfully!";
            statusEl.style.color = "green";
            document.getElementById("contact-form").reset();
        } else {
            throw new Error("Failed to send");
        }
    } catch (err) {
        statusEl.textContent = "Error sending message. Please try again later.";
        statusEl.style.color = "red";
    }
});


document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const statusEl = document.getElementById("form-status");

  try {
      const response = await fetch("http://localhost:3000/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
          statusEl.textContent = "Message sent successfully!";
          statusEl.style.color = "green";
          document.getElementById("contact-form").reset();
      } else {
          throw new Error("Failed to send");
      }
  } catch (err) {
      statusEl.textContent = "Error sending message. Please try again later.";
      statusEl.style.color = "red";
  }
});
