import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-svg',
  templateUrl: './home-svg.component.svg',
  styleUrls: ['./home-svg.component.scss']
})
export class HomeSvgComponent {
  @Input() fill =''
}
