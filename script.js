window.addEventListener("mousemove",(dets)=>{
    let card = document.getElementById("card");
    let silde1 = gsap.utils.mapRange(0,window.innerHeight,100+card.getBoundingClientRect().height/2,window.innerHeight-100,dets.clientY)
    let silde = gsap.utils.mapRange(0,window.innerWidth,100+card.getBoundingClientRect().width/2,window.innerWidth-100,dets.clientX)
    gsap.to( card ,{
        top: silde1+'px',
        ease:Power4,
    });
    gsap.to( card ,{
        left: silde+'px',
        ease:Power4,
    });
})