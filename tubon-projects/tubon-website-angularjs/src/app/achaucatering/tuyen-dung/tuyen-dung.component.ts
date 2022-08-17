import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-tuyen-dung',
  templateUrl: './tuyen-dung.component.html',
  styleUrls: ['./tuyen-dung.component.css']
})
export class TuyenDungComponent implements OnInit {
  tuyendungs: any;
  selectedTD: any;
  constructor(
    private appService: AppService
  ) { 
  }

  ngOnInit() {
    this.appService.gotoTop(0);
    this.tuyendungs = this.appService.getTuyenDungs();
  }

  onSelect(tuyendung: boolean) {
    if(this.selectedTD === tuyendung) {
      this.selectedTD = []
    } else {
      this.selectedTD = tuyendung;
    }
  }

}
