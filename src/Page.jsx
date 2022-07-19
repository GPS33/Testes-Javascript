import React from 'react'
import './style.css'

import React from 'react'

const Page = () => {
  return (
    <div>
        <div class="d">
        <input type="color" id="colorpicker">
    </div>
    <div class="titles">Testes Javascript</div>      
    <div class="row">
        <button id="Lampada">Lâmpada</button>
        <button id="Text">Editor de texto</button>
        <button id = "Desenho">Desenhar</button>
    </div>
    <main>
        <div id='lampDiv'>
            <div>
                <img src="../src/Assets/desligada.png" alt="Lâmpadadesligada" id="lamp">  
            </div>
            <div class="lamBtn">
                <button id="ligar">Acender</button>
                <button id="desligar">Apagar</button>
            </div>
        </div>

        <div id="main-textEd">
            <div class="textDiv-header">
                <button type="button" class="btn" data-element="bold">
                    <i class="fa fa-bold"></i>
                </button>
                <button type="button" class="btn" data-element="italic">
                    <i class="fa fa-italic"></i>
                </button>
                <button type="button" class="btn" data-element="underline">
                    <i class="fa fa-underline"></i>
                </button>
                <button type="button" class="btn" data-element="insertUnorderedList">
                    <i class="fa fa-list-ul"></i>
                </button>
                <button type="button" class="btn" data-element="insertOrderedList">
                    <i class="fa fa-list-ol"></i>
                </button>
                <button type="button" class="btn" data-element="createLink">
                    <i class="fa fa-link"></i>
                </button>
                <button type="button" class="btn" data-element="justifyLeft">
                    <i class="fa fa-align-left"></i>
                </button>
                <button type="button" class="btn" data-element="justifyCenter">
                    <i class="fa fa-align-center"></i>
                </button>
                <button type="button" class="btn" data-element="justifyRight">
                    <i class="fa fa-align-right"></i>
                </button>
                <button type="button" class="btn" data-element="justifyFull">
                    <i class="fa fa-align-justify"></i>
                </button>
                <button type="button" class="btn" data-element="insertImage">
                    <i class="fa fa-image"></i>
                </button>
            </div>
            <div class="content" contenteditable="true"></div>
        </div>
        <div class="draw-field" id="draw-field">
            <div class="canvas-div">
                <canvas id="canvas"></canvas>
            </div>
            <div class="tools">
                <button onclick="undo_last()" type="button" id="button">Desfazer</button>
                <button onclick="clear_canvas()" type="button" id="button">Limpar</button>

                <div onclick="change_color(this)" class="color-field" style="background: red;"></div>
                <div onclick="change_color(this)" class="color-field" style="background: blue;"></div>
                <div onclick="change_color(this)" class="color-field" style="background: green;"></div>
                <div onclick="change_color(this)" class="color-field" style="background: yellow;"></div>
                
                <input oninput="draw_color = this.value" type="color" class="pick-clr">
                <input oninput="draw_width = this.value" type="range" min="1" max="500" class="pen-range"> 
            </div>
        </div>
    </main>
    <script src="../src/index.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="./app.js"></script>
    <script src="https://use.fontawesome.com/a31a3f8384.js"></script>
    </div>
  )
}

export default Page