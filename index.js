const express = require("express");

const app = express();
app.use(express.json());

app.post("/test", (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.send("Received");
});

app.get("/pay", (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  var upiLink = "upi://pay?pa=dominospizzaonline@ptybl&pn=JUBILANT%20FOODWORKS%20LIMITED&mc=5814&tid=PYTM60608804771253563397XXXXXXXXXXX&tr=60608804771253563397&am=280.35&cu=INR";
  res.redirect(upiLink);
});

app.listen(process.env.PORT, () => {
  console.log("Server running");
});
