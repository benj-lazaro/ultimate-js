// Changing this Demo

function playVideo() {
  console.log(this); // By default, "this" references "window" object
}

// Executes the function as a standalone function
playVideo();

// Using .call() method to change the value of "this"
playVideo.call({ name: "John Wick" }, 1, 2);

// Using .apply() method to change the value of "this"
playVideo.apply({ name: "Thomas Anderson" }, [1, 2]);

// Using .bind() method to change the value of "this"
const newFunc = playVideo.bind({ name: "John Constantine" });
newFunc();

// Alternative way of executing .bind()
playVideo.bind({ name: "John Constantine" })();

// Previous example using .bind()
// const video = {
//   title: "Hackers",
//   tags: ["Hacking", "90s", "Angelina Jolie"],
//   showTags() {
//     this.tags.forEach(
//       function (tag) {
//         console.log(this.title, tag);
//       }.bind(this)
//     );
//   },
//   showThis() {
//     console.log(this);
//   },
// };

// Using an arrow function (better & newer approach)
const video = {
  title: "Hackers",
  tags: ["Hacking", "90s", "Angelina Jolie"],
  showTags() {
    this.tags.forEach((tag) => console.log(this.title, tag));
  },
};

video.showTags();
