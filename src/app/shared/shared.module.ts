import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { StartRatingComponent } from './start-rating/start-rating.component';
import { RatingModule } from 'ng-starrating';


@NgModule({
  declarations: [NavbarComponent, StartRatingComponent],
  exports: [NavbarComponent, StartRatingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RatingModule
  ]
})
export class SharedModule { }
