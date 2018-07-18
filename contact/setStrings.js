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
        document.getElementById('title').textContent = myresponseText.title;
        document.getElementById('paragraph').textContent = myresponseText.paragraph;
        document.getElementById('address').textContent = myresponseText.address;
        document.getElementById('email').textContent = myresponseText.email;
        document.getElementById('phone').textContent = myresponseText.phone;
        document.getElementById('skype').textContent = myresponseText.skype;
        document.getElementById('opening').textContent = myresponseText.opening;
        document.getElementById('hours1').textContent = myresponseText.hours1;
        document.getElementById('hours2').textContent = myresponseText.hours2;
        document.getElementById('hours3').textContent = myresponseText.hours3;

    }
}
xhttpText.send();