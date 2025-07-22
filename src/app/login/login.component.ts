import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(public router:Router,private cdr:ChangeDetectorRef){

}
loginForm = new FormGroup({
  ssoId : new FormControl('', Validators.required),
  password : new FormControl('',Validators.required)
})
ngOnInit(){

}
login(){
  console.log(this.loginForm.value);
  setTimeout(()=>{
 if(this.loginForm.valid){
    //this.cdr.detectChanges();
    this.router.navigate(['/auth/dashboard']);
  }
  })
 

}
ngOnDestroy(){
  console.log("destry");
}
}
