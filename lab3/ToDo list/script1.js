let buttons = document.querySelectorAll('.clickButton');
let textInside = document.querySelectorAll('.taskText')

function addTextDec(button, textInsideIth) {
    button.addEventListener('click', function () {
        if(textInsideIth.style.textDecoration !== 'line-through') {
            textInsideIth.style.textDecoration = "line-through";
        } else {
            textInsideIth.style.textDecoration = "none";
        }
    });
}

for(let i = 0; i < buttons.length; i++) {
    addTextDec(buttons[i], textInside[i])
}
