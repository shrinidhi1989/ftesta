import { Component, Input, OnInit } from '@angular/core';
import { CmnUtilsService } from '../cmn-utils.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cmn-html-aa',
  templateUrl: './cmn-html-aa.component.html',
})
export class CmnHtmlAaComponent implements OnInit {

  @Input() pageType: string;

  pageUrl = environment.homeUrl;

  constructor(public cu: CmnUtilsService) {}

  ngOnInit(): void {
    if (this.cu.pageType == '1') {
      this.pageUrl = environment.homeUrl;
      this.cu.pageData = [...this.cu.homeData];
    }
    else if (this.cu.pageType == '2') {
      this.pageUrl = environment.aboutUrl;
      this.cu.pageData = [...this.cu.aboutData];
    }
    if (this.cu.pageType == '3') {
      this.pageUrl = environment.contactUrl;
      this.cu.pageData = [...this.cu.contactData];
    }
}
}
