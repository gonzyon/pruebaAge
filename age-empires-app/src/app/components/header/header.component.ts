import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //Variables is used to show in htlm
  sharedIcon: any;
  sharedGold: any;
  logo: any;

  constructor() { }

  ngOnInit(): void {
    //Inizalicing all variables
    this.sharedIcon = "../../../assets/imgs/microsoft-white.png";
    this.sharedGold = "../../../assets/imgs/barra-dorada.png";
    this.logo = "https://static.ageofempires.com/aoe/wp-content/themes/msgpwebteam/dist/images/age1-footer-logo_fecedc4d.png"
  }

}
