import { Component, OnInit } from '@angular/core';
import { CmnUtilsService } from '../utils/cmn-utils.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent implements OnInit {
  constructor(public cu: CmnUtilsService) {
    this.cu.pageType = '3';
  }
  ngOnInit(): void {
  }
}
