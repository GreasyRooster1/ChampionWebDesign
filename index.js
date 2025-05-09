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
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;
    r+=20;
    g+=20;
    b+=20;
    return "rgb("+r+", "+g+" , "+b+")";
}

window.onload = ()=>{
    generateGridCSS();
}