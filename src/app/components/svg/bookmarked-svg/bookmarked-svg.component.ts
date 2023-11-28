import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bookmarked-svg',
  templateUrl: './bookmarked-svg.component.svg',
  styleUrls: ['./bookmarked-svg.component.scss']
})
export class BookmarkedSvgComponent {
  @Input() fill =''
}
