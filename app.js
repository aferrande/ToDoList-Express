const express = require("express");
const router = require("./src/routes/checklist");
const taskRouter = require("./src/routes/task");
const exampleRouter = require("./src/routes/example");
const path = require("path");
const methodOverride = require("method-override");
require("./config/database");

const app = express();

//checking for a json
app.use(express.json());
//checking/accepting other than json
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

// app.use(router);

//podemos também deixar apenas "/" no checklist.js e usar o seguinte comando para que só caia nesse router as urls contendo o "/checklists"
app.use("/checklists", router);
app.use("/checklists", taskRouter.CLTaskRouter);
app.use("/tasks", taskRouter.TRouter);

app.use("/", exampleRouter);

app.listen(3000, () => {
  console.log("Server Running!");
});
