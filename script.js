var shapes = ["shape1", "shape2", "shape3"];
var objects;
const observer = new IntersectionObserver( function(entries){
    entries.forEach(function(entry){
        if(!entry.isIntersecting){
            entry.target.remove();
        }
    })
})
var textTyperInterval;
function textTyper(paragraph, element){
    var count = 0;
    element.textContent = "";
    function typer(){
        element.textContent = element.textContent + paragraph[count];
        count++;
        if(count == paragraph.length){
            clearInterval(textTyperInterval);
        }
    }
    textTyperInterval = setInterval(typer, 20);
}

function drawShapes(){
    const content = document.querySelector(".content");
    const shape = document.createElement("div");
    shape.classList.add(shapes[Math.floor(Math.random() * 3)]);
    shape.classList.add("shape");
    var rollSpeed = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    var moveSpeed = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    var left = Math.floor(Math.random() * (100 - 5 + 1)) + 5;
    var shapeSize = Math.floor(Math.random() * (14 - 2 + 1)) + 2;
    shape.style.width = `${shapeSize}rem`;
    shape.style.height = `${shapeSize}rem`;
    shape.style.animation = `move ${moveSpeed}s linear infinite, roll ${rollSpeed}s linear infinite`;
    shape.style.left = `${left}%`;
    content.append(shape);
    objects = document.querySelectorAll(".shape");
    objects.forEach((element) =>{observer.observe(element)});
}

var shapeTimer = setInterval(drawShapes, 2000);

var canScroll = true;
var slidePos = 1;
var returned = false;
if(window.location.search == "?a=1"){
    returned = true;
    slidePos = 4;
    canScroll = true;
    document.querySelector(".slide1").style.display = "none";
                const icons = document.querySelectorAll(".slide4 .projects a");
                    var counter = 0;

                        var tempInterval1 = setInterval(() => {
                            icons[counter].style = null;
                            icons[counter].style.animation = "popup 1s forwards";
                            counter++;
                            if(counter == icons.length){
                                clearInterval(tempInterval1);
                                
                                canScroll = true;
                                slidePos = 4;
                                document.querySelectorAll(".slide3 img").forEach((e)=>{
                                    e.style = null;
                                })
                                
                            }
                        }, 100);
                            document.querySelector(".slide4").style.display = "block";

                    document.querySelector(".slide4 .title").style.animation = "scrollFromRight 1s forwards";


}

