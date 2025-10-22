const templateFile = await fetch("component/Ecommerce/Ecommerce1/template.html");
const template = await templateFile.text();

const templateDivFile = await fetch("component/Ecommerce/Ecommerce1/template-div.html");
const templateDiv = await templateDivFile.text();

let Ecommerce1 = {};

Ecommerce1.format = function(data) {
  let html = template;
  let card1Html = templateDiv;
  let card2Html = templateDiv;
  
  // Remplacement des cartes

  
  card1Html=card1Html.replace("{{subtitle}}", data.card1.subtitle)
  card1Html=card1Html.replace("{{title}}", data.card1.title)
  card1Html=card1Html.replace("{{button}}", data.card1.button)
  card1Html=card1Html.replace("{{image}}", data.card1.image);

  
  card2Html=card2Html.replace("{{subtitle}}", data.card2.subtitle)
  card2Html=card2Html.replace("{{title}}", data.card2.title)
  card2Html=card2Html.replace("{{button}}", data.card2.button)
  card2Html=card2Html.replace("{{image}}", data.card2.image);
  
  html = html.replace("{{card1}}", card1Html)
  html = html.replace("{{card2}}", card2Html);

  return html;
};

Ecommerce1.render = function(where, what) {
  let element = document.querySelector(where);
  let html = "";
  for (let obj of what) {
    html += Ecommerce1.format(obj);
  }
  element.innerHTML = html;
};

export { Ecommerce1 };
