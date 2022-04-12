
const noteModel = require('../model/note')

class NoteService {
    async createNote(noteDto) {
        await noteModel.createNote(noteDto)
    }

    getAllNotes() {
        return noteModel.getAllNotes()
    }
}

module.exports = new NoteService()