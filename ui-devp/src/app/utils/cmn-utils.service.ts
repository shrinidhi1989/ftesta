import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { textChangeRangeIsUnchanged } from 'typescript';


@Injectable({
  providedIn: 'root'
})
export class CmnUtilsService {

  baseUrl = environment.baseUrl;
  homeData = [];
  aboutData = [];
  contactData = [];
  pageType = '1' ;
  pageData = [] ;

  dataLoad = false;

  constructor(private http: HttpClient) { }

  async setHtmlData() {
    const response = await this.http.get<any>(this.baseUrl + '/listFiles').toPromise();

    this.homeData = response['data']['home'].sort(function (a, b) {
      var nameA = a['name'].substr(0, 5);
      var nameB = b['name'].substr(0, 5);
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    this.pageData = this.homeData ;

    this.aboutData = response['data']['about'].sort(function (a, b) {
      var nameA = a['name'].substr(0, 5);
      var nameB = b['name'].substr(0, 5);
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });


    this.contactData = response['data']['contact'].sort(function (a, b) {
      var nameA = a['name'].substr(0, 5);
      var nameB = b['name'].substr(0, 5);
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });


    this.dataLoad = true;
  }



  async getTextHome(str) {
    const response = await this.http.get<any>(this.baseUrl + '/cms/home/text/' + str,
      { responseType: 'text' as 'json' }).toPromise();

     // console.log(response) ;
      return response;


  }


}
