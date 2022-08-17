import { Component, OnInit } from '@angular/core';
import { TweenMax } from 'gsap';
import * as ScrollMagic from 'ScrollMagic';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-dich-vu',
  templateUrl: './dich-vu.component.html',
  styleUrls: ['./dich-vu.component.css']
})
export class DichVuComponent implements OnInit {
  public controller = new ScrollMagic.Controller();
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    let trigHook = 0.6;

    var headerScene = new ScrollMagic.Scene({
      triggerElement: '#dv1',
      triggerHook: trigHook, // 
      reverse: true // false: chi xay ra 1 lan, true: xay ra lap lai
    })
      .setClassToggle("#dv1", 'fade-in') // add class to id trigger1
      .addTo(this.controller);

    var headerScene = new ScrollMagic.Scene({
      triggerElement: '#dv2',
      triggerHook: trigHook, // 
      reverse: true // false: chi xay ra 1 lan, true: xay ra lap lai
    })
      .setClassToggle("#dv2", 'fade-in') // add class to id trigger1
      .addTo(this.controller);


    var headerScene = new ScrollMagic.Scene({
      triggerElement: '#dv3',
      triggerHook: trigHook, // 
      reverse: true // false: chi xay ra 1 lan, true: xay ra lap lai
    })
      .setClassToggle("#dv3", 'fade-in') // add class to id trigger1
      .addTo(this.controller);
  }

  gotoTop(number, route) {
    this.appService.gotoTop(number);
  }

}
