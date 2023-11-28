import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tv-svg',
  templateUrl: './tv-svg.component.svg',
  styleUrls: ['./tv-svg.component.scss']
})
export class TvSvgComponent {
  @Input() fill =''
}
