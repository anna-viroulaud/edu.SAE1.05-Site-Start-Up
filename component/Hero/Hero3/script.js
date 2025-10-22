const templateFile = await fetch("component/Hero/Hero3/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch("component/Hero/Hero3/template-li.html");
const templateLi = await templateFile2.text();

let Hero3 = {};

Hero3.format = function(obj) {
  let html = template;
  let items = "";
  html = html.replace("{{logo}}", obj.logo);
  html = html.replace("{{button}}", obj.button);
  html = html.replace("{{title}}", obj.title);
  html = html.replace("{{desc}}", obj.desc);
  html = html.replace("{{item}}", obj.item);
  html = html.replace("{{terms}}", obj.terms);
  html = html.replace("{{buttonnav}}", obj.buttonnav);
  for (let m of obj.menus) {
    let li = templateLi;
    li = li.replace("{{link}}", m.link);
    li = li.replace("{{label}}", m.label);
    items = items + li;
  }
  html = html.replace("{{items}}", items);
  return html;
};

Hero3.render = function(where, what) {
  let element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html = html + element.innerHTML + Hero3.format(obj);
  }
  element.innerHTML = html;
};

export { Hero3 };

