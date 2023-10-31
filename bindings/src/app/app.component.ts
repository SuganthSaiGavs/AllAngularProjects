import { Component } from '@angular/core';
import { UserData } from './UserData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  udata:UserData=new UserData();
  usersList:UserData[]=[]; //Array of userData objects.
  title = 'bindings';
  themeName:string='ocean';
  textColor:string='black';
  applyColor:string='red';
  size: number=100;
  stateName:string='TN';

  firstName:string='Suganth';
  lastName: string='Sangee';
  enableDisable: boolean=false;
  
  //userDetails:string[]=[];
  saveData(event:Event){
    this.usersList.push(this.udata);
    console.log("Added data to the array");
    console.log(this.udata); 
    this.udata=new UserData();
  }

  checkData(){
    console.log(this.firstName.length);
  }
  sendData(){
    console.log("Sending data to Express backend.");
    //code for final validation
    //code for communicating with the backend.
  }
}
