var expect = chai.expect;
var should = chai.should();

describe("ShoppingListItem", function() {
  it("Should be a class", function() {
    expect(ShoppingListItem).to.be.a("function");
  });

  it("Should have a property 'name'", function() {
    let milk = new ShoppingListItem("milk");
    milk.name.should.equal("milk");
  });
});
