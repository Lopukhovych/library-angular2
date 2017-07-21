import { Component, OnInit } from '@angular/core';
import {Book} from "../../shared/library.model";
import {BookService} from "../books.service";
import {Response} from "@angular/http";


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  bookItems: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    //через ajax запрос получаем перечень книг и выводим их
    this.bookService.getBookItems().subscribe((data:Response)=>{this.bookItems = data.json().books});
  }
}