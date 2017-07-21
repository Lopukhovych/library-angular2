import {Component, OnInit} from '@angular/core';
import {Author} from "../../shared/library.model";
import {AuthorsService} from "../authors.service";
import {Response} from "@angular/http";

@Component({
    selector: 'app-author-list',
    templateUrl: './author-list.component.html',
    styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
    authorList: Author[];

    constructor(private authorsService: AuthorsService) {
    }

    ngOnInit() {
        //via ajax request get list of authors and show it
        this.authorsService.getAuthorList().subscribe((data: Response) => {
            this.authorList = data.json().authors
        });
    }

}
