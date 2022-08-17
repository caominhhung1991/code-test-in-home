import { Component, OnInit } from '@angular/core';
import * as ScrollMagic from 'ScrollMagic';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  public controller = new ScrollMagic.Controller();

  constructor() { }

  ngOnInit() {
    var headerScene = new ScrollMagic.Scene({
      triggerElement: '#header-cantin',
      triggerHook: 0,
      duration: '50%'
    })
      .setPin('#header-cantin', { pushFollowers: false })
      .addTo(this.controller);
  }

}
