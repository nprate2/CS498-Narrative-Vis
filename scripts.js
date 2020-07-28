async function initPlot() {
  // Margins and Svg Dimensions
  var margin = {top: 50, right: 50, bottom: 50, left: 50},
    width = 300 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

  // Used to parse date when reading data
  //var parseDate = d3.time.format("%d-%b-%y").parse;
  // Generates SVG canvas
  d3.select("svg").append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  .append("rect").attr("x", 100).attr("y", 100).attr("width", 100).attr("height", 100);

  
}
