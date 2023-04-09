import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even-word',
  templateUrl: './even-word.component.html',
  styleUrls: ['./even-word.component.css'],
})
export class EvenWordComponent {
  @Input() evenWord: string[] = [];
}
