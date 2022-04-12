const express = require('express')
const noteController = require('../controller/note')
const userController = require('../controller/user')

const router = express.Router()

router.get('/note', noteController.getAllNotes)
router.post('/note', noteController.createNote)

router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)

module.exports = router