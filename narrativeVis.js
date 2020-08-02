var state = "init";

var newCases = [1,0,0,0,1,0,3,0,0,0,1,1,1,0,3,0,0,1,0,0,0,0,1,0,2,0,0,0,0,0,0,0,19,1,0,18,0,6,0,3,0,0,2,44,21,19,65,0,0,259,224,0,291,277,414,36,0,1822,3551,3355,4777,0,0,16354,20341,0,16420,0,16894,18093,19332,17987,22559,24103,26298,28103,32105,33510,26493,29510,31709,30859,35386,31606,31633,29308,24446,25802,28711,32549,30023,28252,27668,25634,24019,29127,30719,38509,32417,29218,22541,20517,31379,31774,26753,31839,29266,16200,22267,22119,30204,25870,26642,23767,18044,21424,20840,27090,22813,31967,13227,24417,23310,22787,20475,24151,26158,15253,24886,16362,19606,21214,17962,23482,26116,14692,24890,14583,20069,28922,28918,17848,17536,17235,20315,21745,22133,25314,21754,18514,27921,23139,23046,36617,32349,27575,26519,34191,37601,40526,44458,44580,41008,35757,43556,54271,53213,51933,57186,43686,46194,50263,64630,58975,66281,62369,60113,58720,60711,67165,71484,74354,66963,62788,57276,62929,69641,71714,74235,63968];

var newDeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,5,1,0,0,8,6,0,4,7,5,0,0,17,42,50,51,0,0,201,271,0,318,0,252,425,444,286,452,996,947,1061,1166,1338,1201,1286,1895,1925,1931,1920,1928,1528,1504,2395,6409,2018,2438,1776,1801,2154,2575,2390,1742,2151,1964,1109,1322,2010,2902,2005,5000,156,514,802,2475,1968,2840,1552,1736,982,1061,1424,1700,2041,1320,1394,697,932,1324,1396,1088,1852,1046,620,590,770,1415,1263,1073,914,693,761,1043,825,1035,1127,708,474,550,1208,832,947,709,646,372,496,722,770,733,690,558,308,410,784,690,2516,650,507,885,370,560,725,623,745,182,235,320,930,991,799,803,906,312,349,754,946,921,917,877,496,473,1042,1074,1110,1135,929];

var newTests = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,874,1773,2490,3818,5310,9171,4610,7604,17924,17320,25064,28081,36662,45333,45473,58148,69137,84394,101815,102656,106870,87612,118461,112330,108521,118851,132890,229193,119655,152008,154242,147488,171058,158393,136987,138917,134183,151772,136982,163798,158684,145834,153930,145688,152834,323483,192810,235857,276150,206288,195400,206614,238605,232808,295226,247084,236514,231456,271471,244833,301644,297850,291609,266330,382123,308555,319041,364074,358323,362120,371154,354713,401339,407159,461819,409088,390000,381505,422588,305932,308433,434470,487229,425754,396171,412327,418646,466714,460984,506275,520251,445939,395146,419724,428999,459455,623125,496428,485220,432811,464529,485290,516193,573992,559215,511098,466605,491719,519202,637148,606747,599386,583898,646824,624063,633286,662316,710949,642171,681450,501201,634791,629102,703050,810806,698444,758324,693576,769982,761997,827564,837392,761632,798508,711015,750248,795502,824399,929838,797589,855811,760840];
//,733243,839868

var newRecovered = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,5,0,88,16,26,29,2,0,170,13,320,188,203,1593,2979,1380,1450,527,706,4945,2796,2133,2182,1796,1851,3380,2480,1718,10494,4281,4333,2607,3842,6295,5497,1992,2875,2162,2837,18876,1293,6616,4436,4512,4784,33227,10068,11367,4770,7028,2611,119,5126,3957,13541,3635,16564,2446,13143,2984,4333,17629,3889,10913,6214,4920,4106,51717,11104,5497,12421,5745,6606,8483,6455,10015,28297,13473,5637,15390,5744,6704,9143,5518,12155,6333,8649,6788,7094,9220,5210,14518,7169,8688,6924,7600,10745,4673,18065,7350,8613,7401,7247,8499,5856,20039,15428,9363,51976,8434,103921,12438,17385,12328,16986,15649,14074,12391,10750,25613,17159,26784,14763,16559,15516,8401,28966,21931,28831,22420,28355,17790,18449,27941,29559];

var cumRecovered =
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,5,5,5,5,6,6,6,7,7,7,7,7,7,7,7,7,7,7,8,8,12,12,12,12,17,17,105,121,147,176,178,178,348,361,681,869,1072,2665,5644,7024,8474,9001,9707,14652,17448,19581,21763,23559,25410,28790,31270,32988,43482,47763,52096,54703,58545,64840,70337,72329,75204,77366,80203,99079,100372,106988,111424,115936,120720,153947,164015,175382,180152,187180,189791,189910,195036,198993,212534,216169,232733,230287,243430,246414,250747,268376,272265,283178,289392,294312,298418,350135,361239,366736,379157,384902,391508,399991,406446,416461,444758,458231,463868,479258,485002,491706,500849,506367,518522,524855,533504,540292,547386,556606,561816,576334,583503,592191,599115,606715,617460,622133,640198,647548,656161,663562,670809,679308,685164,705203,720631,729994,781970,790404,894325,906763,924148,936476,953462,969111,983185,995576,1006326,1031939,1049098,1075882,1090645,1107204,1122720,1131121,1160087,1182018,1210849,1233269,1261624,1279414,1297863,1325804,1355363];

