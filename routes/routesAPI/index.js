const router = require('express').Router();
//calls the two exported function from notes.js
const {noteCreate, noteDelete} = require('../../lib/notes')
const notes = require('../../db/db.json')


//  module.exports = router;
const { v4: uuidv4 } = require('uuid');

//get post and delete /notes

router.get('/notes', (req, res) => {
    let savedResults = notes;
    res.json(savedResults);
})

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    const createdNote = noteCreate(req.body, notes);
    res.json(createdNote);
})


router.delete('/notes/:id', (req, res) => {
    noteDelete(notes, req.params.id);
    res.redirect('');
})

module.exports = 
router;