//Set web page title
function setPageTitle(val){
    document.title = val;
}

//Insert to tag "HEAD"
function setHeadings(tag, val, attributes){
    const el = document.createElement(tag);
    for (let prop in attributes){
        el.setAttribute(prop, attributes[prop]);
    }
    el.innerText = val;
    document.head.append(el);
}

//Insert HTML-element to parent using id
function createHTML(parent, tag, val, attributes){
    const el = document.createElement(tag);
    for (let prop in attributes){
        el.setAttribute(prop, attributes[prop]);
    }
    el.innerText = val;
    document.getElementById(parent).append(el);
}

function generateHyperlink(){
    let generatedLink = new URL(window.location + "?config=" + localStorage.getItem("machineConfiguration"));
    console.log(generatedLink);
    console.log(localStorage.getItem("machineConfiguration").replace(/"/g, ""));
    window.prompt("Copy to generated link to clipboard: Ctrl+C, Enter", generatedLink);
    return generatedLink
}

//Test cases
/* setPageTitle("HDSTrailer");

setHeadings("meta", null, {"name": "viewport"});

createHTML("root", "p", "Hello world", {"id": "insert1"});
createHTML("insert1", "b", "INFO", {"id": "insert1", "class": "cl"}); */
