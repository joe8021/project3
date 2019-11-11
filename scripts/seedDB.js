const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitness_users"
);

const exSeed = [
  {
    name: "Lateral Pulldowns",
    instructions: "Grab lat bar with wide parallel grip. With a straight back, pulldown cable bar to upper chest. Return until arms and shoulders are fully extended ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "upper"
  },
  {
    name: "Pushups",
    instructions: "Lie prone on floor with hands slightly wider than shoulder width. Keeping body straight, lower body to floor by bending arms. Push body up until arms are extended. Repeat.",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "upper"
  },
  {
    name: "Shoulder Press",
    instructions: " ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "upper"
  },
  {
    name: "Bicep Curls",
    instructions: " ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "upper"
  },
  {
    name: "Tricep Pulldowns",
    instructions: " ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "upper"
  },
  {
    name: "Squats",
    instructions: " ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "lower"
  },
  {
    name: "Leg Press",
    instructions: " ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "lower"
  },
  {
    name: "Jump Squats",
    instructions: " ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "lower"
  },
  {
    name: "Lunges",
    instructions: " ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "lower"
  },
  {
    name: "Romanian Deadlift",
    instructions: " ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "lower"
  },
  {
    name: "Planks",
    instructions: " ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "core"
  },
  {
    name: "Cable Rotation",
    instructions: " ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "core"
  },
  {
    name: "Situps",
    instructions: " ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "core"
  },
  {
    name: "Burpees",
    instructions: " ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "core"
  },
  {
    name: "Russian Twist",
    instructions: " ",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "core"
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
