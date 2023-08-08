import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  userobj =[{username:'admin12',email:'admin12@abc.com',password:'1234567'},
  {username:'coder12',email:'coder12@abc.com',password:'1234567',age:22,cnfrmpwd:'1234567',phnnumber:7893917933},
  {username:'coder123',email:'coder123@abc.com',password:'1234567',age:22,cnfrmpwd:'1234567',phnnumber:7893917933}]

}
