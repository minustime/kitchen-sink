const express = require("express");
const port = 8000;
const app = express();
const database = require("./db");

app.get("/api/files", async (req, res) => {
  let results = [];
  try {
    results = await database.FileUpload.find()
      .select(["-_id", "-__v"])
      .lean();
  } catch (err) {
    console.log(err);
  }
  res.send(results);
});

app.post("/api/files", (req, res) => {
  // Handle file uploads
  // accept file,
  // validate it
  // place it in directory
  // update the database
});

async function init() {
  try {
    await database.connect(process.env.MONGO_CONNECTION_STRING);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

init();
