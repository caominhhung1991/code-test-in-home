import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AchaucateringComponent } from './achaucatering/achaucatering.component';
import { SuatAnCongNghiepComponent } from './dichvu/suat-an-cong-nghiep/suat-an-cong-nghiep.component';
import { CungCapThucPhamComponent } from './dichvu/cung-cap-thuc-pham/cung-cap-thuc-pham.component';
import { QuayDichVuTienIchComponent } from './dichvu/quay-dich-vu-tien-ich/quay-dich-vu-tien-ich.component';
import { ChuoiNhaThuocComponent } from './dichvu/chuoi-nha-thuoc/chuoi-nha-thuoc.component';
import { ToChucSuKienComponent } from './dichvu/to-chuc-su-kien/to-chuc-su-kien.component';
import { TuVanThietKeComponent } from './dichvu/tu-van-thiet-ke/tu-van-thiet-ke.component';
import { TintucSukienComponent } from './tintuc-sukien/tintuc-sukien.component';
import { TuyenDungComponent } from './tuyen-dung/tuyen-dung.component';
import { TuyendungDetailComponent } from './tuyendung-detail/tuyendung-detail.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { CacDoiTacComponent } from './cac-doi-tac/cac-doi-tac.component';
import { ThucDonToChucTiecComponent } from './thuc-don-to-chuc-tiec/thuc-don-to-chuc-tiec.component';
import { DichvuComponent } from './dichvu/dichvu/dichvu.component';

const achauRouting: Routes = [
  {
    path: '',
    component: AchaucateringComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'tintuc-sukien', component: TintucSukienComponent },
      { path: 'tuyen-dung', component: TuyenDungComponent },
      { path: 'tuyen-dung/:id', component: TuyendungDetailComponent },
      { path: 'slider', component: CacDoiTacComponent },
      { path: 'tintuc-sukien', component: TintucSukienComponent },
      { path: 'lien-he', component: LienHeComponent }
    ]
  }
]

// const achauRouting: Routes = [
//   {
//     path: '',
//     component: AchaucateringComponent,
//     children: [
//       { path: '', component: HomePageComponent },
//       { path: 'tintuc-sukien', component: TintucSukienComponent },
//       { path: 'suat-an-cong-nghiep', component: SuatAnCongNghiepComponent },
//       { path: 'cung-cap-thuc-pham', component: CungCapThucPhamComponent },
//       { path: 'quay-dich-vu-tien-ich', component: QuayDichVuTienIchComponent },
//       { path: 'chuoi-nha-thuoc', component: ChuoiNhaThuocComponent },
//       { path: 'to-chuc-su-kien', component: ToChucSuKienComponent },
//       { path: 'tu-van-thiet-ke', component: TuVanThietKeComponent },
//       { path: 'tuyen-dung', component: TuyenDungComponent },
//       { path: 'tuyen-dung/:id', component: TuyendungDetailComponent },
//       { path: 'slider', component: CacDoiTacComponent },
//       { path: 'tintuc-sukien', component: TintucSukienComponent },
//       { path: 'lien-he', component: LienHeComponent },
//       { path: 'thuc-don-to-chuc-tiec', component: ThucDonToChucTiecComponent},
//       { path: '**', component: HomePageComponent}
//     ]
//   }
// ]

@NgModule({
  imports: [
    RouterModule.forChild(achauRouting)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AchaucateringRoutingModule { }
