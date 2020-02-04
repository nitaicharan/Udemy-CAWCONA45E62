import { NgModule } from "@angular/core";
import { InputContanerComponent } from "./input-contaner/input-contaner.component";
import { RatingComponent } from "./rating/rating.component";
import { RadioComponent } from "./radio/radio.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    InputContanerComponent,
    RatingComponent,
    RadioComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    InputContanerComponent,
    RatingComponent,
    RadioComponent
  ]
})
export class SharedModule { }
