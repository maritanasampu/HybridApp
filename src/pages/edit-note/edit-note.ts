import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { FormGroup, FormControl } from '@angular/forms';
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-edit-note',
  templateUrl: 'edit-note.html',
})
export class EditNotePage {
  formGroup: FormGroup;
  note: Note;
  date: Date;
  title: string;
  content: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private noteService: NoteService) {
    this.note = this.navParams.get('note');
    this.formGroup= new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl()
    });

  }

  editNote(createDate: number, note: Note){
    this.noteService.editNote(createDate, note);
    this.navCtrl.push(HomePage)
  }
}
