// MENU RESPONSIVE
var toggle_menu = document.querySelector('.responsive-menu');
var menu = document.querySelector('.menu');

toggle_menu.onclick = function () {
    toggle_menu.classList.toggle('active');
    menu.classList.toggle('responsive');
};


// RECHERCHE
const form = document.getElementById("searchForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // récupérer les valeurs
    const pays = document.getElementById("pays").value.toLowerCase();
    const ville = document.getElementById("ville").value.toLowerCase();
    const region = document.getElementById("region").value.toLowerCase();

    // sélectionner toutes les box
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(function (box) {

        const boxPays = box.dataset.pays;
        const boxVille = box.dataset.ville;
        const boxRegion = box.dataset.region;

        // vérifier les correspondances
        const matchPays = pays === "" || boxPays.includes(pays);
        const matchVille = ville === "" || boxVille.includes(ville);
        const matchRegion = region === "" || boxRegion.includes(region);

        // afficher ou cacher
        if (matchPays && matchVille && matchRegion) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }

    });

});