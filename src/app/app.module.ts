import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { EvenWordComponent } from './even-word/even-word.component';
import { OddWordComponent } from './odd-word/odd-word.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    EvenWordComponent,
    OddWordComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
