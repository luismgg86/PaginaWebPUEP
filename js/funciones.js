window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  let navbar = document.querySelector(".navbar");
  let encabezado = document.querySelector(".encabezado");
  let navbarNav = document.querySelector(".navbar-nav");
  
  let navegacion = document.getElementById('navegacion');
  let estiloComputado = window.getComputedStyle(navegacion); 
  let valorMarginLeft = estiloComputado.marginLeft; //para saber el valor del margin Left que asigna la clase ms-auto por default en la barra de navegacion

  if (currentScrollPos === 0) {
    encabezado.style.height = "100px";
    navbar.style.position = "static";
    navbarNav.classList.add('ms-auto');
  } else {
    encabezado.style.height = "0px";
    navbar.style.position = "fixed";
    navbar.style.zIndex = "9999";
    navbarNav.classList.remove('ms-auto');
    navbarNav.style.marginLeft = valorMarginLeft;
  }
};
