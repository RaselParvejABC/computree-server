import express from "express";
import courses from "./data/courses.json" assert { type: "json" };

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("CompuTree Server is Running Happily!");
});

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.get("/course/:id", (req, res) => {
  res.json(courses.find((course) => course["id"] === req.params.id));
});

app.listen(port, () => {
  console.log(`CompuTree Server is listening on port ${port}`);
});
