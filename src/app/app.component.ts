import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-exercice-0';

  oddWord: string[] = [];
  evenWord: string[] = [];

  onWordSubmit(word: string) {
    if (word.length % 2 === 0) {
      this.evenWord.push(word);
    } else {
      this.oddWord.push(word);
    }
  }
}
