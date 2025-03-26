import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-place-carousel',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './place-carousel.component.html',
  styleUrl: './place-carousel.component.scss'
})
export class PlaceCarouselComponent {
  @Input() title = '';
  @Input() items: { image: string; title: string }[] = [];
  // @input اینجا بعدا آدرس های api رو بایند می کنیم ! با if , ... بهش می فهمونیم کدوم api رو بگیره!
}