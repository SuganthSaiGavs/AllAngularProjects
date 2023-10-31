import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templatedrivenforms';
  userList:any=[];

  addUser(udata: any) {
    // Handle the user data here.
    console.log(udata);
    console.log(udata.value);
    this.userList.push(udata.value);
  }
}
