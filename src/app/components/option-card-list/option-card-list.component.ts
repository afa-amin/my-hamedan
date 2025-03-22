import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
@Component({
  standalone: true,
  selector: 'app-option-card-list',
  imports: [CommonModule, IonicModule],
  templateUrl: './option-card-list.component.html',
  styleUrl: './option-card-list.component.scss'
})
export class OptionCardListComponent {
  @Input() title = '';
  @Input() options: { icon: string; label: string }[] = [];
}