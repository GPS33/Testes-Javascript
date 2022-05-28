//LÂMPADA-----------------------------------------------
const ligar = document.getElementById ('ligar');
const desligar = document.getElementById ('desligar');
const lamp = document.getElementById('lamp');

const Lampada = document.getElementById('Lampada');


function LampEstQueb (){
    return lamp.src.indexOf ( 'quebrada' ) > -1;
}

function lampLigar(){
    if (!LampEstQueb()){
        lamp.src = 'Assets/ligada.png';
    }
}
function lampDesligar(){
    if (!LampEstQueb()){
        lamp.src = 'Assets/desligada.png';
    }
}
function lampQueb(){
    lamp.src = 'Assets/quebrada.png';
}
function hideLamp(){
    var x = document.getElementById("lampDiv");
    var y = document.getElementById("main-textEd");
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
    }
}


ligar.addEventListener('click', lampLigar);
desligar.addEventListener('click', lampDesligar);
lamp.addEventListener('mouseover', lampLigar);
lamp.addEventListener('mouseleave', lampDesligar);
lamp.addEventListener('dblclick', lampQueb);

Lampada.addEventListener('click', hideLamp);


//LÂMPADA-----------------------------------------------

//EDITOR DE TEXTO---------------------------------------
const elements = document.querySelectorAll('.btn');
const Textoo = document.getElementById('Text');

elements.forEach(element =>{
    element.addEventListener('click',()=> {
        let command = element.dataset['element'];
        if(command == 'createLink' || command == 'insertImage'){
            let url = prompt('Insira um link:', 'http://');
            document.execCommand(command, false, url);
        } else{
            document.execCommand(command, false, null);
        }
    })
});
function hideText(){
    var x = document.getElementById("lampDiv");
    var y = document.getElementById("main-textEd");
    if (window.getComputedStyle(y).display === "none") {  
        y.style.display = "block";
        x.style.display = "none";
    } else {
        y.style.display = "none";
    }
}
Textoo.addEventListener('click', hideText);
//EDITOR DE TEXTO---------------------------------------

//MUDAR BACKGROUND--------------------------------------
function changecolor(getcolo){
    let bg = document.querySelector(".bg");
    let selectcolor = getcolor.value;
    bg.getElementsByClassName.background = selectcolor;
    bg.innerHTML = text;
}
window.onload=function(){
    const colorPicker = document.getElementById("colorpicker");
    colorPicker.addEventListener("input",() =>{
        document.body.style.backgroundColor = colorPicker.value;
    })
}
//MUDAR BACKGROUND--------------------------------------

/*$('button').on('click', function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
});*/



