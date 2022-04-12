const userService = require('../service/user')

class UserController {

  async createUser(req, res) {
    try {
      const user = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
      }

      const id = await userService.createUser(user)

      res.status(201).json(id)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async loginUser(req, res) {
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }

      const loggedIn = await userService.loginUser(user)
      console.log('loggedIn ', loggedIn);
      res.status(200) // todo return json notes and redirect to notes 
    } catch (error) {
      res.status(401).json(error)
    }
  }
}

module.exports = new UserController()