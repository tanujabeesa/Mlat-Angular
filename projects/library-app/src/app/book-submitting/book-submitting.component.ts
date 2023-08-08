import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-submitting',
  templateUrl: './book-submitting.component.html',
  styleUrls: ['./book-submitting.component.css']
})
export class BookSubmittingComponent {
  handleUpdateResponse: any;
  handleError: any;
  constructor(private authserv: AuthserviceService,private http: HttpClient) {}
returndate: any;
borrowername: any;
author: any;
bookname: any;
bookid: any;


  canSubmitBooks: boolean | undefined;


details={
id:'',
bookname: '',
borrowername: '',
returndate: '',
author: ''
}


Author=["Elizabeth Robson and Eric Freeman","David DuRocher", "Georgina Young","Shyam Seshadri","Cay S. Horstmann","Mark Myers"," Boris Cherny"," Raghu Ramakrishnan","Steven Feuerstein"]


  ngOnInit(): void {
    this.canSubmitBooks = this.authserv.hasPermission('books_submitting');
  }

  // now try

  onSubmit() {

    this.http.post(`http://localhost:3000/book`,this.details)
    .subscribe({
      next: Response=>console.log(Response),
      error:error=>console.log(error),
   });
   alert("Data Created");
  }


}
function next(value: Object): void {
  throw new Error('Function not implemented.');
}





