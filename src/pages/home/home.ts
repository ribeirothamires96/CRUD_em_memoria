import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VeicleService } from '../../app/veicle.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  veicles;
  constructor(public navCtrl: NavController, private veicleService: VeicleService) {
    this.veicles = veicleService.veicles;
  }

  onItemClick(veicle) {
    this.navCtrl.push('DetailsPage', {
      veicleParam: veicle
    })
  }

  onAddClick (){
    this.navCtrl.push('DetailsPage');
    }
}
