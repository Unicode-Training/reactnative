const express = require("express");
const app = express();
const port = 3000;

app.get("", (req, res) => {
  res.send(`
    <h1> <a href="exp://192.168.100.163:8081/--/products/2">Vào App</a></h1>
 `);
});

app.listen(port, "192.168.100.163", () => {
  console.log(`Example app listening on port ${port}`);
});
