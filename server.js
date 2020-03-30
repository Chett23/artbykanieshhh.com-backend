const express = require("express");
const cors = require("cors");
var multer = require("multer");
const bodyParser = require("body-parser");

let corsOptions = {
	origin: "*",
	optionsSuccessStatus: 200
};

const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json());

var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, "public");
	},
	filename: function(req, file, cb) {
		cb(null, file.originalname);
	}
});

var upload = multer({ storage: storage }).single("file");

app.post("/upload", (req, res) => {
	upload(req, res, function(err) {
		console.log(req.body);
		if (err instanceof multer.MulterError) {
			return res.status(500).json(err);
		} else if (err) {
			return res.status(500).json(err);
		}
		return res.status(200).send(req.file);
	});
});

app.listen(8000, () => {
	console.log("Server started!");
});
