const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const session = require("express-session");
const massive = require("massive");

// CONTROLLERS
const authController = require("./controllers/authController");
const itemsController = require("./controllers/itemsController");

require("dotenv").config();
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../build`));

// SESSIONS
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

// DATABASE
massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("DB be up");
});

// ITEMS
app.get("/api/items", itemsController.getAllItems);
app.get("/api/items/:id", itemsController.getOne);
app.post("/api/products", itemsController.addProduct);
app.put("/api/products", itemsController.editProduct);
app.delete("/api/products/:id", itemsController.deleteProduct);

// CART
// app.post("/api/checkout", cartController.postProduct);

// auth0 GET
app.get("/auth", authController.login);
app.get("/api/user-data", authController.getUserData);

const PORT = process.env.SERVER_PORT || 4000;
app.listen(PORT, () => {
  console.log(`I hear ya on ${PORT}`);
});

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
