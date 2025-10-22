const templateFile = await fetch("./component/Ecommerce/Ecommerce3/template.html");
const template = await templateFile.text();

let Ecommerce3 = {}; 

Ecommerce3.format = function(r){
    let html = template;
    html = html.replace("{{title}}", r.title);
    html = html.replace("{{desc}}", r.desc);
    html = html.replace("{{button}}", r.button);
    html = html.replace("{{date}}", r.date);
    html = html.replace("{{icon}}", r.icon);
    html = html.replace("{{info}}", r.info);
    return html;
}

Ecommerce3.render = function(where, r){
    let element = document.querySelector(where);
    element.innerHTML = Ecommerce3.format(r);
}

export { Ecommerce3 };
