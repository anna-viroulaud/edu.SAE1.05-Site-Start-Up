const templateFile = await fetch("./component/CallToAction/CallToAction2/template.html");
const template = await templateFile.text();

let CallToAction2 = {}; 

CallToAction2.format = function(r){
    let html = template;
    html = html.replace("{{title}}", r.title);
    html = html.replace("{{desc}}", r.desc);
    html = html.replace("{{button}}", r.button);
    html = html.replace("{{license}}", r.license);
    html = html.replace("{{icon}}", r.icon);
    return html;
}

CallToAction2.render = function(where, r){
    let element = document.querySelector(where);
    element.innerHTML = CallToAction2.format(r);
}

export { CallToAction2 };
