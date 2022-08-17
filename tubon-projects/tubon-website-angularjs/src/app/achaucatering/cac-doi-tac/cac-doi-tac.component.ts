import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jssor_thumpnail_slider_init: any;
@Component({
  selector: 'app-cac-doi-tac',
  templateUrl: './cac-doi-tac.component.html',
  styleUrls: ['./cac-doi-tac.component.css']
})
export class CacDoiTacComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  };

  ngAfterViewInit() {
    jssor_thumpnail_slider_init();
  }
}
