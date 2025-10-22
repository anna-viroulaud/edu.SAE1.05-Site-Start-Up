const templateFile = await fetch("component_site/Content/Content3/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch(
  "component_site/Content/Content3/template-li.html"
);
const templateLi = await templateFile2.text();

let Content3 = {};

Content3.format = function (obj) {
  let html = template;
  html = html.replace("{{logo}}", obj.logo);
  html = html.replace("{{title}}", obj.title);
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

Content3.render = function (where, what) {
  let element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html = html + element.innerHTML + Content3.format(obj);
  }
  element.innerHTML = html;
};

export { Content3 };
