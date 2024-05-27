let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 15;
let raio = diametroBolinha / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(0);
    circle (xBolinha, yBolinha, diametroBolinha);
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;

    if (xBolinha + raio > width || xBolinha - raio< 0) {
        velocidadeXBolinha *= -1;//movimenta em sentindo oposto -1
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1
    }
}

