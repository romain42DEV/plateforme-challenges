function boxShadow(){
    document.getElementById("boxshadow").style.boxShadow = "10px 20px 30px green";

    boxshadow.addEventListener("click", boxShadow);
}






let nombreClics = 0;

function comptage() {
  nombreClics++;
  document.getElementById("nombreClics").textContent   = nombreClics;
}

document.getElementById("boxshadow").addEventListener("click", comptage);