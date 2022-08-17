import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



import { AppService } from '../../services/app.service';
@Component({
  selector: 'app-tuyendung-detail',
  templateUrl: './tuyendung-detail.component.html',
  styleUrls: ['./tuyendung-detail.component.css']
})
export class TuyendungDetailComponent implements OnInit {

  _tuyendung;
  tuyendungs: any;
  selectedTD: any;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) { 
    window.scrollTo(0, 0);
  }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      let id = params['id'];
      this._tuyendung = this.appService.getTuyenDung(id);
      console.log(this._tuyendung);
    })

    this.tuyendungs = this.appService.getTuyenDungs();
  }

  onSelect(tuyendung: boolean) {
    if(this.selectedTD === tuyendung) {
      this.selectedTD = []
    } else {
      this.selectedTD = tuyendung;
    }
  }

  gotoTop(number) {
    this.appService.gotoTop(number);
  }

}
