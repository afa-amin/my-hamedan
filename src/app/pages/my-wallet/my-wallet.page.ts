import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonFooter } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BottomTabBarComponent } from 'src/app/components/bottom-tab-bar/bottom-tab-bar.component';
@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.page.html',
  styleUrls: ['./my-wallet.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonFooter, CommonModule, FormsModule, IonButton, HeaderComponent , BottomTabBarComponent, IonItem]
})
export class MyWalletPage {
  balance = 0;
  amounts = [10000, 20000, 50000, 100000, 200000];
  selectedAmount = 0;

  selectAmount(amount: number) {
    this.selectedAmount = amount;
  }

  increaseBalance() {
    if (this.selectedAmount > 0) {
      alert(`درخواست افزایش ${this.selectedAmount} ریال ثبت شد!`);
    }
  }
}
