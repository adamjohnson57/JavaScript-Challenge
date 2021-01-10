// from data.js
var tableData = data;

// Select the filter button
var filter_button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Reference to the table body
var tbody = d3.select("tbody");


// Append data.js to table body
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);     
    });
});


