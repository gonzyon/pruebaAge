import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgeOfEmpiresService {

  //Initilize the variables that will be centralice in other document
  private hostUrl: any;

  constructor(
    private http: HttpClient,
  ) { 
    //With this equality is posible to have centralizaced the url by enviroment
    this.hostUrl = environment.apiUrl;
  }

  public getCivilizations(){
    return this.http.get(this.hostUrl + environment.apiEndpointCivilizations);
  }

  public getUnits(){
    return this.http.get(this.hostUrl + environment.apiEndpointUnits);
  }

  public getStructures(){
    return this.http.get(this.hostUrl + environment.apiEndpointStructures);
  }

  public getTecnologies(){
    return this.http.get(this.hostUrl + environment.apiEndpointTecnologies);
  }

}
