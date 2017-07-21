import {Component, OnInit, Input} from '@angular/core';
import {Genre} from "../../../shared/library.model";

@Component({
    selector: 'app-genre-list-item',
    templateUrl: './genre-list-item.component.html',
    styleUrls: ['./genre-list-item.component.css']
})
export class GenreListItemComponent implements OnInit {
    @Input() genre: Genre;

    constructor() {
    }

    ngOnInit() {

    }
}
