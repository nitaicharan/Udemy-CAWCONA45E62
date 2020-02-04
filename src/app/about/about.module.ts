import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";

export const ROUTES: Routes = [
  { path: '', component: AboutComponent },
]

@NgModule({
  declarations: [AboutComponent],
  imports: [RouterModule.forChild(ROUTES)]
})
export class AboutModule { }
