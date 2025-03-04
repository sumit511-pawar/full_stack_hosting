const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// ✅ Root route - This will fix the "Cannot GET /" issue
app.get("/", (req, res) => {
  res.send("Hello SAM from Railway Backend!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
