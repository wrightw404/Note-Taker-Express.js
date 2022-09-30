const path = require('path');
const fs = require('fs');


//create and delete note functions 
function noteCreate(body, noteArr) {
    const noteNew = body; 
    //push new notes into note array 
    noteArr.push(noteNew);

    //need to write new notes in db.json

}

function noteDelete(id, noteArr) {
    const deleteNote = id; 

    //for loop that goes through the id's in note array 
    for(var i = 0; i < noteArr.length; i++){
        //if statement to check if id is matched with any id in note array
        if(deleteNote === noteArr[i].id) {
            
        }
    }
}
