const express = require("express");

const app = express();
app.use(express.json());

app.post("/test", (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.send("Received");
});

app.get("/pay/:paymentId", (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const pa = req.params.paymentId;
  
  res.send(`redirect:upi://pay?pa=${pa}`);
});

app.listen(process.env.PORT, () => {
  console.log("Server running");
});
