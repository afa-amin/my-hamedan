import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 

@Component({
  standalone: true,
  selector: 'app-around-me',
  imports: [CommonModule , IonicModule],
  templateUrl: './around-me.component.html',
  styleUrl: './around-me.component.scss'
})

export class AroundMeComponent {
  @Input() title = '';
  @Input() places: { icon: string; name: string }[] = [];
}
