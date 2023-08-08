import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VariableBinding } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-library-management',
  templateUrl: './library-management.component.html',
  styleUrls: ['./library-management.component.css']
})
export class LibraryManagementComponent {

  Register=new FormGroup({
    username: new FormControl(" ",[Validators.required,Validators.minLength(8),Validators.maxLength(32)]),
    password:new FormControl(" ",[Validators.required,Validators.minLength(7),Validators.maxLength(15)]),
    cnfrmpwd:new FormControl(" ",[Validators.required,Validators.minLength(7),Validators.maxLength(15)]),
    email:new FormControl(" ",[Validators.required,Validators.email]),
    age:new FormControl(" ",[Validators.required,Validators.min(18),Validators.max(45)]),
    phnnumber:new FormControl(" ",[Validators.required,Validators.minLength(10),Validators.maxLength(11)])

  })




  submitted?: boolean ;








  constructor( private activert : ActivatedRoute, private route:Router,private serv1:MyserviceService , private http:HttpClient){}

   getControl(name:any): AbstractControl|null{
     return this.Register.get(name)
   }

  onSubmit(){

    this.http.post(`http://localhost:3000/registeruser`,this.Register.value).subscribe({
      next: res=>{
        alert("Regitration Successful !");
        console.log(this.Register.value);
        this.Register.reset();
        this.route.navigate(['/login']);
      },

      error:err=>{
        alert("Something went wrong");
      }

   });


  }
}
