import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  addNote(){
    this.navCtrl.push(AddNotePage);
  }

}
