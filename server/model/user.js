const db = require('../db/db')

class UserDAO {
  async createUser({ name, hashedPassword, email }) {
    const [id] = await db('users').insert({
      'user_name': name,
      // 'uuid': '$2b$10$uP4BQTRGdBdyjnt6uBxHTuZIxxjL.a.TkJvHxRBT7KYL9UTFM.pbK',
      'password': hashedPassword,
      'email': email
    })
      .returning('id');
    return id
  }

  async getUserPassword({ name, email }) {
    const [password] = await db.select('password').from('users').where({
      'user_name': name,
      'email': email
    })
    .returning('password');
    return password
  }

}

module.exports = new UserDAO()