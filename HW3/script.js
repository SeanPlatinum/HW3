/* 
Sean Diaz - HW3 - 
https://www.youtube.com/watch?v=iDA0kF5lrVk&ab_channel=BroCode
https://www.youtube.com/watch?v=iuSKGuWWNGA&ab_channel=DaniKrossing
*/
document.getElementById('tableForm').addEventListener('submit', function(event) { /* function(event) is a call back function, these are like functions that arent real yet but 
    occurs when  the event listener receives the action... */
    event.preventDefault();
    const startRow = parseInt(document.getElementById('startRow').value); // this function takes the entry in the box and converts it to decimal 
    const endRow = parseInt(document.getElementById('endRow').value);
    const startCol = parseInt(document.getElementById('startCol').value);
    const endCol = parseInt(document.getElementById('endCol').value);
    generateTable(startRow, endRow, startCol, endCol);
});

function generateTable(startRow, endRow, startCol, endCol) {
    let tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';  // Clear previous table if any

    let table = document.createElement('table');
    let thead = document.createElement('thead'); // groups headers
    let tbody = document.createElement('tbody'); // groups body content 

    // Create the table headers Sean 6/1/24
    let headerRow = document.createElement('tr'); //first header row with number being multiplied !!!! :))))
    let emptyHeader = document.createElement('th'); // we need this because if not the table is all out of line with the styling so its a trash fix but its works i guess :(
    headerRow.appendChild(emptyHeader);

    for (let col = startCol; col <= endCol; col++) {
        let th = document.createElement('th');
        th.innerText = col;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow); // append it to the grouping of header

    // Create table rows
    for (let row = startRow; row <= endRow; row++) { //lets make the rows
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        th.innerText = row;
        tr.appendChild(th);
        for (let col = startCol; col <= endCol; col++) {
            let td = document.createElement('td');
            td.innerText = row * col;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    tableContainer.appendChild(table); //retest if issue from saturday still not fixed 
}