var cumCases = [1,1,1,1,2,2,5,5,5,5,6,7,8,8,11,11,11,12,12,12,12,12,13,13,15,15,15,15,15,15,15,15,34,35,35,53,53,59,59,62,62,62,64,108,129,148,213,213,213,472,696,696,987,1264,1678,1714,1714,3536,7087,10442,15219,15219,15219,31573,51914,51914,68334,68334,85228,103321,122653,140640,163199,187302,213600,241703,273808,307318,333811,363321,395030,425889,461275,492881,524514,553822,578268,604070,632781,665330,695353,723605,751273,776907,800926,830053,860772,899281,931698,960916,983457,1003974,1035353,1067127,1093880,1125719,1154985,1171185,1193452,1215571,1245775,1271645,1298287,1322054,1340098,1361522,1382362,1409452,1432265,1464232,1477459,1501876,1525186,1547973,1568448,1592599,1618757,1634010,1658896,1675258,1694864,1716078,1734040,1757522,1783638,1798330,1823220,1837803,1857872,1886794,1915712,1933560,1951096,1968331,1988646,2010391,2032524,2057838,2079592,2098106,2126027,2149166,2172212,2208829,2241178,2268753,2295272,2329463,2367064,2407590,2452048,2496628,2537636,2573393,2616949,2671220,2724433,2776366,2833552,2877238,2923432,2973695,3038325,3097300,3163581,3225950,3286063,3344783,3405494,3472659,3544143,3618497,3685460,3748248,3805524,3868453,3938094,4009808,4084043,4148011];

var cumDeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,5,10,11,11,11,19,25,25,29,36,41,41,41,58,100,150,201,201,201,402,673,673,991,991,1243,1668,2112,2398,2850,3846,4793,5854,7020,8358,9559,10845,12740,14665,16596,18516,20444,21972,23476,25871,32280,34298,36736,38512,40313,42467,45042,47432,49174,51325,53289,54398,55720,57730,60632,62637,67637,67793,67279,68081,70556,72524,75364,76916,78652,79634,80695,82119,83819,85860,87180,88574,89271,90203,91527,92923,94011,95863,96909,97529,98119,98889,100304,101567,102640,103554,104247,105008,106051,106876,107911,109038,109746,110220,110770,111978,112810,113757,114466,115112,115484,115980,116702,117472,118205,118895,119453,119761,120171,120955,121645,124161,124811,125318,126203,126573,127133,127858,128481,129226,129408,129643,129963,130893,131884,132683,133486,134392,134704,135053,135807,136753,137674,138591,139468,139964,140437,141479,142553,143663,144798,145727];

var cumTests = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4138,5012,6785,9275,13093,18403,27574,32184,39788,57712,75032,100096,128177,164839,210172,255645,313793,382930,467324,569139,671795,778665,866277,984738,1097068,1205589,1324440,1457330,1686523,1806178,1958186,2112428,2259916,2430974,2589367,2726354,2865271,2999454,3151226,3288208,3452006,3610690,3756524,3910454,4056142,4208976,4532459,4725269,4961126,5237276,5443564,5638964,5845578,6084183,6316991,6612217,6859301,7095815,7327271,7598742,7843575,8145219,8443069,8734678,9001008,9383131,9691686,10010727,10374801,10733124,11095244,11466398,11821111,12222450,12629609,13091428,13500516,13890516,14272021,14694609,15000541,15308974,15743444,16230673,16656427,17052598,17464925,17883571,18350285,18811269,19317544,19837795,20283734,20678880,21098604,21527603,21987058,22610183,23106611,23591831,24024642,24489171,24974461,25490654,26064646,26623861,27134959,27601564,28093283,28612485,29249633,29856380,30455766,31039664,31686488,32310551,32943837,33606153,34317102,34959273,35640723,36141924,36776715,37405817,38108867,38919673,39618117,40376441,41070017,41839999,42601996,43429560,44266952,45028584,45827092,46538107,47288355,48083857,48908256,49838094,50635683,51491494,52252334];
//,52985577,53825445

var activeCases = [1,1,1,1,2,2,5,5,5,5,6,7,8,8,11,11,11,12,12,9,9,9,10,10,12,12,12,12,12,12,12,10,29,30,30,47,47,53,52,55,55,55,57,99,117,131,195,195,195,445,663,659,946,1216,1625,1656,1656,3373,6866,10145,14842,14840,14840,30823,50880,50560,66474,66271,81320,96009,113517,129768,151348,173749,194155,218401,247207,277197,300693,327066,353500,379954,411691,430883,456307,479754,500089,519654,535661,560695,586288,609889,633594,654237,656805,682249,704610,736532,762473,785798,773790,782229,799339,824338,839063,868135,897796,908068,923903,930513,954242,961996,989348,998990,1012989,1028656,1030167,1051327,1061907,1086266,1093876,1113255,1083524,1093811,1107701,1117579,1136946,1144973,1160786,1169923,1178099,1169753,1173169,1190100,1200133,1208320,1225463,1230078,1243594,1259234,1281111,1289836,1300034,1308967,1319230,1334818,1341724,1359223,1371917,1383011,1402610,1414234,1431874,1449736,1474177,1492831,1511539,1537699,1566111,1598265,1622034,1650679,1681439,1664850,1699412,1649037,1689189,1722992,1767668,1794133,1824358,1859617,1910865,1958291,1998156,2042460,2075477,2119085,2162483,2213186,2275348,2319819,2363974,2397435,2431818,2465350,2516127,2568282,2613441,2646921];

