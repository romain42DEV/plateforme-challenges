function genereNom(adjectifsAleatoire, nomsAleatoire) {
    let adjectifs = ["incroyable", "mystérieux", "rapide"]
    let noms = ["Tortue", "Python", "Licorne"]

    let adjectifsAleatoire = adjectifs[Math.floor(Math.random() * adjectifs.length)];
    let nomAleatoire = noms[Math.floor(Math.random() * noms.length)];

    let nomComplets = `${adjectifs} ${noms}`
    
    btn.addEventListener("click", genereNom);
    document.getElementById("nom-hero").innerHTML = nomComplets;

    return nomComplets
}