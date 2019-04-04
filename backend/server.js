const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/api");
// const path = require("path");
// require("dotenv").config({ path: "../.env" });

const app = express();

const port = process.env.PORT || 5000;

//connect to the database
mongoose
.connect('mongodb+srv://ESSDEV:essdev1@kdeals-gkguj.mongodb.net/KDeals', { useNewUrlParser: true })
	.then(() => console.log(`Database connected successfully`))
	.catch(err => console.log(err));
 


// .connect(process.env.DB_MONGO, { useNewUrlParser: true })
// mongoose.connect("mongodb://localhost/KDeals");
// mongodb://127.0.0.1/KDeals

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.use(bodyParser.json());

app.use("/api", routes);

app.use((err, req, res, next) => {
	console.log(err);
	next();
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
