import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CmnUtilsService } from '../utils/cmn-utils.service' ;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  logoUrl = '' ;

  @Output() public sidenavToggle = new EventEmitter();
  constructor(private cmnUtilsService: CmnUtilsService) {
    this.logoUrl = cmnUtilsService.baseUrl + '/cms/logo/logo.svg' ;
   }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
