import {Component, OnInit} from '@angular/core';
import {GenreService} from "../genres.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
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
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        //In the parameters get genre title
        this.route.params.subscribe(
            (params: Params) => {

                //make an ajax request and get all genres data
                this.genreService.getbookList()
                    .subscribe((data: Response) => {

                        this.genreList = data.json().genres;

                        for (let item = 0; item < this.genreList.length; item++) {

                            if (this.genreList[item].genreName == params['genrename']) {
                                //Search for information about the genre and output it
                                this.bookList = this.genreList[item].bookList;
                            }

                        }
                        //if there was no genre - redirectTo ErrorPageComponent
                        if(this.bookList.length == 0 ){
                            this.router.navigate(['/not-found']);
                        }
                    });
            }
        );
    }
}