var data = d3.csv('WHO_Covid19_Cases_Deaths_USA');
console.log(data);
var newCases2 = data.NewCase;
console.log(newCases2);


var margin = {top: 50, right: 50, bottom: 50, left: 50},
  width = 400 - margin.left - margin.right,
  height = 300 - margin.top - margin.bottom;

var xScaleNC = d3.scaleLinear().domain([0,190]).range([0,width]);
var yScaleNC = d3.scaleLinear().domain([0,d3.max(newRecovered)]).range([height,0]);
var yScaleCC = d3.scaleLinear().domain([0,d3.max(cumCases)]).range([height,0]);
var yScaleND = d3.scaleLinear().domain([0,d3.max(newDeaths)]).range([height,0]);
var yScaleCD = d3.scaleLinear().domain([0,d3.max(cumDeaths)]).range([height,0]);
var yScaleNT = d3.scaleLinear().domain([0,d3.max(newTests)]).range([height,0]);
var yScaleCT = d3.scaleLinear().domain([0,d3.max(cumTests)]).range([height,0]);
var yScaleCR = d3.scaleLinear().domain([0,d3.max(cumRecovered)]).range([height,0]);

function initPlot() {

  // Cum Cases Title
  d3.select('.chart1').append("text").attr("x", 250 ).attr("y", 25 ).text("Confirmed, Active, and Recovered Cases (Cumulative)")
      .style("text-anchor", "middle").style("text-decoration", "underline");
  // X axis
  d3.select('.chart1').append('g').attr("transform","translate(100,250)").call(d3.axisBottom(xScaleNC).tickFormat(d3.format("~s")));
  // Y axes
  d3.select('.chart1').append('g').attr("transform","translate(100,50)").call(d3.axisLeft(yScaleCC).tickFormat(d3.format("~s")));
  // X label
  d3.select('.chart1').append("text").attr("x", 250 ).attr("y", 285 ).text("Days Since First U.S. Case (Jan 20, 2020)")
      .style("text-anchor", "middle").style("font-size", "12px");
  // Y label
  d3.select('.chart1').append("text").classed("rotation", true).attr("transform", "translate(0, 0) rotate(-90)").attr("y", 150)
        .attr("x",150).style("text-anchor", "middle").text("Value");

  // Cum Deaths Title
  d3.select('.chart1').append("text").attr("x", 750 ).attr("y", 25 ).text("Death Count (Cumulative)")
      .style("text-anchor", "middle").style("text-decoration", "underline");
  // X axis 2
  d3.select('.chart1').append('g').attr("transform","translate(600,250)").call(d3.axisBottom(xScaleNC).tickFormat(d3.format("~s")));
  // Y axes 2
  d3.select('.chart1').append('g').attr("transform","translate(600,50)").call(d3.axisLeft(yScaleCD).tickFormat(d3.format("~s")));
  // X label 2
  d3.select('.chart1').append("text").attr("x", 750 ).attr("y", 285 ).text("Days Since First U.S. Case (Jan 20, 2020)")
      .style("text-anchor", "middle").style("font-size", "12px");
  // Y label 2
  d3.select('.chart1').append("text").attr("transform", "translate(0, 0) rotate(-90)").attr("y", 150)
        .attr("x",150).style("text-anchor", "middle")
        .text("Value");

  // Cum Tests Title
  d3.select('.chart1').append("text").attr("x", 1250 ).attr("y", 25 ).text("Analyzed Tests, Confirmed and Active Cases (Cumulative)")
      .style("text-anchor", "middle").style("text-decoration", "underline");
  // X axis 3
  d3.select('.chart1').append('g').attr("transform","translate(1100,250)").call(d3.axisBottom(xScaleNC).tickFormat(d3.format("~s")));
  // Y axes 3
  d3.select('.chart1').append('g').attr("transform","translate(1100,50)").call(d3.axisLeft(yScaleCT).tickFormat(d3.format("~s")));
  // X label 3
  d3.select('.chart1').append("text").attr("x", 1250 ).attr("y", 285 ).text("Days Since First U.S. Case (Jan 20, 2020)")
      .style("text-anchor", "middle").style("font-size", "12px");
  // Y label 3
  d3.select('.chart1').append("text").attr("transform", "translate(0, 0) rotate(-90)").attr("y", 150)
        .attr("x",150).style("text-anchor", "middle").text("Value");


  // New Cases Title
  d3.select('.dailyCharts').append("text").attr("x", 250 ).attr("y", 25 ).text("Confirmed and Recovered Cases (Daily)")
      .style("text-anchor", "middle").style("text-decoration", "underline");
  // X axis
  d3.select('.dailyCharts').append('g').attr("transform","translate(100,250)").call(d3.axisBottom(xScaleNC).tickFormat(d3.format("~s")));
  // Y axes
  d3.select('.dailyCharts').append('g').attr("transform","translate(100,50)").call(d3.axisLeft(yScaleNC).tickFormat(d3.format("~s")));
  // X label
  d3.select('.dailyCharts').append("text").attr("x", 250 ).attr("y", 285 ).text("Days Since First U.S. Case (Jan 20, 2020)")
      .style("text-anchor", "middle").style("font-size", "12px");

  // New Deaths Title
  d3.select('.dailyCharts').append("text").attr("x", 750 ).attr("y", 25 ).text("Death Count (Daily)")
      .style("text-anchor", "middle").style("text-decoration", "underline");
  // X axis 2
  d3.select('.dailyCharts').append('g').attr("transform","translate(600,250)").call(d3.axisBottom(xScaleNC).tickFormat(d3.format("~s")));
  // Y axes 2
  d3.select('.dailyCharts').append('g').attr("transform","translate(600,50)").call(d3.axisLeft(yScaleND).tickFormat(d3.format("~s")));
  // X label 2
  d3.select('.dailyCharts').append("text").attr("x", 750 ).attr("y", 285 ).text("Days Since First U.S. Case (Jan 20, 2020)")
      .style("text-anchor", "middle").style("font-size", "12px");

  // New Tests Title
  d3.select('.dailyCharts').append("text").attr("x", 1250 ).attr("y", 25 ).text("Analyzed Tests and Confirmed Cases (Daily)")
      .style("text-anchor", "middle").style("text-decoration", "underline");
  // X axis 3
  d3.select('.dailyCharts').append('g').attr("transform","translate(1100,250)").call(d3.axisBottom(xScaleNC).tickFormat(d3.format("~s")));
  // Y axes 3
  d3.select('.dailyCharts').append('g').attr("transform","translate(1100,50)").call(d3.axisLeft(yScaleNT).tickFormat(d3.format("~s")));
  // X label 3
  d3.select('.dailyCharts').append("text").attr("x", 1250 ).attr("y", 285 ).text("Days Since First U.S. Case (Jan 20, 2020)").style("text-anchor", "middle").style("font-size", "12px");

  // Cum Cases Rectangles
  d3.select('.chart1').append('g').attr("transform", "translate(100,50)")
  .selectAll("rect").data(cumCases).enter().append("rect").attr("id","0").style("fill", "red")
  .attr("x", function(d, i) {return xScaleNC(i)})
  .attr("y", function(d) {return yScaleCC(0)})
  .attr("width", width / 190)
  .attr("height", function(d) { return height - yScaleCC(0)}).append("title")
  .text(function(cumCases) { return cumCases; });
  // Animation
  d3.select('.chart1').selectAll("rect[id='0']")
  .transition().duration(200)
  .attr("y", function(d) { return yScaleCC(d); })
  .attr("height", function(d) { return height - yScaleCC(d); })
  .delay(function(d,i){return(i*25)});
  // Overlay Active Cases on Cum Cases Chart
  d3.select('.chart1').append('g').attr("transform", "translate(100,50)")
  .selectAll("rect").data(activeCases).enter().append("rect").attr("id","0").style("fill", "yellow")
  .attr("x", function(d, i) {return xScaleNC(i)})
  .attr("y", function(d) {return yScaleCC(0)})
  .attr("width", width / 190)
  .attr("height", function(d) { return height - yScaleCC(0)}).append("title")
  .text(function(activeCases) { return activeCases; });
  // Animation
  d3.select('.chart1').selectAll("rect[id='0']")
  .transition().duration(200)
  .attr("y", function(d) { return yScaleCC(d); })
  .attr("height", function(d) { return height - yScaleCC(d); })
  .delay(function(d,i){return(i*25)});
  // Overlay Cum Recovered on Cum Cases Chart
  d3.select('.chart1').append('g').attr("transform", "translate(100,50)")
  .selectAll("rect").data(cumRecovered).enter().append("rect").attr("id","0").style("fill", "springgreen")
  .attr("x", function(d, i) {return xScaleNC(i)})
  .attr("y", function(d) {return yScaleCC(0)})
  .attr("width", width / 190)
  .attr("height", function(d) { return height - yScaleCC(0)}).append("title")
  .text(function(cumRecovered) { return cumRecovered; });
  // Animation
  d3.select('.chart1').selectAll("rect[id='0']")
  .transition().duration(200)
  .attr("y", function(d) { return yScaleCC(d); })
  .attr("height", function(d) { return height - yScaleCC(d); })
  .delay(function(d,i){return(i*25)});


  // New Cases Rectangles
  d3.select('.dailyCharts').append('g').attr("transform", "translate(100,50)")
  .selectAll("rect").data(newCases).enter().append("rect").attr("id","0").style("fill", "red")
  .attr("x", function(d, i) {return xScaleNC(i)})
  .attr("y", function(d) {return yScaleNC(0)})
  .attr("width", width / 190)
  .attr("height", function(d) { return height - yScaleNC(0)}).append("title")
  .text(function(newCases) { return newCases; });
  // Animation
  d3.select('.dailyCharts').selectAll("rect[id='0']")
  .transition().duration(200)
  .attr("y", function(d) { return yScaleNC(d); })
  .attr("height", function(d) { return height - yScaleNC(d); })
  .delay(function(d,i){return(i*25)});
  // Overlay New Recovered on New Cases
  d3.select('.dailyCharts').append('g').attr("transform", "translate(100,50)")
  .selectAll("rect").data(newRecovered).enter().append("rect").attr("id","0").style("fill", "springgreen")
  .attr("x", function(d, i) {return xScaleNC(i)})
  .attr("y", function(d) {return yScaleNC(0)})
  .attr("width", width / 190)
  .attr("height", function(d) { return height - yScaleNC(0)}).append("title")
  .text(function(newRecovered) { return newRecovered; });
  // Animation
  d3.select('.dailyCharts').selectAll("rect[id='0']")
  .transition().duration(200)
  .attr("y", function(d) { return yScaleNC(d); })
  .attr("height", function(d) { return height - yScaleNC(d); })
  .delay(function(d,i){return(i*25)});

  // Annotations Cum Cases
  d3.select('.chart1').append('g').append("rect").attr("id","0").attr('x', 115).attr('y', 60).attr('width', 198).attr('height', 35).style('fill', 'none');
  d3.select('.chart1').append('g').append('text').text('Statistics can be misleading. While confirmed cases exceed').attr('x', 120).attr('y', 70).attr("font-family", "montserrat")
  .attr("font-size", "8px");
  d3.select('.chart1').append('g').append('text').text('4 million, there are only 2,646,921 active cases, with').attr('x', 120).attr('y', 80).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.chart1').append('g').append('text').text('1,355,363 people having recovered already.').attr('x', 120).attr('y', 90).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.chart1').append('g').append('path').attr('d','M250,95L250,185').attr("stroke", "black");
  d3.select('.chart1').append('g').append('path').attr('d','M250,185L255,185').attr("stroke", "black");
  d3.select('.chart1').append('g').append('path').attr('d','M250,125L255,125').attr("stroke", "black");
  d3.select('.chart1').append('g').append('path').attr('d','M250,60L250,50').attr("stroke", "black");
  d3.select('.chart1').append('g').append('path').attr('d','M250,50L255,50').attr("stroke", "black");
  // Legend Cum Cases
  d3.select('.chart1').append('g').append('text').text('Hover Mouse for Detail').attr('x', 405).attr('y', 59).attr("font-family", "montserrat").attr("font-size", "10px");
  d3.select('.chart1').append('g').append('rect').attr('x', 405).attr('y', 70).attr('height', 10).attr('width', 10).style('fill', 'darkred');
  d3.select('.chart1').append('g').append('text').text('Confirmed Cases').attr('x', 420).attr('y', 79).attr("font-family", "montserrat").attr("font-size", "10px");
  d3.select('.chart1').append('g').append('rect').attr('x', 405).attr('y', 90).attr('height', 10).attr('width', 10).style('fill', 'goldenrod');
  d3.select('.chart1').append('g').append('text').text('Active Cases').attr('x', 420).attr('y', 99).attr("font-family", "montserrat").attr("font-size", "10px");
  d3.select('.chart1').append('g').append('rect').attr('x', 405).attr('y', 110).attr('height', 10).attr('width', 10).style('fill', 'green');
  d3.select('.chart1').append('g').append('text').text('Recovered Cases').attr('x', 420).attr('y', 119).attr("font-family", "montserrat").attr("font-size", "10px");

  // Annotations New Cases
  d3.select('.dailyCharts').append('g').append("rect").attr("id","0").attr('x', 115).attr('y', 60).attr('width', 195).attr('height', 25).style('fill', 'none');
  d3.select('.dailyCharts').append('g').append('text').text('Focusing on daily new cases, we see a spike in July').attr('x', 120).attr('y', 70).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.dailyCharts').append('g').append('text').text('roughly double that which was experienced in April.').attr('x', 120).attr('y', 80).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M365,100L403,100').attr("stroke", "black");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M365,100L365,105').attr("stroke", "black");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M403,100L403,105').attr("stroke", "black");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M384,100L310,75').attr("stroke", "black");

  d3.select('.dailyCharts').append('g').append('path').attr('d','M220,170L257,170').attr("stroke", "black");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M220,170L220,175').attr("stroke", "black");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M257,170L257,175').attr("stroke", "black");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M239,170L239,85').attr("stroke", "black");
  // Legend New Cases
  d3.select('.dailyCharts').append('g').append('text').text('Hover Mouse for Detail').attr('x', 405).attr('y', 59).attr("font-family", "montserrat").attr("font-size", "10px");
  d3.select('.dailyCharts').append('g').append('rect').attr('x', 405).attr('y', 70).attr('height', 10).attr('width', 10).style('fill', 'darkred');
  d3.select('.dailyCharts').append('g').append('text').text('Confirmed Cases').attr('x', 420).attr('y', 79).attr("font-family", "montserrat").attr("font-size", "10px");
  d3.select('.dailyCharts').append('g').append('rect').attr('x', 405).attr('y', 90).attr('height', 10).attr('width', 10).style('fill', 'green');
  d3.select('.dailyCharts').append('g').append('text').text('Recovered Cases').attr('x', 420).attr('y', 99).attr("font-family", "montserrat").attr("font-size", "10px");
}

