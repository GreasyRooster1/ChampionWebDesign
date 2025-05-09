const divAmount = 57
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
    return "#"+Math.floor(Math.random() * 0x1000000).toString(16)
}

window.onload = ()=>{
    generateGridCSS();
}