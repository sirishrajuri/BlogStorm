import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-modes-svg',
  templateUrl: './modes-svg.component.svg',
  styleUrls: ['./modes-svg.component.scss']
})
export class ModesSvgComponent {
  @Input() fill =''
}
