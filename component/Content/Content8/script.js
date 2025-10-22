const templateFile = await fetch("./component/Content/Content8/template.html");
const template = await templateFile.text();

let Content8 = {}; 

Content8.format = function(r){
    let html = template;
    html = html.replace("{{titledesc}}", r.titledesc);
    html = html.replace("{{desc}}", r.desc);
    return html;
}

Content8.render = function(where, r){
    let element = document.querySelector(where);
    element.innerHTML = Content8.format(r);
}

export { Content8 };