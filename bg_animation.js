var canvasBody = document.getElementById("canvas"); 
var canvas = canvasBody.getContext("2d");
var w = canvasBody.width = window.innerWidth; //задается ширина на весь экран
var h = canvasBody.height = window.innerHeight; //задается высота на весь экран

var opts = {
    count: 10,
    size: 30, //размер объектов в пикселах
    sizeRandom: 20, //рандомное значение к размеру объектов (от 0 до 10)
    spawnOpacity: 1, //прозрачность объектов 
    sparkLife: 0.2, //время жизни объекта
    color: "rgba(38, 203, 251, alpha)" //цвет объектов
};

function anim(){
    window.requestAnimationFrame(anim);
    step();
}

anim();

function step(){
    var fillColor = opts.color.replace("alpha", opts.spawnOpacity);
    canvas.fillStyle = fillColor;
    for(var i = 0; i < Math.round(opts.count); i++){
        var random = Math.random() * opts.sizeRandom;
        canvas.fillRect(- (opts.size / 2) + Math.random() * w, - (opts.size / 2) + Math.random() * h, opts.size + random, opts.size + random);
    }
    canvas.fillStyle = "rgba(255,255,255,"+ opts.sparkLife +")";
    canvas.fillRect(0, 0, w, h);
}