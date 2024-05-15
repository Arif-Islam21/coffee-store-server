const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

// use middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Coffee making please wait");
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
