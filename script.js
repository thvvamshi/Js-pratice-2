window.addEventListener("mousemove",(dets)=>{
    let card = document.getElementById("card");
    let silde = gsap.utils.mapRange(0,window.innerWidth,100+card.getBoundingClientRect().width/2,window.innerWidth-100,dets.clientX)
    gsap.to( card ,{
        left: silde+'px',
        ease:Power4,
    });
})