function drawDeaths() {
  // Cum Deaths Rectangles
  d3.select('.chart1').append('g').attr("transform", "translate(600,50)")
  .selectAll("rect").data(cumDeaths).enter().append("rect").attr("id","2").style("fill", "grey")
  .attr("x", function(d, i) {return xScaleNC(i)})
  .attr("y", function(d) {return yScaleCD(0)})
  .attr("width", width / 190)
  .attr("height", function(d) { return height - yScaleCD(0)}).append("title")
  .text(function(cumDeaths) { return cumDeaths; });
  // Animation 2
  d3.select('.chart1').selectAll("rect[id='2']")
  .transition().duration(200)
  .attr("y", function(d) { return yScaleCD(d); })
  .attr("height", function(d) { return height - yScaleCD(d); })
  .delay(function(d,i){return(i*25)});

  // New Deaths Rectangles
  d3.select('.dailyCharts').append('g').attr("transform", "translate(600,50)")
  .selectAll("rect").data(newDeaths).enter().append("rect").attr("id","2").style("fill", "grey")
  .attr("x", function(d, i) {return xScaleNC(i)})
  .attr("y", function(d) {return yScaleND(0)})
  .attr("width", width / 190)
  .attr("height", function(d) { return height - yScaleND(0)}).append("title")
  .text(function(newDeaths) { return newDeaths; });
  // Animation 2
  d3.select('.dailyCharts').selectAll("rect[id='2']")
  .transition().duration(200)
  .attr("y", function(d) { return yScaleND(d); })
  .attr("height", function(d) { return height - yScaleND(d); })
  .delay(function(d,i){return(i*25)});
  // Annotations Cum Deaths
  d3.select('.chart1').append('g').append("rect").attr("id","0").attr('x', 615).attr('y', 60).attr('width', 185).attr('height', 45).style('fill', 'none');
  d3.select('.chart1').append('g').append('text').text('Despite this spike, the recent cumulative death').attr('x', 620).attr('y', 70).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.chart1').append('g').append('text').text('count appears to be increasing somewhat linearly,').attr('x', 620).attr('y', 80).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.chart1').append('g').append('text').text('suggesting we are better prepared now to nurse').attr('x', 620).attr('y', 90).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.chart1').append('g').append('text').text('the ill than we previously have been.').attr('x', 620).attr('y', 100).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.chart1').append('g').append('path').attr('d','M820,80L890,35').attr("stroke", "black");
  d3.select('.chart1').append('g').append('path').attr('d','M820,80L825,85').attr("stroke", "black");
  d3.select('.chart1').append('g').append('path').attr('d','M890,35L895,40').attr("stroke", "black");
  d3.select('.chart1').append('g').append('path').attr('d','M800,60L850,60').attr("stroke", "black");
  // Legend Cum Deaths
  d3.select('.chart1').append('g').append('text').text('Hover Mouse for Detail').attr('x', 905).attr('y', 59).attr("font-family", "montserrat").attr("font-size", "10px");
  d3.select('.chart1').append('g').append('rect').attr('x', 905).attr('y', 70).attr('height', 10).attr('width', 10).style('fill', 'dimgrey');
  d3.select('.chart1').append('g').append('text').text('Deaths').attr('x', 920).attr('y', 79).attr("font-family", "montserrat").attr("font-size", "10px");

  // Annotations New Deaths
  d3.select('.dailyCharts').append('g').append("rect").attr("id","0").attr('x', 612).attr('y', 60).attr('width', 123).attr('height', 45).style('fill', 'none');
  d3.select('.dailyCharts').append('g').append('text').text('On April 17th, the maximum daily').attr('x', 615).attr('y', 70).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.dailyCharts').append('g').append('text').text('deaths was observed: 6,409.').attr('x', 615).attr('y', 80).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.dailyCharts').append('g').append('text').text('On that same day, there were').attr('x', 615).attr('y', 90).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.dailyCharts').append('g').append('text').text('535,661 active cases.').attr('x', 615).attr('y', 100).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M675,60L740,50').attr("stroke", "black");

  d3.select('.dailyCharts').append('g').append("rect").attr("id","0").attr('x', 775).attr('y', 100).attr('width', 150).attr('height', 35).style('fill', 'none');
  d3.select('.dailyCharts').append('g').append('text').text('There are 4,002,284 active cases today,').attr('x', 780).attr('y', 110).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.dailyCharts').append('g').append('text').text("yet July's average daily deaths (723)").attr('x', 780).attr('y', 120).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.dailyCharts').append('g').append('text').text("is the lowest since March's (77).").attr('x', 780).attr('y', 130).attr("font-family", "sans-serif")
  .attr("font-size", "8px");

  d3.select('.dailyCharts').append('g').append('path').attr('d','M684,225L775,115').attr("stroke", "black");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M665,225L705,225').attr("stroke", "black");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M665,225L665,230').attr("stroke", "black");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M705,225L705,230').attr("stroke", "black");

  d3.select('.dailyCharts').append('g').append('path').attr('d','M879,200L879,135').attr("stroke", "black");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M860,200L900,200').attr("stroke", "black");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M860,200L860,205').attr("stroke", "black");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M900,200L900,205').attr("stroke", "black");

  // Legend New Deaths
  d3.select('.dailyCharts').append('g').append('text').text('Hover Mouse for Detail').attr('x', 905).attr('y', 59).attr("font-family", "montserrat").attr("font-size", "10px");
  d3.select('.dailyCharts').append('g').append('rect').attr('x', 905).attr('y', 70).attr('height', 10).attr('width', 10).style('fill', 'dimgrey');
  d3.select('.dailyCharts').append('g').append('text').text('Deaths').attr('x', 920).attr('y', 79).attr("font-family", "montserrat").attr("font-size", "10px");
}

