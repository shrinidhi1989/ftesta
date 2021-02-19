import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CmnUtilsService } from '../utils/cmn-utils.service' ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(public cu: CmnUtilsService) {
    this.cu.pageType = '1' ;
   }

  ngOnInit(): void {
  }
}
