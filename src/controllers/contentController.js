const knex = require('../connection.js');

const createContent = async (req, res) => {
  let { name, situation, type, author, released_date, genre, tags, url_reference, midia, duration } = req.body;
  try {
    if (!name || !type || !situation) {
      return res.status(400).json({ error: 'Missing parameters' });
    }

    if (!released_date) {
      released_date = null;
    }

    const contentAlreadyExists = await knex('contents')
      .whereILike('name', name)
      .andWhere('midia', midia)
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
        type,
        author,
        released_date,
        genre,
        tags,
        url_reference,
        midia,
        duration
      })
      .returning('*');

    return res.json({message: 'Content created successfully'});
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
