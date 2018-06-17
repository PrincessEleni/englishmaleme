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
        document.getElementById('aboutTitle').innerHTML = myresponseText.aboutTitle;
        document.getElementById('aboutSubtitle').innerHTML = myresponseText.aboutSubtitle;
        document.getElementById('aboutParagraph1').innerHTML = myresponseText.aboutParagraph1;
        document.getElementById('aboutTitle2').innerHTML = myresponseText.aboutTitle2;
        document.getElementById('aboutSubtitle2').innerHTML = myresponseText.aboutSubtitle2;
        document.getElementById('aboutParagraph2').innerHTML = myresponseText.aboutParagraph2;
        document.getElementById('aboutTitle3').innerHTML = myresponseText.aboutTitle3;
        document.getElementById('aboutSubtitle3').innerHTML = myresponseText.aboutSubtitle3;
        document.getElementById('aboutParagraph3').innerHTML = myresponseText.aboutParagraph3;
    }
}
xhttpText.send();