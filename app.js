import{getDogimages}from"getDog.js"
const button = document.querySelector("button")
button.addEventListener("click", async()=> {
    await getDogimages()
})