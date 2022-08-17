import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DichvuModule } from './achaucatering/dichvu/dichvu.module';
import { HomePageComponent } from './achaucatering/home-page/home-page.component';
import { AchaucateringComponent } from './achaucatering/achaucatering/achaucatering.component';

const appRoutes: Routes = [
  // { path: '**', redirectTo: ''}
  { path: 'dich-vu', loadChildren: './achaucatering/dichvu/dichvu.module#DichvuModule'},
  { path: '**', component: AchaucateringComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
