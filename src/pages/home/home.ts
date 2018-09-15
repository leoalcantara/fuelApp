import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public valuesForm: any;



  constructor(formBuilder: FormBuilder){
    this.valuesForm = formBuilder.group({
      Gasolina:['', Validators.required],
      Etanol:['', Validators.required]
    })

  }
}
