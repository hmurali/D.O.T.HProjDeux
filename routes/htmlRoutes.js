var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Park.findAll({}).then(function (dbPark) {
      res.render("index", {
        msg: "Welcome!",
        park: dbPark
      });
    });
  });

  // Load park page and pass in a park by id
  app.get("/example/:id", function (req, res) {
    db.Park.findOne({ where: { id: req.params.id } }).then(function (dbPark) {
      res.render("example", {
        park: dbPark
      });
    });
  });

  app.get("/home", function (req, res) {
    res.render("home")


  })


  app.post("/results", function (req, res) {

    console.log('this is te req', req.body)

    const body = req.body

    const where = {}

    const keys = Object.keys(body)

    keys.forEach(function (key) {

      if (body[key] === 'on') {
        where[key] = 1
      }

    })

    console.log(where)

    db.Park.findAll({ where })
      .then(function (parkRespose) {

        var parks = []

        console.log("__________")

        parkRespose.forEach(function (park) {

          console.log(park.dataValues)

          parks.push(park.dataValues)


      
        })
        
        res.render("results", { parks })
        // console.log(typeof parkRespose)

      })


      .catch( function(err){

        console.log(err)

      })

      


  })

  app.get("/create", function (req, res) {
    res.render("create")


  })

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
