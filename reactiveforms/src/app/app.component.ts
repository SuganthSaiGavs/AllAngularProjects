import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'reactiveforms';
  // Form group controls the form
  userForm:any = new FormGroup({
    //defintion of the fields in the model and also respective validations.
    //FormControl represents input items in the form.
    //minlength and maxlength used for strings.
  firstName:new FormControl('unKnown',[Validators.minLength(5),Validators.maxLength(50),Validators.required]),//here we mentions the default value,validations
  lastName:new FormControl('unKnown',[Validators.minLength(5),Validators.maxLength(50),Validators.required]),
  joinDate:new FormControl('03-01-2020',[Validators.required]),
  salary:new FormControl(30000,[Validators.min(30000),Validators.max(100000),Validators.required]),
  
},
{
  //Timing of validation
  updateOn:'submit'
});
addUser() {
  if (this.userForm.valid) {
    console.log(this.userForm.value);
    this.userList.push(this.userForm.value);
  } else {
    console.error('Validation error');
  }
}
  userList:any=[];
}
