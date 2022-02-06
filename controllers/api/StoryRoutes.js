const router = require('express').Router();
const { Story } = require('../../models');
const Story = require('../../models/Story');


// route to get all stories
router.get('/', async (req, res) => {
    const storyData = await Story.findAll().catch((err) => { 
        res.json(err);
      });
        const story = storyData.map((story) => story.get({ plain: true }));
        res.render('all', { stories });
      });
  
  // route to get one story
  router.get('/story/:id', async (req, res) => {
    try{ 
        const storyData = await Story.findByPk(req.params.id);
        if(!storyData) {
            res.status(404).json({message: 'No Story with this id!'});
            return;
        }
        const story = storyData.get({ plain: true });
        res.render('story', story);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

// post all stories
router.post('/', async (req, res) => {
  try {
    const newProject = await Story.create({
      ...req.body,
      owner_id: req.session.owner_id,
    });

    res.status(200).json(newStory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete one story
router.delete('/:id', async (req, res) => {
  try {
    const storyData = await Story.destroy({
      where: {
        id: req.params.id,
        owner_id: req.session.owner_id,
      },
    });

    if (!storyData) {
      res.status(404).json({ message: 'No story found with this id!' });
      return;
    }

    res.status(200).json(storyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
