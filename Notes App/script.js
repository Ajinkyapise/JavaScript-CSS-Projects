const notescontainer = document.querySelector(".notes-container");
const btn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function shownotes() {
  notescontainer.innerHTML = localStorage.getItem("notes");
}
shownotes();
function updateStorage() {
  localStorage.setItem("notes", notescontainer.innerHTML);
}

btn.addEventListener("click", () => {
  let inputbox = document.createElement("p");
  inputbox.className = "input-box";
  inputbox.setAttribute("contenteditable", "true");

  let img = document.createElement("img");
  img.src = "images 3/delete.png";

  notescontainer.appendChild(inputbox).appendChild(img);
});
notescontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
      }
    });
  }
});
