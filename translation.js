function myTranslateFunc(id)
{
    
    localStorage.setItem("translatedLanguage", id);
    document.querySelectorAll('.lang').forEach(function (index, element)
    {
        
        //this.text(responseText[lang][this.setAttribute('key')]);

    });
    
    //document.getElementById("title1").textContent = "newtext";
}

window.onload = function ()
{
    
    /*
    document.querySelectorAll('.lang').forEach(function (index, element)
    {
        this.text(responseText[localStorage.getItem("translatedLanguage")][this.setAttribute('key')]);
        console.log("function window load");
    });
    */
    

    var lang = localStorage.getItem('translatedLanguage') || navigator.language.slice(0, 2);//'en';

    //this.myresponseText = this.responseText.gr;
    //console.log(this.myresponseText);
    //console.log(this.responseText);
    console.log(this.responseText.en.title); // to metafrasmeno poy thelw !!!!!!!!
    
    //console.log(Object.keys(myresponseText));
    Object.keys(myresponseText).forEach(function (key)
    {
        //console.log(key, myresponseText[key]); // key textOfKey

    });
    document.querySelectorAll('.lang').forEach(function (index, element)
    {

        //document.getElementById(index.attributes.key.value).textContent = this.responseText.en.title;
        //console.log(document.getElementById(index.attributes.key.value).textContent); //!!!!!! to text poy thelw na metafrasw
        var elementtr = index.attributes.key.value.textContent;
        console.log(this.responseText.en['title']); // to metafrasmeno poy thelw !!!!!!!!

        //index.textContent = "";
        //console.log(this.responseText.en);
        //console.log(index.attributes.key.value);
        //this.innerText(responseText[lang][index.attributes.key.value]);
    });
        
            //$(this).text(arrLang[lang][$(this).attr("key")]);

}
