import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { ImagesPipe } from './pipe/images.pipe';

import { MaterialModule } from '../material/material.module';

import { RatingModule } from 'ng-starrating';

//Module
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
//Components
import { LoadingComponent } from './components/loading/loading.component';
import { HotelsListComponent } from './components/hotels-list/hotels-list.component';
import { FilterDataComponent } from './components/filter-data/filter-data.component';
import { AmanitiesPipe } from './pipe/amanities.pipe';

@NgModule({
  declarations: [
    HotelsComponent,
    ImagesPipe,
    LoadingComponent,
    HotelsListComponent,
    FilterDataComponent,
    AmanitiesPipe,

  ],
  exports: [HotelsComponent, FilterDataComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RatingModule,
    SharedModule,
    FormsModule
  ]
})
export class HotelsModule { }
