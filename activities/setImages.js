// My images from json
var xhttpImages = new XMLHttpRequest();
var urlImages = "activitiesImages.json";
xhttpImages.open("GET", urlImages, true);
var response;
xhttpImages.onreadystatechange = function ()
{
    if (this.readyState == 4 && this.status == 200)
    {
        responseImages = JSON.parse(xhttpImages.responseText);
        document.getElementById('activity1').innerHTML = '<img src=' + responseImages.activity1 + ' alt="Treasure Hunt" style="width:100%">';
        document.getElementById('activity2').innerHTML = '<img src=' + responseImages.activity2 + ' alt="Easter Egg Hunt" style="width:100%">';
        document.getElementById('activity3').innerHTML = '<img src=' + responseImages.activity3 + ' alt="Halloween" style="width:100%">';
        document.getElementById('activity4').innerHTML = '<img src=' + responseImages.activity4 + ' alt="Christmas" style="width:100%">';
        document.getElementById('activity5').innerHTML = '<img src=' + responseImages.activity5 + ' alt="Tsiknopempti" style="width:100%">';
        document.getElementById('activity6').innerHTML = '<img src=' + responseImages.activity6 + ' alt="Movie Night" style="width:100%">';
        document.getElementById('activity7').innerHTML = '<img src=' + responseImages.activity7 + ' alt="Interviews" style="width:100%">';
        document.getElementById('activity8').innerHTML = '<img src=' + responseImages.activity8 + ' alt="Star Comptetition" style="width:100%">';

        document.getElementById('treasureHunt1').innerHTML = '<img src=' + responseImages.treasureHunt1 + ' style="width:100%">';
        document.getElementById('treasureHunt2').innerHTML = '<img src=' + responseImages.treasureHunt2 + ' style="width:100%">';
        document.getElementById('treasureHunt3').innerHTML = '<img src=' + responseImages.treasureHunt3 + ' style="width:100%">';
        document.getElementById('treasureHunt4').innerHTML = '<img src=' + responseImages.treasureHunt4 + ' style="width:100%">';
        document.getElementById('treasureHunt5').innerHTML = '<img src=' + responseImages.treasureHunt5 + ' style="width:100%">';
        document.getElementById('treasureHunt6').innerHTML = '<img src=' + responseImages.treasureHunt6 + ' style="width:100%">';
        document.getElementById('treasureHunt1thumnbail').innerHTML = '<img src=' + responseImages.treasureHunt1thumnbail + ' class="demo cursor" style="width:100%" onclick="currentSlide(1)" alt="Treasure Hunt 1">';
        document.getElementById('treasureHunt2thumnbail').innerHTML = '<img src=' + responseImages.treasureHunt2thumnbail + ' class="demo cursor" style="width:100%" onclick="currentSlide(2)" alt="Treasure Hunt 2">';
        document.getElementById('treasureHunt3thumnbail').innerHTML = '<img src=' + responseImages.treasureHunt3thumnbail + ' class="demo cursor" style="width:100%" onclick="currentSlide(3)" alt="Treasure Hunt 3">';
        document.getElementById('treasureHunt4thumnbail').innerHTML = '<img src=' + responseImages.treasureHunt4thumnbail + ' class="demo cursor" style="width:100%" onclick="currentSlide(4)" alt="Treasure Hunt 4">';
        document.getElementById('treasureHunt5thumnbail').innerHTML = '<img src=' + responseImages.treasureHunt5thumnbail + ' class="demo cursor" style="width:100%" onclick="currentSlide(5)" alt="Treasure Hunt 5">';
        document.getElementById('treasureHunt6thumnbail').innerHTML = '<img src=' + responseImages.treasureHunt6thumnbail + ' class="demo cursor" style="width:100%" onclick="currentSlide(6)" alt="Treasure Hunt 6">';

        document.getElementById('easterEggHunt1').innerHTML = '<img src=' + responseImages.easterEggHunt1 + ' style="width:100%">';
        document.getElementById('easterEggHunt2').innerHTML = '<img src=' + responseImages.easterEggHunt2 + ' style="width:100%">';
        document.getElementById('easterEggHunt3').innerHTML = '<img src=' + responseImages.easterEggHunt3 + ' style="width:100%">';
        document.getElementById('easterEggHunt4').innerHTML = '<img src=' + responseImages.easterEggHunt4 + ' style="width:100%">';
        document.getElementById('easterEggHunt5').innerHTML = '<img src=' + responseImages.easterEggHunt5 + ' style="width:100%">';
        document.getElementById('easterEggHunt6').innerHTML = '<img src=' + responseImages.easterEggHunt6 + ' style="width:100%">';
        document.getElementById('easterEggHunt7').innerHTML = '<img src=' + responseImages.easterEggHunt7 + ' style="width:100%">';
        document.getElementById('easterEggHunt8').innerHTML = '<img src=' + responseImages.easterEggHunt8 + ' style="width:100%">';
        document.getElementById('easterEggHunt1thumnbail').innerHTML = '<img src=' + responseImages.easterEggHunt1thumnbail + ' class="demo cursor" style="width:100%" onclick="currentEESlide(1)" alt="Easter Egg Hunt 1">';
        document.getElementById('easterEggHunt2thumnbail').innerHTML = '<img src=' + responseImages.easterEggHunt2thumnbail + ' class="demo cursor" style="width:100%" onclick="currentEESlide(2)" alt="Easter Egg Hunt 2">';
        document.getElementById('easterEggHunt3thumnbail').innerHTML = '<img src=' + responseImages.easterEggHunt3thumnbail + ' class="demo cursor" style="width:100%" onclick="currentEESlide(3)" alt="Easter Egg Hunt 3">';
        document.getElementById('easterEggHunt4thumnbail').innerHTML = '<img src=' + responseImages.easterEggHunt4thumnbail + ' class="demo cursor" style="width:100%" onclick="currentEESlide(4)" alt="Easter Egg Hunt 4">';
        document.getElementById('easterEggHunt5thumnbail').innerHTML = '<img src=' + responseImages.easterEggHunt5thumnbail + ' class="demo cursor" style="width:100%" onclick="currentEESlide(5)" alt="Easter Egg Hunt 5">';
        document.getElementById('easterEggHunt6thumnbail').innerHTML = '<img src=' + responseImages.easterEggHunt6thumnbail + ' class="demo cursor" style="width:100%" onclick="currentEESlide(6)" alt="Easter Egg Hunt 6">';
        document.getElementById('easterEggHunt7thumnbail').innerHTML = '<img src=' + responseImages.easterEggHunt7thumnbail + ' class="demo cursor" style="width:100%" onclick="currentEESlide(7)" alt="Easter Egg Hunt 7">';
        document.getElementById('easterEggHunt8thumnbail').innerHTML = '<img src=' + responseImages.easterEggHunt8thumnbail + ' class="demo cursor" style="width:100%" onclick="currentEESlide(8)" alt="Easter Egg Hunt 8">';

        document.getElementById('easterEggHunt1_2017').innerHTML = '<img src=' + responseImages.easterEggHunt1_2017 + ' style="width:100%">';
        document.getElementById('easterEggHunt2_2017').innerHTML = '<img src=' + responseImages.easterEggHunt2_2017 + ' style="width:100%">';
        document.getElementById('easterEggHunt3_2017').innerHTML = '<img src=' + responseImages.easterEggHunt3_2017 + ' style="width:100%">';
        document.getElementById('easterEggHunt4_2017').innerHTML = '<img src=' + responseImages.easterEggHunt4_2017 + ' style="width:100%">';
        document.getElementById('easterEggHunt5_2017').innerHTML = '<img src=' + responseImages.easterEggHunt5_2017 + ' style="width:100%">';
        document.getElementById('easterEggHunt6_2017').innerHTML = '<img src=' + responseImages.easterEggHunt6_2017 + ' style="width:100%">';
        document.getElementById('easterEggHunt7_2017').innerHTML = '<img src=' + responseImages.easterEggHunt7_2017 + ' style="width:100%">';
        document.getElementById('easterEggHunt8_2017').innerHTML = '<img src=' + responseImages.easterEggHunt8_2017 + ' style="width:100%">';
        document.getElementById('easterEggHunt9_2017').innerHTML = '<img src=' + responseImages.easterEggHunt9_2017 + ' style="width:100%">';
        document.getElementById('easterEggHunt10_2017').innerHTML = '<img src=' + responseImages.easterEggHunt10_2017 + ' style="width:100%">';
        document.getElementById('easterEggHunt11_2017').innerHTML = '<img src=' + responseImages.easterEggHunt11_2017 + ' style="width:100%">';
        document.getElementById('easterEggHunt12_2017').innerHTML = '<img src=' + responseImages.easterEggHunt12_2017 + ' style="width:100%">';
        document.getElementById('easterEggHunt13_2017').innerHTML = '<img src=' + responseImages.easterEggHunt13_2017 + ' style="width:100%">';
        document.getElementById('easterEggHunt14_2017').innerHTML = '<img src=' + responseImages.easterEggHunt14_2017 + ' style="width:100%">';
        document.getElementById('easterEggHunt1thumnbail_2017').innerHTML = '<img src=' + responseImages.easterEggHunt1thumnbail_2017 + ' class="demo cursor" style="width:100%" onclick="currentEESlide2017(1)" alt="Easter Egg Hunt 1 2017">';
        document.getElementById('easterEggHunt2thumnbail_2017').innerHTML = '<img src=' + responseImages.easterEggHunt2thumnbail_2017 + ' class="demo cursor" style="width:100%" onclick="currentEESlide2017(2)" alt="Easter Egg Hunt 2 2017">';
        document.getElementById('easterEggHunt3thumnbail_2017').innerHTML = '<img src=' + responseImages.easterEggHunt3thumnbail_2017 + ' class="demo cursor" style="width:100%" onclick="currentEESlide2017(3)" alt="Easter Egg Hunt 3 2017">';
        document.getElementById('easterEggHunt4thumnbail_2017').innerHTML = '<img src=' + responseImages.easterEggHunt4thumnbail_2017 + ' class="demo cursor" style="width:100%" onclick="currentEESlide2017(4)" alt="Easter Egg Hunt 4 2017">';
        document.getElementById('easterEggHunt5thumnbail_2017').innerHTML = '<img src=' + responseImages.easterEggHunt5thumnbail_2017 + ' class="demo cursor" style="width:100%" onclick="currentEESlide2017(5)" alt="Easter Egg Hunt 5 2017">';
        document.getElementById('easterEggHunt6thumnbail_2017').innerHTML = '<img src=' + responseImages.easterEggHunt6thumnbail_2017 + ' class="demo cursor" style="width:100%" onclick="currentEESlide2017(6)" alt="Easter Egg Hunt 6 2017">';
        document.getElementById('easterEggHunt7thumnbail_2017').innerHTML = '<img src=' + responseImages.easterEggHunt7thumnbail_2017 + ' class="demo cursor" style="width:100%" onclick="currentEESlide2017(7)" alt="Easter Egg Hunt 7 2017">';
        document.getElementById('easterEggHunt8thumnbail_2017').innerHTML = '<img src=' + responseImages.easterEggHunt8thumnbail_2017 + ' class="demo cursor" style="width:100%" onclick="currentEESlide2017(8)" alt="Easter Egg Hunt 8 2017">';
        document.getElementById('easterEggHunt9thumnbail_2017').innerHTML = '<img src=' + responseImages.easterEggHunt9thumnbail_2017 + ' class="demo cursor" style="width:100%" onclick="currentEESlide2017(9)" alt="Easter Egg Hunt 9 2017">';
        document.getElementById('easterEggHunt10thumnbail_2017').innerHTML = '<img src=' + responseImages.easterEggHunt10thumnbail_2017 + ' class="demo cursor" style="width:100%" onclick="currentEESlide2017(10)" alt="Easter Egg Hunt 10 2017">';
        document.getElementById('easterEggHunt11thumnbail_2017').innerHTML = '<img src=' + responseImages.easterEggHunt11thumnbail_2017 + ' class="demo cursor" style="width:100%" onclick="currentEESlide2017(11)" alt="Easter Egg Hunt 11 2017">';
        document.getElementById('easterEggHunt12thumnbail_2017').innerHTML = '<img src=' + responseImages.easterEggHunt12thumnbail_2017 + ' class="demo cursor" style="width:100%" onclick="currentEESlide2017(12)" alt="Easter Egg Hunt 12 2017">';
        document.getElementById('easterEggHunt13thumnbail_2017').innerHTML = '<img src=' + responseImages.easterEggHunt13thumnbail_2017 + ' class="demo cursor" style="width:100%" onclick="currentEESlide2017(13)" alt="Easter Egg Hunt 13 2017">';
        document.getElementById('easterEggHunt14thumnbail_2017').innerHTML = '<img src=' + responseImages.easterEggHunt14thumnbail_2017 + ' class="demo cursor" style="width:100%" onclick="currentEESlide2017(14)" alt="Easter Egg Hunt 14 2017">';

        document.getElementById('halloween1').innerHTML = '<img src=' + responseImages.halloween1 + ' style="width:100%">';
        document.getElementById('halloween2').innerHTML = '<img src=' + responseImages.halloween2 + ' style="width:100%">';
        document.getElementById('halloween3').innerHTML = '<img src=' + responseImages.halloween3 + ' style="width:100%">';
        document.getElementById('halloween4').innerHTML = '<img src=' + responseImages.halloween4 + ' style="width:100%">';
        document.getElementById('halloween5').innerHTML = '<img src=' + responseImages.halloween5 + ' style="width:100%">';
        document.getElementById('halloween6').innerHTML = '<img src=' + responseImages.halloween6 + ' style="width:100%">';
        document.getElementById('halloween7').innerHTML = '<img src=' + responseImages.halloween7 + ' style="width:100%">';
        document.getElementById('halloween1thumnbail').innerHTML = '<img src=' + responseImages.halloween1thumnbail + ' class="demo cursor" style="width:100%" onclick="currentHalloweenSlides(1)" alt="Halloween 1">';
        document.getElementById('halloween2thumnbail').innerHTML = '<img src=' + responseImages.halloween2thumnbail + ' class="demo cursor" style="width:100%" onclick="currentHalloweenSlides(2)" alt="Halloween 2">';
        document.getElementById('halloween3thumnbail').innerHTML = '<img src=' + responseImages.halloween3thumnbail + ' class="demo cursor" style="width:100%" onclick="currentHalloweenSlides(3)" alt="Halloween 3">';
        document.getElementById('halloween4thumnbail').innerHTML = '<img src=' + responseImages.halloween4thumnbail + ' class="demo cursor" style="width:100%" onclick="currentHalloweenSlides(4)" alt="Halloween 4">';
        document.getElementById('halloween5thumnbail').innerHTML = '<img src=' + responseImages.halloween5thumnbail + ' class="demo cursor" style="width:100%" onclick="currentHalloweenSlides(5)" alt="Halloween 5">';
        document.getElementById('halloween6thumnbail').innerHTML = '<img src=' + responseImages.halloween6thumnbail + ' class="demo cursor" style="width:100%" onclick="currentHalloweenSlides(6)" alt="Halloween 6">';
        document.getElementById('halloween7thumnbail').innerHTML = '<img src=' + responseImages.halloween7thumnbail + ' class="demo cursor" style="width:100%" onclick="currentHalloweenSlides(7)" alt="Halloween 7">';

        document.getElementById('christmas1').innerHTML = '<img src=' + responseImages.christmas1 + ' style="width:100%">';
        document.getElementById('christmas2').innerHTML = '<img src=' + responseImages.christmas2 + ' style="width:100%">';
        document.getElementById('christmas3').innerHTML = '<img src=' + responseImages.christmas3 + ' style="width:100%">';
        document.getElementById('christmas4').innerHTML = '<img src=' + responseImages.christmas4 + ' style="width:100%">';
        document.getElementById('christmas1thumnbail').innerHTML = '<img src=' + responseImages.christmas1thumnbail + ' class="demo cursor" style="width:100%" onclick="currentChristmasSlides(1)" alt="Christmas 1">';
        document.getElementById('christmas2thumnbail').innerHTML = '<img src=' + responseImages.christmas2thumnbail + ' class="demo cursor" style="width:100%" onclick="currentChristmasSlides(2)" alt="Christmas 2">';
        document.getElementById('christmas3thumnbail').innerHTML = '<img src=' + responseImages.christmas3thumnbail + ' class="demo cursor" style="width:100%" onclick="currentChristmasSlides(3)" alt="Christmas 3">';
        document.getElementById('christmas4thumnbail').innerHTML = '<img src=' + responseImages.christmas4thumnbail + ' class="demo cursor" style="width:100%" onclick="currentChristmasSlides(4)" alt="Christmas 4">';
      
        document.getElementById('tsiknopempti1').innerHTML = '<img src=' + responseImages.tsiknopempti1 + ' style="width:100%">';
        document.getElementById('tsiknopempti2').innerHTML = '<img src=' + responseImages.tsiknopempti2 + ' style="width:100%">';
        document.getElementById('tsiknopempti3').innerHTML = '<img src=' + responseImages.tsiknopempti3 + ' style="width:100%">';
        document.getElementById('tsiknopempti4').innerHTML = '<img src=' + responseImages.tsiknopempti4 + ' style="width:100%">';
        document.getElementById('tsiknopempti5').innerHTML = '<img src=' + responseImages.tsiknopempti5 + ' style="width:100%">';
        document.getElementById('tsiknopempti6').innerHTML = '<img src=' + responseImages.tsiknopempti6 + ' style="width:100%">';
        document.getElementById('tsiknopempti7').innerHTML = '<img src=' + responseImages.tsiknopempti7 + ' style="width:100%">';
        document.getElementById('tsiknopempti1thumnbail').innerHTML = '<img src=' + responseImages.tsiknopempti1thumnbail + ' class="demo cursor" style="width:100%" onclick="currentTsiknopemptiSlides(1)" alt="Tsiknopempti 1">';
        document.getElementById('tsiknopempti2thumnbail').innerHTML = '<img src=' + responseImages.tsiknopempti2thumnbail + ' class="demo cursor" style="width:100%" onclick="currentTsiknopemptiSlides(2)" alt="Tsiknopempti 2">';
        document.getElementById('tsiknopempti3thumnbail').innerHTML = '<img src=' + responseImages.tsiknopempti3thumnbail + ' class="demo cursor" style="width:100%" onclick="currentTsiknopemptiSlides(3)" alt="Tsiknopempti 3">';
        document.getElementById('tsiknopempti4thumnbail').innerHTML = '<img src=' + responseImages.tsiknopempti4thumnbail + ' class="demo cursor" style="width:100%" onclick="currentTsiknopemptiSlides(4)" alt="Tsiknopempti 4">';
        document.getElementById('tsiknopempti5thumnbail').innerHTML = '<img src=' + responseImages.tsiknopempti5thumnbail + ' class="demo cursor" style="width:100%" onclick="currentTsiknopemptiSlides(5)" alt="Tsiknopempti 5">';
        document.getElementById('tsiknopempti6thumnbail').innerHTML = '<img src=' + responseImages.tsiknopempti6thumnbail + ' class="demo cursor" style="width:100%" onclick="currentTsiknopemptiSlides(6)" alt="Tsiknopempti 6">';
        document.getElementById('tsiknopempti7thumnbail').innerHTML = '<img src=' + responseImages.tsiknopempti7thumnbail + ' class="demo cursor" style="width:100%" onclick="currentTsiknopemptiSlides(7)" alt="Tsiknopempti 7">';

        document.getElementById('movie1').innerHTML = '<img src=' + responseImages.movie1 + ' style="width:100%">';
        document.getElementById('movie2').innerHTML = '<img src=' + responseImages.movie2 + ' style="width:100%">';
        document.getElementById('movie3').innerHTML = '<img src=' + responseImages.movie3 + ' style="width:100%">';
        document.getElementById('movie4').innerHTML = '<img src=' + responseImages.movie4 + ' style="width:100%">';
        document.getElementById('movie5').innerHTML = '<img src=' + responseImages.movie5 + ' style="width:100%">';
        document.getElementById('movie6').innerHTML = '<img src=' + responseImages.movie6 + ' style="width:100%">';
        document.getElementById('movie7').innerHTML = '<img src=' + responseImages.movie7 + ' style="width:100%">';
        document.getElementById('movie8').innerHTML = '<img src=' + responseImages.movie8 + ' style="width:100%">';
        document.getElementById('movie1thumnbail').innerHTML = '<img src=' + responseImages.movie1thumnbail + ' class="demo cursor" style="width:100%" onclick="currentMovieSlides(1)" alt="movie 1">';
        document.getElementById('movie2thumnbail').innerHTML = '<img src=' + responseImages.movie2thumnbail + ' class="demo cursor" style="width:100%" onclick="currentMovieSlides(2)" alt="movie 2">';
        document.getElementById('movie3thumnbail').innerHTML = '<img src=' + responseImages.movie3thumnbail + ' class="demo cursor" style="width:100%" onclick="currentMovieSlides(3)" alt="movie 3">';
        document.getElementById('movie4thumnbail').innerHTML = '<img src=' + responseImages.movie4thumnbail + ' class="demo cursor" style="width:100%" onclick="currentMovieSlides(4)" alt="movie 4">';
        document.getElementById('movie5thumnbail').innerHTML = '<img src=' + responseImages.movie5thumnbail + ' class="demo cursor" style="width:100%" onclick="currentMovieSlides(5)" alt="movie 5">';
        document.getElementById('movie6thumnbail').innerHTML = '<img src=' + responseImages.movie5thumnbail + ' class="demo cursor" style="width:100%" onclick="currentMovieSlides(6)" alt="movie 6">';
        document.getElementById('movie7thumnbail').innerHTML = '<img src=' + responseImages.movie5thumnbail + ' class="demo cursor" style="width:100%" onclick="currentMovieSlides(7)" alt="movie 7">';
        document.getElementById('movie8thumnbail').innerHTML = '<img src=' + responseImages.movie5thumnbail + ' class="demo cursor" style="width:100%" onclick="currentMovieSlides(8)" alt="movie 8">';

        document.getElementById('interview1').innerHTML = '<img src=' + responseImages.interview1 + ' style="width:100%">';
        document.getElementById('interview2').innerHTML = '<img src=' + responseImages.interview2 + ' style="width:100%">';
        document.getElementById('interview3').innerHTML = '<img src=' + responseImages.interview3 + ' style="width:100%">';
        document.getElementById('interview4').innerHTML = '<img src=' + responseImages.interview4 + ' style="width:100%">';
        document.getElementById('interview5').innerHTML = '<img src=' + responseImages.interview5 + ' style="width:100%">';
        document.getElementById('interview1thumnbail').innerHTML = '<img src=' + responseImages.interview1thumnbail + ' class="demo cursor" style="width:100%" onclick="currentInterviewSlides(1)" alt="Interview 1">';
        document.getElementById('interview2thumnbail').innerHTML = '<img src=' + responseImages.interview2thumnbail + ' class="demo cursor" style="width:100%" onclick="currentInterviewSlides(2)" alt="Interview 2">';
        document.getElementById('interview3thumnbail').innerHTML = '<img src=' + responseImages.interview3thumnbail + ' class="demo cursor" style="width:100%" onclick="currentInterviewSlides(3)" alt="Interview 3">';
        document.getElementById('interview4thumnbail').innerHTML = '<img src=' + responseImages.interview4thumnbail + ' class="demo cursor" style="width:100%" onclick="currentInterviewSlides(4)" alt="Interview 4">';
        document.getElementById('interview5thumnbail').innerHTML = '<img src=' + responseImages.interview5thumnbail + ' class="demo cursor" style="width:100%" onclick="currentInterviewSlides(5)" alt="Interview 5">';

        document.getElementById('star1').innerHTML = '<img src=' + responseImages.star1 + ' style="width:100%">';
        document.getElementById('star2').innerHTML = '<img src=' + responseImages.star2 + ' style="width:100%">';
        document.getElementById('star3').innerHTML = '<img src=' + responseImages.star3 + ' style="width:100%">';
        document.getElementById('star1thumnbail').innerHTML = '<img src=' + responseImages.star1thumnbail + ' class="demo cursor" style="width:100%" onclick="currentStarsSlides(1)" alt="Star 1">';
        document.getElementById('star2thumnbail').innerHTML = '<img src=' + responseImages.star2thumnbail + ' class="demo cursor" style="width:100%" onclick="currentStarsSlides(2)" alt="Star 2">';
        document.getElementById('star3thumnbail').innerHTML = '<img src=' + responseImages.star3thumnbail + ' class="demo cursor" style="width:100%" onclick="currentStarsSlides(3)" alt="Star 3">';
     
    }
}
xhttpImages.send();