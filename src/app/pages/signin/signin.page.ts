import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { IonContent, IonRow, IonCol, IonNote, IonText, IonGrid } from '@ionic/angular/standalone';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  standalone: true,
  imports: [ CommonModule, IonContent, IonGrid, IonRow, IonCol, IonNote, IonText]
})

export class SigninPage implements OnInit {

otp:string="";
router = inject(Router);

constructor(public loadingctrl:LoadingController, public toastctrl:ToastController) { }

 ngOnInit() {
    this.setipfocuse();
 }

  setipfocuse() {
    for(let i = 1; i <=6; i++) {
      if((this.otp.length + 1) == i) {
        document.getElementById("ip" + i)?.style.background =="var(--ion-color-dark)"
      }
      else {
        document.getElementById("ip" + i)?.style.background =="var(--ion-color-light)"
      }
    }
  }

  clear() {
    this.otp = "";
    this.setipfocuse();
  }

  back() {
    this.otp = this.otp.slice(0, -1);
    this.setipfocuse();
  }

  set(number:any) {
    this.otp += number;
    this.setipfocuse();

    if(this.otp.length == 6) {
      this.presentloading();
      this.checkotp();
    }
  }

  async presentloading() {
    const loading = await this.loadingctrl.create({
      message: 'verifing otp',
      spinner: "circular" 
    });
    await loading.present();
  }

  async presenttoast(message:any, color:any) {
    const toast = await this.toastctrl.create({
      message:message,
      color:color,
      duration:1000,
      position:"middle"
    });
    toast.present();
  }

  checkotp() {
    setTimeout(() => {
      this.loadingctrl.dismiss();

      if(this.otp == "123456") {
        this.presenttoast("otp vrified" , "success");
        this.router.navigateByUrl("home/profile");
        this.clear();
      }
      else {
        this.presenttoast("invalid otp" , "danger");
        this.clear();
      }
    },2000)
}
}