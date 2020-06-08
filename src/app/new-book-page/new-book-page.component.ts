import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-book-page',
  templateUrl: './new-book-page.component.html',
  styleUrls: ['./new-book-page.component.scss']
})
export class NewBookPageComponent implements OnInit {
  form;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {    
    this.form = this.formBuilder.group({
      titulo:[''],
      autor: [],
      editora: [],
      area: [],
     })
  }

  salvar(){
    this.http.post("http://localhost:3000/new", {
      titulo: this.form.get('titulo').value,
      autor:this.form.get('autor').value,
      editora: this.form.get('editora').value,
      area:this.form.get('area').value,
    }).subscribe(()=>{
      console.log("Salvo");
    },(err)=>{
      console.log(err);
    });
    

  }

}
