const templateFile = await fetch("component/Feature/Feature2/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch("component/Feature/Feature2/template-div.html");
const templateDiv = await templateFile2.text();

let Feature2 = {};

Feature2.format = function(obj) {
  let html = template;
  let items = "";
  html = html.replace("{{title}}", obj.title);
  html = html.replace("{{desc}}", obj.desc);
  for (let m of obj.menus) {
    let div = templateDiv;
    div = div.replace("{{desc}}", m.desc);
    div = div.replace("{{subtitle}}", m.subtitle);
    div = div.replace("{{icon}}", m.icon);
    items = items + div;
  }
  html = html.replace("{{items}}", items);
  return html;
};

Feature2.render = function(where, what) {
  let element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html += Feature2.format(obj);
  }
  element.innerHTML = html;
};

export { Feature2 };
