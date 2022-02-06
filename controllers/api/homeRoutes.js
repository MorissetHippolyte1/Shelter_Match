const router = require('express').Router();
const { PotentialOwner, Dogs, Owners } = require('../../models');


router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const potentialOwnerData = await potentialOwner.findAll({
      include: [
        {
          model: Owner,
          attributes: ['name', ],
        },
      ],
    });

    // Serialize data so the template can read it
    const potentialOwner = dogsData.map((potentialOwner) => potentialOwner.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      potentialOwner, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/potientialOwner/:id', async (req, res) => {
  try {
    const potentialOwnerData = await PotentialOwner.findByPk(req.params.id, {
      include: [
        {
          model: Owner,
          attributes: ['name','email'],
        },
      ],
    });

    const potentialOwner = potentialOwner.get({ plain: true });

    res.render('potentialOwner', {
      ...potentialOwner,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const potentialOwnerData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: PotentialOwner }],
    });

    const user = potentialOwnerData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// POST owner
router.post('/happyHomes', async (req, res) => {
  try {
    const ownerData = await User.create(req.body);
    res.status(200).json(ownerData);
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;
