// Exercise 04: Blog Post Object

// Step #1: Create a blog post object with the following properties
// title, body, author, views,
// comments (an array containing an object with properties of author, body properties), isLive (a boolean)

// Step #2: Use the object literal notation / syntax to create & initialize a blog post object

const blogPost = {
  title: "Click(bait) Me!",
  body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, molestiae.",
  author: "Me",
  views: 123,
  comments: [
    { author: "Shapiro the cat", body: "Feed me meow!" },
    { author: "Garfield", body: "Where's my lasagna?" },
  ],
  isLive: true,
};

console.log(blogPost);
