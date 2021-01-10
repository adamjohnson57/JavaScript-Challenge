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

// Create event handler for button and form
filter_button.on("click", runEnter);
form.on("submit", runEnter);

// Complete event handler function
function runEnter() {

// Stop page from refreshing
    d3.event.preventDefault();

// Select the input element and get the value property
    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");
}

