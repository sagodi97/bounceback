const express = require("express");
const app = express();
var contentType = require("content-type");
var getRawBody = require("raw-body");

app.use(function(req, res, next) {
  getRawBody(
    req,
    {
      length: req.headers["content-length"],
      limit: "1mb"
    },
    function(err, string) {
      if (err) return next(err);
      req.text = string;
      next();
    }
  );
});

const port = process.env.PORT || 1997;

app.post("/", (req, res) => {
  console.log(`POST REQ from ${req.hostname}:\n\n ${req.text}`);
  res.send(req.text);
});

app.listen(port, "0.0.0.0", () => console.log(`Bounceback is now live and listening on ${port}`));
