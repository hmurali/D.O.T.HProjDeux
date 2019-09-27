var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Park.findAll({}).then(function(dbPark) {
      res.render("index", {
        msg: "Welcome!",
        park: dbPark
      });
    });
  });

  // Load park page and pass in a park by id
  app.get("/example/:id", function(req, res) {
    db.Park.findOne({ where: { id: req.params.id } }).then(function(dbPark) {
      res.render("example", {
        park: dbPark
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
