const templateFile = await fetch("component/Feature/Feature1/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch("component/Feature/Feature1/template-div.html");
const templateDiv = await templateFile2.text();

let Feature1 = {};

Feature1.format = function(obj) {
  let html = template;
  let items = "";
  html = html.replace("{{title}}", obj.title);
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

Feature1.render = function(where, what) {
  let element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html += Feature1.format(obj);
  }
  element.innerHTML = html;
};

export { Feature1 };
