const templateFile = await fetch("./component/Ecommerce/Ecommerce2/template.html");
const template = await templateFile.text();

let Ecommerce2 = {}; 

Ecommerce2.format = function(r){
    let html = template;
    html = html.replace("{{title}}", r.title);
    html = html.replace("{{desc}}", r.desc);
    html = html.replace("{{button}}", r.button);
    html = html.replace("{{date}}", r.date);
    html = html.replace("{{icon}}", r.icon);
    return html;
}

Ecommerce2.render = function(where, r){
    let element = document.querySelector(where);
    element.innerHTML = Ecommerce2.format(r);
}

export { Ecommerce2 };
