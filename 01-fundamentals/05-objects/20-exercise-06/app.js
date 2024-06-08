// Exercise 06: Price Range Object

// In the yelp.com, it has a feature of price range buttons
// Prices ranging from inexpensive ($), moderate ($$), pricey ($$$) & ultra-highend ($$$$)
// Implement the price range concept using objects; determine the properties those objects should have

// Step #1: Create an array of objects; each object is a price range object

let priceRanges = [
  { label: "$", toolTip: "Inexpensive", minPerson: 0, maxPerson: 10 },
  { label: "$$", toolTip: "Moderate", minPerson: 11, maxPerson: 20 },
  { label: "$$$", toolTip: "Pricey", minPerson: 21, maxPerson: 50 },
];

console.log(priceRanges);
