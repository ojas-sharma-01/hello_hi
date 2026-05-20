const express = require("express");

const app = express();
app.use(express.json());

app.post("/test", (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.send("Received");
});

app.listen(process.env.PORT, () => {
  console.log("Server running");
});
