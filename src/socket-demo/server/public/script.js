const socket = io()

socket.on("connect", function() {
  document.addEventListener("mousemove", (e) => {
  const xPercent = e.clientX / document.body.offsetWidth;
  const yPercent = e.clientY / document.body.offsetHeight;
  socket.emit("me move", xPercent, yPercent);
});
  
  socket.on("player move", function(id, x, y) {
  let playerElement = document.getElementById("player_" + id);

  if (!playerElement) {
    playerElement = document.createElement("div");
    playerElement.classList.add("player");
    playerElement.id = "player_" + id;
    document.body.appendChild(playerElement);
  }
  
  playerElement.style.left = x * 100 + "%";
  playerElement.style.top = y * 100 + "%";
});

  socket.on("player disconnected", function(id) {
  const playerElement = document.getElementById("player_" + id);
  if (playerElement) {
    playerElement.remove();
  }
});
});