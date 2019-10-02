"use strict";

const cart = new ShoppingList();
const addItemBtn = document.getElementById("addShoppingListItemButton");
let tbody = document.getElementById("tbody");

addItemBtn.addEventListener("click", addToShoppingList);

function addToShoppingList() {
  let newItem = new ShoppingListItem(Title.value, Description.value);
  cart.addItem(newItem);
  let output = cart.render();
  tbody.innerHTML = output;
}

document.addEventListener("click", function(e) {
  if (e.target.id === "checkmark") {
    console.log("hello");
  }
});
