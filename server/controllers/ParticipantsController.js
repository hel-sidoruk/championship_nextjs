const knex = require('../db')
const getSafeQuery = require('../utils/getSafeQuery')
const getParticipantsData = require('../utils/getParticipantsData');

class ParticipantsController {
  async getAll(req, res) {
    try {
      const query = req.query;
      const safeQuery = getSafeQuery(query)
      
      const participants = await knex('participants').where(safeQuery).orderBy('name');
      const data = getParticipantsData(participants, query)
      
      console.log('GET /participants | 200 OK')
      
      return res.status(200).json(data);
      
    } catch (error) {
      console.log(error)
      return res.status(404).json({ error });
    }
  }

  async create(req, res) {
    try {
      const application = {
        id: req.body.id,
        name: req.body.name,
        birthdate: req.body.birthdate,
        division: req.body.division,
        weight: req.body.weight,
        belt: req.body.belt,
        team: req.body.team,
        city: req.body.city,
        phone: req.body.phone,
        email: req.body.email,
        trainer: req.body.trainer,
      }
  
      await knex('participants').insert([application])
      await knex('applications').where({ id: req.body.id }).del()
      
      console.log('POST /participants | 201 OK')
      return res.status(201).json({ success: true })
  
    } catch (error) {
      console.log(error)
      return res.status(200).json({ error: JSON.stringify(error) })
    }
  }
}

module.exports = new ParticipantsController();
