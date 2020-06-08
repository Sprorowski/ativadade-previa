import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewBookPageComponent } from './new-book-page/new-book-page.component';
import { BooksListComponent } from './books-list/books-list.component';


const routes: Routes = [
  {
    path: "new-book",
    component: NewBookPageComponent
  },
  {
    path: "book-list",
    component: BooksListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
