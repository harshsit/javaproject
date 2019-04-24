var url = 'https://newsapi.org/v2/everything?q=health&from=2019-03-07&sortBy=publishedAt&apiKey=57d943c1eebb41a58db8c758539347e4';
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    
      
        document.getElementById("demoh").innerHTML =myJson.articles[0].title;
        document.getElementById("demo3h").innerHTML =myJson.articles[0].author;
        document.getElementById("demo1h").innerHTML =myJson.articles[0].content;
        document.getElementById("demo2h").innerHTML =myJson.articles[0].description;
        let a =myJson.articles[0].urlToImage;
        document.getElementById('imageh').src = a;
        let b= myJson.articles[0].url;
      
  document.getElementById('btnh').onclick = function clickh()
  {
    
    window.location=b;
  }
  document.getElementById("demot1h").innerHTML =myJson.articles[1].title;
  document.getElementById("demo3a1h").innerHTML =myJson.articles[1].author;
  document.getElementById("demo1c1h").innerHTML =myJson.articles[1].content;
  document.getElementById("demo2d1h").innerHTML =myJson.articles[1].description;
  let a1 =myJson.articles[1].urlToImage;
  document.getElementById('image1h').src = a1;
  let b1= myJson.articles[1].url;

document.getElementById('btn1h').onclick = function click1h()
{

window.location=b1;
}    
document.getElementById("demot2h").innerHTML =myJson.articles[2].title;
document.getElementById("demo3a2h").innerHTML =myJson.articles[2].author;
document.getElementById("demo1c2h").innerHTML =myJson.articles[2].content;
document.getElementById("demo2d2h").innerHTML =myJson.articles[2].description;
let a2 =myJson.articles[2].urlToImage;
document.getElementById('image2h').src = a2;
let b2= myJson.articles[2].url;

document.getElementById('btn2h').onclick = function click2h()
{

window.location=b2;
}    
document.getElementById("demot3h").innerHTML =myJson.articles[3].title;
document.getElementById("demo3a3h").innerHTML =myJson.articles[3].author;
document.getElementById("demo1c3h").innerHTML =myJson.articles[3].content;
document.getElementById("demo2d3h").innerHTML =myJson.articles[3].description;
let a3 =myJson.articles[3].urlToImage;
document.getElementById('image3h').src = a3;
let b3= myJson.articles[3].url;

document.getElementById('btn3h').onclick = function click3h()
{

window.location=b3;
}    
document.getElementById("demot4h").innerHTML =myJson.articles[4].title;
document.getElementById("demo3a4h").innerHTML =myJson.articles[4].author;
document.getElementById("demo1c4h").innerHTML =myJson.articles[4].content;
document.getElementById("demo2d4h").innerHTML =myJson.articles[4].description;
let a4 =myJson.articles[4].urlToImage;
document.getElementById('image4h').src = a4;
let b4= myJson.articles[4].url;

document.getElementById('btn4h').onclick = function click4h()
{

window.location=b4;
}    
document.getElementById("demot5h").innerHTML =myJson.articles[5].title;
document.getElementById("demo3a5h").innerHTML =myJson.articles[5].author;
document.getElementById("demo2d5h").innerHTML =myJson.articles[5].content;
document.getElementById("demo1c5h").innerHTML =myJson.articles[5].description;
let a5 =myJson.articles[5].urlToImage;
document.getElementById('imageh').src = a5;
let b5= myJson.articles[5].url;

document.getElementById('btn5h').onclick = function click5h()
{

window.location=b5;
}   
document.getElementById("demot6h").innerHTML =myJson.articles[6].title;
document.getElementById("demo3a6h").innerHTML =myJson.articles[6].author;
document.getElementById("demo1c6h").innerHTML =myJson.articles[6].content;
document.getElementById("demo2d6h").innerHTML =myJson.articles[6].description;
let a6 =myJson.articles[6].urlToImage;
console.log(myJson.articles[6].title);
document.getElementById('image6h').src = a6;
let b6= myJson.articles[6].url;

document.getElementById('btn6h').onclick = function click6h()
{

window.location=b6;
}     
document.getElementById("demot7h").innerHTML =myJson.articles[7].title;
document.getElementById("demo3a7h").innerHTML =myJson.articles[7].author;
document.getElementById("demo1c7h").innerHTML =myJson.articles[7].content;
document.getElementById("demo2d7h").innerHTML =myJson.articles[7].description;
let a7 =myJson.articles[7].urlToImage;
document.getElementById('image7h').src = a7;
let b7= myJson.articles[7].url;

document.getElementById('btn7h').onclick = function click7h()
{

window.location=b7;
} 
document.getElementById("demot8h").innerHTML =myJson.articles[8].title;
document.getElementById("demo3a8h").innerHTML =myJson.articles[8].author;
document.getElementById("demo1c8h").innerHTML =myJson.articles[8].content;
document.getElementById("demo2d8h").innerHTML =myJson.articles[8].description;
let a8 =myJson.articles[8].urlToImage;
document.getElementById('image8h').src = a8;
let b8= myJson.articles[8].url;

document.getElementById('btn8h').onclick = function click8h()
{

window.location=b8;
}         
document.getElementById("demot9h").innerHTML =myJson.articles[9].title;
document.getElementById("demo3a9h").innerHTML =myJson.articles[9].author;
document.getElementById("demo1c9h").innerHTML =myJson.articles[9].content;
document.getElementById("demo2d9h").innerHTML =myJson.articles[9].description;
let a9 =myJson.articles[9].urlToImage;
document.getElementById('image9h').src = a9;
let b9= myJson.articles[9].url;

document.getElementById('btn9h').onclick = function click9h()
{

window.location=b9;
} 

  });