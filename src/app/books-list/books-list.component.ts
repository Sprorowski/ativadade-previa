import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  booksList: Object[] = [];
  teste = [12 ,1 , 15 ,16] ;
  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
    this.http.get<Object[]>("http://localhost:3000").subscribe(booksList=> this.booksList = booksList,
    (err)=>{
      console.log(err);
    });
  }

}
