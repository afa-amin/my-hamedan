import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-poll',
  imports: [CommonModule],
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.scss'
})
export class PollComponent {
  @Input() polls: { title: string; image: string }[] = [];
}