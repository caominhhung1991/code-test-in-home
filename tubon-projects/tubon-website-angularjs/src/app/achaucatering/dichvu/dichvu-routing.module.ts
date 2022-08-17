import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SuatAnCongNghiepComponent } from './suat-an-cong-nghiep/suat-an-cong-nghiep.component';
import { CungCapThucPhamComponent } from './cung-cap-thuc-pham/cung-cap-thuc-pham.component';
import { QuayDichVuTienIchComponent } from './quay-dich-vu-tien-ich/quay-dich-vu-tien-ich.component';
import { ChuoiNhaThuocComponent } from './chuoi-nha-thuoc/chuoi-nha-thuoc.component';
import { ToChucSuKienComponent } from './to-chuc-su-kien/to-chuc-su-kien.component';
import { TuVanThietKeComponent } from './tu-van-thiet-ke/tu-van-thiet-ke.component';
import { DichvuComponent } from './dichvu/dichvu.component';
import { ThucDonToChucTiecComponent } from '../thuc-don-to-chuc-tiec/thuc-don-to-chuc-tiec.component';

const dichvuRoutes: Routes = [
  { path: '', 
    component: DichvuComponent,
    children: [
      { path: 'to-chuc-su-kien', component: ToChucSuKienComponent },
      { path: 'suat-an-cong-nghiep', component: SuatAnCongNghiepComponent},
      { path: 'cung-cap-thuc-pham', component: CungCapThucPhamComponent},
      { path: 'quay-dich-vu-tien-ich', component: QuayDichVuTienIchComponent},
      { path: 'tu-van-thiet-ke', component: TuVanThietKeComponent},
      { path: 'chuoi-nha-thuoc', component: ChuoiNhaThuocComponent},
      { path: 'thuc-don-to-chuc-tiec', component: ThucDonToChucTiecComponent},
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(dichvuRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class DichvuRoutingModule { }
