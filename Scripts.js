var data = [];
function add() {
  //var item_id = document.getElementById("id").value;
  var item_phone = document.getElementById("phone").value;
  var item_name = document.getElementById("name").value;
  var item = {
    // Id: item_id,
    Phone: item_phone,
    Name: item_name,
  };
  let index = data.findIndex((c) => c.Phone == item.Phone);
  if (index >= 0) {
    data.splice(index, 1, item);
  } else {
    data.push(item);
  }
  console.log(index);
  //data.push(item)
  //console.log(data)
  render();
  clear();
}
function render() {
  table = `
    <tr>
    <th>Phone</th>
    <th>Name</th>
    <th>Actions</th>
    </tr>`;
  for (let i = 0; i < data.length; i++) {
    table += `<tr>
        <td>${data[i].Phone}</td>
        <td>${data[i].Name}</td>
        <th>
        <button onclick="deleteItem(${data[i].Phone})">Delete</button>
        <button onclick="editItem(${data[i].Phone})"  id="btn-edit-item" >Edit</button>
        </th>
        </tr>`;
    // console.log(data);
  }

  document.getElementById("render").innerHTML = table;
  // document.getElementById("btn-edit-item").onclick = function () {
  //   document.getElementById("btn-button").value = " Save";
  // };
}

// // $(document).ready(function () {
// //   $("#btn-edit-item").onclick = function () {
// //     console.log("test");
// //     // $("#btn-button").prop("value", "New text");
// //   };
// // });

function clear() {
  // document.getElementById("id").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("name").value = "";
}
function deleteItem(x) {
  if (confirm("Xac nhan xoa sdt : 0" + x) == true) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].Phone == x) {
        data.splice(i, 1);
        render();
        console.log(confirm);
      }
    }
  } else {
  }
  document.getElementById("render").innerHTML = table;
}

function editItem(x) {
  document.getElementById("btn-button").innerText = " Save";
  for (let i = 0; i < data.length; i++) {
    if (data[i].Phone == x) {
      // document.getElementById("id").value = data[i].Id;
      document.getElementById("phone").value = data[i].Phone;
      document.getElementById("name").value = data[i].Name;
    }
  }
}
// // document.getElementById("btn1").innerHTML   = class="isActive"
// // css: .isActive{
//   Submit = Edit
// }
// function validateForm() {
//   let x = document.getElementById("fname").value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }

// const phone = document.getElementById("phone");
// const name = document.getElementById("name");
// const form = document.getElementById("form");
// const errorElement = document.getElementById("error");

// form.addEventListener("submit", (e) => {
//   let message = [];
//   if (phone.value.length <= 8) {
//     message.push("1");
//   }
//   if (message.length > 0) {
//     e.prevenDefault();
//     error.innerText = message.join(", ");
//   }
// });
