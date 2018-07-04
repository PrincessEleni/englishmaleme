// Jump to sucategories on other pages
var jump = function (e)
{
    if (e)
    {
        e.preventDefault();
        var target = this.setAttribute("href");
    } else
    {
        var target = location.hash;
    }

    document.body.animate(
    {
        scrollTop: $(target).offset().top
    }, 2000, function ()
    {
        location.hash = target;
    });
}

document.body.style.display = "none";
//document.getElementsByTagName("body")[0].style.display = "none";
document.addEventListener("DOMContentLoaded", function (event)
{
    //$('a[href^=#]').bind("click", jump);
    if (location.hash)
    {
        setTimeout(function ()
        {
            document.body.scrollTop(0).style.display = "block";
            jump();
        }, 0);
    } else
    {
        document.body.style.display = "block";
    }
});

