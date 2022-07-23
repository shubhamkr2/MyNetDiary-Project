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