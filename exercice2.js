
// On récupère la fonction createDomElement créée précédemment et ses utilitaires. 
// Elle permet de créer n'importe quelle balise html
/**
 * 
 * @param {String} nomBalise 
 * @param {String} texteBalise 
 * @param {domElement} parentDansDom 
 * @param {Elm[]} attributs 
 * @returns {domElement} elementCree
 */
class Attribut {
    constructor(nomAttribut, valeurAttribut) {
        this.nomAttribut = nomAttribut;
        this.valeurAttribut = valeurAttribut;
    }
}
function createDOMElement(nomBalise, texteBalise, parentDansDom, attributs) {

    const elementCree = document.createElement(nomBalise);
    elementCree.innerHTML = texteBalise;
    parentDansDom.appendChild(elementCree);

    for (i = 0; i < attributs.length; i++) {
        elementCree.setAttribute(attributs[i].nomAttribut, attributs[i].valeurAttribut);
    }
    return elementCree;
}




// on crée d'abord le header
const header = createDOMElement("header", "", document.querySelector("body"), []);

// on crée les trois boutons (competences,experience,formation)
const boutonCompetences = createDOMElement("button", "Compétences", header, [new Attribut("id", "btn-skills")]);
const boutonExperience = createDOMElement("button", "Expérience", header, [new Attribut("id", "btn-experience")]);
const boutonFormation = createDOMElement("button", "Formation", header, [new Attribut("id", "btn-training")]);

// on crée la balise main
const main = createDOMElement("main", "", document.querySelector("body"), []);

// on enregistre un texte générique long afin de ne pas avior à le copier/coller à chaque fois que l'on en aura besoin
const texteGenerique = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet. ";

// le code suivant pourrait être simplifié pusique c'est une bête copie de la même chose. 
// le mécanisme dans boutonCompetences.onclick = function () { ... est le même que dans boutonExperience.onclick = function () { ou boutonFormation.onclick = function () {

// pour chaque clic sur le bouton "Compétences"
boutonCompetences.onclick = function () {
    // on ne veut pas créer plusieurs fois le paragraphe.
    // s'il existe déjà et qu'on clic sur le bouton correspondant,
    // on veut que le h1 et le p soient rendus visibles ...
    if (document.querySelector("main #p-competences") == null) {
        const titreCompetences = createDOMElement("h1", "Compétences", main, [new Attribut("id", "h1-competences")]);
        const paragraphe = createDOMElement("p", texteGenerique + "compétences", main, [new Attribut("id", "p-competences")]);
    }
    else {
        document.getElementById("h1-competences").hidden = false;
        document.getElementById("p-competences").hidden = false;
    }
    // ...et le reste, non.   
    if (document.querySelector("main #p-formation") != null) {
        document.getElementById("h1-formation").hidden = true;
        document.getElementById("p-formation").hidden = true;
    }
    if (document.querySelector("main #p-experience") != null) {
        document.getElementById("h1-experience").hidden = true;
        document.getElementById("p-experience").hidden = true;
    }
};

// pour chaque clic sur le bouton "Expérience"
boutonExperience.onclick = function () {
    // on ne veut pas créer plusieurs fois le paragraphe.
    // s'il existe déjà et qu'on clic sur le bouton correspondant,
    // on veut que le h1 et le p soient rendus visibles ...
    if (document.querySelector("main #p-experience") == null) {
        const titreCompetences = createDOMElement("h1", "Expérience", main, [new Attribut("id", "h1-experience")]);
        const paragraphe = createDOMElement("p", texteGenerique + "expérience", main, [new Attribut("id", "p-experience")]);
    }
    else {
        document.getElementById("h1-experience").hidden = false;
        document.getElementById("p-experience").hidden = false;
    }
    // ...et le reste, non. 
    if (document.querySelector("main #p-competences") != null) {
        document.getElementById("h1-competences").hidden = true;
        document.getElementById("p-competences").hidden = true;
    }
    if (document.querySelector("main #p-formation") != null) {
        document.getElementById("h1-formation").hidden = true;
        document.getElementById("p-formation").hidden = true;
    }
};

// pour chaque clic sur le bouton "Formation"
boutonFormation.onclick = function () {
    // on ne veut pas créer plusieurs fois le paragraphe.
    // s'il existe déjà et qu'on clic sur le bouton correspondant,
    // on veut que le h1 et le p soient rendus visibles ...
    if (document.querySelector("main #p-formation") == null) {
        const titreCompetences = createDOMElement("h1", "Formation", main, [new Attribut("id", "h1-formation")]);
        const paragraphe = createDOMElement("p", texteGenerique + "formation", main, [new Attribut("id", "p-formation")]);
    }
    else {
        document.getElementById("h1-formation").hidden = false;
        document.getElementById("p-formation").hidden = false;
    }
    // ...et le reste, non.    
    if (document.querySelector("main #p-competences") != null) {
        document.getElementById("h1-competences").hidden = true;
        document.getElementById("p-competences").hidden = true;
    }

    if (document.querySelector("main #p-experience") != null) {
        document.getElementById("h1-experience").hidden = true;
        document.getElementById("p-experience").hidden = true;
    }
};
