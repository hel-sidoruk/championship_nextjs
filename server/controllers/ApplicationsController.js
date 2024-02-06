const { nanoid } = require('nanoid')
const knex = require('../db')
const TelegramApi = require('node-telegram-bot-api')

const bot = new TelegramApi(process.env.TELEGRAM_BOT);

class ApplicationsController {
  async getAll(req, res) {
    try {
      const applications = await knex('applications').orderBy('name')

      console.log('GET /applications | 200 OK')

      return res.status(200).json(applications);
    } catch (error) {
      console.log(error)

      return res.status(404).json({ error }); 
    }
  }
  
  async create(req, res) {
    try {
      const application = {
        id: nanoid(),
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
  
      await knex('applications').insert([application])
        .then(() => {
          console.log('POST /applications | 201 OK')
          return res.status(201).json({ success: true })
        })
        .catch((err) => console.log(err));
  
      bot.sendMessage(process.env.CHAT_ID, 'Оставлена новая заявка')
  
    } catch (error) {
      console.log(error)
      return res.status(200).json({ error: JSON.stringify(error) })
    }
  }

  async edit(req, res) {
    try {
      const { id } = req.params
  
      await knex('applications').where({ id }).update({
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
      });
      
      console.log(`PATCH /applications/${id} | 200 OK`)
      
      return res.status(200).json('success');
      
    } catch (error) {
      console.log(error)
      return res.status(404).json({ error });
    }
  }
}

module.exports = new ApplicationsController();
