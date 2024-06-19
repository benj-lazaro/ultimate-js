// The this Keyword Demo

const video = {
  title: "Hackers",
  tags: ["Hacking", "90s", "Angelina Jolie"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this); // The 2nd "this" argument passed to forEach() method refers to the video object
  },
  showThis() {
    console.log(this);
  },
};

video.showTags();
video.showThis();

function testRun() {
  console.log(this);
}

testRun();
