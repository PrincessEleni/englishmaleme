// My images from json
var xhttpImages = new XMLHttpRequest();
var urlImages = "classesImages.json";
xhttpImages.open("GET", urlImages, true);
var response;
xhttpImages.onreadystatechange = function ()
{
    if (this.readyState == 4 && this.status == 200)
    {
        responseImages = JSON.parse(xhttpImages.responseText);
        document.getElementById('classImageJA').innerHTML = '<img src=' + responseImages.classImageJA + ' style="width:100%">';
        document.getElementById('classImageJB').innerHTML = '<img src=' + responseImages.classImageJB + ' style="width:100%">';
        document.getElementById('classImageA').innerHTML = '<img src=' + responseImages.classImageA + ' style="width:100%">';
        document.getElementById('classImageB').innerHTML = '<img src=' + responseImages.classImageB + ' style="width:100%">';
        document.getElementById('classImageC').innerHTML = '<img src=' + responseImages.classImageC + ' style="width:100%">';
        document.getElementById('classImageD').innerHTML = '<img src=' + responseImages.classImageD + ' style="width:100%">';
        document.getElementById('classImageE').innerHTML = '<img src=' + responseImages.classImageE + ' style="width:100%">';
        document.getElementById('classImageLower').innerHTML = '<img src=' + responseImages.classImageLower + ' style="width:100%">';
        document.getElementById('classImageAdvance').innerHTML = '<img src=' + responseImages.classImageAdvance + ' style="width:100%">';
        document.getElementById('classImageProficiency').innerHTML = '<img src=' + responseImages.classImageProficiency + ' style="width:100%">';
        document.getElementById('classImageGre').innerHTML = '<img src=' + responseImages.classImageGre + ' style="width:100%">';
        document.getElementById('classImageToefl').innerHTML = '<img src=' + responseImages.classImageToefl + ' style="width:100%">';
        document.getElementById('classImageIelts').innerHTML = '<img src=' + responseImages.classImageIelts + ' style="width:100%">';
        document.getElementById('classImageOnline').innerHTML = '<img src=' + responseImages.classImageOnline + ' style="width:100%">';
        document.getElementById('classImagePrivate').innerHTML = '<img src=' + responseImages.classImagePrivate + ' style="width:100%">';
    }
}
xhttpImages.send();
