import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient : HttpClient) { }

  doGet<T>(url: string, headersExtra : any) {
    let headers = new HttpHeaders();    
    headers = headers.append('X-Auth-Token', this.getAuthKey());
    if(headersExtra) {
      for(let key in headersExtra) 
        headers[key] = headersExtra[key];
    }
    return this.httpClient.get<T>(url, {headers: headers, observe: "response"});    
  }

  getAuthKey() {
    return atob(environment.api_key);
  }
}
