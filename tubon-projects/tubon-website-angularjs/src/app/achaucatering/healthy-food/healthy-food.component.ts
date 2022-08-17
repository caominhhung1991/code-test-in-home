import { Component, OnInit } from '@angular/core';
import { TweenMax } from 'gsap';
import * as ScrollMagic from 'ScrollMagic';
@Component({
  selector: 'app-healthy-food',
  templateUrl: './healthy-food.component.html',
  styleUrls: ['./healthy-food.component.css']
})
export class HealthyFoodComponent implements OnInit {
  public controller = new ScrollMagic.Controller();
  constructor() { }
  
  ngOnInit() {
    let trigHook = 0.6;
    
    var headerScene = new ScrollMagic.Scene({
      triggerElement: '#hf-1',
      triggerHook: trigHook, // 
      reverse: true // false: chi xay ra 1 lan, true: xay ra lap lai
    })
      .setClassToggle("#hf-1", 'fade-in') // add class to id trigger1
      .addTo(this.controller);

    var headerScene = new ScrollMagic.Scene({
      triggerElement: '#hf-2',
      triggerHook: trigHook, // 
      reverse: true // false: chi xay ra 1 lan, true: xay ra lap lai
    })
      .setClassToggle("#hf-2", 'fade-in') // add class to id trigger1
      .addTo(this.controller);

    var headerScene = new ScrollMagic.Scene({
      triggerElement: '#hf-3',
      triggerHook: trigHook, // 
      reverse: true // false: chi xay ra 1 lan, true: xay ra lap lai
    })
      .setClassToggle("#hf-3", 'fade-in') // add class to id trigger1
      .addTo(this.controller);

    var headerScene = new ScrollMagic.Scene({
      triggerElement: '#hf-4',
      triggerHook: trigHook, // 
      reverse: true // false: chi xay ra 1 lan, true: xay ra lap lai
    })
      .setClassToggle("#hf-4", 'fade-in') // add class to id trigger1
      .addTo(this.controller);

    var headerScene = new ScrollMagic.Scene({
      triggerElement: '#hf-5',
      triggerHook: trigHook, // 
      reverse: true // false: chi xay ra 1 lan, true: xay ra lap lai
    })
      .setClassToggle("#hf-5", 'fade-in') // add class to id trigger1
      .addTo(this.controller);

    var headerScene = new ScrollMagic.Scene({
      triggerElement: '#hf-6',
      triggerHook: trigHook, // 
      reverse: true // false: chi xay ra 1 lan, true: xay ra lap lai
    })
      .setClassToggle("#hf-6", 'fade-in') // add class to id trigger1
      .addTo(this.controller);

  }

}
