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
    //verificaColisaoRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
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
function verificaColisaoRaquete() {
    let esquerdaBolinha = xBolinha - raio;
    let superiorBolinha = yBolinha - raio;
    let inferiorBolinha = yBolinha + raio;
    
    let direitaRaquete = xRaquete + raqueteComprimento;
    let superiorRaquete = yRaquete;
    let inferiorRaquete = yRaquete + raqueteAltura;	
    
    if (esquerdaBolinha < direitaRaquete
        && superiorBolinha < inferiorRaquete
        && inferiorBolinha > superiorRaquete) {
        velocidadeXBolinha *= -1;
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