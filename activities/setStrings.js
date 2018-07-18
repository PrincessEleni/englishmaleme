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
        document.getElementById('activitiesTitle').textContent = myresponseText.activitiesTitle;
        document.getElementById('activitiesSubtitle').textContent = myresponseText.activitiesSubtitle;
        document.getElementById('activity1Title').textContent = myresponseText.activity1Title;
        document.getElementById('activity1Paragraph1').textContent = myresponseText.activity1Paragraph1;
        document.getElementById('activity1Paragraph2').textContent = myresponseText.activity1Paragraph2;
        document.getElementById('activity2Title').textContent = myresponseText.activity2Title;
        document.getElementById('activity2Paragraph').textContent = myresponseText.activity2Paragraph;

        document.getElementById('activity2Title').textContent = myresponseText.activity2Title;
        document.getElementById('activity2Paragraph').textContent = myresponseText.activity2Paragraph;
        document.getElementById('activity3Title').textContent = myresponseText.activity3Title;
        document.getElementById('activity3Paragraph').textContent = myresponseText.activity3Paragraph;
        document.getElementById('activity4Title').textContent = myresponseText.activity4Title;
        document.getElementById('activity4Paragraph').textContent = myresponseText.activity4Paragraph;
        document.getElementById('activity5Title').textContent = myresponseText.activity5Title;
        document.getElementById('activity5Paragraph').textContent = myresponseText.activity5Paragraph;
        document.getElementById('activity6Title').textContent = myresponseText.activity6Title;
        document.getElementById('activity6Paragraph').textContent = myresponseText.activity6Paragraph;
        document.getElementById('activity7Title').textContent = myresponseText.activity7Title;
        document.getElementById('activity7Paragraph').textContent = myresponseText.activity7Paragraph;
        document.getElementById('activity8Title').textContent = myresponseText.activity8Title;
        document.getElementById('activity8Paragraph').textContent = myresponseText.activity8Paragraph;
        
        document.getElementById('activityButton1').textContent = myresponseText.activityButton1;
        document.getElementById('activityButton2').textContent = myresponseText.activityButton2;
        document.getElementById('activityButton3').textContent = myresponseText.activityButton3;
        document.getElementById('activityButton4').textContent = myresponseText.activityButton4;
        document.getElementById('activityButton5').textContent = myresponseText.activityButton5;
        document.getElementById('activityButton6').textContent = myresponseText.activityButton6;
        document.getElementById('activityButton7').textContent = myresponseText.activityButton7;
        document.getElementById('activityButton8').textContent = myresponseText.activityButton8;
        document.getElementById('quoteTitle').textContent = myresponseText.homePart3Quote1;

        document.getElementById('activityHidden1Title').textContent = myresponseText.activityHidden1Title;
        document.getElementById('activityHidden1Paragraph1').textContent = myresponseText.activityHidden1Paragraph1;
        document.getElementById('activityHidden1Paragraph2').textContent = myresponseText.activityHidden1Paragraph2;
        document.getElementById('activityHidden1Paragraph3').textContent = myresponseText.activityHidden1Paragraph3;
        document.getElementById('activityHidden2Title').textContent = myresponseText.activityHidden2Title;
        document.getElementById('activityHidden2Paragraph1').textContent = myresponseText.activityHidden2Paragraph1;
        document.getElementById('activityHidden2Paragraph2').textContent = myresponseText.activityHidden2Paragraph2;
        document.getElementById('activityHidden2title1').textContent = myresponseText.activityHidden2title1;
        document.getElementById('activityHidden2title1paragraph1').textContent = myresponseText.activityHidden2title1paragraph1;
        document.getElementById('activityHidden2title2').textContent = myresponseText.activityHidden2title2;
        document.getElementById('activityHidden2title2paragraph1').textContent = myresponseText.activityHidden2title2paragraph1;
        document.getElementById('activityHidden3Title').textContent = myresponseText.activityHidden3Title;
        document.getElementById('activityHidden3Paragraph1').textContent = myresponseText.activityHidden3Paragraph1;
        document.getElementById('activityHidden3Paragraph2').textContent = myresponseText.activityHidden3Paragraph2;
        document.getElementById('activityHidden3Paragraph3').textContent = myresponseText.activityHidden3Paragraph3;
        document.getElementById('activityHidden4Title').textContent = myresponseText.activityHidden4Title;
        document.getElementById('activityHidden4Paragraph1').textContent = myresponseText.activityHidden4Paragraph1;
        document.getElementById('activityHidden4Paragraph2').textContent = myresponseText.activityHidden4Paragraph2;
        document.getElementById('activityHidden4Paragraph3').textContent = myresponseText.activityHidden4Paragraph3;
        document.getElementById('activityHidden4Paragraph4').textContent = myresponseText.activityHidden4Paragraph4;
        document.getElementById('activityHidden5Title').textContent = myresponseText.activityHidden5Title;
        document.getElementById('activityHidden5Paragraph1').textContent = myresponseText.activityHidden5Paragraph1;
        document.getElementById('activityHidden5Paragraph2').textContent = myresponseText.activityHidden5Paragraph2;
        document.getElementById('activityHidden6Title').textContent = myresponseText.activityHidden6Title;
        document.getElementById('activityHidden6Paragraph1').textContent = myresponseText.activityHidden6Paragraph1;
        document.getElementById('activityHidden6Paragraph2').textContent = myresponseText.activityHidden6Paragraph2;
        document.getElementById('activityHidden7Title').textContent = myresponseText.activityHidden7Title;
        document.getElementById('activityHidden7Paragraph1').textContent = myresponseText.activityHidden7Paragraph1;
        document.getElementById('activityHidden7Paragraph2').textContent = myresponseText.activityHidden7Paragraph2;
        document.getElementById('activityHidden8Title').textContent = myresponseText.activityHidden8Title;
        document.getElementById('activityHidden8Paragraph1').textContent = myresponseText.activityHidden8Paragraph1;
        document.getElementById('activityHidden8Paragraph2').textContent = myresponseText.activityHidden8Paragraph2;
        document.getElementById('activityHidden8Paragraph3').textContent = myresponseText.activityHidden8Paragraph3;

    }
}
xhttpText.send();