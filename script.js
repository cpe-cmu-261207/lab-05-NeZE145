const inputAdd = document.getElementById("input-add-todo");
const todoCtn = document.getElementById("todo-container");

inputAdd.onkeyup = (event) => {
  if (event.key !== "Enter") return;
  addTodo(inputAdd.value, "");
};

function addTodo(title, completed) {
  //create a div that holds todo title, done button, delete button
  const div = document.createElement("div");
  div.className = "border-bottom p-1 py-2 fs-2 d-flex";

  //create span for showing title
  const span = document.createElement("span");
  span.innerText = title;
  span.style.textDecoration = completed ? "line-through" : "";
  span.className = "me-3";

  //create done button
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.className = "btn btn-success me-2 ";

  //create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "btn btn-danger";
  if (title == "") {
    alert("AASASASDASD");
  } else {
    todoCtn.prepend(div);
    div.prepend(deleteBtn);
    div.prepend(doneBtn);
    div.prepend(span);
  }
  deleteBtn.onclick = () => {
    todoCtn.removeChild(div);
    const a = localStorage.getItem("AA");
    console.log(a);
  };
  deleteBtn.style.display = "none";

  doneBtn.style.display = "none";
  div.onmouseout = () => {
    doneBtn.style.display = "none";
    deleteBtn.style.display = "none";
  };
  div.onmouseover = () => {
    doneBtn.style.display = "";
    deleteBtn.style.display = "";
  };

  doneBtn.onclick = () => {
    if (span.style.textDecoration == "") {
      span.style.textDecoration = "line-through";
    } else {
    }
  };
  saveTodo();
}
const data = [];

function saveTodo() {
  const a = inputAdd.value;
  data.push(JSON.stringify(a));

  localStorage.setItem("AA", data);
}

function loadTodo() {
  const a = localStorage.getItem("tasks");
  console.log(a);
}
loadTodo();
