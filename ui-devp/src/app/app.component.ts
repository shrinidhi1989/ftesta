import { Component, OnInit } from '@angular/core';
import { CmnUtilsService } from './utils/cmn-utils.service' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ui-devp';

  constructor(public cu: CmnUtilsService, ) {
  }

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    await this.cu.setHtmlData() ;
  }
}
