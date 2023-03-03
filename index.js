const car = require("./Car");
const express = require("express");

const app = express();
app.use(express.json());

const Quote = [];

app.get("/api/quote/:id", (req, res) => {
  const quote = Quote.find((q) => q.id === parseInt(req.params.id));
  if (!quote) return res.status(404).send("Not Found!");
  res.send(quote);
});
app.get("/api/quote", (req, res) => {
  res.send(Quote);
});

app.post("/api/quote", (req, res) => {
  const model = req.body.model;
  const year = req.body.year;
  const value = car.getValue(model, year);

  console.log(model);
  const q = {
    id: Quote.length + 1,
    model: model,
    year: year,
    carvalue: value,
  };

  Quote.push(q);

  res.send(q);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
