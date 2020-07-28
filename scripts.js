async function initPlot() {
  // Margins and Svg Dimensions
  var margin = {top: 50, right: 50, bottom: 50, left: 50},
    width = 600 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;
  // Used to parse date when reading data
  //var parseDate = d3.time.format("%d-%b-%y").parse;
  // Generates SVG canvas
  var svg = d3.select("#<test>").append("svg").attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  .append("circle").attr("cx", 200).attr("cy", 200).attr("r", 10);

  // Read and use data

}
