const express = require("express");
const router = express.Router();

// Rota para a página inicial
router.get("/", (req, res) => {
  res.render("base", {
    title: "Home",
    view: "index", // Passa a view 'index.ejs' para ser carregada no body
  });
});

router.get("/quemsomos", (req, res) => {
  res.render("base", {
    title: "Quem somos",
    view: "quemsomos", // Passa a view 'index.ejs' para ser carregada no body
  });
});

module.exports = router;
