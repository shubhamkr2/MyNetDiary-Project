let play=()=>{
    document.getElementById("video_image").style.display="none";
let play_video=document.getElementById("play_video");
play_video.style.display="block"
play_video.src="https://www.youtube.com/embed/85I1Bxg7x3A"
}



 function toggle(){
    document.getElementById("popup").style.display="block";
   
    
 };
 document.getElementById("cross").addEventListener("click",function(){
    document.getElementById("popup").style.display="none";
 });

 function display4pre(){
    document.getElementById("popup").style.display="none";
    document.getElementById("popup4").style.display="block"
 }

 function display2(){
    document.getElementById("popup").style.display="none";
    document.getElementById("popup2").style.display="block"
 }
 document.getElementById("cross2").addEventListener("click",function(){
    document.getElementById("popup2").style.display="none"
 })

 function display1pre(){
    document.getElementById("popup2").style.display="none";
    document.getElementById("popup").style.display="block"
 }

 function display3(){
    document.getElementById("popup2").style.display="none";
    document.getElementById("popup3").style.display="block"
 }
 document.getElementById("cross3").addEventListener("click",function(){
    document.getElementById("popup3").style.display="none"
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

 })


 