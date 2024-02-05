require('dotenv').config()

const port = process.env.PORT || 5000;
const express = require("express");
const app = express();
const config = require('./knexfile');
const cors = require('cors')
const knex = require('knex')(config);
const TelegramApi = require('node-telegram-bot-api')
const jwt = require('jsonwebtoken');
const { nanoid } = require('nanoid')
const { categories, categoriesBelts, categoriesWeights } = require('./utils/categories');
const { getSafeQuery } = require('./utils/getSafeQuery');

const generateJwt = (login) => {
  return jwt.sign({ login }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

const bot = new TelegramApi(process.env.TELEGRAM_BOT);

app.use(express.json());

app.get('/participants', async (req, res) => {
  try {
    const query = req.query;
    const safeQuery = getSafeQuery(query)

    const data = {};
    const participants = await knex('participants').where(safeQuery).orderBy('name');

    categories.forEach((division) => {
      const categoryParticipants = participants.filter((el) => el.division === division);
      if (query.division && query.division !== division && !categoryParticipants.length) {
        return;
      }
      const belts = categoriesBelts[division];
      const weights = categoriesWeights[division];
      belts.forEach((belt) => {
        const byBelts = categoryParticipants.filter((el) => el.belt === belt);
        if (query.belt && query.belt !== belt && !byBelts.length) {
          return;
        }
        weights.forEach((weight) => {
          const byWeight = byBelts.filter((el) => el.weight === weight);
          if (query.weight && query.weight != weight && !byWeight.length) {
            return;
          }
          const categoryKey = `${division} / ${belt.replace('й', 'е')} пояса / ${weight} КГ`;
          data[categoryKey] = byWeight;
        });
      });
    });

    console.log('GET /participants | 200 OK')

    res.status(200).json(data);

  } catch (error) {
    res.status(404).json({ error });
  }
})

app.post('/participants', async (req, res) => {
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
    res.status(201).json({ success: true })

  } catch (error) {
    console.log(error)
    res.status(200).json({ error: JSON.stringify(error) })
  }
})

app.get('/applications', async (req, res) => {
  try {
    const applications = await knex('applications').orderBy('name');

    console.log('GET /applications | 200 OK')

    res.status(200).json(applications);

  } catch (error) {
    console.log(error)
    res.status(404).json({ error });
  }
})

app.post('/applications', async (req, res) => {
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
        res.status(201).json({ success: true })
      })
      .catch((err) => console.log(err));

    bot.sendMessage(process.env.CHAT_ID, 'Оставлена новая заявка')

  } catch (error) {
    console.log(error)
    res.status(200).json({ error: JSON.stringify(error) })
  }
})

app.patch('/applications/:id', async(req, res) => {
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
    
    res.status(200).json('success');
    
  } catch (error) {
    console.log(error)
    res.status(404).json({ error });
  }
})

app.get('/auth', async (req, res) => {
  try {
    console.log('GET /auth')
    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'Пользователь не авторизован' });
    }
    const tokenHeader = req.headers.authorization.split(' ')[1]
    if (!tokenHeader) {
      return res.status(401).json({ message: 'Пользователь не авторизован' });
    }
    const decoded = jwt.verify(tokenHeader, process.env.SECRET_KEY);
    const token = generateJwt(decoded.login);

    return res.status(200).json({ token });

  } catch (error) {
    console.log(error)
    res.status(404).json({ error });
  }
})

app.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body
    console.log('POST /login')
    console.log(req.body)

    if (login !== process.env.ADMIN_LOGIN) {
      return res.status(403).json({ error: 'Пользователь не найден' });
    }
    if (password !== process.env.ADMIN_PASSWORD) {
      return res.status(403).json({ error:  'Неверный пароль'});
    }
    console.log('POST /api/login | OK')
    const token = generateJwt(login);
    return res.cookie('token', token, { maxAge: 3600 * 24 }).json({ token });

  } catch (error) {
    console.log(error)
    res.status(200).json({ error: JSON.stringify(error) })
  }
})

app.listen(port, () => {
  console.log(`  Listening on port ${port}`);
});
