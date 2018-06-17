var xhttpText = new XMLHttpRequest();
var urlText = "contactLanguages.json";
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
        document.getElementById('paragraph').innerHTML = myresponseText.paragraph;
        document.getElementById('address').innerHTML = myresponseText.address;
        document.getElementById('email').innerHTML = myresponseText.email;
        document.getElementById('phone').innerHTML = myresponseText.phone;
        document.getElementById('skype').innerHTML = myresponseText.skype;
        document.getElementById('opening').innerHTML = myresponseText.opening;
        document.getElementById('hours1').innerHTML = myresponseText.hours1;
        document.getElementById('hours2').innerHTML = myresponseText.hours2;
        document.getElementById('hours3').innerHTML = myresponseText.hours3;

    }
}
xhttpText.send();