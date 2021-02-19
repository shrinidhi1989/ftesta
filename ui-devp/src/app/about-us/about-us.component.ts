import { Component, OnInit } from '@angular/core';
import { CmnUtilsService } from '../utils/cmn-utils.service' ;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent implements OnInit {
  constructor(public cu: CmnUtilsService) {
    this.cu.pageType = '2' ;
   }
  ngOnInit(): void {
  }
}
