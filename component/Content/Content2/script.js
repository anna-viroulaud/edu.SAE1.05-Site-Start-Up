const templateFile = await fetch("./component/Content/Content2/template.html");
const template = await templateFile.text();

let Content2 = {}; 

Content2.format = function(r){
    let html = template;
    html = html.replace("{{title}}", r.title);
    html = html.replace("{{desc}}", r.desc);
    return html;
}

Content2.render = function(where, r){
    let element = document.querySelector(where);
    element.innerHTML = Content2.format(r);
}

export { Content2 };
