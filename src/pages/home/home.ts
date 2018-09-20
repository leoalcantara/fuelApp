import { Component, Input } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  valuesForm: FormGroup;
  erroGasolina = false;
  erroEtanol = false;
  messageGasolina = '';
  messageEtanol = '';


  constructor(private formBuilder: FormBuilder) {
    this.valuesForm = formBuilder.group({
      gasolina: ['', Validators.required],
      etanol: [' ', Validators.required],
    })
  }

  validar() {
    let { gasolina, etanol } = this.valuesForm.controls;
    if (!this.valuesForm.valid) {
      if (!gasolina.valid) {
        this.erroGasolina = true;
        this.messageGasolina = 'Ops! Preencha o campo Gasolina '
      } else {
        this.messageGasolina = '';
        this.erroGasolina = false;
      }

      if (!etanol.valid) {
        this.erroEtanol = true;
        this.messageEtanol = 'Ops! Preencha campo Etanol '

      } else {
        this.messageEtanol = '';
        this.erroEtanol = false;
      }
    } else {
      //alert(parseFloat(gasolina.value) + parseFloat(etanol.value));
      this.erroEtanol = false;
      this.erroGasolina = false;
      alert(this.comparar(gasolina, etanol));
    }

  }

  comparar(gasolina, etanol): string{
    if((parseFloat(gasolina.value)*0.7) > parseFloat(etanol.value)){
      return "Etanol"
    } else{
      return "Gasolina"
    }

  }

}

  

