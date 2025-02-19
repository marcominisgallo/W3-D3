const footerSpan = document.getElementById("current-year");
const year = new Date().getFullYear();

footerSpan.innerText = year;

const listForm = document.getElementById("to-do-list");
listForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const actionInput = document.getElementById("Azione");

  const listItem = { action: actionInput.value };

  const listItems = document.createElement("div");
  listItems.innerHTML = `
     <p onclick='lineOnWord(event)' ondblclick='noLineOnWord(event)'>-${listItem.action}</p>
     <button onclick='deleteItem(event)'>ELIMINA</button>
     <hr />
    `;
  const itemsContainer = document.getElementById("Lista-azioni");
  itemsContainer.appendChild(listItems);

  actionInput.value = "";

  const ps = document.querySelectorAll("#Lista-azioni > div> p");
  for (let i = 0; i < ps.length; i++) {
    ps[i].classList.add("p");
  }
});

const deleteItem = function (e) {
  const pressedButton = e.target;
  const itemsToRemove = pressedButton.parentElement;
  itemsToRemove.remove();
};

const lineOnWord = function (e) {
  const pressedWord = e.target;
  pressedWord.classList.add("line");
};

const noLineOnWord = function (e) {
  const pressedWord = e.target;
  pressedWord.classList.remove("line");
};
