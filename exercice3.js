
// déclaration des éléments du document dont on aura besoin plus tard
const pNombreUniversites = document.getElementById("nombre-Universites");
const boutonSelectionPays = document.getElementById("button-select");
const messageErreur = document.getElementById("message-d-erreur");
const selecteur = document.getElementById("selecteur-pays");
const filtre = document.querySelector("form");

// ceci servira à enregistrer les données du fetch
let donneesUniversites = [];

// on cache les éléments du document qui doivent être cachés au chargement de la page
window.onload = function () {
    filtre.hidden = true;
    messageErreur.hidden = true;
};

// pour chaque clic sur le bouton de validation de sélection de pays
boutonSelectionPays.onclick = () => {

    // on vide, le cas échéant, la liste des universités affichées à l'écran
    document.getElementById("liste-universites").innerHTML = "";

    // On détermine l'url où chercher les informations sur les universités
    let url = "";
    switch (selecteur.value) {
        case "France":
            url = "http://universities.hipolabs.com/search?country=France";
            break;
        case "Allemagne":
            url = "http://universities.hipolabs.com/search?country=Germany";
            break;
        case "Andorre":
            url = "http://universities.hipolabs.com/search?country=Andorra";
            break;
    }

    // on cherche ces informations
    let donnees = fetch(url)
        .then(reponse => { // si les informations sont reçues, on affiche le code http (normalement 200) et on renvoie les informations en json pour l'étape suivante
            // let donneesJson = donnees.json();
            console.log("response.status " + reponse.status);
            return reponse.json();
        })
        .then(data => { // s'il n'y a pas d'erreur à l'étape dessus, on précise le nombre d'universités pour le pays sélectionné, on enregistre ces données, on fait appel à l'afficheur
            pNombreUniversites.innerHTML = "Nombre d'universités pour la pays séléctionné : " + Object.keys(data).length;
            donneesUniversites = data;
            renderUniversities(data);
        }) // si quelque chose a échoué, on l'affiche de manière détaillée
        .catch((error) => {
            console.log("Erreur dans la récupération des informations de " + url);
            console.log(error);
        })
};

// cette fonction permet d'afficher les universités suivant les règles spécifiées dans l'énnoncé (cf ci-dessous)
function renderUniversities(data) {
    // si l'a liste d'universités est nulle, on le spécifie dans la console
    if (data == null) {
        console.log("Erreur renderUniversities data=null");
        filtre.hidden = true;
    }
    // si non nulle et de taille supérieure à 50 on affiche les éléments du document permettant de faire le filtrage. Le reste de l'affichage se fera dans le filtre.onchange 
    else if (Object.keys(data).length > 50) {
        filtre.hidden = false;
    }
    // si non nulle et de taille inférieure ou égale à 50, on affiche chaque université dans une fiche récapitulative
    else {
        filtre.hidden = true;
        data.forEach((element) => {
            ajouterAffichageUniversite(element);
        });
    }
}

// cette fonction prend une université et ajoute au html un tableau 2*1 pour cette université, avec ses informations
function ajouterAffichageUniversite(universite) {
    const table = createDOMElement("table", "", document.getElementById("liste-universites"), [new Attribut("style", "margin:10px ; background-color:lightgrey;   ")]);

    const trName = createDOMElement("tr", "", table, []);
    const tdName = createDOMElement("td", "Nom : " + universite.name, trName, []);

    const trUrl = createDOMElement("tr", "", table, []);
    const tdUrl = createDOMElement("td", "Url : " + universite.web_pages, trUrl, []);
}

// pour chaque changement enregistré du formulaire de filtre, appel à la fonction qui suit
filtre.onchange = () => {
    // on vide la liste des universités affichées 
    document.getElementById("liste-universites").innerHTML = "";

    // on détermine le filtre désiré par l'utilisateur
    let filtreValeur = document.getElementById("filtre").value;

    // si ce filtre est d'une taille suffisante (>=2)
    if (filtreValeur.length >= 2) {
        // on applique ce filtre à la liste d'universités que l'on a enregistré
        let resultatFiltrage = donneesUniversites.filter(
            element => { if (element.name.search(filtreValeur) != -1) return 1; else { return 0; } }
        );

        // on calcule la taille du résultat de ce filtrage
        let longueurResultatFiltrage = Object.keys(resultatFiltrage).length;

        // si la taille est de 0, on affiche un message spécifiant cet état de fait
        if (longueurResultatFiltrage == 0) {
            messageErreur.hidden = false;
            messageErreur.innerHTML = "Aucune université pour le pays spécifié ne contient cette chaîne de caractères.";
        }
        // si la taille est inférieure à 50 et supérieure à 0, on affiche les universités de la liste filtrée 
        else if (longueurResultatFiltrage < 50) {
            messageErreur.hidden = true;
            resultatFiltrage.forEach((element) => {
                ajouterAffichageUniversite(element);
            });
        }
        // si la taille est supérieure ou égale à 50, on affiche le nombre d'universités de la liste filtrée
        else {
            messageErreur.hidden = false;
            messageErreur.innerHTML = "Nombre d'universités dont le nom contient cette chaîne de caractères : " + longueurResultatFiltrage;
        }

    }
};

// On récupère la fonction createDomElement créée précédemment et ses utilitaires
// elle permet de créer n'importe quel élément html
class Attribut {
    constructor(nomAttribut, valeurAttribut) {
        this.nomAttribut = nomAttribut;
        this.valeurAttribut = valeurAttribut;
    }
}

/**
 * @param {String} nomBalise 
 * @param {String} texteBalise 
 * @param {domElement} parentDansDom 
 * @param {Elm[]} attributs 
 * @returns {domElement} elementCree
 */
function createDOMElement(nomBalise, texteBalise, parentDansDom, attributs) {

    const elementCree = document.createElement(nomBalise);
    elementCree.innerHTML = texteBalise;
    parentDansDom.appendChild(elementCree);

    for (i = 0; i < attributs.length; i++) {
        elementCree.setAttribute(attributs[i].nomAttribut, attributs[i].valeurAttribut);
    }
    return elementCree;
}