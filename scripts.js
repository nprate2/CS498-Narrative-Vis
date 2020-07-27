async function initPlot() {
  const data = await d3.csv('https://github.com/nprate2/CS498-Narrative-Vis/blob/master/WHO_Covid19_Cases_Deaths_USA.csv');
  d3.select('body').selectAll('p').data(data).enter().append('p');
  d3.select('svg').append('g').attr("transform","translate(50,50)")
.selectAll('dot').data(data).enter().append('circle')
.attr('cx', 100)
.attr('cy', 100)
.attr('r', 10)

}
