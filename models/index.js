const Dogs = require('./Dogs');
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
// module.exports = { Dogs, Owner, PotentialOwner };
