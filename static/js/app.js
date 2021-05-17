// from data.js
var tableData = data;
var tableBody = d3.select('tbody')

function generateTable(data) {
    tableBody.html('')
    // console.log(data) -> used for testing 
    data.forEach((row) => {
        // Append a row to the table body
        const tableRow = tableBody.append("tr");
        // Loop through each field in the row and add each value as a table cell (td)
        Object.values(row).forEach((val) => {
            let cell = tableRow.append("td");
            cell.text(val);
        }
        );
    })
}

function filterButtonClicked() {
    var filteredData = tableData;
    // console.log('Button Clicked')-> used for testing
    var dateText = d3.select('#datetime').property('value');
    
    if (dateText){
        filteredData = filteredData.filter(row => row.datetime === dateText )
    }
    generateTable(filteredData)
}

d3.select('#filter-btn').on('click', filterButtonClicked)

generateTable(tableData)