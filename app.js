

async function getDogimages() {
  const response = await fetch(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWJqP3gln_06nqC_HE2Ec00WzPHhlGcP_SQ&s'    
  );

  const data = await response.json();

console.log(data);
}

getDogimages();

function createImagesTag(){
    const img = document.createElement['img']
}


