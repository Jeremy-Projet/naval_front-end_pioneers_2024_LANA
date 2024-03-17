import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CercleTrigoComponent } from './cercle-trigo/cercle-trigo.component';
import { MobilesComponent } from './mobiles/mobiles.component';


@NgModule({
  declarations: [
    CercleTrigoComponent,
    MobilesComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    
  ]
})
export class RepresentationMobilesModule { }
