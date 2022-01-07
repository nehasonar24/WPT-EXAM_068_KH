const express = require("express");
const app = express();
app.use(express.json());
let cors = require("cors");
app.use(cors());

const { addUser, selectAllmassages } = require("./user.js");
app.get("/user", async (req, res) => {
  const list = await selectAllmassages();
  res.json(list);
});
app.post("/adduser", async (req, res) => {
  const list = req.body;
  await addUser(list);
  res.json({ message: "Record Added" });
});
app.listen(4000, () => {
  console.log("Connection Successful.");
});
