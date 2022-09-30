const router = require('express').Router();
const path = require('path');

//get /notes and * 
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

module.exports = 
    router;
