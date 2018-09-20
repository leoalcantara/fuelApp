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
  resultado: AlertController;

  erroGasolina = false;
  erroEtanol = false;
  messageGasolina = '';
  messageEtanol = '';


  constructor(private formBuilder: FormBuilder, private alertCtrl: AlertController) {
    this.valuesForm = formBuilder.group({
      gasolina: ['', Validators.required],
      etanol: ['', Validators.required],
    })
  }

  presentAlert(fuel: string) {
    let alert = this.alertCtrl.create({
      title: fuel,
      subTitle: ' é o melhor combustivel',
      buttons: ['OK']
    });
    alert.present();
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
        this.messageEtanol = 'Ops! Preencha campo Álcool '

      } else {
        this.messageEtanol = '';
        this.erroEtanol = false;
      }
    } else {
      
      this.erroEtanol = false;
      this.erroGasolina = false;      
     
      this.presentAlert(this.comparar(gasolina, etanol));
    
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

  

