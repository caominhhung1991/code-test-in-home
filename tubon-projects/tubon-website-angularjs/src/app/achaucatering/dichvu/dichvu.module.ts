import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DichvuRoutingModule } from './dichvu-routing.module';
import { DichvuService } from './dichvu.service';
import { CungCapThucPhamComponent } from './cung-cap-thuc-pham/cung-cap-thuc-pham.component';
import { QuayDichVuTienIchComponent } from './quay-dich-vu-tien-ich/quay-dich-vu-tien-ich.component';
import { ToChucSuKienComponent } from './to-chuc-su-kien/to-chuc-su-kien.component';
import { TuVanThietKeComponent } from './tu-van-thiet-ke/tu-van-thiet-ke.component';
import { ChuoiNhaThuocComponent } from './chuoi-nha-thuoc/chuoi-nha-thuoc.component';
import { NoContentComponent } from './no-content/no-content.component';
import { AchaucateringModule } from '../achaucatering.module';
import { ComponentModule } from '../../components/component.module';
import { CacDichVuComponent } from './cac-dich-vu/cac-dich-vu.component';
import { DichvuComponent } from './dichvu/dichvu.component';
import { ThucDonToChucTiecComponent } from '../thuc-don-to-chuc-tiec/thuc-don-to-chuc-tiec.component';
import { SuatAnCongNghiepComponent } from './suat-an-cong-nghiep/suat-an-cong-nghiep.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    DichvuRoutingModule,
    ComponentModule,
  ],
  declarations: [
    CungCapThucPhamComponent, 
    QuayDichVuTienIchComponent, 
    ToChucSuKienComponent, 
    ChuoiNhaThuocComponent,
    NoContentComponent,
    TuVanThietKeComponent,
    CacDichVuComponent,
    DichvuComponent,
    ThucDonToChucTiecComponent,
    SuatAnCongNghiepComponent,
  ],
  providers: [ DichvuService ]
})
export class DichvuModule { }
