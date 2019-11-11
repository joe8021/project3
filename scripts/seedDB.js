const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitness_users"
);

const exSeed = [
  {
    name: "Lateral Pulldowns",
    instructions: " ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "upper"
  },
  {
    name: "Lateral Pulldowns",
    instructions: " ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "upper"
  },
  {
    name: "Lateral Pulldowns",
    instructions: " ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "upper"
  },
  {
    name: "Lateral Pulldowns",
    instructions: " ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "upper"
  }
];

db.Exercises.remove({})
  .then(() => db.Exercises.collection.insertMany(exSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
