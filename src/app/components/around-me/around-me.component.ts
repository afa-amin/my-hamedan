import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-around-me',
  imports: [CommonModule , IonicModule, RouterModule],
  templateUrl: './around-me.component.html',
  styleUrl: './around-me.component.scss'
})

export class AroundMeComponent {
  @Input() title = '';
  @Input() places: { icon: string; name: string, route?: string}[] = [];

}
