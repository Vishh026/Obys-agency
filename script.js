function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

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
tl.from("#hero1, #page2",{
    opacity:0
},"-=1.2")
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
loadingAnimation();
locomotiveAnimation();