const Dogs = require('./Dogs');
const PotentialOwner = require('./PotentialOwner');
const Story = require("./Story");
PotentialOwner.hasMany(Dogs, {
    foreignKey: "potentialowner_id",
    onDelete: 'CASCADE',
});
const Owner = require('./Owner');

Owner.hasMany(Dogs, {
  foreignKey: 'owner_id',
  onDelete: "CASCADE",
});

Dogs.belongsTo(Owner, {
  foreignKey: 'owner_id',
});

Owner.belongsTo(PotentialOwner, {
    foreignKey: "potentialowner_id",
    onDelete: 'Cascade'
});

// exporting models
module.exports = { PotentialOwner, Dogs, Owner, Story };
