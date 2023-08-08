import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { AuthserviceService } from './authservice.service';


export const authguardGuard: CanActivateFn = (route, state) => {

  return inject(PermissionService).isLoggedIn()?true:false;
};
@Injectable({
  providedIn:'root'
})

class PermissionService{
  isLoggedIn() {
         return true;
  }
  authserv: any;
  router: any;
  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot): any{
    if(this.authserv.isLoggedIn()){
      if(this.authserv.hasPermission('book_issuing') && next.routeConfig?.path==='book-issuing'){
        return true;
      }
      else if(this.authserv.hasPermission('book_submitting') && next.routeConfig?.path==='book-submitting'){
        return true;
      }else{
        this.router.navigate(['/']);
        return false;
      }
    }
    else {

      this.router.navigate(['/login']);
      return false;
    }

  }
  }




