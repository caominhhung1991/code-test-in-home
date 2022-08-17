import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn-lienhe',
  templateUrl: './btn-lienhe.component.html',
  styleUrls: ['./btn-lienhe.component.css']
})
export class BtnLienheComponent implements OnInit {
  _lienhe;
  @Input() phone:string;
  @Input() lienhe:string;

  constructor() { }

  ngOnInit() {

  }

}
