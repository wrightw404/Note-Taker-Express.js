const path = require('path');
const fs = require('fs');



//create and delete note functions 
function noteCreate(body, noteArr) {
    const noteNew = body; 
    //push new notes into note array 
    noteArr.push(noteNew);

    //need to write new notes in db.json
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify({notes: noteArr}, null, 2));
    return noteNew;
}


function noteDelete(id, noteArr) {
    const deleteNote = id;
    //for loop that goes through the id's in note array 
    for (let i = 0; i < noteArr.length; i++) {
      if (deleteNote === noteArr[i].id) {
        noteArr.splice(i, 1);

        //write
        fs.writeFileSync(
          path.join(__dirname, "../db/db.json"),
          JSON.stringify({notes: noteArr}, null, 2), err => {
            if (err) {
              throw err;
            }
          });
      }
    }
  }

module.exports = {
    noteCreate,
    noteDelete
}