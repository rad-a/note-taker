// ==== Dependencies ====
const express = require('express');

// Creating a new Epress app
const app = express();

// Initial port
const PORT = process.env.PORT || 8080;


// ==== Routers ====
require("./Develop/routes/htmlRouter")(app);
require("./Develop/routes/apiRouter")(app);


// ==== Middleware ====
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ==== Listener ====
app.listen(PORT, () => {
console.log(`Server is listening on port ${PORT}`);
})

