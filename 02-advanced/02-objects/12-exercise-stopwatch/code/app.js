// Exericse: Stopwatch

// Constructor function
function Stopwatch() {
  // Private members (properties)
  let startTime,
    endTime,
    running,
    duration = 0;

  // Public members (methods)

  // Starts the stopwatch
  this.start = function () {
    if (running) throw new Error("Stopwatch has alredy started.");

    running = true;
    startTime = new Date();
  };

  // Stops the stopwatch
  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started.");

    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

    duration += seconds;
  };

  // Resets the stopwatch & internal implementation (private members)
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;

    console.log("Stopwatch resetted.");
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
