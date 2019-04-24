  
var url ='https://newsapi.org/v2/everything?q=' + 'technology' + '&apiKey=57d943c1eebb41a58db8c758539347e4';
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    
      
        document.getElementById("demof").innerHTML =myJson.articles[0].title;
        document.getElementById("demo3f").innerHTML =myJson.articles[0].author;
        document.getElementById("demo1f").innerHTML =myJson.articles[0].content;
        document.getElementById("demo2f").innerHTML =myJson.articles[0].description;
        let a =myJson.articles[0].urlToImage;
        document.getElementById('imagef').src = a;
        let b= myJson.articles[0].url;
      
  document.getElementById('btnf').onclick = function clickf()
  {
    
    window.location=b;
  }
  document.getElementById("demot1f").innerHTML =myJson.articles[1].title;
  document.getElementById("demo3a1f").innerHTML =myJson.articles[1].author;
  document.getElementById("demo1c1f").innerHTML =myJson.articles[1].content;
  document.getElementById("demo2d1f").innerHTML =myJson.articles[1].description;
  let a1 =myJson.articles[1].urlToImage;
  document.getElementById('image1f').src = a1;
  let b1= myJson.articles[1].url;

document.getElementById('btn1f').onclick = function click1f()
{

window.location=b1;
}    
document.getElementById("demot2f").innerHTML =myJson.articles[2].title;
document.getElementById("demo3a2f").innerHTML =myJson.articles[2].author;
document.getElementById("demo1c2f").innerHTML =myJson.articles[2].content;
document.getElementById("demo2d2f").innerHTML =myJson.articles[2].description;
let a2 =myJson.articles[2].urlToImage;
document.getElementById('image2f').src = a2;
let b2= myJson.articles[2].url;

document.getElementById('btn2f').onclick = function click2f()
{

window.location=b2;
}    
document.getElementById("demot3f").innerHTML =myJson.articles[3].title;
document.getElementById("demo3a3f").innerHTML =myJson.articles[3].author;
document.getElementById("demo1c3f").innerHTML =myJson.articles[3].content;
document.getElementById("demo2d3f").innerHTML =myJson.articles[3].description;
let a3 =myJson.articles[3].urlToImage;
document.getElementById('image3f').src = a3;
let b3= myJson.articles[3].url;

document.getElementById('btn3f').onclick = function click3f()
{

window.location=b3;
}    
document.getElementById("demot4f").innerHTML =myJson.articles[4].title;
document.getElementById("demo3a4f").innerHTML =myJson.articles[4].author;
document.getElementById("demo1c4f").innerHTML =myJson.articles[4].content;
document.getElementById("demo2d4f").innerHTML =myJson.articles[4].description;
let a4 =myJson.articles[4].urlToImage;
document.getElementById('image4f').src = a4;
let b4= myJson.articles[4].url;

document.getElementById('btn4f').onclick = function click4f()
{

window.location=b4;
}    
document.getElementById("demot5f").innerHTML =myJson.articles[5].title;
document.getElementById("demo3a5f").innerHTML =myJson.articles[5].author;
document.getElementById("demo1c5f").innerHTML =myJson.articles[5].content;
document.getElementById("demo2d5f").innerHTML =myJson.articles[5].description;
let a5 =myJson.articles[5].urlToImage;
document.getElementById('image5f').src = a5;
let b5= myJson.articles[5].url;

document.getElementById('btn5f').onclick = function click5f()
{

window.location=b5;
}   
document.getElementById("demot6f").innerHTML =myJson.articles[6].title;
document.getElementById("demo3a6f").innerHTML =myJson.articles[6].author;
document.getElementById("demo1c6f").innerHTML =myJson.articles[6].content;
document.getElementById("demo2d6f").innerHTML =myJson.articles[6].description;
let a6 =myJson.articles[6].urlToImage;
document.getElementById('image6f').src = a6;
let b6= myJson.articles[6].url;

document.getElementById('btn6f').onclick = function click6f()
{

window.location=b6;
}     
document.getElementById("demot7f").innerHTML =myJson.articles[7].title;
document.getElementById("demo3a7f").innerHTML =myJson.articles[7].author;
document.getElementById("demo1c7f").innerHTML =myJson.articles[7].content;
document.getElementById("demo2d7f").innerHTML =myJson.articles[7].description;
let a7 =myJson.articles[7].urlToImage;
document.getElementById('image7f').src = a7;
let b7= myJson.articles[7].url;

document.getElementById('btn7f').onclick = function click7f()
{
window.location=b7;
} 
document.getElementById("demot8f").innerHTML = myJson.articles[8].title;
document.getElementById("demo3a8f").innerHTML =myJson.articles[8].author;
document.getElementById("demo1c8f").innerHTML =myJson.articles[8].content;
document.getElementById("demo2d8f").innerHTML =myJson.articles[8].description;
let a8 =myJson.articles[8].urlToImage;
document.getElementById('image8f').src = a8;
let b8= myJson.articles[8].url;
console.log(myJson.articles[8].title)

document.getElementById('btn8f').onclick = function click8f()
{

window.location=b8;
}         
document.getElementById("demot9f").innerHTML =myJson.articles[9].title;
document.getElementById("demo3a9f").innerHTML =myJson.articles[9].author;
document.getElementById("demo1c9f").innerHTML =myJson.articles[9].content;
document.getElementById("demo2d9f").innerHTML =myJson.articles[9].description;
let a9 =myJson.articles[9].urlToImage;
document.getElementById('image9f').src = a9;
let b9= myJson.articles[9].url;
console.log(myJson.articles[11].title);

document.getElementById('btn9f').onclick = function click9f()
{

window.location=b9;
} 

  });