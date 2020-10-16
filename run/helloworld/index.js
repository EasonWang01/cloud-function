const express = require("express");
const app = express();

const sampleData1 = {
  name: "John",
  age: 20,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

app.get("/", (req, res) => {
  res.json(sampleData1);
});

const port = 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
