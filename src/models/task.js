const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  name: { type: String, required: true },
  done: { type: Boolean, default: false },
  errors: { type: String, default: "oi" },
  checklist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Checklist",
    required: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
