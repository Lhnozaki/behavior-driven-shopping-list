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
    let wholeMilk = new ShoppingListItem("milk", "Whole milk");
    wholeMilk.description.should.equal("Whole milk");
  });

  it("Should have a property named 'isDone'", function() {
    let completed = new ShoppingListItem("milk", "Whole milk", "completed");
    completed.isDone.should.equal(false);
  });

  it("Should have a constructor method that accepts 2 arguments, 'name' and 'description'", function() {
    let eggs = new ShoppingListItem("eggs", "Cage free");
    eggs.name.should.equal("eggs");
    eggs.description.should.equal("Cage free");
  });

  describe(".check", function() {
    it("Should be a function", function() {
      let chicken = new ShoppingListItem("chicken", "Organic");
      expect(chicken.check).to.be.a("function");
    });

    it("Should have a method named 'check' that will set isDone property to 'True'", function() {
      let chicken = new ShoppingListItem("chicken", "Organic");
      chicken.check();
      expect(chicken.isDone).to.equal(true);
    });
  });

  describe(".uncheck", function() {
    it("Should be a function", function() {
      let cheese = new ShoppingListItem("cheese", "Mozzarella");
      expect(cheese.uncheck).to.be.a("function");
    });

    it('Should have a method named "uncheck" that will set isDone propefrty to "false"', function() {
      let cheese = new ShoppingListItem("cheese", "Mozzarella");
      cheese.uncheck();
      expect(cheese.isDone).to.equal(false);
    });
  });

  describe(".render", function() {
    it("should be a function", function() {
      let beef = new ShoppingListItem("beef", "t-bone");
      expect(beef.render).to.be.a("function");
    });

    it("Should construct and return an html formatted string", function() {
      let beef = new ShoppingListItem("beef", "t-bone");
      beef.render();
      expect(beef.render()).to.be.a("string");
    });
  });
});
