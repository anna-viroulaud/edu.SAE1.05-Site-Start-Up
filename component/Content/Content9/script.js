// script.js
import { Content9Data } from "../../data/ContentData/Content9Data.js";

// Fonction pour récupérer et charger le template HTML
const templateFile = await fetch("./component/Content/Content9/template.html");
const template = await templateFile.text();

let Content9 = {};

// Formater le template avec les données des images
Content9.format = function(r) {
  let html = template;
  
  // Trouver les listes dans le template
  let lists = html.match(/<ul class="content__list">([\s\S]*?)<\/ul>/g);

  // Remplacer les images dans chaque liste
  r.images.forEach((image, index) => {
    let listIndex = Math.floor(index / 2); // Chaque liste contient deux éléments
    let list = lists[listIndex];
    
    // Trouver les éléments d'image dans cette liste
    let imageElements = list.match(/<li class="content__img"><img src="" alt=""><\/li>/g);
    
    if (imageElements) {
      let imgElement = imageElements[index % 2]; // Sélectionner l'élément d'image correct
      html = html.replace(imgElement, `<li class="content__img"><img src="${image.src}" alt="${image.alt}"></li>`);
    }
  });

  return html;
};

// Fonction de rendu (ajouter le contenu dans l'élément ciblé)
Content9.render = function(where, r) {
  let element = document.querySelector(where);
  element.innerHTML = Content9.format(r);
};

export { Content9 };
