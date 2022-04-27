// get elemant into varible

let btnEle = document.getElementById("btn");
let divEle = document.getElementById("my-div");
let colores = ["red" , "green" , "blue"]; 
let i = 0
// event
btnEle.onclick= function(){
    divEle.style.backgroundColor=colores[i]
    i++

    if(i == 3){
    i = 0
    }
}