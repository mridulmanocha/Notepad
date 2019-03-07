
const fs = require("fs");

var fetchNotes = () => {

try {
 	var notesString = fs.readFileSync("notes_added.json")
    return JSON.parse(notesString);
}
catch (e) {
 				return [];
	}

}

var saveNotes = (notes) => {

fs.writeFileSync('notes_added.json' , JSON.stringify(notes));

}


var addNote = (title, body) => {
var notes = fetchNotes();
var note = {
	title,
	body,  
};
 
 var duplicateNotes = notes.filter((note) => note.title === title);

 if(duplicateNotes.length === 0)
 {
 	notes.push(note);
 	saveNotes(notes);
 	return note;
 }

 else { console.log('CHANGE TITLE') };



}

var getAll = () => {

	var allNotes = fetchNotes();
	console.log(allNotes);
	
}

var getNote = (title) => {

var notes = fetchNotes();
var readNote = notes.filter((note) => note.title !== title);
return readNote[0];


	
}

var removeNote = (title) => {
	var notes = fetchNotes();
	var newNotes = notes.filter((note) => note.title !== title);
	saveNotes(newNotes)

	return notes.length !== newNotes.length;
	};

module.exports = {

	addNote,
	getAll,
	getNote,
	removeNote
};