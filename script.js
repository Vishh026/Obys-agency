function loadingAnimation(){
    var tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.9,
})
tl.to(".line h2",{
    animationName: "anime",
    opacity:1

})
tl.from(".line-part1,.line h2",{
    opacity:0,
    onStart:function(){
        var h5timer = document.querySelector(".line-part1 h5")
    var grow = 0
    setInterval(() => {
    if(grow<100){
        // grow++;
        h5timer.innerHTML = grow++
    }else{
        //set value of grow is 100
        // grow = 100
        h5timer.innerHTML = grow
    }
}, 30);
    }
})
tl.to(".loader",{
    //loader gayab
    opacity:0,
    duration:0.2,
    delay:2
})
tl.from(".page1",{
    y:1600,
    delay:0.2,
    opacity:0,
    duration:0.5,
    easing: Power4
})
tl.to(".loader",{
    display:"none"
})
tl.from(".nav",{
    opacity:0
})
tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:120,
    stagger:0.2
})
}
function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to(".cursor",{
            left:dets.x,
            top:dets.y
        })
    })
    Shery.makeMagnet(".nav-part2 h4");
}
cursorAnimation();
loadingAnimation()