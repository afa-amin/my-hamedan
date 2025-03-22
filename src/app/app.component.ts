import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonItem, IonLabel, IonList, IonListHeader, IonIcon } from '@ionic/angular/standalone';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonListHeader, IonIcon],
})
export class AppComponent {
  constructor() {}
}
