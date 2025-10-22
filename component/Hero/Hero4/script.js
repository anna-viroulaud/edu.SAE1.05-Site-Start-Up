const templateFile = await fetch("component/Hero/Hero4/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch("component/Hero/Hero4/template-li.html");
const templateLi = await templateFile2.text();

const templateFile3 = await fetch("component/Hero/Hero4/template-button-w.html");
const templateButton_w = await templateFile3.text();

const templateFile4 = await fetch("component/Hero/Hero4/template-button-t.html");
const templateButton_t = await templateFile4.text();

let Hero4 = {};

// Format de l'objet qui génère le HTML dynamique
Hero4.format = function(obj) {
  let html = template;

  // Remplacer le logo dans le template
  
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
  html = html.replace("{{logo}}", obj.logo);
  html = html.replace("{{title}}", obj.title);
  html = html.replace("{{desc}}", obj.desc);
  html = html.replace("{{buttonnav}}", obj.buttonnav);
  html = html.replace("{{logo}}", obj.logo);

  // Gérer les boutons (modification ici pour traiter le tableau de boutons)
  let itemsbutton = "";
  if (obj.buttons && Array.isArray(obj.buttons)) { // Vérifie si 'buttons' est un tableau
    for (let buttonData of obj.buttons) {
      let button_w = templateButton_w;
      button_w = button_w.replace("{{link}}", buttonData.link);  // Lien dynamique du bouton
      button_w = button_w.replace("{{label}}", buttonData.label);  // Label dynamique du bouton
      itemsbutton += button_w;  // Concatène les boutons
      let button_t = templateButton_t;
      button_t = button_t.replace("{{link}}", buttonData.link);  // Lien dynamique du bouton
      button_t = button_t.replace("{{label}}", buttonData.label);  // Label dynamique du bouton
      itemsbutton += button_t;  // Concatène les boutons
    }
  }
  html = html.replace("{{itemsbutton}}", itemsbutton); // Remplace correctement dans le template principal

  return html;
};

// Fonction pour rendre le menu dans l'élément spécifié
Hero4.render = function(where, what) {
  let element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html = html + Hero4.format(obj);
  }
  element.innerHTML = html;
};

export { Hero4 };
