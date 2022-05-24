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
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
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

$('button').on('click', function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
});



