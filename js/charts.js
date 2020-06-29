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