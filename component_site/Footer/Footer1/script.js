const templateFile = await fetch("component_site/Footer/Footer1/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch("component_site/Footer/Footer1/template-li.html");
const templateLi = await templateFile2.text();

let Footer1 = {};

Footer1.format = function(obj) {
  let html = template;
  
  let items = "";
  for (let m of obj.menus) {
    let li = templateLi;
    li = li.replace("{{link}}", m.link);
    li = li.replace("{{label}}", m.label);
    items = items + li;
  }
  html = html.replace("{{items}}", items);
  html = html.replace("{{desc}}", obj.desc);
  return html;
};

Footer1.render = function(where, what) {
  let element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html = html + element.innerHTML + Footer1.format(obj);
  }
  element.innerHTML = html;
};

export { Footer1 };
