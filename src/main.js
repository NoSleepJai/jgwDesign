
// import html/css stuff //////////////////////////////
const timeHTML = document.querySelector(".time");
const dateHTML = document.querySelector(".date");
const placeHTML = document.querySelector(".place");
const bodyHTML = document.querySelector(".body");
const textHTML = document.querySelectorAll(".text");
const counterHTML = document.querySelector("#counter");
const rootCSS = document.querySelector(":root");

//////////// get user timezone ///////////////////////////
function fetchLocation(url) {
    return fetch(url).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        var location;

        if (data && data.timezone) {
            location = data.timezone;
        } else {
            location = "unknown place";
        }

        return Promise.resolve(location);
    })
}

////////////////// changing text ////////////////
function plusSlides(n) {
  showSlides(index += n);
}

function showSlides(n) {
    var i;
    
    if (n > textHTML.length) {index = 1}
    for (i = 0; i < textHTML.length; i++) {
      textHTML[i].style.display = "none";
    }
    counterHTML.textContent = index;
    textHTML[index-1].style.display = "block";
}

//////////////////////////////////////////////////
fetchLocation("https://ipapi.co/json/").then(function(data) {
    placeHTML.textContent = data;
});

const now = new Date();
timeHTML.textContent = now.toLocaleTimeString().replaceAll(":", " ");
dateHTML.textContent = now.toLocaleDateString().replaceAll("/", " ");
document.title = now.toLocaleTimeString().replaceAll(":", " ").toLowerCase();
/////////////// dark/light theme /////////////////
if(now.getHours() >= 19 || now.getHours() <= 6) {
    rootCSS.style.setProperty("--fg-css", "#f2ece4") 
    rootCSS.style.setProperty("--bg-css", "#1a1918") 
}
else {
    rootCSS.style.setProperty("--fg-css", "#1a1918") 
    rootCSS.style.setProperty("--bg-css", "#f2ece4") 
}

//////////////////////////////////////////////////
var index = 1;
showSlides(index);

//////////////// 1 sec interval /////////////////
setInterval(() => {
    const now = new Date();
    
    timeHTML.textContent = now.toLocaleTimeString().replaceAll(":", " ");
    document.title = now.toLocaleTimeString().replaceAll(":", " ").toLowerCase();
}, 1000)

///// Mouse Move /////
// document.addEventListener('mousemove', (e) => {
//     var images = document.querySelector(".image-dump");
//
//    
//     images.style.left = e.x + "px";
//     images.style.top = e.y + "px";
//
// })

