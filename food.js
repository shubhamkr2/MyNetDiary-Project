//     https://api.unsplash.com/search/photos

//  https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=YOUR_ACCESS_KEY


  import { searchImages,append } from "./fetch.js";


const API = "bvyRE71Hb2EYvlAm_1BwOaTwbnegfhdZXhgICI_eZaE";
 
let search = (e)=>{
   if(e.key === "Enter"){
    let query = document.getElementById("inputs1").value;
    let data = searchImages(API,query).then((data)=>{
    let container = document.getElementById("container"); 
     container.innerHTML= null;
    console.log(data);
        append(data.results,container);
    })  
   }
};

document.getElementById('inputs1').addEventListener("keydown",search)



// let searchImages = async () =>{

//     let query = document.getElementById("inputs1").value;
//     try {
//         let res = await fetch(`https://api.unsplash.com/search/photos/?per_page=20&query=${query}&client_id=${API}`)
//         let data = await res.json();
//         console.log(data);
//     } 
//     catch (error) {
//         console.log(error)
//     }
//  }   