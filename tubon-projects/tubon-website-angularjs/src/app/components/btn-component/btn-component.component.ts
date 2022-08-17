import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn-component',
  templateUrl: './btn-component.component.html',
  styleUrls: ['./btn-component.component.css']
})
export class BtnComponentComponent implements OnInit {
  @Input() href:string;
  @Input() content:string;
  constructor() { }

  ngOnInit() {
  }

}
