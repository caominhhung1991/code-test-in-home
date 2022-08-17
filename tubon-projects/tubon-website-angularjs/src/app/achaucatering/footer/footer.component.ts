import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
// declare variable jquery and $ to use jquery plugin
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    $(document).scroll(() => {
      let y = $(document).scrollTop();
      // console.log(y);
      if(y > 800) {
        $('.gototop').fadeIn();
      } else {
        $('.gototop').fadeOut();
      }
    })
  }

  gotoTop(number:number) {
      this.appService.gotoTop(number);
  }

}
