class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (!item instanceof ShoppingListItem) {
      return "Please place a shopping list item";
    } else {
      this.items.push(item);
    }
  }

  removeItem(item) {
    let isItem = item instanceof ShoppingListItem;
    let index = this.items.indexOf(item);

    if (!isItem) {
      return false;
    }

    if (index === -1) {
      return false;
    } else if (isItem && index >= 0) {
      this.items.splice(index, 1);
      return true;
    }
  }
}
