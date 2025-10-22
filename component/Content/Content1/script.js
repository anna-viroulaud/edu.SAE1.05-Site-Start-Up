const templateFile = await fetch("./component/Content/Content1/template.html");
const template = await templateFile.text();

let Content1 = {}; 

Content1.format = function(r){
    let html = template;
    html = html.replace("{{title}}", r.title);
    html = html.replace("{{desc}}", r.desc);
    return html;
}

Content1.render = function(where, r){
    let element = document.querySelector(where);
    element.innerHTML = Content1.format(r);
}

export { Content1 };
