// My images from json
var xhttpImages = new XMLHttpRequest();
var urlImages = "homeImages.json";
xhttpImages.open("GET", urlImages, true);
var response;
xhttpImages.onreadystatechange = function ()
{
    if (this.readyState == 4 && this.status == 200)
    {
        responseImages = JSON.parse(xhttpImages.responseText);
        document.getElementById('english1').innerHTML = '<img src=' + responseImages.english1 + ' alt="BeginnerClass" style="width:100%">';
        document.getElementById('english2').innerHTML = '<img src=' + responseImages.english2 + ' alt="IntermmediateClass" style="width:100%">';
        document.getElementById('english3').innerHTML = '<img src=' + responseImages.english3 + ' alt="AdvancedClass" style="width:100%">';
        document.getElementById('english4').innerHTML = '<img src=' + responseImages.english4 + ' alt="UniversityEntryClass" style="width:100%">';
        document.getElementById('english5').innerHTML = '<img src=' + responseImages.english5 + ' alt="OnlineClass" style="width:100%">';
        document.getElementById('english6').innerHTML = '<img src=' + responseImages.english6 + ' alt="PrivateClass" style="width:100%">';
    }
}
xhttpImages.send();
