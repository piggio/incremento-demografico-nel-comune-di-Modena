$(document).ready(function () {
    

    
    var parseTime = d3.timeParse("%Y");
    
    
    d3.csv('a1_0.csv', function (data) {
        
        console.log(data);
        data.forEach(function (d) {
           d.ANNI = parseTime(d.ANNI);
            
            d["Popolazione presente-totale"] = +d["Popolazione presente-totale"];
        });
        
    
        
        

    var margin = {
    	top: 40,
    	right: 40,
    	bottom: 40,
    	left: 90
	},
	width = 800,
	height = 500;

var x = d3.scaleBand()
    .domain(data.map(function (d) { return d.ANNI; }))
    .rangeRound([0, width - margin.left - margin.right])
    .paddingInner(0.05);

var y = d3.scaleLinear()
    .domain([
        0,
        d3.max(data, function (d) { return d["Popolazione presente-totale"]; })
    ])
    .range([height - margin.top - margin.bottom, 0]);

var xAxis = d3.axisBottom(x)
    .tickSize(6)
    .tickPadding(8)
	//.tickFormat(d3.time.format('%Y-%m-%d'));
	.tickFormat(d3.timeFormat('%Y'));

var yAxis = d3.axisLeft(y)
    .tickPadding(8);

var svg = d3.select('#grafico').append('svg')
    .attr('class', 'chart')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

        
        
   
        
        

        
        
var bars = svg.selectAll('.bar')
    .data(data)
    .enter().append('rect')
    .attr('class', 'bar')
    
    
    .attr('x', function (d, i) {
    	return x(d.ANNI);
	})
    .attr('y', function (d) {
    	return height - margin.top - margin.bottom;
	})
    .attr('width', x.bandwidth())
    .attr('height', function (d) {
    	return 0;
	});
        
   
var labels = svg.selectAll('.label')
    .data(data)
    .enter().append('text')
    .attr('class', 'label')
    .text(function (d) {
        
        return d["Popolazione presente-totale"]
        
    })
    
    .attr('x', function (d, i) {
    	return x(d.ANNI);
	})
    .attr('y', function (d) {
    	return height - margin.top - margin.bottom;
	})

    .attr("dy",-3);
    
        
   

var barre = bars._groups[0]

console.log(bars._groups);
        
        
        
/* barre.forEach(function(d) {
     
    bars.attr("fill", getRandomColor());
});
     
  */ 
        
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}            
        
        
        
        
        
        
for (i = 0 ; i<barre.length ; i ++)  {
    
   
    
    $(barre[i]).attr("fill",getRandomColor())
   
    
};      
        
        
        
        
        
        
        
        
        

svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom) + ')')
    .call(xAxis);

svg.append('g')
    .attr('class', 'y axis')
    .call(yAxis);

bars.transition()
    .duration(200)
    .delay(function (d, i) {
    	return i * 200;
	})
    .attr('y', function (d) {
    	return y(d["Popolazione presente-totale"]);
	})
    .attr('height', function (d) {
    	return height - margin.top - margin.bottom - y(d["Popolazione presente-totale"]);
	});
            
  labels.transition()
    .duration(200)
    .delay(function (d, i) {
    	return i * 200;
	})
    .attr('y', function (d) {
    	return y(d["Popolazione presente-totale"]);
	})
    .attr('height', function (d) {
    	return height - margin.top - margin.bottom - y(d["Popolazione presente-totale"]);
	});      
            
            
    });
            
            
 
    
        
        
    });
