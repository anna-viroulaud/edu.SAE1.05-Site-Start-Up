const templateFile = await fetch("component/Navigation/Navigation12/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch("component/Navigation/Navigation12/template-li.html");
const templateLi = await templateFile2.text();

let Navigation12 = {};

Navigation12.format = function(obj) {
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

Navigation12.render = function(where, what) {
  let element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html = html + element.innerHTML + Navigation12.format(obj);
  }
  element.innerHTML = html;
};

export { Navigation12 };
