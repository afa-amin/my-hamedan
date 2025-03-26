import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [RouterModule,IonApp, IonRouterOutlet, IonContent, IonHeader, IonMenu, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonIcon],
})
export class AppComponent {
  constructor() {}
}
