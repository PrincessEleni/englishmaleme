$(function ()
{
    console.log("translate");
    $('.translate').click(function ()
    {
        var lang = $(this).attr('id');
        localStorage.setItem("translatedLanguage", lang);
        $('.lang').each(function (index, element)
        {
            $(this).text(responseText[lang][$(this).attr('key')]);
        });
    });
});

window.onload = function ()
{
    $('.lang').each(function (index, element)
    {
        $(this).text(responseText[localStorage.getItem("translatedLanguage")][$(this).attr('key')]);
    });
}