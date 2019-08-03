class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (!item instanceof ShoppingListItem) {
      new Error("Please place a shopping list item");
    } else {
      this.items.push(item);
    }
  }

  removeItem(item) {
    let isItem = item instanceof ShoppingListItem;
    let index = this.items.indexOf(item);

    if (typeof item === "undefined") {
      this.items.pop();
    }

    if (!isItem || index === -1) {
      return new Error("Cannot remove item");
    }

    if (typeof item !== "undefined" && isItem && index >= 0) {
      this.items.splice(index, 1);
      return true;
    }
  }

  render() {
    let tag = "<ul>";
    this.items.forEach(function(e) {
      tag += e.render();
    });
    return (tag += "</ul>");
  }
}
