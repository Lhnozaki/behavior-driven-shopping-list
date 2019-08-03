class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (!item instanceof ShoppingListItem) {
      return error;
    } else {
      this.items.push(item);
    }
  }
}
