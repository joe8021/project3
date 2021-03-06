const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// schema for Exercises Collection
const exerciseSchema = new Schema({
  name: { type: String, required: true },
  instructions: { type: String, required: true },
  demo: { type: String, required: true},
  type: { type: String, required: true},
  muscleTarget: { type: String, required: true}
  
});

const Exercises = mongoose.model("Exercises", exerciseSchema);

module.exports = Exercises;