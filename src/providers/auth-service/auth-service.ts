import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

let apiUrl = 'https://www.vittaris.com.mx/api/';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      	this.http.post(apiUrl + type, JSON.stringify(credentials), {
	    	headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
	    	params: new HttpParams().set('id', '3'),
	  	})
	  	.subscribe(res => {
	    	resolve(res);
	  	}, (err) => {
	    	reject(err);
	  	});
    });
  }

}
