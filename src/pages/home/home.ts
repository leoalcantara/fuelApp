import { Component, Input } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  public valuesForm: any;
  erroGasolina = false;
  erroEtanol = false;
  messageGasolina = '';
  messageEtanol = '';


  constructor(formBuilder: FormBuilder) {
    this.valuesForm = formBuilder.group({
      gasolina: ['', Validators.required],
      etanol: [' ', Validators.required],
    })
  }
 
  compara(){
    let {gasolina,etanol} = this.valuesForm.controls;
    if(!this.valuesForm.valid){
       if(!gasolina.valid){
         this.erroGasolina = true;
         this.messageGasolina = 'Ops! valor invalido.'          
       } else {
         this.messageGasolina = '';
         this.erroGasolina = false;
       }

       if (!etanol.valid) {
         this.erroEtanol = true;
         this.messageEtanol = 'Ops! valor invalido.' 
         
       } else {
         this.messageEtanol = '';
         this.erroEtanol = false;
       }
    } else {
      //alert("OK");
      this.erroEtanol = false;
      this.erroGasolina = false;
    }

    
  }

}

  

