import React from "react";

const carrousel = document.querySelector(".carrousel");
const carrouselFlecha = document.querySelectorAll(".flechasCarrousel");

carrouselFlecha.forEach((element, i) => {
  carrouselFlecha[i].addEventListener("click", (e) => {
    let posicion = 1;
    let operacion = posicion * -50;

    carrousel.style.transform = `translateX(${operacion}%)`;
  });
});
