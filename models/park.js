module.exports = function(sequelize, DataTypes) {
  var Park = sequelize.define("Park", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Park;
};
