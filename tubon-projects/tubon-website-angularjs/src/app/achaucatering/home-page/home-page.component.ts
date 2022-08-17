import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import * as ScrollMagic from 'ScrollMagic';
import { AppService } from '../../services/app.service';
// declare variable jquery and $ to use jquery plugin
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterContentInit {

  public controller = new ScrollMagic.Controller();

  constructor(
    private appService: AppService
  ) {

  }

  ngOnInit() {
    this.appService.gotoTop(0);
  }

  ngAfterContentInit() {


    let trigHook = 0.6;

    var headerScene = new ScrollMagic.Scene({
      triggerElement: '#gioithieu1-scene-fadein',
      triggerHook: trigHook, // 
      reverse: true // false: chi xay ra 1 lan, true: xay ra lap lai
    })
      .setClassToggle("#gioithieu1-scene-fadein", 'fade-in') // add class to id trigger1
      .addTo(this.controller);
    // gioi thieu 2
    var headerScene = new ScrollMagic.Scene({
      triggerElement: '#gt2',
      triggerHook: trigHook, // 
      reverse: true // false: chi xay ra 1 lan, true: xay ra lap lai
    })
      .setClassToggle("#gt2", 'fade-in') // add class to id trigger1
      .addTo(this.controller);


    // parallax scene
      // var parallaxTl = new ScrollMagic.TimelineMax();
      // parallaxTl
      //     .from('.content-wrapper', 1, {autoAlpha: 0, ease: Power0.easeNone})
      //     .from('.bcg', 1, {y: '-45%', ease: Power0.easeNone}, 0);

      // var slideParallaxScene = new ScrollMagic.Scene({
      //     triggerElement: '.bcg-parallax',
      //     triggerHook: 1,
      //     duration: '60%'
      // })
      // .setTween(parallaxTl)
      // .addTo(this.controller);

    //     console.log("123");

  }

}
