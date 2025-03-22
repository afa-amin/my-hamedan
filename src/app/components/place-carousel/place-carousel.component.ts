import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-place-carousel',
  standalone: true,
  templateUrl: './place-carousel.component.html',
  styleUrl: './place-carousel.component.scss'
})
export class PlaceCarouselComponent {
  @Input() title = '';
  @Input() items: { image: string; title: string }[] = [];
  // @input اینجا بعدا آدرس های api رو بایند می کنیم ! با if , ... بهش می فهمونیم کدوم api رو بگیره!
}