// For Header_nav
import { header_nav, MyFun } from "./Header.js";
document.querySelector("#header").innerHTML=header_nav();

document.querySelector(".drop_btn").addEventListener("click",MyFun);
import { FooterLast } from "./FooterLast.js";
document.querySelector("#footer").innerHTML=FooterLast();


let count=0;
document.getElementById("sliding").addEventListener("click",function(){
    count++;
    let x=document.getElementById("moving_div");
    // console.log(count);
    if(count%2===0){
        x.style.display="none"
    }else{
        x.style.display="block"
    }
})