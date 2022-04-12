
const noteService = require('../service/note')

class NoteController {
  async createNote(req, res) {
    try {
      const id = await noteService.createNote(req.body)
      res.status(201).json(id)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getAllNotes(req, res) {
    try {
      const notes = await noteService.getAllNotes()
      res.status(200).json(notes)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = new NoteController()