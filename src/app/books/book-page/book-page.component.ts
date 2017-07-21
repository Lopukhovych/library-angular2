import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Book} from "../../shared/library.model";
import {BookService} from "../books.service";
import {Response} from "@angular/http";

@Component({
    selector: 'app-book-page',
    templateUrl: './book-page.component.html',
    styleUrls: ['./book-page.component.css'],
    providers: [BookService]
})
export class BookPageComponent implements OnInit {
    bookItems: Book[];
    bookItem: Book = new Book('', '', [], '');

    constructor(private bookService: BookService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        //In the parameters get book title
        this.route.params.subscribe(
            (params: Params) => {

                //make an ajax request and get all books data
                this.bookService.getBookItems()
                    .subscribe((data: Response) => {

                        this.bookItems = data.json().books;

                        for (let item = 0; item < this.bookItems.length; item++) {

                            if (this.bookItems[item].bookName == params['bookname']) {
                                //Search for information about the book and output it
                                this.bookItem = this.bookItems[item];
                            }
                        }
                        //if there was no book - redirectTo ErrorPageComponent
                        if (this.bookItem.bookName == '') {
                            this.router.navigate(['/not-found']);
                        }
                    });
            }
        );
    }

}
