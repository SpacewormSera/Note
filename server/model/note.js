const db = require('../db/db')

class NoteModel {
    async createNote(data) {
        await db('note').insert({
            uuid: data.id,
            data: data.noteText
        })
    }

    async getAllNotes() {
        const notes = await db.select('uuid', 'data').from('note')
        return notes
    }
}

module.exports = new NoteModel()