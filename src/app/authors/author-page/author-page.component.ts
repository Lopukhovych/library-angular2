import {Component, OnInit} from '@angular/core';
import {AuthorsService} from "../authors.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Author} from "../../shared/library.model";
import {Response} from "@angular/http";

@Component({
    selector: 'app-author-page',
    templateUrl: './author-page.component.html',
    styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit {

    private author: Author = new Author('', '', []);
    private authorList: Author[];

    constructor(private authorsService: AuthorsService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        //In the parameters get author name
        this.route.params.subscribe(
            (params: Params) => {

                //make an ajax request and get all authors data
                this.authorsService.getAuthorList()
                    .subscribe((data: Response) => {

                        this.authorList = data.json().authors;

                        for (let item = 0; item < this.authorList.length; item++) {

                            if (this.authorList[item].authorName == params['authorname']) {
                                //Search for information about the author and output it
                                this.author = this.authorList[item];
                            }
                        }
                        //if there was no author - redirectTo ErrorPageComponent
                        if (this.author.authorName == '') {
                            this.router.navigate(['/not-found']);
                        }
                    });
            }
        );

    }

}
