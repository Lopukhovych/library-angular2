import { Component, OnInit } from '@angular/core';
import {AuthorsService} from "../authors.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Author} from "../../shared/library.model";
import {Response} from "@angular/http";

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit {
  private author: Author = new Author('','',[]);
  private authorList: Author[];
  constructor(private authorsService: AuthorsService,
            private route: ActivatedRoute) { }

  ngOnInit() {
    //в качестве параметра получаем имя автора
    this.route.params.subscribe(
        (params: Params) =>{
          //делаем ajax запрос и получаем данные про всех авторов
          this.authorsService.getAuthorList()
              .subscribe((data:Response)=>{
                this.authorList = data.json().authors;
                for(let item =0; item < this.authorList.length; item++){
                  if(this.authorList[item].authorName == params['authorname']){
                    //перебором получаем информацию про автора и выводим ее
                    this.author = this.authorList[item];
                  }
                }
              });
        }
    );

  }

}
