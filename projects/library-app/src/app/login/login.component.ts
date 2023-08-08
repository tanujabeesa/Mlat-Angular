import { Component } from '@angular/core';
import{FormGroup,FormControl,FormControlName,AbstractControl,Validators} from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
    loginform=new FormGroup
    ({
      username:new FormControl(" ",[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
      password:new FormControl(" ",[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
      email: new FormControl(" ",[Validators.maxLength(32),Validators.required]),




    })
    User:any={}

constructor(private serv:MyserviceService,private route :Router,private authserv:AuthserviceService, private http:HttpClient){}
  submitted: boolean|undefined;

    getControl(name:any): AbstractControl | null{
      return this.loginform.get(name)

    }
    onSubmit()
    {
      this.http.post(`http://localhost:3000/users`,this.loginform.value).subscribe({
        next: res=>{
          alert("Login Successful !");
          console.log(this.loginform.value);
          this.loginform.reset();
          this.route.navigate(['/book-issuing']);

        },

        error:err=>{
          alert("Something went wrong");
        }

      });


    }

  }
