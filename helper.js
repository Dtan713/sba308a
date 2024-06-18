function createImagesTag(src){
    const img=document.createElement("img")
    img.setAttribute("src",src);
    return img
}

export{createImagesTag}