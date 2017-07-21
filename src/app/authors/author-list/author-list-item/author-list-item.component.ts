import {Component, OnInit, Input} from '@angular/core';
import {Author} from "../../../shared/library.model";
import {AuthorsService} from "../../authors.service";

@Component({
  selector: 'app-author-list-item',
  templateUrl: './author-list-item.component.html',
  styleUrls: ['./author-list-item.component.css']
})
export class AuthorListItemComponent implements OnInit {
  @Input() author: Author;
  bookList: string[];

  constructor(private authorsService: AuthorsService) { }
  ngOnInit() {

  }
}
