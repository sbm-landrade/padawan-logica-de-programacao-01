//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 15;
let raio = diametroBolinha / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0); //1 - Desenha o background 
    mostraBolinha(); // 2 - Desenha a bolinha
    movimentaBolinha(); // 3 - Movimenta a Bolinha
    verificaColisaoBorda(); // 4 - Verifica Colisão da bolinha
    mostraRaquete(xRaquete, yRaquete);
    movimentaRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    incluiPlacar();
    marcaPonto();
   // 5- Volta para o início da função draw()
  }
  
function mostraBolinha() {
    circle (xBolinha, yBolinha, diametroBolinha);
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;//movimenta em sentindo oposto -1
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1
    }
}

function mostraRaquete(x, y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
      }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
      }
    }

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
    }
}

function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente -
    raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar() {
    fill(255); 
    text(meusPontos, 278, 26);
    text(pontosDoOponente, 321, 26);
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
    }
}