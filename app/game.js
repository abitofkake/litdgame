import TileMap from "./tilemap";

const canvas = document.getElementById("game");
const ctx =  canvas.getContext("2d");
const tileSize = 32;

const tileMap = new TileMap(tileSize);

function gameLoop() {
    tileMap.draw(canvas, ctx)
}

setInterval(gameLoop,1000/60)

function initListeners() {}

//GAME
//TODO: Load canvas
function loadroom() {
    
    for (let r = 0; r < 9; r++) {
        var row = $(`<div id="r${r}" class="row"></div>`);
        $("#room").append(row);
        
        for (let c = 0; c < 9; c++) {
            // let tile = $(document.createElement('div'));
            $(`#r${r}`).append(`<div class="tile" data-column="${c}" data-row="${r}"></div>`)
            console.log(`r${r}`);   
        }
    }
}

//MENU
//TODO: Load options
//TODO: Switch 
 
$(document).ready(function () {
initListeners();
loadroom();
});