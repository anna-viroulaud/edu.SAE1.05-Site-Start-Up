const templateFile = await fetch("./component/Content/Content5/template.html");
const template = await templateFile.text();

let Content5 = {}; 

Content5.format = function(r){
    let html = template;
    html = html.replace("{{texte}}", r.texte);
    return html;
}

Content5.render = function(where, r){
    let element = document.querySelector(where);
    element.innerHTML = Content5.format(r);
}

export { Content5 };