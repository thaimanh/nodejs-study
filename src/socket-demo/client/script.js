let socket = io("http://localhost:3000/", {
  allowEIO3: false,
});

socket.on("connect", () => {
  console.log("Connected :", socket.id);
  socket.emit("hello", { name: "Manh", age: 24 });

  socket.on("receive", (arg) => {
    console.log(arg);
    document.getElementById("w3review").innerHTML = arg;
  });
});
