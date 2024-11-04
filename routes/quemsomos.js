router.get("/", (req, res) => {
    res.render("base", {
      title: "quem somos",
      view: "quemsomos", // Passa a view 'index.ejs' para ser carregada no body
    });
  });