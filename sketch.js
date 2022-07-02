const World = Matter.World;
const Engine = Matter.World;
const Bodies = Matter.World;
const Constraint = Matter.World;

var jogador;
var chaoInvisivel, paredeEsquerda, fundo, imgFundo;
var btnPlay;
var btnCreditos;
var btnMute;
var gameState = "waiting";

function preload(){
    //Carregar imagens

}

function setup(){
    createCanvas(800,600);

    jogador = createSprite(100,525,20,20);
    jogador.visible = false;
    
    fundo = createSprite(400,300);
    fundo.visible = false;

    chaoInvisivel = createSprite(400,550,800,20);
    chaoInvisivel.visible = false;

    btnPlay = createSprite(400,100,60,20);
    btnPlay.shapeColor = "red";

    btnCreditos = createSprite(400,150,60,20);
    btnCreditos.shapeColor = "blue";

    btnMute = createSprite(730,50,20,20);
    btnMute.shapeColor = "green";
    btnMute.visible = false;

    paredeDireita = createSprite(400,300,20,800);
    paredeDireita.visible = false;

    //criar botao voltar
}

function draw(){
    background(200);

    if(mousePressedOver(btnPlay)){
        gameState = "playing";
    }
    //mousePressedOver btnCreditos / mute 
    
    
    if(gameState === "playing"){
        btnPlay.visible = false;
        btnCreditos.visible = false;
        jogador.visible = true;
        fundo.visible = true;
        btnMute.visible = true;

        jogador.velocityX = 2;
        fundo.velocityX = -2;

        if(keyDown("space")) {
            jogador.velocityY = -11;
        }
        
        jogador.velocityY = jogador.velocityY + 1;

        if(fundo.x === -1000){
            jogador.velocityX = 0;
            fundo.velocityX = -0;
        }

        console.log(fundo.x);

    }

    jogador.collide(chaoInvisivel);
    jogador.collide(paredeDireita);

    console.log(gameState);

    drawSprites();
}

