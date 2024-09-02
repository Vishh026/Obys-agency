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
    delay:4
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