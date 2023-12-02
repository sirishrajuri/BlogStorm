import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blogs-svg',
  templateUrl: './blogs-svg.component.svg',
  styleUrls: ['./blogs-svg.component.scss']
})
export class blogsSvgComponent {
  @Input() fill =''
}
