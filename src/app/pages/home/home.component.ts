import { Component } from '@angular/core';
import { StarService } from '../../services/star.service';
import { CardComponent } from '../../components/card/card.component';
import { People } from '../../interfaces/people.array';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public starService: StarService) {}

  ngOnInit() {
    const person: People = {
      name: 'Test writing on a service',
    };
    this.starService.people.push(person);
  }
}
