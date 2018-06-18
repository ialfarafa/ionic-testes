import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMoovies(){
    return this.http.get(this.baseApiPath + "/movie/latest?apui_key=776f0f5723c46da98e220c0c922a7877"); 
  }
  
  getApiKey(): string{

  }

}
