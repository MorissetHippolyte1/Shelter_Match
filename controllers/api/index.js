const router = require('express').Router();
const { Dogs, Owner, PotentialOwner } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const potentialOwnerData = await PotentialOwner.findAll();
        console.log(potentialOwnerData);
        //converting object into a string
        const serializedPotentialOwner = potentialOwnerData.map((potentialOwner) => potentialOwner.get({ plain: true }));
        console.log(serializedPotentialOwner);
        return res.status(200).json(potentialOwnerData);
        res.render("routes work!", { serializedPotentialOwner });
    } catch(err) {
        return res.status(500).json(err);
    }
});

module.exports = router;

