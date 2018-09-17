import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public valuesForm: any;

  public  fuel(gasolina: number, etanol:number):string{   
    if(( gasolina * 0.70) >= etanol ){
      return "Etanol";
    } else {
      return "Gasolina";
    }

  };

  
}
