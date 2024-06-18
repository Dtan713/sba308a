

async function getDogimages() {
  const response = await fetch(
    'https://api.thedogapi.com/v1/images/search?limit=10'    
  );

  const data = await response.json();
  console.log(data)
    data.forEach((element) => {
    console.log(element);
    
  });

}

getDogimages();

function createImagesTag(src){
    const img = document.createElement("img");
    log.setAtttibutes("src", src);
}

const img = new Image();
img.src = "https://cdn2.thedogapi.com/images/B1d5me547_1280.jpg', width: 554, height: 546" //


