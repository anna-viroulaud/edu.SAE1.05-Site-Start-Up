const templateFile = await fetch("component/Navigation/Navigation10/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch("component/Navigation/Navigation10/template-li.html");
const templateLi = await templateFile2.text();

let Navigation10 = {};

Navigation10.format = function(obj) {
  let html = template;
  let items = "";
  html = html.replace("{{logo}}", obj.logo);
  html = html.replace("{{button}}", obj.button);
  for (let m of obj.menus) {
    let li = templateLi;
    li = li.replace("{{link}}", m.link);
    li = li.replace("{{label}}", m.label);
    items = items + li;
  }
  html = html.replace("{{items}}", items);
  return html;
};

Navigation10.render = function(where, what) {
  let element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html = html + element.innerHTML + Navigation10.format(obj);
  }
  element.innerHTML = html;
};

export { Navigation10 };
