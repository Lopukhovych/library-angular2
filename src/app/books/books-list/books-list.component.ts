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
    //via ajax request get list of books and show it
    this.bookService.getBookItems().subscribe((data:Response)=>{this.bookItems = data.json().books});
  }
}