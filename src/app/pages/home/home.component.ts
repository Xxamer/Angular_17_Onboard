import { Component } from '@angular/core';
import { StarService } from '../../services/star.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public starService: StarService){

  }

  ngOnInit(){
    console.log(this.starService.people);
    console.log('D');
  }
}
