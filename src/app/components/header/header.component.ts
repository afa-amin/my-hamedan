import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, IonicModule ], 
})
export class HeaderComponent {
  constructor(private menuCtrl: MenuController, private navCtrl: NavController) {} 

  toggleMenu() {
    this.menuCtrl.toggle('main-menu'); 
  }
  goBack() {
    this.navCtrl.back();
  }
}
