

function plusSlides(n)
{
    showSlides(slideIndex += n);
}

function currentSlide(n)
{
    showSlides(slideIndex = n);
}

function showSlides(n)
{
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


        

    function plusEESlides(n) {
        showEESlides(slideIndexEE += n);
    }

    function currentEESlide(n) {
        showEESlides(slideIndexEE = n);
    }

    function showEESlides(n) {
        var i;
        var slides = document.getElementsByClassName("EESlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndexEE = 1}
        if (n < 1) {slideIndexEE = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndexEE-1].style.display = "block";
        dots[slideIndexEE-1].className += " active";
        captionText.innerHTML = dots[slideIndexEE-1].alt;
    }


        

    function plusEESlides2017(n) {
        showEESlides2017(slideIndexEE2017 += n);
    }

    function currentEESlide2017(n) {
        showEESlides2017(slideIndexEE2017 = n);
    }

    function showEESlides2017(n) {
        var i;
        var slides = document.getElementsByClassName("EESlides2017");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndexEE2017 = 1}
        if (n < 1) {slideIndexEE2017 = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndexEE2017-1].style.display = "block";
        dots[slideIndexEE2017-1].className += " active";
        captionText.innerHTML = dots[slideIndexEE2017-1].alt;
    }


    function plusHalloweenSlides(n)
    {
        showHalloweenSlides(slideIndexHalloween += n);
    }

    function currentHalloweenSlides(n)
    {
        showHalloweenSlides(slideIndexHalloween = n);
    }

    function showHalloweenSlides(n)
    {
        var i;
        var slides = document.getElementsByClassName("halloweenSlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndexHalloween = 1 }
        if (n < 1) { slideIndexHalloween = slides.length }
        for (i = 0; i < slides.length; i++)
        {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++)
        {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndexHalloween - 1].style.display = "block";
        dots[slideIndexHalloween - 1].className += " active";
        captionText.innerHTML = dots[slideIndexHalloween - 1].alt;
    }

    function plusChristmasSlides(n)
    {
        showChristmasSlides(slideIndexChristmas += n);
    }

    function currentChristmasSlides(n)
    {
        showChristmasSlides(slideIndexChristmas = n);
    }

    function showChristmasSlides(n)
    {
        var i;
        var slides = document.getElementsByClassName("christmasSlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndexChristmas = 1 }
        if (n < 1) { slideIndexChristmas = slides.length }
        for (i = 0; i < slides.length; i++)
        {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++)
        {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndexChristmas - 1].style.display = "block";
        dots[slideIndexChristmas - 1].className += " active";
        captionText.innerHTML = dots[slideIndexChristmas - 1].alt;
    }


    function plusTsiknopemptiSlides(n)
    {
        showTsiknopemptiSlides(slideIndexTsiknopempti += n);
    }

    function currentTsiknopemptiSlides(n)
    {
        showTsiknopemptiSlides(slideIndexTsiknopempti = n);
    }

    function showTsiknopemptiSlides(n)
    {
        var i;
        var slides = document.getElementsByClassName("tsiknopemptiSlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndexTsiknopempti = 1 }
        if (n < 1) { slideIndexTsiknopempti = slides.length }
        for (i = 0; i < slides.length; i++)
        {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++)
        {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndexTsiknopempti - 1].style.display = "block";
        dots[slideIndexTsiknopempti - 1].className += " active";
        captionText.innerHTML = dots[slideIndexTsiknopempti - 1].alt;
    }

    function plusMoviesSlides(n)
    {
        showMoviesSlides(slideIndexMovies += n);
    }

    function currentMovieSlides(n)
    {
        showMoviesSlides(slideIndexMovies = n);
    }

    function showMoviesSlides(n)
    {
        var i;
        var slides = document.getElementsByClassName("moviesSlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndexMovies = 1 }
        if (n < 1) { slideIndexMovies = slides.length }
        for (i = 0; i < slides.length; i++)
        {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++)
        {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndexMovies - 1].style.display = "block";
        dots[slideIndexMovies - 1].className += " active";
        captionText.innerHTML = dots[slideIndexMovies - 1].alt;
    }


    function plusInterviewSlides(n)
    {
        showInterviewSlides(slideIndexInterview += n);
    }

    function currentInterviewSlides(n)
    {
        showInterviewSlides(slideIndexInterview = n);
    }

    function showInterviewSlides(n)
    {
        var i;
        var slides = document.getElementsByClassName("interviewSlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndexInterview = 1 }
        if (n < 1) { slideIndexInterview = slides.length }
        for (i = 0; i < slides.length; i++)
        {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++)
        {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndexInterview - 1].style.display = "block";
        dots[slideIndexInterview - 1].className += " active";
        captionText.innerHTML = dots[slideIndexInterview - 1].alt;
    }

    function plusStarsSlides(n)
    {
        showStarsSlides(slideIndexStars += n);
    }

    function currentStarsSlides(n)
    {
        showStarsSlides(slideIndexStars = n);
    }

    function showStarsSlides(n)
    {
        var i;
        var slides = document.getElementsByClassName("starsSlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndexStars = 1 }
        if (n < 1) { slideIndexStars = slides.length }
        for (i = 0; i < slides.length; i++)
        {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++)
        {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndexStars - 1].style.display = "block";
        dots[slideIndexStars - 1].className += " active";
        captionText.innerHTML = dots[slideIndexStars - 1].alt;
    }