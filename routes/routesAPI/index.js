const router = require('express').Router();
//calls the two exported function from notes.js
const {noteCreate, noteDelete} = require('../../lib/notes')
const notes = require('../../db/db.json')
//get post and delete /notes