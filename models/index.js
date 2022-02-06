const Dogs = require('./Dogs');
const PotentialOwner = require('./PotentialOwner');
const Owner = require('./Owner');

Owner.hasMany(Dogs, {
  foreignKey: 'owner_id',
  onDelete: "CASCADE",
});

Dogs.belongsTo(Owner, {
  foreignKey: 'owner_id',
});

module.exports = { Dogs, PotentialOwner, Owner };
