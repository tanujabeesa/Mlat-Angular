import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { ActivatedRoute } from '@angular/router';
import { List } from '../../List';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  username?:String
  page?:String


 @Input() listbrt:List |any
 @Output() item=new EventEmitter<List>()

 pd?:List
 srcdata:List[]=[]
 src?:string |any

 ngOnChanges(changes: SimpleChanges) {
  // changes.prop contains the old and the new value...
  
}



 constructor(private activrt: ActivatedRoute,private authserv:AuthserviceService)
 {
  const sub = this.activrt.queryParamMap
  .subscribe(params => {
        this.username =  params.get('username') || '',
        this.page = params.get('page')||''
});
console.log(this.username)
console.log(this.page)
 }







  searchitem()
  {
      this.srcdata = this.listbrt.filter((v:any) =>
            v.bookname.indexOf(this.src) !==-1)
            console.log(this.srcdata)
  }

  fetchitem(e:any)
  {
    this.item.emit(e);
  }

  func(e:any)
  {
    console.log(e);
  }

  getcolor(bookid:any) {
    if(bookid>105)
        return "blue"
    else
        return "red"
    }
    logout(){
      this.authserv.logout();
 }



}



