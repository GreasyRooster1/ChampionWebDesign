const divAmount = 28



function generateGridCSS(){
    let str = "";
    for(let i = 1; i <= divAmount; i++){
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

window.onload = ()=>{
    generateGridCSS();
}