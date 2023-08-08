import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { LibraryManagementComponent } from './library-management/library-management.component';
import { BookIssuingComponent } from './book-issuing/book-issuing.component';
import { BookSubmittingComponent } from './book-submitting/book-submitting.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { authguardGuard } from './authguard.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    LibraryManagementComponent,
    BookIssuingComponent,
    BookSubmittingComponent,
    ForgotPasswordComponent,
    ListComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,HttpClientModule,RouterModule.forRoot([
      {path:'login',component:LoginComponent },
      {path:'library-management',component:LibraryManagementComponent},
      {path:'book-issuing',component:BookIssuingComponent,canActivate:[authguardGuard]},
      {path:'book-submitting',component:BookSubmittingComponent,canActivate:[authguardGuard]},
      {path:'forgot-password',component:ForgotPasswordComponent},
      {path:'',redirectTo:'/login',pathMatch:'full'}

  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
