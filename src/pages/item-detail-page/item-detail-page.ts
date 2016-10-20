import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-detail-page',
  templateUrl: 'item-detail-page.html'
})
export class ItemDetailPage {

  name;
  url;
  bio;

  constructor(public navParams: NavParams){

  }

  ionViewDidLoad() {
    this.name = this.navParams.get('kitten').name;
    this.url = this.navParams.get('kitten').url;
    this.bio = this.navParams.get('kitten').bio;
  }

}
