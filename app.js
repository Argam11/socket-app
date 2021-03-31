const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = 5000;

app.get("/aaa", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  socket.on("hello", (d) => {
    console.log(d, 55);
  });
  socket.emit("hello", { a: 11 });
});

http.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
