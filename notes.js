const fs = require('fs');

let fetchNotes = () => {
  try{
    let noteString = fs.readFileSync('notes-data.json');
    return notes = JSON.parse(noteString);
  } catch(err){
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };
  
  let duplicateNotes = notes.filter(note => note.title === title);
  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

let getAll = () => {
  // console.log('Getting all note');
  return fetchNotes();
};

let getNote = title => {
  let notes = fetchNotes();
  let filteredNote = notes.filter(note => note.title === title);
  return filteredNote[0];
};
let removeNote = title => {
  let notes = fetchNotes();
  let filteredNote = notes.filter(note => note.title !== title); 
  saveNotes(filteredNote);

  return notes.length !== filteredNote.length;
};

let logNote = (note) => {
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`); 
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote,
}
