let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

// Testing Committ
//Create todo list item
addToDoButton.addEventListener("click", function () {
  var li = document.createElement("Li");
  var divRight = document.createElement("div");
  var divLeft = document.createElement("div");
  var radio = document.createElement("div");
  var txt = document.createElement("span");
  var input = document.getElementById("inputField").value.trim();

  if (!input.length) return false;
  // cancel click
  else {
    txt.innerText = inputField.value;
    radio.classList.add("radio");
    divRight.classList.add("trash");
    divLeft.appendChild(radio);
    divLeft.appendChild(txt);

    li.appendChild(divLeft);
    li.appendChild(divRight);

    toDoContainer.appendChild(li);
    inputField.value = "";
  }

  divLeft.addEventListener("click", function () {
    var x = radio.classList.contains("completed");

    if (x === true) {
      radio.classList.remove("completed");
      radio.classList.add("radio");
      txt.style.opacity = "100%";
      li.style.opacity = "100%";
      txt.style.textDecoration = "none";
    } else {
      radio.classList.remove("radio");
      radio.classList.add("completed");
      txt.style.textDecoration = "line-through";
      txt.style.opacity = "50%";
      li.style.opacity = "50%";
    }
  });

  divRight.addEventListener("click", function () {
    toDoContainer.removeChild(li);
  });
});
