const knex = require('../connection.js');

const createRating = async (req, res) => {
  try {
    const {
      buzz,
      friends,
      attraction,
      intelect,
      duration,
      time,
      age,
      current_tolerance,
      awe
    } = req.body;

    const { id } = req.params;

    const ratingAlreadyExists = await knex('rating')
      .where('content_id', id)
      .first();

    if (ratingAlreadyExists) {
      return res.status(400).json({
        error: 'Rating already exists. Update the rating instead.'
      });
    }

    if (
      !buzz ||
      !friends ||
      !attraction ||
      !intelect ||
      !duration ||
      !time ||
      !age ||
      !current_tolerance ||
      !awe
    ) {
      return res.status(400).json({ error: 'Missing parameters' });
    }

    const [ratingContent] = await knex('rating')
      .where({ id })
      .insert({
        content_id: id,
        buzz,
        friends,
        attraction,
        intelect,
        duration,
        time,
        age,
        current_tolerance,
        awe
      })
      .returning('*');

    return res.json(ratingContent);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllRatings = async (req, res) => {
  try {
    const ratings = await knex('rating');

    return res.json(ratings);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createRating, getAllRatings };
