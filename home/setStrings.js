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
        document.getElementById('title').textContent = myresponseText.title;
        document.getElementById('startButton').textContent = myresponseText.startButton;
        document.getElementById('subtitle').textContent = myresponseText.subtitle;
        document.getElementById('homePart1Title').textContent = myresponseText.homePart1Title;
        document.getElementById('homePart1Paragraph1').textContent = myresponseText.homePart1Paragraph1;
        document.getElementById('homePart1Paragraph2').textContent = myresponseText.homePart1Paragraph2;
        document.getElementById('homePart1Paragraph3').textContent = myresponseText.homePart1Paragraph3;

        document.getElementById('homePart2Title').textContent = myresponseText.homePart2Title;
        document.getElementById('homePart2Subtitle1').textContent = myresponseText.homePart2Subtitle1;
        document.getElementById('homePart2Box1').textContent = myresponseText.homePart2Box1;
        document.getElementById('homePart2Subtitle2').textContent = myresponseText.homePart2Subtitle2;
        document.getElementById('homePart2Box2').textContent = myresponseText.homePart2Box2;
        document.getElementById('homePart2Subtitle3').textContent = myresponseText.homePart2Subtitle3;
        document.getElementById('homePart2Box3').textContent = myresponseText.homePart2Box3;
        document.getElementById('homePart2Subtitle4').textContent = myresponseText.homePart2Subtitle4;
        document.getElementById('homePart2Box4').textContent = myresponseText.homePart2Box4;
        document.getElementById('homePart2Subtitle5').textContent = myresponseText.homePart2Subtitle5;
        document.getElementById('homePart2Box5').textContent = myresponseText.homePart2Box5;
        document.getElementById('homePart2Subtitle6').textContent = myresponseText.homePart2Subtitle6;
        document.getElementById('homePart2Box6').textContent = myresponseText.homePart2Box6;


        document.getElementById('homePart3Quote1').textContent = myresponseText.homePart3Quote1;


    }
}
xhttpText.send();