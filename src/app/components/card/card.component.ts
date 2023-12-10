import { Component, Input } from '@angular/core';
import { People } from '../../interfaces/people.array';

@Component({
  selector: 'card-component',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() person!: People;
  @Input() class: string;
  constructor() {
    this.class = '';
  }
}
