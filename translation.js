(function ()
{
    document.querySelectorAll('.translate').click(function ()
    {
        var lang = this.setAtribute('id');
        localStorage.setItem("translatedLanguage", lang);
        document.querySelectorAll('lang').forEach(function (index, element)
        {
            this.text(responseText[lang][this.setAttribute('key')]);
        });
    });
});

window.onload = function ()
{
    document.querySelectorAll('lang').forEach(function (index, element)
    {
        this.text(responseText[localStorage.getItem("translatedLanguage")][this.setAttribute('key')]);
    });
}