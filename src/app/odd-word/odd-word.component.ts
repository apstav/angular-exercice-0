import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd-word',
  templateUrl: './odd-word.component.html',
  styleUrls: ['./odd-word.component.css'],
})
export class OddWordComponent {
  @Input() oddWords: string[] = [];
}
