const sequelize = require('../config/connection');
const { Dogs, Owner, PotentialOwner } = require('../models');


const dogsSeedData = require('./DogsSeedData');
const ownersSeedData = require('./OwnersSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const dogs = await Dogs.bulkCreate(DogsSeedData);

  const potentialOwner = await PotentialOwner.bulkCreate(PotentialOwnerSeedData);

  const owner = await Owner.bulkCreate(OwnerSeedData);

//   for (const { id } of potentialOwner) {
//     const newPotentialOwner = await PotentialOwner.create({
//       potentialOwner_id: id,
//     });
//   }

//   for (const owner of OwnerSeedData) {
//     const newOwner = await Owner.create({
//       potentialOwner_id: id,
//     });
//   }
//   {}

  process.exit(0);
};

seedDatabase();
