import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface IinfoAboutUser {
  firstName: string,
  lastName: string,
  thirdName?: string,
  email: string,
  password1: string,
  password2: string,
  birthday?: string,
  gender?: string
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  isSignIn: boolean = false;
  numberOfCorrectInput: number = 0;
  numberOfAllInputs: number = 0;
  isCorrectForm: boolean;

  infoAboutUser: IinfoAboutUser = {
    firstName: '',
    lastName: '',
    thirdName: '',
    email: '',
    password1: '',
    password2: '',
    birthday: '',
    gender: ''
  }

 

  verifyError(myForm: any): void {
    for (let input in myForm.controls) {

      this.numberOfAllInputs += 1;

      if (myForm.controls[input].errors == null) {
        this.numberOfCorrectInput += 1;
      } 
    }
  }

  getValues(form: any) {
    let myForm: any = form.form;
    let valuesForm: any = form.value;

    this.verifyError(myForm);
    if (this.numberOfCorrectInput >= this.numberOfAllInputs - 3 && valuesForm.password1 === valuesForm.password2) {
      this.isCorrectForm = true;
      window.localStorage.setItem('infoUser', JSON.stringify(valuesForm))
      this.numberOfAllInputs = 0;
      this.numberOfCorrectInput = 0;
      console.log(valuesForm);

      this.isSignIn = true
      window.localStorage.setItem('isSignIn', JSON.stringify(this.isSignIn));
      

    } else {
      this.isCorrectForm = false
      this.numberOfAllInputs = 0;
      this.numberOfCorrectInput = 0;
      console.log("It's unbelievable you had cought a mistake")
    }


  }

}
