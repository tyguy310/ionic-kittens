import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-kitten-page',
  templateUrl: 'add-kitten-page.html'
})
export class AddKittenPage {

  name;
  url;
  bio;

  constructor(public navCtrl: NavController, public view: ViewController) {

  }

  saveItem(){

    let newKitten = {
      name: this.name,
      url: this.url,
      bio: this.bio
    };

    this.view.dismiss(newKitten);

  }

  close(){
    this.view.dismiss();
  }

}
