import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, IonicModule], 
})
export class HeaderComponent {
  constructor(private menuCtrl: MenuController) {} 

  toggleMenu() {
    this.menuCtrl.toggle('main-menu'); 
  }
}
