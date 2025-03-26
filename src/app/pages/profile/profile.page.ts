import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BottomTabBarComponent } from 'src/app/components/bottom-tab-bar/bottom-tab-bar.component';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [IonicModule, CommonModule, HeaderComponent, BottomTabBarComponent],
  templateUrl: './profile.page.html',
  styleUrl: './profile.page.scss'
})
export class ProfilePage {
  user = {
    fullName: 'امین محمدزاده',
    phone: '09308510303',
    nationalCode: '2020902030',
    fatherName: 'سعید',
    birthDate: '۱۳۸۲/۰۱/۲۲',
    address: 'همدان جمهوری شهرک',
  };

  editProfile() {
    alert('رفتن به صفحه ویرایش پروفایل');
  }
}
