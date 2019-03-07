
console.log("STARTING APP");
console.log("--------------");

const fs = require("fs");  
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js")

const argv = yargs.argv;

var command = process.argv[2];
console.log("Command :" , command);

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);

	if (note) {
		console.log('Note created.');
		console.log('-------------------');
		console.log(`Title : ${note.title}`);	
		console.log(`Body : ${note.body}`);
	}
	else {console.log("Title already taken.")}
	
} else 
         
if(command === 'read')
{console.log('reading note')
 var readNote = notes.getNote(argv.title);
 console.log(`BODY : ${readNote.body}`) } else

if(command === 'remove')

{console.log('removing note')
var noteRemoved = notes.removeNote(argv.title);
var message = noteRemoved ? 'NOTE REMOVED' : 'NOTE NOT FOUND'
console.log(message);
} else

if(command === 'list')
{console.log('Listing all nodes')
 console.log('-----------------')
 notes.getAll();}

else	{console.log('Command not recognized.')};