import {Component, OnInit, Input} from '@angular/core';
import {Book} from "../../../shared/library.model";

@Component({
  selector: 'app-books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.css']
})
export class BooksItemComponent implements OnInit {

  @Input() bookItem: Book;

  constructor() { }

  ngOnInit() {

  }

}
