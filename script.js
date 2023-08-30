var timer=60;
var score=0;
var hitrn;

function increseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;

}

function makeBubble() {
    var clutter = "";

    for (var i = 0; i < 180; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTime(){
    var timerint= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").innerHTML=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`
         
            
        }
    },1000)
}

function getNewHit(){
    hitrn=Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent=hitrn;
}

document.querySelector("#pbtm")
.addEventListener(("click"),
function(details){
    var clicked=(Number(details.target.textContent))
    if(clicked === hitrn){
        increseScore();
        getNewHit()
        makeBubble();
    }
})
document.querySelector("#play").addEventListener(("click"),function playBtm(){
    makeBubble();
    runTime();
    getNewHit();

})



playBtm()


