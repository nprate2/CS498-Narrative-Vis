async function initPlot() {
//const data = await d3.csv('https://github.com/nprate2/CS498-Narrative-Vis/blob/master/WHO_Covid19_Cases_Deaths_USA.csv');
var svg = d3.select('body').append('svg').attr('width',200).attr('height',200);
svg.append('g').attr("transform","translate(50,50)").append('circle')
.attr('cx', 100)
.attr('cy', 100)
.attr('r', 10);

}
