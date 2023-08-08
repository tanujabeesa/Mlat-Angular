import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { List } from '../../List';
@Component({
  selector: 'app-book-issuing',
  templateUrl: './book-issuing.component.html',
  styleUrls: ['./book-issuing.component.css']
})
export class BookIssuingComponent {
  canIssueBooks: boolean | undefined;
  prdtdata?:List[]=[];
  e: any;

 

  constructor(private authserv: AuthserviceService) {}

  ngOnInit(): void {
    this.canIssueBooks = this.authserv.hasPermission('books_issuing');
  }
  bookid?:number
  bookname?:string
  borrowername?:string
  author?:String
  Author=["Elizabeth Robson and Eric Freeman","David DuRocher", "Georgina Young","Shyam Seshadri","Cay S. Horstmann","Mark Myers"," Boris Cherny"," Raghu Ramakrishnan","Steven Feuerstein"]
  issuedate?:string
  AddDetails()
  {
    this.prdtdata?.push({
      bookid: this.bookid,
      bookname: this.bookname,
      author: this.author,
      borrowername:this.borrowername,
      issuedate:this.issuedate
    })
  }
delprdt(e:any){
  this.prdtdata?.splice(this.prdtdata?.indexOf(this.e),1)
}

}

