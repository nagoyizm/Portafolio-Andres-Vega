(function() {
  "use strict";

  /* Aparicion de navbar en modo mobile*/
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);





  /* Esconde el navbar cuando se clickea alguna seccion en modo mobile */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });


/* interaccion con  imagen de logo*/
let logo=document.getElementById("imagen-logo");
logo.addEventListener("mouseover", function(){
logo.style.scale="1.2";
logo.style.transition="all 1s";
})

logo.addEventListener("mouseout", function(){
logo.style.scale="1";
})

  
  /* Animacion de pantalla de carga*/
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /* boton para subir al inicio*/
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  
  
  
  
  /*Anima la aparicion de secciones al scrollear en la pagina a traves de AOS*/
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: true
    });
  }
  window.addEventListener('load', aosInit);


  /* Anima las barras de progreso en la seccion programas*/
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Iniciar glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });




  /* Scrollea en la pagina hasta donde se encuentre el hash.*/

  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /*activa las opciones de menu de acuerdo a en que posicion se encuentra el scroll de la pagina*/
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();




  /* funcionamiento de TABS de codigos en la pagina de detalles de Portafolio */
  
  // Selecciona todos los enlaces dentro de la navegación
let navlink = document.querySelectorAll(".nav .nav-item a");

// Muestra en la consola los valores de hash para depuración
navlink.forEach(link => {
  console.log(link.hash);
});

// Añadir el evento 'click' a cada enlace
navlink.forEach(navlinks => {
  navlinks.addEventListener('click', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del enlace
    // Remover la clase "active" de todos los elementos activos
    document.querySelectorAll(".nav .nav-item a.active").forEach(link => link.classList.remove("active"));
    // Añadir la clase "active" al elemento clicado
    this.classList.add("active");

    // buscar todos los elementos con activo en la clase y removersela
    document.querySelectorAll(".activo").forEach(section => section.classList.remove("activo"));
  
    //buscar el elemento con el ID correspondiente y añadir la clase activo
    let targetSection = document.querySelector(this.hash);
    if (targetSection) {
      targetSection.classList.add("activo")}

  });
});