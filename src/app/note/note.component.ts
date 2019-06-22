import { Component, OnInit } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  submittable = false;

  note: Note = {
    title: '',
    description: '',
    id: 0,
    dateCreated: ''
  };

  notes: Note[] = [];

  constructor() {

  }

  readyToSubmit() {
    if (this.note.title && this.note.description) {
      return this.submittable = true;
    }
  }

  createNote(note) {
    return note = new Note(note.title, note.description, note.id, Date());
  }

  onSubmit() {
    this.notes.push(this.createNote(this.note));
    console.log(this.notes);
  }

  ngOnInit() {
  }

}
