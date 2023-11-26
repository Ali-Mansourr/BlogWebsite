let transportation = document.getElementById("transportation");
let header = document.getElementById("header");
let dest1p = document.getElementById("dest1").getElementsByTagName("p")[0];
let dest1h2 = document.getElementById("dest1").getElementsByTagName("h2")[0];
let dest1img = document.getElementById("dest1").getElementsByTagName("img")[0];

let dest2p = document.getElementById("dest2").getElementsByTagName("p")[0];
let dest2h2 = document.getElementById("dest2").getElementsByTagName("h2")[0];
let dest2img = document.getElementById("dest2").getElementsByTagName("img")[0];

let dest3p = document.getElementById("dest3").getElementsByTagName("p")[0];
let dest3h2 = document.getElementById("dest3").getElementsByTagName("h2")[0];
let dest3img = document.getElementById("dest3").getElementsByTagName("img")[0];

let description = document.getElementsByClassName("description")[0].getElementsByTagName("p")[0];
let img1 = document.getElementsByClassName("main")[0].getElementsByTagName("img")[0];


export async function getData(s)
{
    const response = await fetch("http://127.0.0.1:5000/"+s);
    const jsonData = await response.json();
    header.innerHTML = jsonData["header"];
    description.innerHTML = jsonData["texts"][0];
    transportation.innerHTML = jsonData["texts"][1];
    img1.src = jsonData["images"][0];

    dest1h2.innerHTML = jsonData["destinations"][0];
    dest1p.innerHTML = jsonData["texts"][2];
    dest1img.src = jsonData["images"][1];

    dest2h2.innerHTML = jsonData["destinations"][1];
    dest2p.innerHTML = jsonData["texts"][3];
    dest2img.src = jsonData["images"][2];

    dest3h2.innerHTML = jsonData["destinations"][2];
    dest3p.innerHTML = jsonData["texts"][4];
    dest3img.src = jsonData["images"][3];
}