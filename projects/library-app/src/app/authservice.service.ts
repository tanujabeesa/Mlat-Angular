import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  hasPermission(arg0: string): boolean | undefined {
    return true;
  }
 isLoggedIn: boolean| undefined

  constructor(private rt:Router) { }
  login(){
    localStorage.setItem('isLoggedIn',"true");
    this.isLoggedIn=true
  }
Register(){
    localStorage.setItem('isLoggedIn',"true");
    this.isLoggedIn=true
  }
  logout():void{
    localStorage.setItem('isLoggedIn',"false");
    this.isLoggedIn=false
    this.rt.navigateByUrl("/login")
  }

}
