import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddKittenPage } from '../add-kitten-page/add-kitten-page';
import { ItemDetailPage } from '../item-detail-page/item-detail-page';
import { KittenData } from './kitten-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  kittens = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    this.kittens = new KittenData().kittens
  }

  addItem(){

    let addModal = this.modalCtrl.create(AddKittenPage);

    addModal.onDidDismiss(kitten => {
      if(kitten){
        this.saveItem(kitten);
      }
    });

    addModal.present();

  }

  saveItem(kitten){
    this.kittens.push(kitten);
  }

  viewItem(kitten){
    this.navCtrl.push(ItemDetailPage, {
      kitten: kitten
    });
  }

}
