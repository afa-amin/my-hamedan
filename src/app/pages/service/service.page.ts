import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BottomTabBarComponent } from 'src/app/components/bottom-tab-bar/bottom-tab-bar.component';
import { IonCheckbox } from '@ionic/angular/standalone';


@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
  standalone: true,
  imports: [ CommonModule, IonicModule, HeaderComponent, BottomTabBarComponent]
})
export class ServicePage {
  
  serviceTitle: string = 'استعلام ملک در بافت فرسوده'; 
  responseDays: number = 3; 
  serviceDescription: string = 'در این خدمت می‌توانید با وارد نمودن کد نوسازی ملک خود، از بودن یا نبودن ملک در بافت فرسوده مطلع شوید.';
  serviceConditions: string = 'شرایط خاص این خدمت...'; 
  requiredDocuments: string = 'شناسنامه، سند ملک، ...';
  isConditionsAccepted: boolean = false;
}
