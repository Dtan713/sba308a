import { createImagesTag } from "./helper.js";
const imageContainer=document.getElementById("images");
async function getDogimages(){
    const Response = await fetch("https://api.thedogapi.com/v1/images/search?limit=10");
    const result = await Response.json()
    for(let i = 0; i < result.length; i ++){
        const img = createImagesTag(result[i].url)
        imageContainer.appendChild(img);
    }

    
}

export {getDogimages}