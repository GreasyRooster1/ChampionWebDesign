const divAmount = 32

let addsShown = 0;

function generateGridCSS(){
    let str = "";
    for(let i = 1; i <= divAmount; i++){
         str+=".div"+i+"{opacity:0}\n"
         str+=".div"+i+"{background:"+getColor()+";}\n"
    }
    let style = document.createElement("style");
    style.innerHTML = str;
    document.head.appendChild(style);
}

function getColor(){
    let r = rand()*55+190;
    let g = rand()*55+190;
    let b = rand()*55+190;
    let tmp = r;
    // r*=1.89;
    // g*=2.3;
    // b*=1.8;
    // r+=10;
    // g+=30;
    // b+=50;
    // r = Math.min(r,220)
    // g = Math.max(g,100)
    // b-=Math.pow(tmp,2)/1000
    return "rgb("+r+", "+g+" , "+b+")";
}

function frame(){
    if(Math.floor(Math.random()*500)===0){
        document.body.parentElement.style = "filter:blur(5px)";
        setTimeout(()=>{
            document.body.parentElement.style = "filter:blur(1px)";
        }, 100);
    }
    requestAnimationFrame(frame);
}



function showAd(){
    addsShown++;
    if(addsShown>divAmount/2){
        return;
    }
    if(addsShown===5){
        frame()
    }
    document.querySelector(".div" + addsShown).style.opacity = "1";
    document.querySelector(".div" + (divAmount-addsShown)).style.opacity = "1";

}
setTimeout(()=>{
    setInterval(showAd,2500)
},20000)

window.onload = ()=>{
    generateGridCSS();
}