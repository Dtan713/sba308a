

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

async function fetchImages() {
    try {
        const response = await fetch("https://cdn2.thedogapi.com/images/B1d5me547_1280.jpg")
        const data = await response.json();
    } catch(error){}}
