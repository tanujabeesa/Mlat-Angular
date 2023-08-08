import { Component } from '@angular/core';
import { FormGroup,FormControl,FormControlName, Validators,AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

 form1=new FormGroup({
  email:new FormControl(" ",[Validators.required,Validators.email])
});
getControl(name:any): AbstractControl | null{
  return this.form1.get(name)

}
form1fn(){
  console.log(this.form1.value.email)
}


}
