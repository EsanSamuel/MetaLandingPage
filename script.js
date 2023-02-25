const body = document.querySelector("body")
dark = document.querySelector(".darkmode")
Menu2 = document.querySelector(".mobilemenu")

dark.addEventListener("click",()=>{
    body.classList.toggle("dark")
})

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting) {
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
})

const Hidden = document.querySelectorAll(".hidden")
Hidden.forEach((el)=>{observer.observe(el)})

function openMenuList(){
    Menu2.classList.toggle("openMenu")
}
