// console.log("Hello World")
// alert("Notifikasi")
// prompt("Mahasiswa UNNES")

// var Promnet = "I Love Promnet"
// console.log(Promnet)
// var Promnet = "I Hate Promnet"
// console.log(Promnet)

// let Promnet = "I Love Promnet"
// console.log(Promnet)
// Promnet = "I Hate Promnet"
// console.log(Promnet)

// const Promnet = "I Love Promnet"
// console.log(Promnet)
// Promnet = "I Hate Promnet"
// console.log(Promnet)

// let totalpoin = prompt("Masukan Point Anda")
//     if(totalpoin > 100){
//         document.write("<h1>Congratulation<h1>");
//     }
//     else{
//         document.write("<h1>Thank You<h1>");
//     }

// let x = 6;
// let y = 3;

// if (x < 10 && y > 1) {
//   console.log("a: true");
//   document.write("<h1>BENAR<h1>");
// } else {
//   console.log("a: false");
//   document.write("<h1>SALAH<h1>");
// }

// if (x < 10 && y < 1) {
//   console.log("b: true");
//   document.write("<h1>BENAR<h1>");
// } else {
//   console.log("b: false");
//   document.write("<h1>SALAH<h1>");
// }

// if (x == 5 || y == 5) {
//   console.log("c: true");
//   document.write("<h1>BENAR<h1>");
// } else {
//   console.log("c: false");
//   document.write("<h1>SALAH<h1>");
// }

// if (x == 6 || y == 5) {
//   console.log("d: true");
//   document.write("<h1>BENAR<h1>");
// } else {
//   console.log("d: false");
//   document.write("<h1>SALAH<h1>");
// }

// if (!(x == y)) {
//   console.log("e: true");
//   document.write("<h1>BENAR<h1>");
// } else {
//   console.log("e: false");
//   document.write("<h1>SALAH<h1>");
// }

// let x = 6;
// let y = 3;
// console.log(x < 10 && y > 1)
// console.log(x < 10 && y < 1)
// console.log(x == 5 || y == 5)
// console.log(x == 6 || y == 5)
// console.log(!(x == y))

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");

        const todoTextSpan = document.createElement("span");
        todoTextSpan.textContent = todoText;

        const completeCheckbox = document.createElement("input");
        completeCheckbox.type = "checkbox";
        completeCheckbox.classList.add("complete-checkbox");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("X-button");

        todoItem.appendChild(completeCheckbox);
        todoItem.appendChild(todoTextSpan);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);
        todoInput.value = "";

        completeCheckbox.addEventListener("change", function() {
            if (completeCheckbox.checked) {
                const deletedText = document.createElement("del");
                deletedText.textContent = todoText;
                todoTextSpan.textContent = ''; 
                todoTextSpan.appendChild(deletedText); 
            } else {
                todoTextSpan.textContent = todoText; 
            }
        });
        
        deleteButton.addEventListener("click", function() {
            todoItem.remove();
        });
    }
});