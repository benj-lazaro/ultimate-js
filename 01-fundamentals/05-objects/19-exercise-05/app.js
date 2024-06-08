// Exercise 05: Constructor Functions

// Step #1: Imagine building a blogging engine, the user is drafting a post but have not
// published it yet; what would the constructor function should look like
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

// Execute code
const post = new Post(
  "Hi there!",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, molestiae.",
  "You the author"
);

console.log(post);
