import {Component, OnInit} from '@angular/core';
import {GenreService} from "./genres.service";

@Component({
    selector: 'app-genres',
    templateUrl: './genres.component.html',
    styleUrls: ['./genres.component.css'],
    providers: [GenreService]
})
export class GenresComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
