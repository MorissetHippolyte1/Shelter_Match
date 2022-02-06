const Dogs = require('./Dogs');
<<<<<<< HEAD
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
=======
const Owner = require('./Owner');
const PotentialOwner = require('./PotentialOwner');

PotentialOwner.hasMany(Dogs, {
    foreignKey: "potentialowner_id",
    onDelete: 'CASCADE'
});

Dogs.belongsTo(PotentialOwner, {
    foreignKey: "potentialowner_id"
});

Owner.belongsTo(PotentialOwner, {
    foreignKey: "potentialowner_id",
    onDelete: 'Cascade'
});
//exporting models
module.exports = { Dogs, Owner, PotentialOwner };
>>>>>>> 7d4e63df288e657abc1c9e6953fab3d2fb7c2457
