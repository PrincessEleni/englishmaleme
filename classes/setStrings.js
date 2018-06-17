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
        document.getElementById('classTitle').innerHTML = myresponseText.classTitle;
        document.getElementById('classButton1').innerHTML = myresponseText.classButton;
        document.getElementById('classButton2').innerHTML = myresponseText.classButton;
        document.getElementById('classButton3').innerHTML = myresponseText.classButton;
        document.getElementById('classButton4').innerHTML = myresponseText.classButton;
        document.getElementById('classButton5').innerHTML = myresponseText.classButton;
        document.getElementById('classButton6').innerHTML = myresponseText.classButton;
        document.getElementById('classButton7').innerHTML = myresponseText.classButton;
        document.getElementById('classButton8').innerHTML = myresponseText.classButton;
        document.getElementById('classButton9').innerHTML = myresponseText.classButton;
        document.getElementById('classButton10').innerHTML = myresponseText.classButton;
        document.getElementById('classButton11').innerHTML = myresponseText.classButton;
        document.getElementById('classButton12').innerHTML = myresponseText.classButton;
        document.getElementById('classButton13').innerHTML = myresponseText.classButton;
        document.getElementById('classButton14').innerHTML = myresponseText.classButton;
        document.getElementById('classButton15').innerHTML = myresponseText.classButton;
        document.getElementById('classJuniorA').innerHTML = myresponseText.classJuniorA;
        document.getElementById('classJuniorB').innerHTML = myresponseText.classJuniorB;
        document.getElementById('classA').innerHTML = myresponseText.classA;
        document.getElementById('classB').innerHTML = myresponseText.classB;
        document.getElementById('classC').innerHTML = myresponseText.classC;
        document.getElementById('classD').innerHTML = myresponseText.classD;
        document.getElementById('classE').innerHTML = myresponseText.classE;
        document.getElementById('classLower').innerHTML = myresponseText.classLower;
        document.getElementById('classAdvance').innerHTML = myresponseText.classAdvance;
        document.getElementById('classProficiency').innerHTML = myresponseText.classProficiency;
        document.getElementById('classOnline').innerHTML = myresponseText.classOnline;
        document.getElementById('classPrivate').innerHTML = myresponseText.classPrivate;
        document.getElementById('classTOEFL').innerHTML = myresponseText.classTOEFL;
        document.getElementById('classIELTS').innerHTML = myresponseText.classIELTS;
        document.getElementById('classGRE').innerHTML = myresponseText.classGRE;




    }
}
xhttpText.send();