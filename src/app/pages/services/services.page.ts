import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { BottomTabBarComponent } from 'src/app/components/bottom-tab-bar/bottom-tab-bar.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { OptionCardListComponent } from 'src/app/components/option-card-list/option-card-list.component';
import { ServiceListComponent } from 'src/app/components/service-list/service-list.component';
import { AroundMeComponent } from 'src/app/components/around-me/around-me.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, CommonModule, FormsModule, BottomTabBarComponent, HeaderComponent, OptionCardListComponent, ServiceListComponent, AroundMeComponent]
})
export class ServicesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
