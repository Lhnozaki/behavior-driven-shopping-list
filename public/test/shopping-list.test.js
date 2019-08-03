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

    it("Should place an item into the cart", function() {
      let cart = new ShoppingList();
      let poke = new ShoppingListItem("poke", "Spicy ahi");
      cart.addItem(poke);
      expect(cart.items).to.eql([poke]);
    });

    it("Should throw an error if it's not a ShoppingListItem object", function() {
      let cart = new ShoppingList();
      cart.addItem("chicken");
      expect(cart.addItem.bind(ShoppingListItem, "chicken")).to.throw();
    });
  });

  describe(".removeItem", function() {
    it("Should have a method named removeItem that accepts a single ShoppingListItem argument", function() {
      let cart = new ShoppingList();
      expect(cart.removeItem).to.be.a("function");
    });

    it("Should remove the item that is passed in from the shopping list", function() {
      let cart = new ShoppingList();
      let poke = new ShoppingListItem("poke", "Spicy Ahi");
      let steak = new ShoppingListItem("steak", "Rib Eye");
      let rice = new ShoppingListItem("rice", "white rice");
      cart.addItem(poke);
      cart.addItem(steak);
      cart.addItem(rice);
      cart.removeItem(steak);

      expect(cart.items).to.contain(poke);
      expect(cart.items).to.contain(rice);
      expect(cart.items).to.not.contain(steak);
    });
  });
});
