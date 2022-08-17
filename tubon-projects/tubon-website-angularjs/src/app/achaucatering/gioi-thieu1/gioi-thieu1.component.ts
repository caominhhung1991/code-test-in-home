import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';

import { TweenMax } from 'gsap';
import * as ScrollMagic from 'ScrollMagic';
// import "ScrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";
// import 'ScrollMagic/scrollmagic/minified/plugins/animation.gsap.min.js';

// declare variable jquery and $ to use jquery plugin
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-gioi-thieu1',
  templateUrl: './gioi-thieu1.component.html',
  styleUrls: ['./gioi-thieu1.component.css']
})
export class GioiThieu1Component implements AfterViewInit, OnInit {
  public controller = new ScrollMagic.Controller();

  constructor() { 
  }

  ngOnInit() {
   
  }

  ngAfterViewInit() {
  }

}

// var headerScene = new ScrollMagic.Scene({
//   triggerElement: '#header-cantin',
//   triggerHook: 0,
//   duration: '60%'
// })
// .setPin('#header-cantin', { pushFollowers: false })
// .addTo(controller);
