const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("server is running");
});
let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" }
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  users.push(req.body);
  res.send("user added");
});

app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.map(u => (u.id===id ? req.body : u));
  res.send("user updated");
});

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);
  res.send("user deleted");
});
app.listen(3000, () => {
  console.log("server is running on port 3000");

});