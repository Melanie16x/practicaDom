const cards = [
  {
    titulo: "PHP",
    descripcion: "lenguaje de programacion para diseño web",
    imagen: "./img/php.png",
  },
  {
    titulo: "C++",
    descripcion: "lenguaje de programacion que está orientada a la manipulación de objetos",
    imagen: "./img/c++.png",
  },
  {
    titulo: "JavaScrip",
    descripcion: "lenguaje de programación para hacer páginas web interactivas.",
    imagen: "./img/js.png",
  },
  {
    titulo: "Ruby",
    descripcion: "lenguaje de programación que se utiliza para el desarrollo de aplicaciones web y el análisis de datos.",
    imagen: "./img/ruby.png",
  },
  {
    titulo: "Python",
    descripcion: "lenguaje de programacion para diseño web",
    imagen: "./img/python.png",
  },
  {
    titulo: "Java",
    descripcion: "lenguaje de programacion para diseño web",
    imagen: "./img/java.png",
  },
  {
    titulo: "C",
    descripcion: "lenguaje de programacion para diseño web",
    imagen: "./img/C.png",
  },
  {
    titulo: "Pascal",
    descripcion: "lenguaje de programacion para programar en forma estructurada y modularizada",
    imagen: "./img/pascal.png",
  }
];

// La función document.getElementById() se utiliza para seleccionar y acceder a un elemento HTML específico 
// en una página web mediante su ID. (propiedad del DOM)
let card = document.getElementById("card-template");

// La propiedad map se utiliza para iterar sobre cada elemento del array original 
// y aplicar una función a cada uno de ellos, devolviendo un nuevo array con los resultados de esta función.
cards.map((x) => {
  // propiedad del DOM "innerHTML" permite agregar mas etiquetas de html pero desde js
  card.innerHTML += `
    <div class="col">
        <div class="card">
            <img src="${x.imagen}" class="card-img-top" style= "width: 50%;" alt="${x.titulo}">
            <div class="card-body">
                <h5 class="card-title text-center text-primary">${x.titulo}</h5>
                <p class="card-text">${x.descripcion}</p>
            </div>
        </div>
    </div>
    `;
});
