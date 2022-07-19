import ReactDOM from "react-dom";
import App from './App'
import './index.css'

ReactDOM.render(<App/>, document.querySelector("#root"));


//LÂMPADA-----------------------------------------------
const ligar = document.getElementById ('ligar');
const desligar = document.getElementById ('desligar');
const lamp = document.getElementById('lamp');

const Lampada = document.getElementById('Lampada');
const Desenho = document.getElementById('Desenho');


function LampEstQueb (){
    return lamp.src.indexOf ( 'quebrada' ) > -1;
}

function lampLigar(){
    if (!LampEstQueb()){
        lamp.src = '../src/Assets/ligada.png';
    }
}
function lampDesligar(){
    if (!LampEstQueb()){
        lamp.src = '../src/Assets/desligada.png';
    }
}
function lampQueb(){
    lamp.src = '../src/Assets/quebrada.png';
}
function hideLamp(){
    var x = document.getElementById("lampDiv");
    var y = document.getElementById("main-textEd");
    var z = document.getElementById("draw-field");
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
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
Desenho.addEventListener('click', hideDes);

function hideDes(){
    var x = document.getElementById("lampDiv");
    var y = document.getElementById("main-textEd");
    var z = document.getElementById("draw-field");
    if (window.getComputedStyle(z).display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    } else {
        z.style.display = "none";
    }
}


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
    var z = document.getElementById("draw-field");
    if (window.getComputedStyle(y).display === "none") {  
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
    } else {
        y.style.display = "none";
    }
}
Textoo.addEventListener('click', hideText);
//EDITOR DE TEXTO---------------------------------------
//DESENHO-----------------------------------------------
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 60;
canvas.height = 350;

let context = canvas.getContext("2d");
let start_background_color = "white";
context.fillStyle = start_background_color;
context.fillRect(0, 0, canvas.width, canvas.height);


let draw_color = "black";
let draw_width = "2";
let is_drawing = false;

let restore_array = [];
let index = -1;

function change_color(element){
    draw_color = element.style.background;
}

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);


function start(event){
    is_drawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft,
                   event.clientY - canvas.offsetTop);
    event.preventDefault();
}

function draw (event){
    if (is_drawing){
        context.lineTo(event.clientX - canvas.offsetLeft,
                       event.clientY - canvas.offsetTop);
        context.strokeStyle = draw_color;
        context.lineWidth = draw_width;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
    }
    event.preventDefault();
}

function stop(event){
    if (is_drawing){
        context.stroke();
        context.closePath();
        is_drawing = false;
    }
    event.preventDefault();

    if (event.type != 'mouseout'){
        restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
    
}

function clear_canvas(event){
    context.fillStyle = start_background_color;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);

    restore_array = [];
    index = -1;
}

function undo_last(){
    if (index <= 0){
        clear_canvas();
    } else{
        index -= 1;
        restore_array.pop();
        context.putImageData(restore_array[index], 0, 0);
    }
}
//DESENHO-----------------------------------------------
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