document.addEventListener("wheel", (e)=>{
    console.log("current slide = " + slidePos + " and cantScroll = " + canScroll)
    if(canScroll){
        canScroll = false;
        if(e.deltaY > 0){
            if(slidePos == 1){
                clearInterval(textTyperInterval);
                slide2Text.textContent = ""
                document.querySelector(".slide2 p").style = null;
                document.querySelector(".slide2 .jasonImage").style = null;
                document.querySelector(".slide1 p").style.animation = "ScrollslideRight 1s forwards";
                document.querySelector(".slide1 .wave-vid").style.animation = "ScrollslideLeft .5s .2s forwards";
                document.querySelector(".slide1 .scroll-vid").style.display = "none";
                setTimeout(() => {
                    document.querySelector(".slide1").style.display = "none";
                    document.querySelector(".slide2").style.display = "flex";
                    slidePos = 2;
                    canScroll = false;
                }, 500);
            }
            if(slidePos == 2){
                document.querySelector(".slide2 p").style.animation = "scrollMoveUp 2s forwards";
                document.querySelector(".slide2 p").style.width = "50%";
                document.querySelector(".slide2 .jasonImage").style.animation = "scrollMoveDown 4s forwards";
                setTimeout(() => {
                    clearInterval(textTyperInterval);
                    document.querySelector(".slide2").style.display = "none";
                    document.querySelector(".slide3").style.display = "block";
                    // document.querySelector(".slide3 .TaT .languages").style.animation = "scrollFromLeft 1s forwards";
                    // document.querySelector(".slide3 .TaT .tools").style.animation = "scrollFromRight 1.2s forwards";
                    document.querySelector(".slide3").style.animation = "scrollFromTop 1.2s forwards";
                    const icons = document.querySelectorAll(".slide3 img");
                    var counter = 0;
                    setTimeout(() => {
                        var tempInterval1 = setInterval(() => {
                            icons[counter].style.animation = "popup 1s forwards";
                            counter++;
                            if(counter == icons.length){
                                clearInterval(tempInterval1);
                                
                                canScroll = true;
                                slidePos = 3;
                                
                            }
                        }, 100);
                    }, 1000);
                }, 500);
            }
            if(slidePos == 3){
                document.querySelector(".slide3").style.animation = "scaleDown 1s forwards";
                const icons = document.querySelectorAll(".slide4 .projects a");
                    var counter = 0;
                    setTimeout(() => {
                        var tempInterval1 = setInterval(() => {
                            icons[counter].style = null;
                            icons[counter].style.animation = "popup 1s forwards";
                            counter++;
                            if(counter == icons.length){
                                clearInterval(tempInterval1);
                                
                                canScroll = true;
                                slidePos = 4;
                                document.querySelectorAll(".slide3 img").forEach((e)=>{
                                    e.style = null;
                                })
                                
                            }
                        }, 100);
                        setTimeout(() => {
                            document.querySelector(".slide3").style = null;
                            document.querySelector(".slide4").style.display = "block";
                        }, 1000);
                    }, 1000);
                    document.querySelector(".slide4 .title").style.animation = "scrollFromRight 1s forwards";
            }
            if(slidePos == 4){
                canScroll = true;
            }
        }
        if(e.deltaY < 0){

            if(slidePos == 1){
                canScroll = true;
            }

            if(slidePos == 2){
                document.querySelector(".slide2 p").style.animation = "scrollMoveUp 2s forwards";
                document.querySelector(".slide2 p").style.width = "50%";
                document.querySelector(".slide2 .jasonImage").style.animation = "scrollMoveDown 4s forwards";
                setTimeout(() => {
                    clearInterval(textTyperInterval);
                    document.querySelector(".slide2").style.display = "none";
                    document.querySelector(".slide1").style.display = "block";
                    document.querySelector(".slide1 p").style.animation = "scrollFromRight 1s forwards";
                    document.querySelector(".slide1 .wave-vid").style.animation = "scrollFromLeft 1s forwards";
                    document.querySelector(".slide1 .scroll-vid").style.display = "block";
                    canScroll = true;
                    slidePos = 1;
                }, 500);
            }

            if(slidePos == 3){
                slidePos = 2;
                canScroll = false;
                var counter = 0;
                const icons = document.querySelectorAll(".slide3 img");
                var tempInterval2 = setInterval(() => {
                    // icons[counter].style.animation = null;
                    icons[counter].style.animation = "popdown 1s forwards";
                    counter++;
                    if(counter == icons.length){
                        document.querySelector(".slide3").style.animation = "scrollToTop 1.2s backwards";
                                setTimeout(() => {
                                document.querySelector(".slide3").style.display = "none";
                                clearInterval(textTyperInterval);
                                slide2Text.textContent = "";
                                slide2Text.style.animation = null;
                                slide2Text.style = null;
                                document.querySelector(".slide2").style.display = "flex";
                                document.querySelector(".slide2 p").style = null;
                                document.querySelector(".slide2 .jasonImage").style = null;
                                slidePos = 2;
                                canScroll = false;
                                document.querySelectorAll(".slide3 img").forEach((e)=>{
                                    e.style = null;
                                })
                                
                            }, 1000);
                        clearInterval(tempInterval2);
                    }
                }, 100);
            }

            if(slidePos == 4){
                canScroll = false
                if(returned){
                    window.history.pushState({}, "", "index.html");
                    returned = false;
                }
                const icons = document.querySelectorAll(".slide4 .projects a");
                var counter3 = 0;
                setTimeout(() => {
                    var tempInterval1 = setInterval(() => {
                        icons[counter3].style.animation = "popdown 1s forwards";
                        counter3++;
                        if(counter3 == icons.length){
                            clearInterval(tempInterval1);
                            document.querySelector(".slide4 .title").style.animation = "ScrollslideRight 1s forwards";
                            // reset slide4 elements here
                            setTimeout(() => {
                                document.querySelector(".slide4").style = null;
                                document.querySelector(".slide4 .title").style = null;
                            }, 500);
                            document.querySelector(".slide3").style.display = "block";
                            document.querySelector(".slide3").style.animation = "scrollFromTop 1.2s forwards";

                            const icons = document.querySelectorAll(".slide3 img");
                            var counter2 = 0;
                            setTimeout(() => {
                                var tempInterval1 = setInterval(() => {
                                    icons[counter2].style.animation = "popup 1s forwards";
                                    counter2++;
                                    if(counter2 == icons.length){
                                        clearInterval(tempInterval1);
                                        
                                        
                                        document.querySelectorAll(".slide4 .projects a").forEach((e)=>{
                                            e.style = null;
                                        })
                                        
                                    }
                                }, 100);
                            }, 1000);


                            document.querySelector(".slide3 .imgLast").addEventListener("animationend", ()=>{
                                canScroll = true;
                                slidePos = 3;
                                document.querySelector(".slide3 .imgLast").removeEventListener("animationend");
                            })

                            
                            
                        }
                    }, 100);
                }, 100);
            }
        }
        
    }
    console.log("current slide = " + slidePos + " and cantScroll = " + canScroll)
})



var text = "I am Jason, a talented and driven web developer with a passion for creating engaging and user-friendly websites. At 22 years old, I bring a fresh and innovative approach to web development, combining technical skills with creativity to deliver outstanding results. Whether working on a new project or enhancing an existing one, I am committed to delivering high-quality solutions that exceed expectations."
// text = "test";
const slide2Text = document.querySelector(".slide2 p");



document.querySelector(".slide2 .jasonImage .flip div").addEventListener("animationend", ()=>{
    setTimeout(() => {
        slide2Text.style.animation = "slide2pGrow 1s forwards";
        setTimeout(() => {
            textTyper(text, slide2Text);
            setTimeout(() => {
                document.querySelector(".scroll-vid2").style.display = "block";
                canScroll = true;
            }, 100);//beep
        }, 200);
    }, 1000);
})


document.querySelectorAll(".slide4 .projects a").forEach((e,i)=>{

    e.addEventListener("click",(a)=>{
        a.preventDefault();
        let currentUrl = window.location.href;
        newUrl = currentUrl;
        if(currentUrl.indexOf("?a=1") == -1){
            newUrl = currentUrl + "?a=1";
        }
        window.history.pushState({}, "", newUrl);
        window.location.href = e.href;
    })

    e.addEventListener("mouseenter",()=>{
        e.querySelector(".projectInfo").style.opacity = "1";
        e.querySelector(".projectInfo").style.background = "rgb(0,0,0,.6)";
    })
    e.addEventListener("mouseleave",()=>{
        console.log(e.querySelector(".projectInfo").style.opacity = null);
    })
})

document.querySelector(".slide4 .projects").addEventListener("mouseenter", ()=>{
    canScroll = false;
})

document.querySelector(".slide4 .projects").addEventListener("mouseleave", ()=>{
    canScroll = true;
})
