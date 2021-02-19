const body = document.body

const slides = document.querySelectorAll(".slide")

const left = document.getElementById("left")
const right = document.getElementById("right")

let activeSlide = 0

right.addEventListener("click", ()=>{
    activeSlide ++
    if(activeSlide > slides.length-1){
        activeSlide = 0
    }

    setActive()
   
})
left.addEventListener("click", ()=>{
    activeSlide--
    if(activeSlide < 0){
        activeSlide = slides.length-1
    }

    setActive()
    
})


setActive()
function setActive(){
    slides.forEach(slide =>{
        slide.classList.remove("active")
    })

    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
    slides[activeSlide].classList.add("active")
}