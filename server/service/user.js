
const bcrypt = require('bcrypt')
const userDAO = require('../model/user')

class UserService {
  async createUser(userDto) {
    // if(userDto.email != 's@m.ru') {throw Error()}
    const { name, password, email } = userDto

    const hashedPassword = await bcrypt.hash(password, 10)

    const id = userDAO.createUser({ name, hashedPassword, email })
    return id
  }

  async loginUser(userData) {
    // if(userDto.email != 's@m.ru') {throw Error()}
    const { name, password, email } = userData
    const hashedPassword = await userDAO.getUserPassword({ name, email })

    if (hashedPassword) {
      bcrypt.compare(password, hashedPassword, (err, hash) => {
        try {
          console.log(hash);
          return true
        } catch (err) {
          console.log(err);
        }

      })

    }
    return false
  }
}

module.exports = new UserService()