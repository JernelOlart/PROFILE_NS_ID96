// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // ========== Inicialización de Partículas ==========
    if (document.getElementById('particles-js')) {
      particlesJS('particles-js', {
        particles: {
          number: { 
            value: 80, 
            density: { 
              enable: true, 
              value_area: 800 
            } 
          },
          color: { 
            value: "#3b82f6" 
          },
          shape: { 
            type: "circle" 
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#3b82f6",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      });
    }
  
    // ========== Efecto Parallax ==========
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
      window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        parallaxBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      });
    }
  
    // ========== Animación de Máquina de Escribir ==========
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
      const professions = [
        "Desarrollador Full Stack",
        "Especialista en IA",
        "Ingeniero de Software",
        "Apasionado por la tecnología"
      ];
      
      let currentProfession = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;
  
      function typeWriter() {
        const currentText = professions[currentProfession];
        
        if (isDeleting) {
          typewriterElement.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
          typingSpeed = 50;
        } else {
          typewriterElement.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
          typingSpeed = 100;
        }
  
        if (!isDeleting && charIndex === currentText.length) {
          isDeleting = true;
          typingSpeed = 1500; // Pausa al final
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          currentProfession = (currentProfession + 1) % professions.length;
          typingSpeed = 500; // Pausa al inicio
        }
  
        setTimeout(typeWriter, typingSpeed);
      }
  
      setTimeout(typeWriter, 1000);
    }
  
    // ========== Efectos Hover en Tarjetas ==========
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
        
        // Animación de la barra de progreso
        const progress = card.querySelector('.skill-progress');
        if (progress) {
          const skillLevel = progress.parentElement.getAttribute('data-level');
          progress.style.width = skillLevel;
        }
      });
  
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
      });
    });
  
    // ========== Efecto Hover en Botones Sociales ==========
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const icon = link.querySelector('.social-icon');
        if (icon) {
          icon.style.transform = 'translateY(-10px) rotate(5deg) scale(1.1)';
        }
      });
  
      link.addEventListener('mouseleave', () => {
        const icon = link.querySelector('.social-icon');
        if (icon) {
          icon.style.transform = 'translateY(0) rotate(0) scale(1)';
        }
      });
    });
  
    // ========== Efecto Ripple en Botones ==========
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
          const href = this.getAttribute('href');
          if (href && href !== '#') {
            window.location.href = href;
          }
        }, 1000);
      });
    });
  
    // ========== Scroll Suave ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // ========== Animación al Hacer Scroll ==========
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.skill-card, .holographic-card, .social-link');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };
  
    // Ejecutar al cargar y al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
  
    // ========== Efecto de Carga ==========
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 500);
  });
  
  // ========== Función para el modo oscuro/claro ==========
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Guardar preferencia en localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  }
  
  // Verificar preferencia al cargar
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }

