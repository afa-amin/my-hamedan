import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 
import { RouterModule } from '@angular/router';  

@Component({
  selector: 'app-bottom-tab-bar',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './bottom-tab-bar.component.html',
  styleUrls: ['./bottom-tab-bar.component.scss'],
})
export class BottomTabBarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
