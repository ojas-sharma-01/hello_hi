const express = require("express");

const app = express();
app.use(express.json());

app.post("/test", (req, res) => {
  console.log(req.body);
  res.send("Received");
});

app.listen(process.env.PORT, () => {
  console.log("Server running");
});
