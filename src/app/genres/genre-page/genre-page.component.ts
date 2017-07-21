import { Component, OnInit } from '@angular/core';
import {GenreService} from "../genres.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Response} from "@angular/http";
import {Genre} from "../../shared/library.model";

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.css']
})
export class GenrePageComponent implements OnInit {
  genreList: Genre[];
  bookList: string[] = [];

  constructor(private genreService: GenreService,
              private route: ActivatedRoute) { }
  ngOnInit() {

    this.route.params.subscribe(
        (params: Params) =>{
          //делаем ajax запрос и получаем список жанров и сочинений
          this.genreService.getbookList()
              .subscribe((data:Response)=>{
                this.genreList = data.json().genres;

                for(let item =0; item < this.genreList.length; item++){

                  if(this.genreList[item].genreName == params['genrename']){
                    //перебором получаем спик произведений определенного жанра
                    this.bookList = this.genreList[item].bookList;
                  }

                }
              });
        }
    );
  }
}
