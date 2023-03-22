// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');
let empTable = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let empID = document.getElementById('id').value;
    let empName = document.getElementById('name').value;
    let empExt = document.getElementById('extension').value;
    let empEmail = document.getElementById('email').value;
    let empDept = document.getElementById('department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = empTable.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = newRow.insertCell();
    let cellName = newRow.insertCell();
    let cellExt = newRow.insertCell();
    let cellEmail = newRow.insertCell();
    let cellDept = newRow.insertCell();
    let cellDelete = newRow.insertCell();
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(empID));
    cellName.appendChild(document.createTextNode(empName));
    cellExt.appendChild(document.createTextNode(empExt));
    cellEmail.appendChild(document.createTextNode(empEmail));
    cellDept.appendChild(document.createTextNode(empDept));
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    let delText = document.createTextNode('X');
    deleteBtn.appendChild(delText);
    cellDelete.appendChild(deleteBtn);
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    document.getElementById('empCount').innerHTML = count;
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if(confirm('Are you sure you want to delete?')) {
        empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
        count--;
        document.getElementById('empCount').innerHTML = count;
    }
});