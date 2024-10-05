var registerForm = document.querySelector(".registerForm");
var nameInput = document.querySelector("#name");
var descriptionInput = document.querySelector("#description");
var priceInput = document.querySelector("#price");

var users = [];
registerForm.onsubmit = function (e) {
    e.preventDefault();
    var user = {
        name: nameInput.value,
        description: descriptionInput.value,
        price: priceInput.value
    }
    users.push(user);
    printData();
}

function printData(){
    var data=``;
    for(var i=0;i<users.length;i++){
        data += `
        <tr>
            <td>${users[i].name}</td>
            <td>${users[i].email}</td>
            <td>${users[i].password}</td>
        </tr>
        `;
        document.querySelector("tbody").innerHTML=data;
    }
}