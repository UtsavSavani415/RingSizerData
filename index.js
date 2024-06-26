import express from "express";
import sizes from "./src/utils/sizes.js";
import { tableSizes } from "./src/utils/tableSizes.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("GET request to homepage");
});
app.get("/sizes", (req, res) => {
  res.send({ res: sizes });
});
app.get("/tablesizes", (req, res) => {
  res.send({ res: tableSizes });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
