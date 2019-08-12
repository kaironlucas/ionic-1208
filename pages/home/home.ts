import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  altura:number;
  peso:number;
  imc:number;

  constructor(public navCtrl: NavController) {

  }
  calc(){
      this.imc = Number(this.peso) / (Number(this.altura) * Number(this.altura));

      

    
  }

}
