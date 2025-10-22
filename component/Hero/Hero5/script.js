const templateFile = await fetch("component/Hero/Hero5/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch("component/Hero/Hero5/template-li.html");
const templateLi = await templateFile2.text();

const templateFile3 = await fetch("component/Hero/Hero5/template-button.html");
const templateButton = await templateFile3.text();

let Hero5 = {};

Hero5.format = function (obj) {
  if (!template) return ""; // Vérifie si le template principal est chargé

  let html = template;

  // Remplacer les menus
  let items = "";
  if (obj.menus) {
    for (let m of obj.menus) {
      let li = templateLi.replace("{{link}}", m.link).replace("{{label}}", m.label);
      items += li;
    }
  }
  html = html.replace("{{items}}", items);

  // Remplacer les boutons
  // Traitement des cards
    let cards = "";
    if (obj.cards) {
      for (let card of obj.cards) {
        let cardHtml = templateButton;

        cardHtml = cardHtml.replace("{{label}}", card.label);
        cards += cardHtml;
      }
    }
    html = html.replace("{{itemsbutton}}", cards);


  // Remplacer les icônes
  let icons = "";
  if (obj.icons) {
    for (let icon of obj.icons) {
      icons += icon.label; // Ajoute les icônes directement
    }
  }
  html = html.replace("{{icons}}", icons);

  // Remplacer les autres variables
  html = html
    .replace("{{menuburger}}", obj.menuburger )
    .replace("{{logo}}", obj.logo)
    .replace("{{title}}", obj.title)
    .replace("{{desc}}", obj.desc)
    .replace("{{descicon}}", obj.descicon );

  return html;
};

Hero5.render = function (where, data) {
  let container = document.querySelector(where);
  if (!container) {
    console.error(`Container not found: ${where}`);
    return;
  }

  let html = data.map((obj) => Hero5.format(obj)).join("");
  container.innerHTML = html;
};

export { Hero5 };
