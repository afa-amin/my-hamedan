import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { PlaceCarouselComponent } from '../components/place-carousel/place-carousel.component';
import { BottomTabBarComponent } from '../components/bottom-tab-bar/bottom-tab-bar.component';
import { PollComponent } from '../components/poll/poll.component';
import { AroundMeComponent } from '../components/around-me/around-me.component';
import { OptionCardListComponent } from '../components/option-card-list/option-card-list.component';
import { SliderComponent } from '../components/slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, HeaderComponent, PlaceCarouselComponent, BottomTabBarComponent, PollComponent, AroundMeComponent, OptionCardListComponent, SliderComponent],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage {}
