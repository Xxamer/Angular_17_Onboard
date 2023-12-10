import { Component } from '@angular/core';
import { StarService } from '../../services/star.service';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public starService: StarService){

  }

  ngOnInit(){
  }
}
