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
        document.getElementById('activitiesTitle').innerHTML = myresponseText.activitiesTitle;
        document.getElementById('activitiesSubtitle').innerHTML = myresponseText.activitiesSubtitle;
        document.getElementById('activity1Title').innerHTML = myresponseText.activity1Title;
        document.getElementById('activity1Paragraph1').innerHTML = myresponseText.activity1Paragraph1;
        document.getElementById('activity1Paragraph2').innerHTML = myresponseText.activity1Paragraph2;
        document.getElementById('activity2Title').innerHTML = myresponseText.activity2Title;
        document.getElementById('activity2Paragraph').innerHTML = myresponseText.activity2Paragraph;

        document.getElementById('activity2Title').innerHTML = myresponseText.activity2Title;
        document.getElementById('activity2Paragraph').innerHTML = myresponseText.activity2Paragraph;
        document.getElementById('activity3Title').innerHTML = myresponseText.activity3Title;
        document.getElementById('activity3Paragraph').innerHTML = myresponseText.activity3Paragraph;
        document.getElementById('activity4Title').innerHTML = myresponseText.activity4Title;
        document.getElementById('activity4Paragraph').innerHTML = myresponseText.activity4Paragraph;
        document.getElementById('activity5Title').innerHTML = myresponseText.activity5Title;
        document.getElementById('activity5Paragraph').innerHTML = myresponseText.activity5Paragraph;
        document.getElementById('activity6Title').innerHTML = myresponseText.activity6Title;
        document.getElementById('activity6Paragraph').innerHTML = myresponseText.activity6Paragraph;
        document.getElementById('activity7Title').innerHTML = myresponseText.activity7Title;
        document.getElementById('activity7Paragraph').innerHTML = myresponseText.activity7Paragraph;
        document.getElementById('activity8Title').innerHTML = myresponseText.activity8Title;
        document.getElementById('activity8Paragraph').innerHTML = myresponseText.activity8Paragraph;
        
        document.getElementById('activityButton').innerHTML = myresponseText.activityButton;
        document.getElementById('quoteTitle').innerHTML = myresponseText.homePart3Quote1;

        document.getElementById('activityHidden1Title').innerHTML = myresponseText.activityHidden1Title;
        document.getElementById('activityHidden1Paragraph1').innerHTML = myresponseText.activityHidden1Paragraph1;
        document.getElementById('activityHidden1Paragraph2').innerHTML = myresponseText.activityHidden1Paragraph2;
        document.getElementById('activityHidden1Paragraph3').innerHTML = myresponseText.activityHidden1Paragraph3;
        document.getElementById('activityHidden2Title').innerHTML = myresponseText.activityHidden2Title;
        document.getElementById('activityHidden2Paragraph1').innerHTML = myresponseText.activityHidden2Paragraph1;
        document.getElementById('activityHidden2Paragraph2').innerHTML = myresponseText.activityHidden2Paragraph2;
        document.getElementById('activityHidden2title1').innerHTML = myresponseText.activityHidden2title1;
        document.getElementById('activityHidden2title1paragraph1').innerHTML = myresponseText.activityHidden2title1paragraph1;
        document.getElementById('activityHidden2title2').innerHTML = myresponseText.activityHidden2title2;
        document.getElementById('activityHidden2title2paragraph1').innerHTML = myresponseText.activityHidden2title2paragraph1;
        document.getElementById('activityHidden3Title').innerHTML = myresponseText.activityHidden3Title;
        document.getElementById('activityHidden3Paragraph1').innerHTML = myresponseText.activityHidden3Paragraph1;
        document.getElementById('activityHidden3Paragraph2').innerHTML = myresponseText.activityHidden3Paragraph2;
        document.getElementById('activityHidden3Paragraph3').innerHTML = myresponseText.activityHidden3Paragraph3;
        document.getElementById('activityHidden4Title').innerHTML = myresponseText.activityHidden4Title;
        document.getElementById('activityHidden4Paragraph1').innerHTML = myresponseText.activityHidden4Paragraph1;
        document.getElementById('activityHidden4Paragraph2').innerHTML = myresponseText.activityHidden4Paragraph2;
        document.getElementById('activityHidden4Paragraph3').innerHTML = myresponseText.activityHidden4Paragraph3;
        document.getElementById('activityHidden4Paragraph4').innerHTML = myresponseText.activityHidden4Paragraph4;
        document.getElementById('activityHidden5Title').innerHTML = myresponseText.activityHidden5Title;
        document.getElementById('activityHidden5Paragraph1').innerHTML = myresponseText.activityHidden5Paragraph1;
        document.getElementById('activityHidden5Paragraph2').innerHTML = myresponseText.activityHidden5Paragraph2;
        document.getElementById('activityHidden6Title').innerHTML = myresponseText.activityHidden6Title;
        document.getElementById('activityHidden6Paragraph1').innerHTML = myresponseText.activityHidden6Paragraph1;
        document.getElementById('activityHidden6Paragraph2').innerHTML = myresponseText.activityHidden6Paragraph2;
        document.getElementById('activityHidden7Title').innerHTML = myresponseText.activityHidden7Title;
        document.getElementById('activityHidden7Paragraph1').innerHTML = myresponseText.activityHidden7Paragraph1;
        document.getElementById('activityHidden7Paragraph2').innerHTML = myresponseText.activityHidden7Paragraph2;
        document.getElementById('activityHidden8Title').innerHTML = myresponseText.activityHidden8Title;
        document.getElementById('activityHidden8Paragraph1').innerHTML = myresponseText.activityHidden8Paragraph1;
        document.getElementById('activityHidden8Paragraph2').innerHTML = myresponseText.activityHidden8Paragraph2;
        document.getElementById('activityHidden8Paragraph3').innerHTML = myresponseText.activityHidden8Paragraph3;

    }
}
xhttpText.send();