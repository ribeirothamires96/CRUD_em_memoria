import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { VeicleService } from '../../app/veicle.service'
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  veicle;
  newVeicleFlag = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private veicleService: VeicleService,
    private alertCtrl: AlertController) {
    this.veicle = this.navParams.get("veicleParam");
    if (!this.veicle) {
      this.veicle = {
        id: "",
        name: "",
        model: "",
        color: "",
        licensePlate: ""
      };
      this.newVeicleFlag = true;
    }
    console.log("nav - param", this.veicle);
  }

  onTrash() {
    let confirm = this.alertCtrl.create({
      title: "Delete?",
      message: `Are you sure you want to delete this veicle: "${this.veicle.model}"?`,
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Confirm",
          handler: () => {
            this.veicleService.removeVeicle(this.veicle);
            this.navCtrl.pop();
          }
        }
      ]
    });
    //exibe
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  ionViewWillLeave (){
    if (this.newVeicleFlag)
    this.veicleService.addVeicle(this.veicle);
    }

}
