var expect = chai.expect;
var should = chai.should();

describe("ShoppingList", function() {
  it("Should be a class", function() {
    expect(ShoppingList).to.be.a("function");
  });

  it("Should have a property named 'items'", function() {
    let cart = new ShoppingList();
    expect(cart.items).to.eql([]);
  });

  describe(".addItem", function() {
    it("Should have a method named addItem that accepts a single ShoppingListItem argument", function() {
      let cart = new ShoppingList();
      expect(cart.addItem).to.be.a("function");
    });

    it("should place an item into the cart", function() {
      let cart = new ShoppingList();
      let poke = new ShoppingListItem("poke", "Spicy ahi");
      cart.addItem(poke);
      expect(cart.items).to.eql([poke]);
    });

    it("should throw an error if it's not a ShoppingListItem object", function() {
      let cart = new ShoppingList();
      expect(cart.addItem.bind(ShoppingListItem, "cookies")).to.throw(Error);
    });
  });
});
