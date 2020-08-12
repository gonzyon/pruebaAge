import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  //Initilize the variables that will be centralice in other document

  private hostUrl: any;

  constructor(private http: HttpClient,) { 
    //With this equality is posible to have centralizaced the url by enviroment
    this.hostUrl = environment.apiUrlDb;
  }

  public saveContact(request: any){
    return this.http.post(this.hostUrl, request);
  }
}
