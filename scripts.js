async function initPlot() {
  // Margins and Svg Dimensions
  var margin = {top: 50, right: 50, bottom: 50, left: 50},
    width = 600 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

  // Used to parse date when reading data
  //var parseDate = d3.time.format("%d-%b-%y").parse;
  // Generates SVG canvas
  const data = await d3.csv('./WHO_Covid19_Cases_Deaths_USA.csv');
  d3.select('body').selectAll('p').data(data).enter().append('p');

  var xScale = d3.scaleBand().domain(data.NewCase).range([0,width]);
  var yScale = d3.scaleLinear().domain([0,d3.max(data.NewCase)]).range([height,0]);

  d3.select('.tester').append('g').attr("transform","translate(50,50)")
  .call(d3.axisLeft(yScale).tickFormat(d3.format("~s")));

  d3.select('.tester').append('g').attr("transform","translate(50,250)")
  .call(d3.axisBottom(xScale).tickFormat(d3.format("~s")));


  d3.select(".tester").append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  .append("rect").attr("x", 100).attr("y", 100).attr("width", 100).attr("height", 100);
}
