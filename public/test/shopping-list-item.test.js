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

  it("Should have property named 'description'", function() {
    let wholeMilk = new ShoppingListItem("milk", "wholeMilk");
    wholeMilk.description.should.equal("wholeMilk");
  });

  it("Should have a property named 'isDone'", function() {
    let completed = new ShoppingListItem("milk", "wholeMilk", true);
    completed.description.should.equal(true);
  });
});
