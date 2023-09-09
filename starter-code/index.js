// select the elements for the the home section
let hamburger=document.querySelector(".hamburger")
let nav=document.querySelector("header nav")
// select the elements for the the destination section
let links = document.querySelectorAll("nav a");
let desLinks=document.querySelectorAll(".links a") 
let desName=document.querySelector(".destination-text h1")
let desMainText=document.querySelector(".main-text")
let desImg=document.querySelector(".image-container img")
let desDistance=document.querySelector(".distance h3")
let desTime=document.querySelector(".time h3")
// select the elements for the the crew section
let bullets=document.querySelectorAll(".bullets span")
let profession=document.querySelector(".crew-text h3")
let crewName=document.querySelector(".crew-text h1")
let crewMainText=document.querySelector(".crew-main-text")
let crewImg=document.querySelector(".crew-image img")
// select the elements for the the technology section
let techBullets=document.querySelectorAll(".technology-bullets span")
let techName=document.querySelector(".technology-text h1")
let techMainText=document.querySelector(".technology-main-text")
let techImg=document.querySelector(".technology-image img")
// add event listener to the window after load
window.addEventListener("load", () => {
    // loop on each link
    links.forEach((link) => {
        link.addEventListener("click", () => {
            // // loop to remove the active class from all links
            // for(let i=0;i<links.length;i++){
            //     links[i].classList.remove("active")
            // }
            // another way for the loop
            links.forEach((link)=>{
                link.classList.remove("active")
            })
    });
    // checking if the link is the same
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
    });
});
window.addEventListener("load",function(){
    hamburger.addEventListener("click",()=>{
        nav.style.cssText="display: flex;flex-direction: column;align-items: center;width: 90%;margin: auto;"
    })
    let req=new XMLHttpRequest()
    req.open("GET","data.json")
    req.send()
    req.onload=function(){
        if(this.readyState===4&&this.status===200){
            req=JSON.parse(this.responseText)
            // appending the default for destination section
            
            // console.log(desName.innerHTML)
            
            desLinks.forEach((link,index)=>{// the index indicates to the link u clicked on
                
                if(this.readyState==4){

                    
                    desImg.setAttribute("src",`${req.destinations[0].images.png}`)
                    desName.innerHTML=`${(req.destinations[0].name).toUpperCase()}`
                    desMainText.innerHTML=`${(req.destinations[0].description)}`
                    desDistance.innerHTML=`${(req.destinations[0].distance)}`
                    desTime.innerHTML=`${(req.destinations[0].travel)}`
                    
                }            
                
                link.addEventListener("click",(e)=>{
                    // prevent the link from reloading the page
                    e.preventDefault()
                    // appending the destination section
                    // desImg.
                    desImg.setAttribute("src",`${req.destinations[index].images.png}`)
                    desName.innerHTML=`${(req.destinations[index].name).toUpperCase()}`
                    desMainText.innerHTML=`${(req.destinations[index].description)}`
                    desDistance.innerHTML=`${(req.destinations[index].distance)}`
                    desTime.innerHTML=`${(req.destinations[index].travel)}`
                    
            
            })
        })
        bullets.forEach((bullet,index)=>{
            if(this.readyState==4){
                
                bullets[0].classList.add("highlighted")
                profession.innerHTML=`${req.crew[0].role}`
                crewName.innerHTML=`${req.crew[0].name}`
                crewMainText.innerHTML=`${req.crew[0].bio}`
                crewImg.setAttribute("src",req.crew[0].images.png)
            }
            bullet.addEventListener("click",()=>{
                
                profession.innerHTML=`${req.crew[index].role}`
                crewName.innerHTML=`${req.crew[index].name}`
                crewMainText.innerHTML=`${req.crew[index].bio}`
                crewImg.setAttribute("src",req.crew[index].images.png)
            })
        })
        techBullets.forEach((bullet,index)=>{
            if(this.readyState==4){
                techBullets[0].classList.add("clicked")
                techName.innerHTML=`${req.technology[0].name}`
                techMainText.innerHTML=`${req.technology[0].description}`
                techImg.setAttribute("src",`${req.technology[0].images.portrait}`)
            }
            bullet.addEventListener("click",()=>{
                console.log(req)
                techName.innerHTML=`${req.technology[index].name}`
                techMainText.innerHTML=`${req.technology[index].description}`
                techImg.setAttribute("src",`${req.technology[index].images.portrait}`)
            })
        })
        }
    }
    // change color of the bullet of the crew section
    bullets.forEach((bullet,index)=>{
        bullet.addEventListener("click",()=>{
            bullets.forEach((bullet)=>{
                bullet.classList.remove("highlighted")
            })
            bullets[index].classList.add("highlighted")
        })
    })
    // change color of the bullet of the technology section
    techBullets.forEach((bullet,index)=>{
        bullet.addEventListener("click",()=>{
            techBullets.forEach((bullet)=>{
                bullet.classList.remove("clicked")
            })
            techBullets[index].classList.add("clicked")
        })
    })
})

