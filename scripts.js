async function initPlot() {

d3.select('svg').append('g').attr("transform","translate(50,50)").append('circle')
.attr('cx', 100)
.attr('cy', 100)
.attr('r', 100)

}
