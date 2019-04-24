  var x; 

function myFunction() {
   x = document.getElementById("myNumber").value;
  
}    
var url = 'https://newsapi.org/v2/top-headlines?country='+'in'+'&apiKey=57d943c1eebb41a58db8c758539347e4'; 
fetch(url)
  .then(function(response) {
    return response.json();
  })

  
  .then(function(myJson) {
    
      
        document.getElementById("demo").innerHTML =myJson.articles[0].title;
        document.getElementById("demo3").innerHTML =myJson.articles[0].author;
        document.getElementById("demo1").innerHTML =myJson.articles[0].content;
        document.getElementById("demo2").innerHTML =myJson.articles[0].description;
        let a =myJson.articles[0].urlToImage;
        document.getElementById('image').src = a;
        let b= myJson.articles[0].url;
      
  document.getElementById('btn').onclick = function click()
  {
    
    window.location=b;
  }
  document.getElementById("demot1").innerHTML =myJson.articles[1].title;
  document.getElementById("demo3a1").innerHTML =myJson.articles[1].author;
  document.getElementById("demo1c1").innerHTML =myJson.articles[1].content;
  document.getElementById("demo2d1").innerHTML =myJson.articles[1].description;
  let a1 =myJson.articles[1].urlToImage;
  document.getElementById('image1').src = a1;
  let b1= myJson.articles[1].url;

document.getElementById('btn1').onclick = function click1()
{

window.location=b1;
}    
document.getElementById("demot2").innerHTML =myJson.articles[2].title;
document.getElementById("demo3a2").innerHTML =myJson.articles[2].author;
document.getElementById("demo1c2").innerHTML =myJson.articles[2].content;
document.getElementById("demo2d2").innerHTML =myJson.articles[2].description;
let a2 =myJson.articles[2].urlToImage;
document.getElementById('image2').src = a2;
let b2= myJson.articles[2].url;

document.getElementById('btn2').onclick = function click2()
{

window.location=b2;
}    
document.getElementById("demot3").innerHTML =myJson.articles[3].title;
document.getElementById("demo3a3").innerHTML =myJson.articles[3].author;
document.getElementById("demo1c3").innerHTML =myJson.articles[3].content;
document.getElementById("demo2d3").innerHTML =myJson.articles[3].description;
let a3 =myJson.articles[3].urlToImage;
document.getElementById('image3').src = a3;
let b3= myJson.articles[3].url;

document.getElementById('btn3').onclick = function click3()
{

window.location=b3;
}    
document.getElementById("demot4").innerHTML =myJson.articles[4].title;
document.getElementById("demo3a4").innerHTML =myJson.articles[4].author;
document.getElementById("demo1c4").innerHTML =myJson.articles[4].content;
document.getElementById("demo2d4").innerHTML =myJson.articles[4].description;
let a4 =myJson.articles[4].urlToImage;
document.getElementById('image4').src = a4;
let b4= myJson.articles[4].url;

document.getElementById('btn4').onclick = function click4()
{

window.location=b4;
}    
document.getElementById("demot5").innerHTML =myJson.articles[5].title;
document.getElementById("demo3a5").innerHTML =myJson.articles[5].author;
document.getElementById("demo1c5").innerHTML =myJson.articles[5].content;
document.getElementById("demo2d5").innerHTML =myJson.articles[5].description;
let a5 =myJson.articles[5].urlToImage;
document.getElementById('image5').src = a5;
let b5= myJson.articles[5].url;

document.getElementById('btn5').onclick = function click5()
{

window.location=b5;
}   
document.getElementById("demot6").innerHTML =myJson.articles[6].title;
document.getElementById("demo3a6").innerHTML =myJson.articles[6].author;
document.getElementById("demo1c6").innerHTML =myJson.articles[6].content;
document.getElementById("demo2d6").innerHTML =myJson.articles[6].description;
let a6 =myJson.articles[6].urlToImage;
document.getElementById('image6').src = a6;
let b6= myJson.articles[6].url;

document.getElementById('btn6').onclick = function click6()
{

window.location=b6;
}     
document.getElementById("demot7").innerHTML =myJson.articles[7].title;
document.getElementById("demo3a7").innerHTML =myJson.articles[7].author;
document.getElementById("demo1c7").innerHTML =myJson.articles[7].content;
document.getElementById("demo2d7").innerHTML =myJson.articles[7].description;
let a7 =myJson.articles[7].urlToImage;
document.getElementById('image7').src = a7;
let b7= myJson.articles[7].url;

document.getElementById('btn7').onclick = function click7()
{

window.location=b7;
} 
document.getElementById("demot8").innerHTML =myJson.articles[8].title;
document.getElementById("demo3a8").innerHTML =myJson.articles[8].author;
document.getElementById("demo1c8").innerHTML =myJson.articles[8].content;
document.getElementById("demo2d8").innerHTML =myJson.articles[8].description;
let a8 =myJson.articles[8].urlToImage;
document.getElementById('image8').src = a8;
let b8= myJson.articles[8].url;

document.getElementById('btn8').onclick = function click8()
{

window.location=b8;
}         
document.getElementById("demot9").innerHTML =myJson.articles[9].title;
document.getElementById("demo3a9").innerHTML =myJson.articles[9].author;
document.getElementById("demo1c9").innerHTML =myJson.articles[9].content;
document.getElementById("demo2d9").innerHTML =myJson.articles[9].description;
let a9 =myJson.articles[9].urlToImage;
document.getElementById('image9').src = a9;
let b9= myJson.articles[9].url;

document.getElementById('btn9').onclick = function click9()
{

window.location=b9;
} 

  });