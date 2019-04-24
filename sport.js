  
var url ='https://newsapi.org/v2/everything?q=' + 'sports' + '&apiKey=57d943c1eebb41a58db8c758539347e4'; 
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    
      
        document.getElementById("demos").innerHTML =myJson.articles[0].title;
        document.getElementById("demo3s").innerHTML =myJson.articles[0].author;
        document.getElementById("demo1s").innerHTML =myJson.articles[0].content;
        document.getElementById("demo2s").innerHTML =myJson.articles[0].description;
        let a =myJson.articles[0].urlToImage;
        document.getElementById('images').src = a;
        let b= myJson.articles[0].url;
      
  document.getElementById('btns').onclick = function clicks()
  {
    
    window.location=b;
  }
  document.getElementById("demot1s").innerHTML =myJson.articles[1].title;
  document.getElementById("demo3a1s").innerHTML =myJson.articles[1].author;
  document.getElementById("demo1c1s").innerHTML =myJson.articles[1].content;
  document.getElementById("demo2d1s").innerHTML =myJson.articles[1].description;
  let a1 =myJson.articles[1].urlToImage;
  document.getElementById('image1s').src = a1;
  let b1= myJson.articles[1].url;

document.getElementById('btn1s').onclick = function click1s()
{

window.location=b1;
}    
document.getElementById("demot2s").innerHTML =myJson.articles[2].title;
document.getElementById("demo3a2s").innerHTML =myJson.articles[2].author;
document.getElementById("demo1c2s").innerHTML =myJson.articles[2].content;
document.getElementById("demo2d2s").innerHTML =myJson.articles[2].description;
let a2 =myJson.articles[2].urlToImage;
document.getElementById('image2s').src = a2;
let b2= myJson.articles[2].url;

document.getElementById('btn2s').onclick = function click2s()
{

window.location=b2;
}    
document.getElementById("demot3s").innerHTML =myJson.articles[3].title;
document.getElementById("demo3a3s").innerHTML =myJson.articles[3].author;
document.getElementById("demo1c3s").innerHTML =myJson.articles[3].content;
document.getElementById("demo2d3s").innerHTML =myJson.articles[3].description;
let a3 =myJson.articles[3].urlToImage;
document.getElementById('image3s').src = a3;
let b3= myJson.articles[3].url;

document.getElementById('btn3s').onclick = function click3s()
{

window.location=b3;
}    
document.getElementById("demot4s").innerHTML =myJson.articles[4].title;
document.getElementById("demo3a4s").innerHTML =myJson.articles[4].author;
document.getElementById("demo1c4s").innerHTML =myJson.articles[4].content;
document.getElementById("demo2d4s").innerHTML =myJson.articles[4].description;
let a4 =myJson.articles[4].urlToImage;
document.getElementById('image4s').src = a4;
let b4= myJson.articles[4].url;

document.getElementById('btn4s').onclick = function click4s()
{

window.location=b4;
}    
document.getElementById("demot5s").innerHTML =myJson.articles[5].title;
document.getElementById("demo3a5s").innerHTML =myJson.articles[5].author;
document.getElementById("demo1c5s").innerHTML =myJson.articles[5].content;
document.getElementById("demo2d5s").innerHTML =myJson.articles[5].description;
let a5 =myJson.articles[5].urlToImage;
document.getElementById('image5s').src = a5;
let b5= myJson.articles[5].url;

document.getElementById('btn5s').onclick = function click5s()
{

window.location=b5;
}   
document.getElementById("demot6s").innerHTML =myJson.articles[6].title;
document.getElementById("demo3a6s").innerHTML =myJson.articles[6].author;
document.getElementById("demo1c6s").innerHTML =myJson.articles[6].content;
document.getElementById("demo2d6s").innerHTML =myJson.articles[6].description;
let a6 =myJson.articles[6].urlToImage;
document.getElementById('image6s').src = a6;
let b6= myJson.articles[6].url;

document.getElementById('btn6s').onclick = function click6s()
{

window.location=b6;
}     
document.getElementById("demot7s").innerHTML =myJson.articles[7].title;
document.getElementById("demo3a7s").innerHTML =myJson.articles[7].author;
document.getElementById("demo1c7s").innerHTML =myJson.articles[7].content;
document.getElementById("demo2d7s").innerHTML =myJson.articles[7].description;
let a7 =myJson.articles[7].urlToImage;
document.getElementById('image7s').src = a7;
let b7= myJson.articles[7].url;

document.getElementById('btn7s').onclick = function click7s()
{
window.location=b7;
} 
document.getElementById("demot8s").innerHTML = myJson.articles[8].title;
document.getElementById("demo3a8s").innerHTML =myJson.articles[8].author;
document.getElementById("demo1c8s").innerHTML =myJson.articles[8].content;
document.getElementById("demo2d8s").innerHTML =myJson.articles[8].description;
let a8 =myJson.articles[8].urlToImage;
document.getElementById('image8s').src = a8;
let b8= myJson.articles[8].url;
console.log(myJson.articles[8].title)

document.getElementById('btn8s').onclick = function click8s()
{

window.location=b8;
}         
document.getElementById("demot9s").innerHTML =myJson.articles[9].title;
document.getElementById("demo3a9s").innerHTML =myJson.articles[9].author;
document.getElementById("demo1c9s").innerHTML =myJson.articles[9].content;
document.getElementById("demo2d9s").innerHTML =myJson.articles[9].description;
let a9 =myJson.articles[9].urlToImage;
document.getElementById('image9s').src = a9;
let b9= myJson.articles[9].url;
console.log(myJson.articles[11].title);

document.getElementById('btn9s').onclick = function click9s()
{

window.location=b9;
} 

  });