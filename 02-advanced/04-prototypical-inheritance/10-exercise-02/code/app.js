// Exercise 02: Polymorphism

// Constructor function (parent object)
function HtmlElement() {
  this.click = function () {
    console.log("Clicked...");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("Focused...");
};

// Constructor function (child object)
function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };

  this.render = function (item) {
    return `
    <select>
      ${this.items.map((item) => `<option>${item}</option>`).join("")}
    </select>`;
  };
}
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// Constructor function (child object)
function HtmlImageElement(src) {
  this.src = src;
  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

// Test Code
const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("https://"),
];

// Access different versions of the .render() method based on the accessed child object
for (let element of elements) {
  console.log(element.render());
}
