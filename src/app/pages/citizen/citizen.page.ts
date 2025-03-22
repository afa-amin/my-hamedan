import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BottomTabBarComponent } from 'src/app/components/bottom-tab-bar/bottom-tab-bar.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { AroundMeComponent } from 'src/app/components/around-me/around-me.component';
import { PlaceCarouselComponent } from 'src/app/components/place-carousel/place-carousel.component';
import { OptionCardListComponent } from 'src/app/components/option-card-list/option-card-list.component';

@Component({
  standalone: true,
  selector: 'app-citizen',
  imports: [CommonModule, IonicModule, BottomTabBarComponent, HeaderComponent, AroundMeComponent, PlaceCarouselComponent, OptionCardListComponent],
  templateUrl: './citizen.page.html',
  styleUrl: './citizen.page.scss'
})
export class CitizenPage {}
