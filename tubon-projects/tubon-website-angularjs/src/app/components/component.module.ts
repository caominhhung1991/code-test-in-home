import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BtnXemthemComponent } from './btn-xemthem/btn-xemthem.component';
import { BtnLienheComponent } from './btn-lienhe/btn-lienhe.component';
import { BtnComponentComponent } from './btn-component/btn-component.component';
import { SliderImageGalleryComponent } from './slider-image-gallery/slider-image-gallery.component';
import { CacDoiTacComponent } from '../achaucatering/cac-doi-tac/cac-doi-tac.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BtnXemthemComponent,
    BtnLienheComponent,
    BtnComponentComponent,
    SliderImageGalleryComponent,
    CacDoiTacComponent
  ],
  exports: [
    BtnXemthemComponent,
    BtnLienheComponent,
    BtnComponentComponent,
    SliderImageGalleryComponent,
    CacDoiTacComponent
  ]
})
export class ComponentModule { }
