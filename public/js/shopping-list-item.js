class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.isDone = false;
  }

  check() {
    this.isDone = true;
  }

  uncheck() {
    this.isDone = false;
  }

  render() {
    return `<td>${this.name}</td>
    <td>${this.description}</td>`;
  }
}
