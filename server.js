const express = require("express");
const cors = require("cors");
const app = express();

let rooms = [];

app.use(cors());
app.use(express.json());

app.post("/create-room", (req, res) => {
  rooms.push(req.body);
  res.status(200).send({ msg: "created" });
});

app.get("/enter-room", (req, res) => {
  let name = req.query.name;
  let roomIndex = rooms.findIndex((room) => room.name == name);

  if (roomIndex != -1) {
    res.status(200).send(rooms[roomIndex]);
    rooms.splice(roomIndex, 1);
  } else {
    res.status(400).send({ msg: "NOT FOUND" });
  }
});

app.listen(3000, () => {
  console.log("\n");
  console.log("========================================");
  console.log("Server Running...");
  console.log(`PORT: 3000`);
  console.log("========================================");
  console.log("\n");
});
