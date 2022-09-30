const router = require('express').Router();
//calls the two exported function from notes.js
const {noteCreate, noteDelete} = require('../../lib/notes')
const notes = require('../../db/db.json')
const uuidv1 = require('uuid/v1');

//get post and delete /notes

router.get('/notes', (req, res) => {

})

router.post('/notes', (req, res) => {

})

router.delete('/notes/:id', (req, res) => {

})