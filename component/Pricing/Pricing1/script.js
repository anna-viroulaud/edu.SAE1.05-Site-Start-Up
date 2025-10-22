const templateFile = await fetch("component/Pricing/Pricing1/template.html");
const template = await templateFile.text();

let Pricing1 = {};

Pricing1.format = function(obj) {
  let html = template;
  html = html.replace("{{title}}", obj.title);
  html = html.replace("{{button}}", obj.button);
  html = html.replace("{{info}}", obj.info);
  html = html.replace("{{subtitle}}", obj.subtitle);
  html = html.replace("{{desc}}", obj.desc);
  html = html.replace("{{number}}", obj.number);
  return html;
};

Pricing1.render = function(where, what) {
  let element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html += Pricing1.format(obj);
  }
  element.innerHTML = html;
};

export { Pricing1 };
