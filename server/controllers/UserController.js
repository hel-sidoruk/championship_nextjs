const jwt = require('jsonwebtoken');

const generateJwt = (login) => {
  return jwt.sign({ login }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

class UserController {
  async check(req, res) {
    try {
      if (!req.headers.authorization) {
        return res.status(401).json({ message: 'Пользователь не авторизован' });
      }
      const tokenHeader = req.headers.authorization.split(' ')[1]
      if (!tokenHeader) {
        return res.status(401).json({ message: 'Пользователь не авторизован' });
      }
      const decoded = jwt.verify(tokenHeader, process.env.SECRET_KEY);
      const token = generateJwt(decoded.login);
      
      console.log('GET /user/auth | 200 OK')
      return res.status(200).json({ token });
  
    } catch (error) {
      console.log(error)
      return res.status(404).json({ error });
    }
  }

  async login(req, res) {
    try {
      const { login, password } = req.body

      if (login !== process.env.ADMIN_LOGIN) {
        return res.status(403).json({ error: 'Пользователь не найден' });
      }
      if (password !== process.env.ADMIN_PASSWORD) {
        return res.status(403).json({ error:  'Неверный пароль'});
      }
      const token = generateJwt(login);

      console.log('POST /user/login | 200 OK')
      return res.cookie('token', token, { maxAge: 3600 * 24 }).json({ token });
    } catch (error) {
      console.log(error)
      res.status(200).json({ error: JSON.stringify(error) })
    }
  }
}

module.exports = new UserController();
