const templateFile = await fetch("./component/Content/Content6/template.html");
const template = await templateFile.text();

let Content6 = {}; 

Content6.format = function(r){
    let html = template;
    html = html.replace("{{titledesc}}", r.titledesc);
    html = html.replace("{{desc}}", r.desc);
    return html;
}

Content6.render = function(where, r){
    let element = document.querySelector(where);
    element.innerHTML = Content6.format(r);
}

export { Content6 };