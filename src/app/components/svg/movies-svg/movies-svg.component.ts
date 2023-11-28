import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-movies-svg',
  templateUrl: './movies-svg.component.svg',
  styleUrls: ['./movies-svg.component.scss']
})
export class MoviesSvgComponent {
  @Input() fill =''
}
