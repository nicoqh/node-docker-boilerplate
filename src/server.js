// src/server.js
import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.send("Hello, world!");
});

// Instead of hardcoding the port number, we can pass
// it at runtime by setting an environment variable.
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
});

export default app;
