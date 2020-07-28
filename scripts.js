async function initPlot() {
  // Margins and Svg Dimensions
  var margin = {top: 50, right: 50, bottom: 50, left: 50},
    width = 600 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;
  // Used to parse date when reading data
  //var parseDate = d3.time.format("%d-%b-%y").parse;
  // Generates SVG canvas
  const data = await d3.csv('./WHO_covid19_new_cases.csv');
  var xScale = d3.scaleBand().domain(data).range([0,width])
  var yScale = d3.scaleLinear().domain([0,d3.max(data)]).range([height,0])
  d3.select('body').selectAll('p').data(data).enter().append('p')

  var svg = d3.select("body").append("svg").attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  .selectAll("rect").data(data).enter().append("rect")
  .attr("x", function(d, i) {return x(i)})
  .attr("y", function(d) {return y(d)})
  .attr("width", x.bandwidth)
  .attr("height", function(d) { return 200 - y(d)})
}
