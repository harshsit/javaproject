var url = 'https://newsapi.org/v2/everything?q=' + 'science' + '&apiKey=57d943c1eebb41a58db8c758539347e4';
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    
      
        document.getElementById("democ").innerHTML =myJson.articles[0].title;
        document.getElementById("demo3c").innerHTML =myJson.articles[0].author;
        document.getElementById("demo1c").innerHTML =myJson.articles[0].content;
        document.getElementById("demo2c").innerHTML =myJson.articles[0].description;
        let a =myJson.articles[0].urlToImage;
        document.getElementById('imagec').src = a;
        let b= myJson.articles[0].url;
      
  document.getElementById('btnc').onclick = function clickc()
  {
    
    window.location=b;
  }
  document.getElementById("demot1c").innerHTML =myJson.articles[1].title;
  document.getElementById("demo3a1c").innerHTML =myJson.articles[1].author;
  document.getElementById("demo1c1c").innerHTML =myJson.articles[1].content;
  document.getElementById("demo2d1c").innerHTML =myJson.articles[1].description;
  let a1 =myJson.articles[1].urlToImage;
  document.getElementById('image1c').src = a1;
  let b1= myJson.articles[1].url;

document.getElementById('btn1c').onclick = function click1c()
{

window.location=b1;
}    
document.getElementById("demot2c").innerHTML =myJson.articles[2].title;
document.getElementById("demo3a2c").innerHTML =myJson.articles[2].author;
document.getElementById("demo1c2c").innerHTML =myJson.articles[2].content;
document.getElementById("demo2d2c").innerHTML =myJson.articles[2].description;
let a2 =myJson.articles[2].urlToImage;
document.getElementById('image2c').src = a2;
let b2= myJson.articles[2].url;

document.getElementById('btn2c').onclick = function click2c()
{

window.location=b2;
}    
document.getElementById("demot3c").innerHTML =myJson.articles[3].title;
document.getElementById("demo3a3c").innerHTML =myJson.articles[3].author;
document.getElementById("demo1c3c").innerHTML =myJson.articles[3].content;
document.getElementById("demo2d3c").innerHTML =myJson.articles[3].description;
let a3 =myJson.articles[3].urlToImage;
document.getElementById('image3c').src = a3;
let b3= myJson.articles[3].url;

document.getElementById('btn3c').onclick = function click3c()
{

window.location=b3;
}    
document.getElementById("demot4c").innerHTML =myJson.articles[4].title;
document.getElementById("demo3a4c").innerHTML =myJson.articles[4].author;
document.getElementById("demo1c4c").innerHTML =myJson.articles[4].content;
document.getElementById("demo2d4c").innerHTML =myJson.articles[4].description;
let a4 =myJson.articles[4].urlToImage;
document.getElementById('image4c').src = a4;
let b4= myJson.articles[4].url;

document.getElementById('btn4c').onclick = function click4c()
{

window.location=b4;
}    
document.getElementById("demot5c").innerHTML =myJson.articles[5].title;
document.getElementById("demo3a5c").innerHTML =myJson.articles[5].author;
document.getElementById("demo1c5c").innerHTML =myJson.articles[5].content;
document.getElementById("demo2d5c").innerHTML =myJson.articles[5].description;
let a5 =myJson.articles[5].urlToImage;
document.getElementById('image5c').src = a5;
let b5= myJson.articles[5].url;

document.getElementById('btn5c').onclick = function click5c()
{

window.location=b5;
}   
document.getElementById("demot6c").innerHTML =myJson.articles[6].title;
document.getElementById("demo3a6c").innerHTML =myJson.articles[6].author;
document.getElementById("demo1c6c").innerHTML =myJson.articles[6].content;
document.getElementById("demo2d6c").innerHTML =myJson.articles[6].description;
let a6 =myJson.articles[6].urlToImage;
document.getElementById('image6c').src = a6;
let b6= myJson.articles[6].url;

document.getElementById('btn6c').onclick = function click6c()
{

window.location=b6;
}     
document.getElementById("demot7c").innerHTML =myJson.articles[7].title;
document.getElementById("demo3a7c").innerHTML =myJson.articles[7].author;
document.getElementById("demo1c7c").innerHTML =myJson.articles[7].content;
document.getElementById("demo2d7c").innerHTML =myJson.articles[7].description;
let a7 =myJson.articles[7].urlToImage;
document.getElementById('image7c').src = a7;
let b7= myJson.articles[7].url;

document.getElementById('btn7c').onclick = function click7c()
{

window.location=b7;
} 
document.getElementById("demot8c").innerHTML =myJson.articles[8].title;
document.getElementById("demo3a8c").innerHTML =myJson.articles[8].author;
document.getElementById("demo1c8c").innerHTML =myJson.articles[8].content;
document.getElementById("demo2d8c").innerHTML =myJson.articles[8].description;
let a8 =myJson.articles[8].urlToImage;
document.getElementById('image8c').src = a8;
let b8= myJson.articles[8].url;

document.getElementById('btn8c').onclick = function click8c()
{

window.location=b8;
}         
document.getElementById("demot9c").innerHTML =myJson.articles[9].title;
document.getElementById("demo3a9c").innerHTML =myJson.articles[9].author;
document.getElementById("demo1c9c").innerHTML =myJson.articles[9].content;
document.getElementById("demo2d9c").innerHTML =myJson.articles[9].description;
let a9 =myJson.articles[9].urlToImage;
document.getElementById('image9c').src = a9;
let b9= myJson.articles[9].url;

document.getElementById('btn9c').onclick = function click9c()
{

window.location=b9;
} 

  });