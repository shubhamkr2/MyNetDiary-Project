let play=()=>{
    document.getElementById("video_image").style.display="none";
    document.getElementById("play_img").style.display="none";
let play_video=document.getElementById("play_video");
play_video.style.display="block"
play_video.src="https://www.youtube.com/embed/85I1Bxg7x3A"
}

let a= document.getElementById("popup");
let b= document.getElementById("popup2");
let c= document.getElementById("popup3");
let e= document.querySelector("#award");
let f= document.querySelector("#main");
let g=document.querySelector("#key_features");

 function toggle(){
   a.style.display="block";
    e.style.opacity="0.1";
    f.style.opacity="0.1";
    g.style.opacity="0.1";
    
 };
 document.getElementById("cross").addEventListener("click",function(){
    a.style.display="none";
    e.style.opacity="1";
    f.style.opacity="1";
    g.style.opacity="1";
 });

 function display3pre(){
    a.style.display="none";
    c.style.display="block"
 }

 function display2(){
    a.style.display="none";
    b.style.display="block"
 }
 document.getElementById("cross2").addEventListener("click",function(){
    b.style.display="none"
    e.style.opacity="1";
    f.style.opacity="1";
    g.style.opacity="1";
 })

 function display1pre(){
    b.style.display="none";
    a.style.display="block"
 }

 function display3(){
    b.style.display="none";
    c.style.display="block"
 }
 function display2pre(){
   c.style.display="none";
   b.style.display="block"
}
function display1(){
   c.style.display="none";
   a.style.display="block"
}
 document.getElementById("cross3").addEventListener("click",function(){
    c.style.display="none"
    e.style.opacity="1";
    f.style.opacity="1";
    g.style.opacity="1";
 });

 let imgArr=[
    "https://s3.amazonaws.com/img.mynetdiary.com/images/ipad_large_screen.png",
    "https://s3.amazonaws.com/img.mynetdiary.com/images/ipad_food_database.png",
    "https://s3.amazonaws.com/img.mynetdiary.com/images/ipad_beautiful.png",
    "https://s3.amazonaws.com/img.mynetdiary.com/images/ipad_analysis.png",
    "https://s3.amazonaws.com/img.mynetdiary.com/images/ipad_feedback.png",
    "https://s3.amazonaws.com/img.mynetdiary.com/images/ipad_tracks.png",
    "https://s3.amazonaws.com/img.mynetdiary.com/images/ipad_dietitians.png",
    "https://s3.amazonaws.com/img.mynetdiary.com/images/ipad_main.png",
    
 ];

 let img=document.querySelector("#slider>img");
 let butt1=document.getElementById("pre");
 let butt2=document.getElementById("post");
 let imgNum=0;
 butt1.addEventListener("click",function(){

    if(imgNum===0){
        imgNum=imgArr.length-1;
    }else{
        imgNum--
    }
    img.src=imgArr[imgNum];

 });

 butt2.addEventListener("click",function(){

    if(imgNum===imgArr.length-1){
        imgNum=0;
    }else{
        imgNum++;
    }
    img.src=imgArr[imgNum];

 });

 


 function changeBg() {
   let scrollValue = window.pageYOffset;
   let navBar = document.querySelector("#NavBar");
   let nav_opt1 = document.querySelector("#feature");
   let nav_opt2 = document.querySelector("#diet");
   let nav_opt3 = document.querySelector("#libr");
   let nav_opt4 = document.querySelector("#food");
   let nav_opt5 = document.querySelector("#buiss");
   let signup = document.querySelector(".signup_btn");
   let signin = document.querySelector(".signin_btn");

   if (scrollValue < 35) {
       navBar.classList.remove("f_Navbar");
       nav_opt1.classList.remove("f_nav_Opt");
       nav_opt2.classList.remove("f_nav_Opt");
       nav_opt3.classList.remove("f_nav_Opt");
       nav_opt4.classList.remove("f_nav_Opt");
       nav_opt5.classList.remove("f_nav_Opt");
       signup.classList.remove("f_signup");
       signin.classList.remove("f_signin");
   }

   else {
       navBar.classList.add("f_Navbar");
       nav_opt1.classList.add("f_nav_Opt");
       nav_opt2.classList.add("f_nav_Opt");
       nav_opt3.classList.add("f_nav_Opt");
       nav_opt4.classList.add("f_nav_Opt");
       nav_opt5.classList.add("f_nav_Opt");
       signup.classList.add("f_signup");
       signin.classList.add("f_signin");
   }

   // console.log(scrollValue);
}changeBg();


 