function drawTests() {
  // Cum Tests Rectangles
  d3.select('.chart1').append('g').attr("transform", "translate(1100,50)")
  .selectAll("rect").data(cumTests).enter().append("rect").attr("id","3").style("fill", "aqua")
  .attr("x", function(d, i) {return xScaleNC(i)})
  .attr("y", function(d) {return yScaleCT(0)})
  .attr("width", width / 190)
  .attr("height", function(d) { return height - yScaleCT(0)}).append("title")
  .text(function(cumTests) { return cumTests; });
  // Animation 3
  d3.select('.chart1').selectAll("rect[id='3']")
  .transition().duration(200)
  .attr("y", function(d) { return yScaleCT(d); })
  .attr("height", function(d) { return height - yScaleCT(d); })
  .delay(function(d,i){return(i*25)});

  // Overlay Cum Cases on Cum Tests Chart
  d3.select('.chart1').append('g').attr("transform", "translate(1100,50)")
  .selectAll("rect").data(cumCases).enter().append("rect").attr("id","3").style("fill", "red")
  .attr("x", function(d, i) {return xScaleNC(i)})
  .attr("y", function(d) {return yScaleCT(0)})
  .attr("width", width / 190)
  .attr("height", function(d) { return height - yScaleCT(0)}).append("title")
  .text(function(cumCases) { return cumCases; });
  // Animation
  d3.select('.chart1').selectAll("rect[id='3']")
  .transition().duration(200)
  .attr("y", function(d) { return yScaleCT(d); })
  .attr("height", function(d) { return height - yScaleCT(d); })
  .delay(function(d,i){return(i*25)});

  // Overlay Active Cases on Cum Tests Chart
  d3.select('.chart1').append('g').attr("transform", "translate(1100,50)")
  .selectAll("rect").data(activeCases).enter().append("rect").attr("id","3").style("fill", "yellow")
  .attr("x", function(d, i) {return xScaleNC(i)})
  .attr("y", function(d) {return yScaleCT(0)})
  .attr("width", width / 190)
  .attr("height", function(d) { return height - yScaleCT(0)}).append("title")
  .text(function(activeCases) { return activeCases; });
  // Animation
  d3.select('.chart1').selectAll("rect[id='3']")
  .transition().duration(200)
  .attr("y", function(d) { return yScaleCT(d); })
  .attr("height", function(d) { return height - yScaleCT(d); })
  .delay(function(d,i){return(i*25)});

  // New Tests Rectangles
  d3.select('.dailyCharts').append('g').attr("transform", "translate(1100,50)")
  .selectAll("rect").data(newTests).enter().append("rect").attr("id","3").style("fill", "aqua")
  .attr("x", function(d, i) {return xScaleNC(i)})
  .attr("y", function(d) {return yScaleNT(0)})
  .attr("width", width / 190)
  .attr("height", function(d) { return height - yScaleNT(0)}).append("title")
  .text(function(newTests) { return newTests; });
  // Animation 3
  d3.select('.dailyCharts').selectAll("rect[id='3']")
  .transition().duration(200)
  .attr("y", function(d) { return yScaleNT(d); })
  .attr("height", function(d) { return height - yScaleNT(d); })
  .delay(function(d,i){return(i*25)});

  // Overlay New Cases on New Tests Chart
  d3.select('.dailyCharts').append('g').attr("transform", "translate(1100,50)")
  .selectAll("rect").data(newCases).enter().append("rect").attr("id","3").style("fill", "red")
  .attr("x", function(d, i) {return xScaleNC(i)})
  .attr("y", function(d) {return yScaleNT(0)})
  .attr("width", width / 190)
  .attr("height", function(d) { return height - yScaleNT(0)}).append("title")
  .text(function(newCases) { return newCases; });
  // Animation
  d3.select('.dailyCharts').selectAll("rect[id='3']")
  .transition().duration(200)
  .attr("y", function(d) { return yScaleNT(d); })
  .attr("height", function(d) { return height - yScaleNT(d); })
  .delay(function(d,i){return(i*25)});

  // Annotations Cum Tests
  d3.select('.chart1').append('g').append("rect").attr("id","0").attr('x', 1115).attr('y', 60).attr('width', 200).attr('height', 45).style('fill', 'none');
  d3.select('.chart1').append('g').append('text').text('With a population of 328 million, the U.S. has currently').attr('x', 1120).attr('y', 70).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.chart1').append('g').append('text').text('tested a group sized 1/7th of its population, due to a').attr('x', 1120).attr('y', 80).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.chart1').append('g').append('text').text('~10X increase in testing since the April cases spike.').attr('x', 1120).attr('y', 90).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.chart1').append('g').append('text').text('The rate of increase of testing dwarfs that of cases.').attr('x', 1120).attr('y', 100).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.chart1').append('g').append('path').attr('d','M1240,105L1240,235').attr("stroke", "black");
  d3.select('.chart1').append('g').append('path').attr('d','M1240,235L1235,235').attr("stroke", "black");
  d3.select('.chart1').append('g').append('path').attr('d','M1240,60L1240,55').attr("stroke", "black");
  d3.select('.chart1').append('g').append('path').attr('d','M1240,55L1235,55').attr("stroke", "black");

  // Legend Cum Tests
  d3.select('.chart1').append('g').append('text').text('Hover Mouse for Detail').attr('x', 1405).attr('y', 59).attr("font-family", "montserrat").attr("font-size", "10px");
  d3.select('.chart1').append('g').append('rect').attr('x', 1405).attr('y', 70).attr('height', 10).attr('width', 10).style('fill', 'lightblue');
  d3.select('.chart1').append('g').append('text').text('Analyzed Tests').attr('x', 1420).attr('y', 79).attr("font-family", "montserrat").attr("font-size", "10px");
  d3.select('.chart1').append('g').append('rect').attr('x', 1405).attr('y', 90).attr('height', 10).attr('width', 10).style('fill', 'darkred');
  d3.select('.chart1').append('g').append('text').text('Confirmed Cases').attr('x', 1420).attr('y', 99).attr("font-family", "montserrat").attr("font-size", "10px");
  d3.select('.chart1').append('g').append('rect').attr('x', 1405).attr('y', 110).attr('height', 10).attr('width', 10).style('fill', 'goldenrod');
  d3.select('.chart1').append('g').append('text').text('Active Cases').attr('x', 1420).attr('y', 119).attr("font-family", "montserrat").attr("font-size", "10px");

  // Annotations New Tests
  d3.select('.dailyCharts').append('g').append("rect").attr("id","0").attr('x', 1115).attr('y', 60).attr('width', 200).attr('height', 75).style('fill', 'none');
  d3.select('.dailyCharts').append('g').append('text').text('Now, for every ~70,000 positive tests we see ~800,000').attr('x', 1120).attr('y', 70).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.dailyCharts').append('g').append('text').text('negatives. During the April spike, for every ~35,000').attr('x', 1120).attr('y', 80).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.dailyCharts').append('g').append('text').text("positives we saw only ~100,000 negatives. 'Daily").attr('x', 1120).attr('y', 90).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.dailyCharts').append('g').append('text').text("cases' is far more accurate now than it's ever been.").attr('x', 1120).attr('y', 100).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.dailyCharts').append('g').append('text').text("July's spike doesn't suggest a midhandling of the").attr('x', 1120).attr('y', 110).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.dailyCharts').append('g').append('text').text("pandemic by U.S. leaders, and may likely imply the").attr('x', 1120).attr('y', 120).attr("font-family", "sans-serif")
  .attr("font-size", "8px");
  d3.select('.dailyCharts').append('g').append('text').text("opposite when viewed in context.").attr('x', 1120).attr('y', 130).attr("font-family", "sans-serif")
  .attr("font-size", "8px");

  d3.select('.dailyCharts').append('g').append('path').attr('d','M1175,240L1175,135').attr("stroke", "black");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M1175,240L1170,240').attr("stroke", "black");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M1175,220L1170,220').attr("stroke", "black");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M1175,235L1180,235').attr("stroke", "black");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M1175,60L1175,55').attr("stroke", "black");
  d3.select('.dailyCharts').append('g').append('path').attr('d','M1175,55L1180,55').attr("stroke", "black");

  // Legend New Tests
  d3.select('.dailyCharts').append('g').append('text').text('Hover Mouse for Detail').attr('x', 1405).attr('y', 59).attr("font-family", "montserrat").attr("font-size", "10px");
  d3.select('.dailyCharts').append('g').append('rect').attr('x', 1405).attr('y', 70).attr('height', 10).attr('width', 10).style('fill', 'lightblue');
  d3.select('.dailyCharts').append('g').append('text').text('Analyzed Tests').attr('x', 1420).attr('y', 79).attr("font-family", "montserrat").attr("font-size", "10px");
  d3.select('.dailyCharts').append('g').append('rect').attr('x', 1405).attr('y', 90).attr('height', 10).attr('width', 10).style('fill', 'darkred');
  d3.select('.dailyCharts').append('g').append('text').text('Confirmed Cases').attr('x', 1420).attr('y', 99).attr("font-family", "montserrat").attr("font-size", "10px");
}

function updateState() {
  if (state == "init") {
    state = "2";
    d3.select('.title').text("Exploring The Progression of Covid-19 Within The USA (Scene 2/3)");
    drawDeaths();
  } else {
    if (state == "2") {
      d3.select('.title').text("Exploring The Progression of Covid-19 Within The USA (Scene 3/3)");
      drawTests();
    }
  }
}

//.chart1 {
//  background-image: linear-gradient(-90deg, blue , grey, red);
//}
//.dailyCharts {
//  background-image: linear-gradient(-90deg, blue , grey, red);
//}
