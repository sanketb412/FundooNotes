import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/userService/user-service.service';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  constructor(private service: UserServiceService) { }

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    emailId: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    confirmPassword: new FormControl('', [Validators.required])
  })

  hide: Boolean = false

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.valid); 
    if(this.form.controls.password.value == this.form.controls.confirmPassword.value){
      if (this.form.valid) {
        let data = {
          "firstName": this.form.controls.firstName.value,
          "lastName": this.form.controls.lastName.value,
          "email": this.form.controls.emailId.value,
          "service": "advance",
          "password": this.form.controls.password.value
        }
        this.service.registration(data).subscribe((data) => {
          console.log(data)
        })
      }
    }
    else(alert("please Enter matching password"))
  }

  ngOnInit(): void {
  }
  
}
