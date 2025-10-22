const templateFile = await fetch("component_site/Showcase/Showcase1/template.html");
const template = await templateFile.text();
console.log("Template principal :", template); // Vérifie le contenu

const templateFile2 = await fetch("component_site/Showcase/Showcase1/template-div.html");
const templateDIV = await templateFile2.text();
console.log("Template de la carte :", templateDIV); // Vérifie le contenu


let Showcase1 = {};

Showcase1.format = function (obj) {
  let html = template;
  let items = "";
  for (let m of obj.menus) {
    let div = templateDIV;
    div = div.replace("{{link}}", m.link);
    div = div.replace("{{label}}", m.label);
    div = div.replace("{{artiste}}", m.artiste);
    items += div;
  }
  html = html.replace("{{items}}", items);
  return html;
};

Showcase1.render = function (where, what) {
  let element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html += Showcase1.format(obj);
  }
  element.innerHTML = html;
};

export { Showcase1 };
