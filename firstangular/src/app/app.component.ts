import { Component } from '@angular/core';


// component structure is defiened here
@Component({
  selector: 'app-root', //selector is the name of the tag.

  // templateUrl: './app.component.html',
  // we can also give templates like below; when we have only short lines of code
  template:'<div style="color:magenta"><b>Welcome to Angular</b><u>Introduction to Angular</u></div>',

  // styleUrls: ['./app.component.css']//By default angular follows external style sheet.
  styles:['b{color:magenta}','div{color:cyan}']  //Internal style sheet.
})

//Definition of Model
export class AppComponent {
  title = 'first website angular';
  name: string ='suganth';
}
