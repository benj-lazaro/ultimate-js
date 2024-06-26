// Exericse: Stopwatch
// Move the methods of the object to the prototype of the stopwatch object

// NOTE: The purpose of this code is to feature pre-mature optimization
// The setter of the "duration" property exposes itself to be modifiable on runtime
// It defeats the OOP core principle of abstraction

// Constructor function
function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration + value;
    },
  });

  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
  });

  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
  });

  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
  });
}

Stopwatch.prototype.start = function () {
  if (this.running) throw new Error("Stopwatch has alredy started.");

  this.running = true;

  this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
  if (!this.running) throw new Error("Stopwatch is not started.");
  this.running = false;

  this.endTime = new Date();

  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;

  this.duration += seconds;
};

Stopwatch.prototype.reset = function () {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;

  console.log("Stopwatch resetted.");
};
