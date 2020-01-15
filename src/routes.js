const { Router } = require("express");

const routes = Router();

routes.post("/users", (req, res) => {
  return res.json({ ok: true });
});

module.exports = routes;
