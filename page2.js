var newDeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,5,1,0,0,8,6,0,4,7,5,0,0,17,42,50,51,0,0,201,271,0,318,0,252,425,444,286,452,996,947,1061,1166,1338,1201,1286,1895,1925,1931,1920,1928,1528,1504,2395,6409,2018,2438,1776,1801,2154,2575,2390,1742,2151,1964,1109,1322,2010,2902,2005,5000,156,514,802,2475,1968,2840,1552,1736,982,1061,1424,1700,2041,1320,1394,697,932,1324,1396,1088,1852,1046,620,590,770,1415,1263,1073,914,693,761,1043,825,1035,1127,708,474,550,1208,832,947,709,646,372,496,722,770,733,690,558,308,410,784,690,2516,650,507,885,370,560,725,623,745,182,235,320,930,991,799,803,906,312,349,754,946,921,917,877,496,473,1042,1074,1110,1135,929];

function initPlot2() {
  // Margins and Svg Dimensions
  var margin = {top: 50, right: 50, bottom: 50, left: 50},
    width = 300 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

  // Used to parse date when reading data
  //var parseDate = d3.time.format("%d-%b-%y").parse;
  // Generates SVG canvas


  //d3.select('body').selectAll('p').data(data).enter().append('p');

  var xScaleND = d3.scaleLinear().domain([0,190]).range([0,width]);
  var yScaleND = d3.scaleLinear().domain([0,d3.max(newDeaths)]).range([height,0]);

  d3.select('.chart1').append('g').attr("transform", "translate(50,50)")
  .selectAll("rect").data(newDeaths).enter().append("rect")
  .attr("x", function(d, i) {return xScaleND(i)})
  .attr("y", function(d) {return yScaleND(d)})
  .attr("width", width / 190)
  .attr("height", function(d) { return height - yScaleND(d)});

  d3.select('.chart1').append('g').attr("transform","translate(50,50)")
  .call(d3.axisLeft(yScaleND).tickFormat(d3.format("~s")));

  d3.select('.chart1').append('g').attr("transform","translate(50,250)")
  .call(d3.axisBottom(xScaleND).tickFormat(d3.format("~s")));
}
