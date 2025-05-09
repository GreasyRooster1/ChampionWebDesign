const divAmount = 57
function generateGridCSS(){
    let str = "";
    for(let i = 0; i < divAmount; i++){
        str+="div"+i+"{background:"+getColor()+"}"
    }
}

function getColor(){
    return "#"+Math.floor(Math.random() * 0x10000).toString(16)
}