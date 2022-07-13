// On enregistre le paragraphe qui doit être caché au chargement de la page
const paragraphe = document.querySelector("p");


// lors du chargement de la page ...
window.onload = function () {

    // ... on cache le paragraphe en question
    paragraphe.hidden = true;

    // et on affiche un invite pour obtenir la volonté de l'utilisateur
    let retourUtilisateur = window.prompt("Afficher le paragraphe (o/n) ?");

    // si l'utilisateur spécifié o ou O pour oui, on affiche le paragraphe.
    if (retourUtilisateur == "o" || retourUtilisateur == "O") {
        //paragraphe.removeAttribute("style","display:none");
        paragraphe.hidden = false;
    }
};


