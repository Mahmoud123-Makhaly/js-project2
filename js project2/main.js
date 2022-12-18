let btn = document.querySelector(".btn");
let mydiv = document.querySelector(".mydiv");

let myColor = ["red" , "green" , "blue"];
let i =0;
btn.addEventListener("click" , function(){
    mydiv.style.background = myColor[i];
    i++;
    if(i==3){
        i=0
    }
})
