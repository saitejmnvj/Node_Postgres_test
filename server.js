const pgp = require('pg-promise')
const express = require('express')
const db = require("./app/models");

const app = express();
const PORT = process.env.PORT || 8081;
// const PORT = 5432;
const HOST = "0.0.0.0";

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Sample Postgres application." });
});

  

// db.sequelize.sync();  

// file deepcode ignore PromiseNotCaughtNode/test: <please specify a reason of ignoring this>
// deepcode ignore PromiseNotCaughtNode/test: <please specify a reason of ignoring this>
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

require("./app/routes/turorial.routes")(app);



app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`);
