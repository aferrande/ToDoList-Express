const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://127.0.0.1:27017/To-Do-List", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
