import { Component, OnInit } from '@angular/core';
import { CivilizationsResponse } from '../../../shared/models/CivilizationsResponse';
import { AgeOfEmpiresService } from 'src/app/shared/services/age-of-empires.service'

@Component({
  selector: 'app-civilization',
  templateUrl: './civilization.component.html',
  styleUrls: ['./civilization.component.scss']
})
export class CivilizationComponent implements OnInit {

  //Variables is used to show in htlm
  sharedGold: any;

  //Variables to be used on service
  civilizationsList : Array<CivilizationsResponse>

  constructor( private service: AgeOfEmpiresService ) { }

  ngOnInit(): void {
    //Inizalicing all variables
    this.sharedGold = "../../../assets/imgs/barra-dorada.png";

    //Consult throgh AgeOfEmpiresService to get the civilizations
    this.civilizationsList = [];
    this.getCivilizations();
  }

  //Method to consume the HTTP method
  public getCivilizations(){
    this.service.getCivilizations().subscribe( (response: CivilizationsResponse[]) => {
      //Know this is no valid to do because people can use this information to hack your site
      //Only for Test uses
      console.log(response);
      
    })
  }

}
