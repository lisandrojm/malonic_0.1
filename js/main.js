/* id="site-header" oculta header en scroll //////////////////////////*/

(function () {
  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById("site-header");

  var checkScroll = function () {
    /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  var toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 52) {
      //replace 52 with the height of your header in px

      header.classList.add("hide");
      prevDirection = direction;
    } else if (direction === 1) {
      header.classList.remove("hide");
      prevDirection = direction;
    }
  };

  window.addEventListener("scroll", checkScroll);
})();

/* class=arrow scroll UP arrow animación//////////////////////////*/

let up = document.querySelector(".arrow");
window.onscroll = function () {
  up.classList.toggle("show", window.scrollY >= 500);
};
up.onclick = function () {
  window.scrollTo({ behavior: "smooth", top: 0 });
};

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-popup")
    );
    myModal.show();
  }
});

/* fancybox */

// Inicializar FancyBox
Fancybox.bind("[data-fancybox]", {
  // Opciones de configuración
});

// Obtener el botón y agregarle el evento click
const miBoton = document.getElementById("miBoton");
miBoton.addEventListener("click", () => {
  // Seleccionar el primer elemento de la galería y hacer clic en él
  document.querySelector("#gallery-wrap [data-fancybox]").click();
});
