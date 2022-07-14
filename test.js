let canvas = document.getElementById("canvas1");
let img = document.getElementById("img");
let img2 = document.getElementById("img2");
let img3= document.getElementById("img3");
let img4= document.getElementById("img4");
let score= document.getElementById("score");
let left = document.getElementById("left");
let right = document.getElementById("right");
let dirction = document.querySelectorAll(".dirction button");
let start = document.querySelector(".start");
let titleScore = document.querySelector(".titleScore");
let Scored = document.querySelector(".scored");
let info = document.querySelector(".info");
let timerEL = document.querySelector(".timer");
let c = canvas.getContext('2d');
let StartGame;
// canvas.width = window.innerWidth ;
// canvas.height = window.innerHeight ;
let Game;
window.onresize = Game


Game=function  (){
  
    let timer = 100;
    let animationId;
    canvas.width = window.innerWidth ;
    canvas.height = window.innerHeight ;   

let scorenum = 0;
let scorenumth = 0
let scoress = scorenum + scorenumth;
score.textContent = scorenum + scorenumth
c.beginPath();
c.fillStyle = 'black';
c.fillRect(0,0,canvas.width,canvas.height)
c.fill()
class Text {
    constructor(){
this.x = 30;
this.y = canvas.height/2
this .vacity = {x:1,y:0}
    }

    draw(){
        c.font = '30px Griffy , cursive'
        c.fillStyle = 'darkcyan'
        c.fillText("Omar Ali", this.x,this.y)
        c.fill()
    }

    update(){
        this.draw()
        this.x += this.vacity.x
    }

}
class Stand {
    constructor(){
this.x = 0;
this.height = 40;
this.y = canvas.height - this.height
this.width =canvas.width
    }

    draw(){
c.fillStyle ='purple';
c.fillRect(this.x,this.y,this.width,this.height);
this.draw2()
    }

    draw2(){
        c.fillStyle ='purple';
        c.fillRect(canvas.width/8,70,canvas.width - ((canvas.width/3)-canvas.width/8),3);
        
    }
}

class Player{
    constructor(){

this.width = 35 ;
this.height = 50 ;
 this.position = {x:0,y:stand.y- this.height}
 this.vacity = {x:0,y:0}


    }

    draw(){
c.drawImage(img3,this.position.x,this.position.y,this.width,this.height)
    }

    update(){
        this.draw()
        if(this.position.x + this.vacity.x  >= 0 &&this.position.x <= canvas.width - (this.width+ this.vacity.x ) ){
            this.position.x += this.vacity.x
        }else{
          
        }
    }
}


class Chicken {
    constructor (position){
        this.position =position
        this.width = 50;
        this.height = 50;
    }

    draw(){
        c.drawImage(img,this.position.x,this.position.y,this.width,this.height)
    }
}

class Egg{
    constructor(x,y){
this.x = x
this.y = y
this.vacity ={x:0,y:2}
this.radus = 5
    }

    draw(){
c.beginPath()
c.fillStyle ="white";
c.arc(this.x,this.y,this.radus,0,2*Math.PI)
c.fill()
    }

    update(){
        this.draw()
this.y += this.vacity.y
    }
}


class  Brocken{
    constructor(x,y){
this.x = x;
this.y = y;
this.width = 40;
this.height = 40
    }

    draw(){
c.drawImage(img2,this.x,this.y,this.width,this.height)
    }
}

class Thighs{
    constructor(x,y){
this.x = x
this.y = y
this.vacity ={x:0,y:2}
this.width = 20
this.height = 20
    }

    draw(){
c.drawImage(img4,this.x,this.y,this.width,this.height)
    }

    update(){
        this.draw()
this.y += this.vacity.y

    }
}
let thighs = []
let brokens = []
let stand = new Stand()
let player = new Player()
let text = new Text()
let eggs = []
let f = canvas.width /5
let chicken = [
    new Chicken({x:f,y:20}),
    new Chicken({x:canvas.width/2,y:20}),
    new Chicken({x:canvas.width-(f),y:20})
]
let keys = {
    right :{
        pressed:false
    },
    left :{
        pressed:false
    },
}
let random;
let random2;
let timeEgg;
let timeTHIG
function PUSHEGG(){
   
timeEgg =   setInterval(()=>{
     random = Math.floor(Math.random() * chicken.length)
eggs.push(new Egg(chicken[random].position.x + chicken[random].width/2,chicken[random].position.y + chicken[random].height/2))
    },1000)

 timeTHIG =  setInterval(()=>{
        random2 = Math.floor(Math.random() * chicken.length)
   thighs.push(new Thighs(chicken[random2].position.x + chicken[random2].width/2,chicken[random2].position.y + chicken[random2].height/2))
       },3000)  
    
}

function init(){
    animationId = requestAnimationFrame(init)
    c.clearRect(0,0,canvas.width,canvas.height)
    c.beginPath();
c.fillStyle = 'black';
c.fillRect(0,0,canvas.width,canvas.height)
c.fill()



text.update()

if(text.x >= canvas.width){
    text.x = 0;
}

stand.draw()
eggs.forEach((egg,indexEgg)=>{
    egg.update()

    if(egg.y - egg.radus   >= stand.y   ){
        setTimeout(() => {
            eggs.splice(indexEgg,1)
            brokens.push(new Brocken(egg.x,egg.y))
          
           },0);
           setTimeout(()=>{
            brokens = []
          },700)
    }else if(
        egg.y >= player.position.y + (player.height/2) && 
        egg.x >= player.position.x - player.width && 
         egg.x <= player.position.x + player.width 
      
    ){
      setTimeout(() => {
            eggs.splice(indexEgg,1);
            scorenum += 1;
          
           },0);
    }
})

thighs.forEach((thig,indexThig)=>{
    thig.update()

    if(thig.y  >= stand.y  ){

        setTimeout(() => {
            thighs.splice(indexThig,1)
           },0);
    }else if(
        thig.y >= player.position.y + (player.height/2) && 
        thig.x >= player.position.x - player.width && 
        thig.x <= player.position.x + player.width 
      
    ){
       
      setTimeout(() => {
            thighs.splice(indexThig,1);
           scorenumth += 5
           
           },0);
    }
})
   
   
    
chicken.forEach((chick)=>{
    chick.draw()
   
})

brokens.forEach((brock)=>{
brock.draw()
}) 

    if(keys.right.pressed){
        player.vacity.x = 10
    }else if(keys.left.pressed){
        player.vacity.x = -10
    }else{
        player.vacity.x = 0
    }


    player.update()
 
    if(timer <=0){
        cancelAnimationFrame(animationId)
        info.style.display ="block";
        titleScore.style.display = "block";
        Scored.textContent = scorenum
        
    }
    timerEL.textContent = timer;
    scoress = scorenum + scorenumth
    score.textContent = scoress

}

addEventListener("keydown",function({keyCode}){
    switch(keyCode){
        case 37 :
            keys.left.pressed = true
            break;
        case  39 :
            keys.right.pressed = true
            break;

    }

})

addEventListener("keyup",function({keyCode}){
    switch(keyCode){
        case 37 :
            keys.left.pressed = false
            break;
        case  39 :
            keys.right.pressed = false
            break;

    }
    
})
// addEventListener("mousedown")ss

dirction.forEach(function(i){
// i.addEventListener("mouseenter",function(e){

// let id = e.target.dataset.id

// switch(id){
//     case 'left' :
//         keys.left.pressed = true
//         break;
//     case  'right' :
//         keys.right.pressed = true
//         break;

// }
// })

i.addEventListener("mousemove",function(e){
    let id = e.target.dataset.id
  
    switch(id){
        case 'left' :
            
            if(player.position.x <=0){

            }else{
                player.position.x += -12
            }
            break;
        case  'right' :
         if(player.position.x >= canvas.width - player.width){

         }else{
            player.position.x += 12
         }
            break;
    
    }
})
})



function timers(){
  let  tim=  setInterval(()=>{
timer -= 1

if(timer <=0){
    clearInterval(tim)
}
console.log(timer)
    },1000)
}




StartGame= function (){

    scorenum = 0
    scorenumth = 0
    timer = 100
titleScore.style.display ='none'
info.style.display ='none';
timerEL.textContent = timer
init()
PUSHEGG()
timers()

}
start.onclick = StartGame

}
Game()


