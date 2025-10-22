const templateFile = await fetch("./component_site/Content/Content7/template.html");
const template = await templateFile.text();

let Content7 = {}; 

Content7.format = function(r){
    let html = template;
    html = html.replace("{{titledesc}}", r.titledesc);
    html = html.replace("{{desc}}", r.desc);
    return html;
}

Content7.render = function(where, r){
    let element = document.querySelector(where);
    element.innerHTML = Content7.format(r);
}

export { Content7 };