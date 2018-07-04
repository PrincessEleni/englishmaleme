var xhttpText = new XMLHttpRequest();
var urlText = "../languages.json";
//access the object
xhttpText.open("GET", urlText, true);
var responseText;
xhttpText.onreadystatechange = function ()
{
     if (this.readyState == 4 && this.status == 200)
    { //we are ok to reseive data
        responseText = JSON.parse(xhttpText.responseText); //to make them objects to use them because they are strings

        myresponseText = responseText.en;
        document.getElementById('title').innerHTML = myresponseText.title;
        document.getElementById('startButton').innerHTML = myresponseText.startButton;
        document.getElementById('subtitle').innerHTML = myresponseText.subtitle;
        document.getElementById('title1').innerHTML = myresponseText.homePart1Title;
        document.getElementById('paragraph1').innerHTML = myresponseText.homePart1Paragraph1;
        document.getElementById('paragraph2').innerHTML = myresponseText.homePart1Paragraph2;
        document.getElementById('paragraph3').innerHTML = myresponseText.homePart1Paragraph3;

        document.getElementById('title2').innerHTML = myresponseText.homePart2Title;
        document.getElementById('subtitle1').innerHTML = myresponseText.homePart2Subtitle1;
        document.getElementById('box1').innerHTML = myresponseText.homePart2Box1;
        document.getElementById('subtitle2').innerHTML = myresponseText.homePart2Subtitle2;
        document.getElementById('box2').innerHTML = myresponseText.homePart2Box2;
        document.getElementById('subtitle3').innerHTML = myresponseText.homePart2Subtitle3;
        document.getElementById('box3').innerHTML = myresponseText.homePart2Box3;
        document.getElementById('subtitle4').innerHTML = myresponseText.homePart2Subtitle4;
        document.getElementById('box4').innerHTML = myresponseText.homePart2Box4;
        document.getElementById('subtitle5').innerHTML = myresponseText.homePart2Subtitle5;
        document.getElementById('box5').innerHTML = myresponseText.homePart2Box5;
        document.getElementById('subtitle6').innerHTML = myresponseText.homePart2Subtitle6;
        document.getElementById('box6').innerHTML = myresponseText.homePart2Box6;


        document.getElementById('quoteTitle').innerHTML = myresponseText.homePart3Quote1;


    }
}
xhttpText.send();