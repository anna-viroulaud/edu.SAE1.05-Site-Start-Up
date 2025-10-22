const templateFile = await fetch("component_site/Navigation/Navigation14/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch("component_site/Navigation/Navigation14/template-li.html");
const templateLi = await templateFile2.text();

let Navigation14 = {};

Navigation14.format = function(obj) {
  let html = template;
  let items = "";
  html = html.replace("{{logo}}", obj.logo);
  for (let m of obj.menus) {
    let li = templateLi;
    li = li.replace("{{link}}", m.link);
    li = li.replace("{{label}}", m.label);
    items = items + li;
  }
  html = html.replace("{{items}}", items);
  return html;
};

Navigation14.render = function(where, what) {
  let element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html = html + element.innerHTML + Navigation14.format(obj);
  }
  element.innerHTML = html;
};

export { Navigation14 };
