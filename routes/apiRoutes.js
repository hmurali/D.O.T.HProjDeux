var db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the park
  app.get("/api/park", function(req, res) {
    db.Park.findAll({}).then(function(dbpark) {
      res.json(dbpark);
    });
  });

  // Create a new post route
  app.post("/api/park", function(req, res) {
    db.Park.create(req.body).then(function(dbpark) {
      res.json(dbpark);
    });
  });

  // Delete route by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Park.destroy({ where: { id: req.params.id } }).then(function(dbpark) {
      res.json(dbpark);
    });
  });
};
