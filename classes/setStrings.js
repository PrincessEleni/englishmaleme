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
        document.getElementById('classTitle').textContent = myresponseText.classTitle;
        document.getElementById('classButton1').textContent = myresponseText.classButton;
        document.getElementById('classButton2').textContent = myresponseText.classButton;
        document.getElementById('classButton3').textContent = myresponseText.classButton;
        document.getElementById('classButton4').textContent = myresponseText.classButton;
        document.getElementById('classButton5').textContent = myresponseText.classButton;
        document.getElementById('classButton6').textContent = myresponseText.classButton;
        document.getElementById('classButton7').textContent = myresponseText.classButton;
        document.getElementById('classButton8').textContent = myresponseText.classButton;
        document.getElementById('classButton9').textContent = myresponseText.classButton;
        document.getElementById('classButton10').textContent = myresponseText.classButton;
        document.getElementById('classButton11').textContent = myresponseText.classButton;
        document.getElementById('classButton12').textContent = myresponseText.classButton;
        document.getElementById('classButton13').textContent = myresponseText.classButton;
        document.getElementById('classButton14').textContent = myresponseText.classButton;
        document.getElementById('classButton15').textContent = myresponseText.classButton;
        document.getElementById('classJuniorA').textContent = myresponseText.classJuniorA;
        document.getElementById('classJuniorB').textContent = myresponseText.classJuniorB;
        document.getElementById('classA').textContent = myresponseText.classA;
        document.getElementById('classB').textContent = myresponseText.classB;
        document.getElementById('classC').textContent = myresponseText.classC;
        document.getElementById('classD').textContent = myresponseText.classD;
        document.getElementById('classE').textContent = myresponseText.classE;
        document.getElementById('classLower').textContent = myresponseText.classLower;
        document.getElementById('classAdvance').textContent = myresponseText.classAdvance;
        document.getElementById('classProficiency').textContent = myresponseText.classProficiency;
        document.getElementById('classOnline').textContent = myresponseText.classOnline;
        document.getElementById('classPrivate').textContent = myresponseText.classPrivate;
        document.getElementById('classTOEFL').textContent = myresponseText.classTOEFL;
        document.getElementById('classIELTS').textContent = myresponseText.classIELTS;
        document.getElementById('classGRE').textContent = myresponseText.classGRE;




    }
}
xhttpText.send();