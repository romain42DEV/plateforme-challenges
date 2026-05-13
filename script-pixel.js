let boites = document.querySelectorAll(".boite")

console.log(boites)

//je parcours mon tableau de div
boites.forEach(boite=>{
    boite.addEventListener("click",function(){
        // j'ai la obite sur laquelle j'ai cliqué
        console.log(boite)
        boite.classList.toggle("bg-red")
    })
})



// role : reset (enleve la classe bg-red a toutes les div qui ont la classe boite)
// parametre: non
// retour : non
function reset(){
    let boites = document.querySelectorAll(".boite")
    boites.forEach(boite=>{
        boite.classList.remove("bg-red")
    })
}

btn.addEventListener("click", reset);
