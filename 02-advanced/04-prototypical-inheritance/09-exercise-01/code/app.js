// Exercise 01: Prototypical Inheritance

// Constructor function (parent object)
function HtmlElement() {
  // Instance member(s)
  this.click = function () {
    console.log("Clicked...");
  };
}

// Prototype member(s)
HtmlElement.prototype.focus = function () {
  console.log("Focused...");
};

// Constructor function (child object)
function HtmlSelectElement(items = []) {
  // Instance member(s)
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
}

// Manually set the child object's "prototype" property to an instance of a new HtmlElement object (parent)
// Using the method Object.create() will NOT work
// The object create will have its "prototype" property set to HtmlElement.prototype
// This excludes the parent object's instance members from being inherited
HtmlSelectElement.prototype = new HtmlElement();

// Reset the child object's "prototype.constructor" property back to its own
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// Test Code
const e = new HtmlElement();
console.log(e);

const h = new HtmlSelectElement(["1", "2", "3"]);
console.log(h);
