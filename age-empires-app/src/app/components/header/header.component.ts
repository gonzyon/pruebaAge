import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../popup/popup/popup.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { DbService } from 'src/app/shared/services/db.service';
import { Contact } from '../../shared/models/contact';

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
  dialog : MatDialog;

  constructor(private service: DbService) { }

  ngOnInit(): void {
    //Inizalicing all variables
    this.sharedIcon = "../../../assets/imgs/microsoft-white.png";
    this.sharedGold = "../../../assets/imgs/barra-dorada.png";
    this.logo = "https://static.ageofempires.com/aoe/wp-content/themes/msgpwebteam/dist/images/age1-footer-logo_fecedc4d.png"
  }

  //Add logic to open pop-Up to contact us!
  public openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(PopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
                this.saveNewContact(data);
      }, error => console.log(error))
  }

  public saveNewContact(data: any){
    this.service.saveContact(data).subscribe(
      (response: Contact[]) => {
      //Know this is no valid to do because people can use this information to hack your site
      //Only for Test uses
      console.log();
      })
  }

}
