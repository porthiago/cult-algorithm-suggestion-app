const knex = require('../connection.js');

const createContent = async (req, res) => {
  const { name, situation, type } = req.body;
  try {
    if (!name || !type || !situation) {
      return res.status(400).json({ error: 'Missing parameters' });
    }

    const contentAlreadyExists = await knex('contents')
      .whereILike('name', name)
      .first();

    if (contentAlreadyExists) {
      return res.status(400).json({
        error: 'Content already exists',
        content: contentAlreadyExists
      });
    }

    const [culturalContent] = await knex('contents')
      .insert({
        name,
        situation,
        type
      })
      .returning('*');

    return res.json(culturalContent);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllContents = async (req, res) => {
  try {
    const culturalContents = await knex('contents');

    return res.json(culturalContents);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createContent,
  getAllContents
};
