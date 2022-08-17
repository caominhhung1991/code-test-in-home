import { Component, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';

declare var $:any;
declare var jquery:any;
declare var trigger1:any;

@Component({
  selector: 'app-cung-cap-thuc-pham',
  templateUrl: './cung-cap-thuc-pham.component.html',
  styleUrls: ['./../dichvu.css','./cung-cap-thuc-pham.component.css']
})
export class CungCapThucPhamComponent implements OnInit, OnDestroy {
  
  imgURls:Object = {
    img1: {
      url: 'assets/img/cung-cap-thuc-pham/cctp-img1.jpg',
      title: 'Cung cấp thực phẩm'
    }
  }
    
  constructor() { }
  
  ngOnInit() {
    // $('#nav1-top').removeClass('sticky-top');
    $("html,body").animate({scrollTop: 0}, "slow");
    console.log('Cung Cap Thuc Phan onInit');
  }

  ngOnDestroy() {
    console.log("them class sticky-top")
    // $('#nav1-top').addClass('sticky-top');
    console.log("Da thoat khoi cung cap thuc pham")
  }
}
