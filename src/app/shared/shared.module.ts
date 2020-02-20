import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputContanerComponent } from './components/input-contaner/input-contaner.component';
import { RadioComponent } from './components/radio/radio.component';
import { RatingComponent } from './components/rating/rating.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';



@NgModule({
  declarations: [
    RatingComponent,
    InputContanerComponent,
    RadioComponent,
    SnackbarComponent,
  ],
  imports: [CommonModule],
  exports: [
    RatingComponent,
    InputContanerComponent,
    RadioComponent,
    SnackbarComponent,
  ]
})
export class SharedModule { }