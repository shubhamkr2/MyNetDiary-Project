// For Header_nav
// import { header_nav, MyFun } from "./Header.js";
// document.querySelector("#header").innerHTML=header_nav();

// document.querySelector(".drop_btn").addEventListener("click",MyFun);
// import { FooterLast } from "./FooterLast.js";
// document.querySelector("#footer").innerHTML=FooterLast();


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
});

function MyFun() {
    document.getElementById("mydropdownlList").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.drop_btn')) {
        var dropdownlLists = document.getElementsByClassName("dropdownlList-content");
        var i;
        for (i = 0; i < dropdownlLists.length; i++) {
            var opendropdownlList = dropdownlLists[i];
            if (opendropdownlList.classList.contains('show')) {
                opendropdownlList.classList.remove('show');
            }
        }
    }
}