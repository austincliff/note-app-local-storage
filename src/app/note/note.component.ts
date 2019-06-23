import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { setFirstTemplatePass } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  submittable = false;

  note = {
    title: '',
    description: '',
    id: 0,
    dateCreated: ''
  };

  notes = [];

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

  deleteNote(i) {
    let notes = this.notes.splice(i, 1);
    return localStorage.setItem('notes', JSON.stringify(notes));
  }

  onSubmit() {
    this.notes.push(this.createNote(this.note));
  }

  localStorage() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
    return this.notes = JSON.parse(localStorage.getItem('notes'));
  }

  ngOnInit() {
    this.notes = JSON.parse(localStorage.getItem('notes'));
  }

}
/*
Turns a JSON object into a string, in this case the notes array
localStorage.setItem('notes', JSON.stringify(this.notes));

Turns a string into a JavaScript object
getLocalStorage = JSON.parse(localStorage.getItem('notes'));
*/
