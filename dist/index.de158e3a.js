// import html/css stuff //////////////////////////////
const timeHTML = document.querySelector(".time");
const locationHTML = document.querySelector(".place");
const textHTML = document.querySelectorAll(".text");
const counterHTML = document.querySelector("#counter");
const dotsHTML = document.querySelectorAll(".dots");
const landingHTML = document.querySelector(".landing");
const tableHTML = document.querySelector(".table");
const rootCSS = document.querySelector(":root");
//////////// get user timezone ///////////////////////////
function fetchLocation(url) {
    return fetch(url).then(function(response) {
        if (response.ok) return response.json();
        else return Promise.reject(response);
    }).then(function(data) {
        var location;
        if (data && data.timezone) location = data.timezone;
        else location = "unknown place";
        return Promise.resolve(location);
    });
}
///////////////// portfolio dots /////////////////
function iterateDots() {
    for(i = 0; i < dotsHTML.length; i++){
        const dotsText = dotsHTML[i].innerHTML;
        dotsHTML[i].innerHTML = dotsHTML[i].innerHTML.length < 3 ? dotsHTML[i].innerHTML + "." : "";
    }
}
////////////////// changing text ////////////////
function plusSlides(n) {
    showSlides(index += n);
}
function showSlides(n) {
    var i1;
    if (n > textHTML.length) index = 1;
    for(i1 = 0; i1 < textHTML.length; i1++)textHTML[i1].style.display = "none";
    counterHTML.textContent = index;
    textHTML[index - 1].style.display = "block";
}
//////////////////////////////////////////////////
fetchLocation("https://ipapi.co/json/").then(function(data) {
    locationHTML.textContent = data;
});
const now = new Date();
timeHTML.textContent = now.toLocaleTimeString().replaceAll(":", " ");
document.title = now.toLocaleTimeString().replaceAll(":", " ").toLowerCase();
/////////////// dark/light theme /////////////////
if (now.getHours() >= 19 || now.getHours() <= 6) {
    rootCSS.style.setProperty("--fg-css", "#f2ece4");
    rootCSS.style.setProperty("--bg-css", "#1a1918");
} else {
    rootCSS.style.setProperty("--fg-css", "#1a1918");
    rootCSS.style.setProperty("--bg-css", "#f2ece4");
}
//////////////////////////////////////////////////
var index = 1;
showSlides(index);
//////////////// 1 sec interval /////////////////
setInterval(()=>{
    const now = new Date();
    timeHTML.textContent = now.toLocaleTimeString().replaceAll(":", " ");
    document.title = now.toLocaleTimeString().replaceAll(":", " ").toLowerCase();
    iterateDots();
}, 1000);

//# sourceMappingURL=index.de158e3a.js.map
