import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// declare variable jquery and $ to use jquery plugin
declare var jquery: any;
declare var $: any;



@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.css']
})
export class Nav1Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  gotoHome(route: string) {
    this.router.navigate([route]);
  }

  ngOnInit() {
    $(".nav-click").on("click", () => {
      // console.log($(window).width());
      if($(window).width() < 756) {
        $("#nav1").collapse("toggle");
        window.scrollTo(0,0);
      }
    })
  }

}
