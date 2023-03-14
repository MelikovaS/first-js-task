let form = document.getElementById("form");
let name = document.getElementById("sname").value;
let surname = document.getElementById("ssurname").value;
let age = document.getElementById("age").value;
let email = document.getElementById("emailadd").value;
let radio = document.querySelector("form-check").value;
let submit = document.querySelector("button");

// submit.addEventListener("click", ()=>{
//     row.innerHTML += `<td> name </td>`    
// })

function addRow() {
    
    let table = document.getElementById("myTable");
    let row = table.insertRow(-1); 
    let td1 = row.insertCell(0);
    let td2 = row.insertCell(1);
    let td3 = row.insertCell(2);
    let td4 = row.insertCell(3);
    let td5 = row.insertCell(4);
    td1.innerText = name
    td2.innerText = surname
    td3.innerText = age
    td4.innerText = email
    td5.innerText = radio
 }








