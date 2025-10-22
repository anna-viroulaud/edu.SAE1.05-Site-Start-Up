const templateFile = await fetch("component_site/Hero/Hero1/template.html");
const template = await templateFile.text();

let Hero1 = {};

// Format function for the hero section
Hero1.format = function (obj) {
  let html = template;
  html = html.replace("{{title}}", obj.title || "");
  html = html.replace("{{desc}}", obj.desc || "");
  html = html.replace("{{prices}}", obj.prices || "");
  html = html.replace("{{desprice}}", obj.desprice || "");
  return html;
};

// Render function for displaying the hero section
Hero1.render = function (where, what) {
  let element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html += Hero1.format(obj);
  }
  element.innerHTML = html;
};

export { Hero1 };
