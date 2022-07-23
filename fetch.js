let searchImages = async (API,query) =>{
    try {
        let res = await fetch(`https://api.unsplash.com/search/photos/?per_page=20&query=${query}&client_id=${API}`)
        let data = await res.json();
        // console.log(data);
        return data;
  
    } 
    catch (error) {
        console.log(error)
    }
}

 let append = (data,container)=>{
     data.forEach(({alt_description,urls:{small}})=>{
        let div = document.createElement("div");
        div.setAttribute("class","div")
        let img = document.createElement("img");
        img.setAttribute("class","image")
        let h3 = document.createElement("h3");
        h3.setAttribute("class","heading")
        img.src = small;
        h3.innerText = alt_description;
        div.append(img,h3);
        container.append(div);
     })
 }





export{searchImages,append};