const templateFile = await fetch("component/Navigation/Navigation1/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch("component/Navigation/Navigation1/template-li.html");
const templateLi = await templateFile2.text();

let Navigation1 = {};

Navigation1.format = function(obj) {
  let html = template;
  html = html.replace("{{logo}}", obj.logo);
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

Navigation1.render = function(where, what) {
  let element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html = html + element.innerHTML + Navigation1.format(obj);
  }
  element.innerHTML = html;
};

export { Navigation1 };
