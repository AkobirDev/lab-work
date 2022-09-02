function makeGrid(){


let btn = document.querySelector('button');
let gh = document.querySelectorAll('input')[0].value;
let gw = document.querySelectorAll('input')[1].value;
const table = document.querySelector('table');
  
let txt = '';
for(let i = 0;i < gh;i++){
txt += '<tr>'

for(let j = 0;j < gw;j++){
    txt += "<td onclick='this.style.backgroundColor= setColor()'></td>"
}   
txt += '</tr>' 
}

table.innerHTML = txt;

}

function setColor(){
    const color = document.querySelector('#color').value;
    return color;
}





