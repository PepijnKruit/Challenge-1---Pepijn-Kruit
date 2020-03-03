// De datum hoe laat het ruimteschip aangekomt
var countDownDate = new Date("Sep 28, 2020 17:46:52").getTime();

// Het aftellen wordt steeds met 1 geüpdate. 
var x = setInterval(function() {

  // De datum en tijd van vandaag wordt opgeroepen.
  var now = new Date().getTime();

  // De afstand tussen de tijd van nu en de aankomsttijd wordt berekend.
  var distance = countDownDate - now;

  // Tijd berekeningen voor dagen, uren, minuten en seconden. 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Het resultaat wordt getoond in het id element "demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Als het ruimteschip is aangekomen (de tijd om is) wordt het volgende bericht getoond: "Welcome to Mars, I hope you had a nice flight!"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Welcome to Mars, I hope you had a nice flight!";
  }
}, 1000);