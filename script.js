/*
// affiche les div qui ont la classe card
let boites = document.querySelectorAll(".card")
console.log(boites);

// je parcours mon tableau de div
boites.forEach(card=> {
  card.addEventListener("click",function(){
    // j'ai la carte sur laquelle j'ai cliqué
    console.log(card)
    card.classList.toggle("box-shadow-green")
  })
})
*/

const cards = document.querySelectorAll(".card");
const cartCount = document.getElementById("cart-count");

let cart = 0;

cards.forEach(card => {
  card.addEventListener("click", () => {

    // Si déjà sélectionné → retire du panier
    if (card.classList.contains("box-shadow-green")) {
      card.classList.remove("box-shadow-green");
      cart--;
    // Sinon → ajoute au panier
    } else {
      card.classList.add("box-shadow-green");
      cart++;
    }

    cartCount.textContent = cart;
  });
});









/*
let nombreClics = 0;

function comptage(id) {
  if (id.target) {
    nombreClics++;
  } else {
    nombreClics--;
  }

  document.getElementById("nombreClics").textContent   = nombreClics;
}

//document.querySelector(".card").addEventListener("click", comptage);
document.getElementById("boxshadowgreen").addEventListener("click", comptage);
document.getElementById("boxshadowgren").addEventListener("click", comptage);
document.getElementById("boxshadowgreene").addEventListener("click", comptage);
*/
