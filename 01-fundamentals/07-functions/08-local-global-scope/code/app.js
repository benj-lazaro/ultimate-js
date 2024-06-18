// Local and Global Scope Demo

const color = "red"; // Global scope

function start() {
  const message = "hi"; // Function scopr
  console.log(message);

  const color = "blue";
  console.log(color);
}

function stop() {
  const message = "bye"; // Function scopr
  console.log(message);
  console.log(color);
}

start();
stop();
