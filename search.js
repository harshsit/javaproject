var url;
function othername() {
    var input = document.getElementById("userInput").value;
   url= 'https://newsapi.org/v2/everything?q=' + input + '&apiKey=57d943c1eebb41a58db8c758539347e4';
    document.getElementById("demo").innerHTML = url;
    fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    document.getElementById("searcht").innerHTML = myJson.articles[0].title;
    document.getElementById("searcht1").innerHTML = myJson.articles[0].author;
    document.getElementById("searcht2").innerHTML = myJson.articles[0].content;
    document.getElementById("searcht3").innerHTML = myJson.articles[0].description;
    let a1t =myJson.articles[0].urlToImage;
    document.getElementById('imaget').src = a1t;
    let b1t= myJson.articles[0].url;
  
document.getElementById('btnt').onclick = function clickt()
{
  window.location=b1t;}
    document.getElementById("searchta").innerHTML = myJson.articles[1].title;
    document.getElementById("searcht1a").innerHTML = myJson.articles[1].author;
    document.getElementById("searcht2a").innerHTML = myJson.articles[1].content;
    document.getElementById("searcht3a").innerHTML = myJson.articles[1].description;
    let a2t =myJson.articles[1].urlToImage;
    document.getElementById('imaget1').src = a2t;
    let b2t= myJson.articles[1].url;
  
document.getElementById('btn1t').onclick = function click1t()
{
  window.location=b2t;
}
 console.log(myJson.articles[5].title);
  document.getElementById("searchtb").innerHTML = myJson.articles[2].title;
  document.getElementById("searcht1b").innerHTML = myJson.articles[2].author;
  document.getElementById("searcht2b").innerHTML = myJson.articles[2].content;
  document.getElementById("searcht3b").innerHTML = myJson.articles[2].description;
  let a3t =myJson.articles[2].urlToImage;
  document.getElementById('imaget2').src = a3t;
  let b3t= myJson.articles[2].url;

document.getElementById('btn2t').onclick = function click2t()
{
window.location=b3t;
}
console.log(myJson.articles[4].author) 
document.getElementById("searchtc").innerHTML = myJson.articles[3].title;
document.getElementById("searcht1c").innerHTML = myJson.articles[3].author;
document.getElementById("searcht2c").innerHTML = myJson.articles[3].content;
document.getElementById("searcht3c").innerHTML = myJson.articles[3].description;
let a4t =myJson.articles[3].urlToImage;
document.getElementById('imaget3').src = a4t;
let b4t= myJson.articles[3].url;

document.getElementById('btn3t').onclick = function click3t()
{
window.location=b4t;}
document.getElementById("searchtd").innerHTML = myJson.articles[4].title;
document.getElementById("searcht1d").innerHTML = myJson.articles[4].author;
document.getElementById("searcht2d").innerHTML = myJson.articles[4].content;
document.getElementById("searcht3d").innerHTML = myJson.articles[4].description;
let a5t =myJson.articles[4].urlToImage;
document.getElementById('imaget4').src = a5t;
let b5t= myJson.articles[4].url;

document.getElementById('btn4t').onclick = function click4t()
{
window.location=b5t;}
document.getElementById("searchte").innerHTML = myJson.articles[5].title;
document.getElementById("searcht1e").innerHTML = myJson.articles[5].author;
document.getElementById("searcht2e").innerHTML = myJson.articles[5].content;
document.getElementById("searcht3e").innerHTML = myJson.articles[5].description;
let a6t =myJson.articles[5].urlToImage;
document.getElementById('imaget5').src = a6t;
let b6t= myJson.articles[5].url;

document.getElementById('btn5t').onclick = function click5t()
{
window.location=b6t;}
document.getElementById("searchtf").innerHTML = myJson.articles[6].title;
document.getElementById("searcht1f").innerHTML = myJson.articles[6].author;
document.getElementById("searcht2f").innerHTML = myJson.articles[6].content;
document.getElementById("searcht3f").innerHTML = myJson.articles[6].description;
let a7t =myJson.articles[6].urlToImage;
document.getElementById('imaget6').src = a7t;
let b7t= myJson.articles[6].url;

document.getElementById('btn6t').onclick = function click6t()
{
window.location=b7t;}
document.getElementById("searchtg").innerHTML = myJson.articles[7].title;
document.getElementById("searcht1g").innerHTML = myJson.articles[7].author;
document.getElementById("searcht2g").innerHTML = myJson.articles[7].content;
document.getElementById("searcht3g").innerHTML = myJson.articles[7].description;
let a8t =myJson.articles[7].urlToImage;
document.getElementById('imaget7').src = a8t;
let b8t= myJson.articles[7].url;

document.getElementById('btn7t').onclick = function click7t()
{
window.location=b8t;}
document.getElementById("searchth").innerHTML = myJson.articles[8].title;
document.getElementById("searcht1h").innerHTML = myJson.articles[8].author;
document.getElementById("searcht2h").innerHTML = myJson.articles[8].content;
document.getElementById("searcht3h").innerHTML = myJson.articles[8].description;
let a9t =myJson.articles[8].urlToImage;
document.getElementById('imaget8').src = a9t;
let b9t= myJson.articles[8].url;

document.getElementById('btn8t').onclick = function click8t()
{
window.location=b9t;}
document.getElementById("searchti").innerHTML = myJson.articles[9].title;
document.getElementById("searcht1i").innerHTML = myJson.articles[9].author;
document.getElementById("searcht2i").innerHTML = myJson.articles[9].content;
document.getElementById("searcht3i").innerHTML = myJson.articles[9].description;
let a10t =myJson.articles[9].urlToImage;
document.getElementById('imaget9').src = a10t;
let b10t= myJson.articles[9].url;

document.getElementById('btn9t').onclick = function click9t()
{
window.location=b10st;}
  })};