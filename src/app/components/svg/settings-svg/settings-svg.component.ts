import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings-svg',
  templateUrl: './settings-svg.component.svg',
  styleUrls: ['./settings-svg.component.scss']
})
export class SettingsSvgComponent {
  @Input() fill =''
}
