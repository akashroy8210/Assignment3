const boxes=document.querySelectorAll(".box");
const greetBtn=document.querySelector("button");
const headingPara=document.querySelector("header");

// 1 thing i have to do is on clicking the greet button there should be appeear on heading what i write in inoput box 
greetBtn.addEventListener("click" ,()=>{
    const input=document.querySelector("input").value;
    if(input.length===0){
        headingPara.innerText="Hello";
    headingPara.style.fontSize="1.875rem";
    headingPara.style.fontWeight="300";
    }else{
        headingPara.innerText="Hello! " + input;
    headingPara.style.fontSize="1.875rem";
    headingPara.style.fontWeight="300";
    }
})

let elementRed=document.getElementById("red");
elementRed.addEventListener("click",()=>{
    elementRed.style.backgroundColor="red";
    elementRed.style.color="white";
})
let elementBlue=document.getElementById("blue");
elementBlue.addEventListener("click",()=>{
    elementBlue.style.backgroundColor="blue";
    elementBlue.style.color="white";
})
let elementGreen=document.getElementById("green");
elementGreen.addEventListener("click",()=>{
    elementGreen.style.backgroundColor="green";
    elementGreen.style.color="white";
})
let elementYellow=document.getElementById("yellow");
elementYellow.addEventListener("click",()=>{
    elementYellow.style.backgroundColor="yellow";
    
})

