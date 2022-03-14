const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  newThought,
  updateThought,
  removeThought,
  createReaction,
  removeReaction
} = require('../../controllers/thought-controller');
const { remove } = require('../../models/User');

router
  .route('/')
  .get(getAllThoughts)
  .post(newThought);

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

router
  .route('/:thoughtId/reactions')
  .post(createReaction)
  .delete(removeReaction)


module.exports = router;