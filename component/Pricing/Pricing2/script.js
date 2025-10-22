const templateFile = await fetch("component/Pricing/Pricing2/template.html");
const template = await templateFile.text();
const templateFile2 = await fetch("component/Pricing/Pricing2/template-div.html");
const templateDiv = await templateFile2.text();


let Pricing2 = {};

Pricing2.format = function (obj) {
  let html = template;
  let items = "";

  html = html.replace("{{title}}", obj.title);
  html = html.replace("{{desc}}", obj.desc);

  for (let m of obj.menus) {
    let div = templateDiv;
    div = div.replace("{{subtitle}}", m.subtitle);
    div = div.replace("{{price}}", m.price);
    div = div.replace("{{icon}}", m.icon);
    div = div.replace("{{button}}", m.button);
    div = div.replace("{{items}}", m.items);
    items += div;
  }

  html = html.replace("{{items}}", items);
  return html;
};

Pricing2.render = function (where, what) {
  let element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html += Pricing2.format(obj);
  }
  element.innerHTML = html;
};

export { Pricing2 };
