/*-----COUNTDOWNCLOCK-----*/

var countDownDate = new Date("Sep 28, 2020 17:46:52").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Welcome to Mars, I hope you had a nice flight!";
  
  }

}, 1000);




/*-----FUEL-----*/

new Chartist.Line('.ct-chart-1', {
	labels: [28, 56, 84, 112, 140, 169, 197, 225],
	series: [
	    [161, 151, 136, 126]
	]
}, {
	low: 0,
	showArea: true
});




/*-----FOOD-----*/

new Chartist.Bar('.ct-chart-2', {
	labels: ['Meal package', 'Veg package', 'Delicacy'],
	series: [41352, 5633, 12902]
}, {
	distributeSeries: true
});




/*-----BEVERAGES-----*/

new Chartist.Bar('.ct-chart-3', {
	labels: ['Water', 'Wine', 'Beer', 'Soda'],
	series: [112398, 19823, 21398, 83742]
}, {
	distributeSeries: true
});