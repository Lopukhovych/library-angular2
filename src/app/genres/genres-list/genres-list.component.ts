import {Component, OnInit} from '@angular/core';
import {GenreService} from "../genres.service";
import {Genre} from "../../shared/library.model";
import {Response} from "@angular/http";

@Component({
    selector: 'app-genres-list',
    templateUrl: './genres-list.component.html',
    styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {
    genreList: Genre[];

    constructor(private genreService: GenreService) {
    }

    ngOnInit() {
        //via ajax request get list of genres and show it
        this.genreService.getbookList().subscribe((data: Response) => {
            this.genreList = data.json().genres
        });
    }

}
