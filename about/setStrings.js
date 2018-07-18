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
        document.getElementById('aboutTitle').textContent = myresponseText.aboutTitle;
        document.getElementById('aboutSubtitle').textContent = myresponseText.aboutSubtitle;
        document.getElementById('aboutParagraph1').textContent = myresponseText.aboutParagraph1;
        document.getElementById('aboutTitle2').textContent = myresponseText.aboutTitle2;
        document.getElementById('aboutSubtitle2').textContent = myresponseText.aboutSubtitle2;
        document.getElementById('aboutParagraph2').textContent = myresponseText.aboutParagraph2;
        document.getElementById('aboutTitle3').textContent = myresponseText.aboutTitle3;
        document.getElementById('aboutSubtitle3').textContent = myresponseText.aboutSubtitle3;
        document.getElementById('aboutParagraph3').textContent = myresponseText.aboutParagraph3;
    }
}
xhttpText.send();