const templateFile = await fetch("./component/Content/Content4/template.html");
const template = await templateFile.text();

let Content4 = {}; 

Content4.format = function(r){
    let html = template;
    html = html.replace("{{title}}", r.title);
    return html;
}

Content4.render = function(where, r){
    let element = document.querySelector(where);
    element.innerHTML = Content4.format(r);
}

export { Content4 };
