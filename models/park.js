module.exports = function(sequelize, DataTypes) {
  var Park = sequelize.define("Park", {

    // id: {},
    park_name: {
      type: DataTypes.STRING
    },
    park_address: {
      type: DataTypes.STRING
    },
    is_petfriendly: {
      type: DataTypes.BOOLEAN
    },
    baseball_field: {
      type: DataTypes.BOOLEAN
    },
    basket_court: {
      type: DataTypes.BOOLEAN
    },
    tennis_court: {
      type: DataTypes.BOOLEAN
    },
    playground: {
      type: DataTypes.BOOLEAN
    },
    trail: {
      type: DataTypes.BOOLEAN
    },
    body_water: {
      type: DataTypes.BOOLEAN
    },
    picture_URL: {
      type: DataTypes.STRING(500)
    },


   
    // picture_url: {
    //   type: DataTypes.STRING
    // },


  }, {
    timestamps:false
  });
  return Park;
};
