const templateFile = await fetch("component/Navigation/Navigation9/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch("component/Navigation/Navigation9/template-li.html");
const templateLi = await templateFile2.text();

let Navigation9 = {};

Navigation9.format = function(obj) {
  let html = template;
  html = html.replace("{{logo}}", obj.logo);
  html = html.replace("{{menuburger}}", obj.menuburger);
  
  let items = "";
  for (let m of obj.menus) {
    let li = templateLi;
    li = li.replace("{{link}}", m.link);
    li = li.replace("{{label}}", m.label);
    items = items + li;
  }
  html = html.replace("{{items}}", items);
  return html;
};

Navigation9.render = function(where, what) {
  let element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html = html + element.innerHTML + Navigation9.format(obj);
  }
  element.innerHTML = html;
};

export { Navigation9 };
