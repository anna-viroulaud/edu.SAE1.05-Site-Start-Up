const templateFile = await fetch("component/Navigation/Navigation2/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch("component/Navigation/Navigation2/template-li.html");
const templateLi = await templateFile2.text();

const templateFile3 = await fetch("component/Navigation/Navigation2/template-button.html");
const templateButton = await templateFile3.text();

let Navigation2 = {};

// Format de l'objet qui génère le HTML dynamique
Navigation2.format = function(obj) {
  let html = template;

  // Remplacer le logo dans le template
  html = html.replace("{{logo}}", obj.logo);

  // Gérer les items de menu
  let items = "";
  for (let m of obj.menus) {
    let li = templateLi;
    li = li.replace("{{link}}", m.link);
    li = li.replace("{{label}}", m.label);
    items = items + li;
  }

  // Remplacer les items de menu dans le template principal
  html = html.replace("{{items}}", items);

  // Gérer les boutons (modification ici pour traiter le tableau de boutons)
  let itemsbutton = "";
  if (obj.buttons && Array.isArray(obj.buttons)) { // Vérifie si 'buttons' est un tableau
    for (let buttonData of obj.buttons) {
      let button = templateButton;
      button = button.replace("{{link}}", buttonData.link);  // Lien dynamique du bouton
      button = button.replace("{{label}}", buttonData.label);  // Label dynamique du bouton
      itemsbutton = itemsbutton + button;
    }
  }

  // Remplacer les boutons dans le template principal
  html = html.replace("{{itemsbutton}}", itemsbutton);

  return html;
};

// Fonction pour rendre le menu dans l'élément spécifié
Navigation2.render = function(where, what) {
  let element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html = html + Navigation2.format(obj);
  }
  element.innerHTML = html;
};

export { Navigation2 };
