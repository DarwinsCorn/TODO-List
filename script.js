const input = document.querySelector("#input-box");
const enterBtn = document.querySelector("#btn-enter");
const clrBtn = document.querySelector("#btn-clear");
const ul = document.querySelector("#list-ul");

function createLItag(listText) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(listText));
    return li;
}

function createButtonTag() {
    const button = document.createElement("button");
    button.appendChild(document.createTextNode("delete"));
    return button;
}

function addListItem(inputVal) {
    if (input.value != ""){
        ul.appendChild(createLItag(inputVal)).appendChild(createButtonTag());
        input.value = "";
    }
}

enterBtn.addEventListener('click',() => {addListItem(input.value);});

input.addEventListener('keydown',(evt) => {if (evt.key === 'Enter') {addListItem(input.value);}});

// --------------------- ADDITIONAL FEATURES

// creates a strikethrough to indicate that tasks are completed or 
// pressed the delete button to remove the entry
ul.addEventListener("click",(evt) => {
    if (evt.target.tagName === "LI"){
        evt.target.classList.toggle("done");
    } else if (evt.target.tagName === "BUTTON") {
        evt.target.parentNode.remove();
    }    
});

// clear the whole list
clrBtn.addEventListener("click", clearAll);

function clearAll() {
    let max = ul.children.length;
    for (let i=0; i < max; i++){
        ul.children[0].remove();
    }    
}







