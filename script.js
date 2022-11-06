document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";


const aboutMeText = document.querySelector(".aboutMeText");
const aboutMeText2 = document.querySelector(".aboutMeText2");
aboutMeText.style.height = aboutMeText2.innerHeight;
console.log(aboutMeText2.offsetHeight);
aboutMeText.textContent = "";
var chevron1 = document.querySelector(".slide1 .content .fa-chevron-down");
var aboutMeString = "Hey, Im jason, Im 22 years old and A full-stack web developer for 5 years!";
var counter = 0;





chevron1.addEventListener("click", ()=>{
    window.scrollBy({
        top:window.innerHeight,
        left:0,
        behavior:"smooth"
    });
})

window.addEventListener("load", ()=>{
    document.querySelector(".navbar").style.display = "flex";
    document.querySelector(".slide1").style.display = "flex";
    document.querySelector(".slide2").style.display = "flex";
    document.body.style.display = null;
    document.body.style.justifyContent = null;
    document.body.style.alignItems = null;
    document.querySelector(".loader").style.display = "none";
    var writeInterval = setInterval(writeAboutMe,50);

function writeAboutMe(){
    if(counter == 0){
        aboutMeText.textContent = "";
    }
    aboutMeText.textContent = aboutMeText.textContent + aboutMeString[counter];
    counter++;
    if(counter == aboutMeString.length){
        aboutMeText.style.display = "none";
        aboutMeText2.style.display = "block";
        clearInterval(writeInterval);
    }
}
})