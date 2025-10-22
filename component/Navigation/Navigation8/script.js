const templateFile = await fetch("component/Navigation/Navigation8/template.html");
const template = await templateFile.text();

const templateFileLi = await fetch("component/Navigation/Navigation8/template-li.html");
const templateLi = await templateFileLi.text();

let Navigation8 = {};

Navigation8.format = function (obj) {
  let html = template;

  // Gestion des menus gauche
  let itemsLeft = "";
  for (let menu of obj.menusLeft) {
    let li = templateLi;
    li = li.replace("{{link}}", menu.link);
    li = li.replace("{{label}}", menu.label);
    itemsLeft += li;
  }

  // Gestion des menus droit
  let itemsRight = "";
  for (let menu of obj.menusRight) {
    let li = templateLi;
    li = li.replace("{{link}}", menu.link);
    li = li.replace("{{label}}", menu.label);
    itemsRight += li;
  }

  // Remplacement des placeholders dans le template
  html = html.replace("{{itemsLeft}}", itemsLeft);
  html = html.replace("{{itemsRight}}", itemsRight);
  html = html.replace("{{logo}}", obj.logo);

  return html;
};

Navigation8.render = function (where, what) {
  const element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html += Navigation8.format(obj);
  }
  element.innerHTML = html;
};

export { Navigation8 };
