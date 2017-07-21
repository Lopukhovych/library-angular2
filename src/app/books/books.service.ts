import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import {Book} from "../shared/library.model";

@Injectable()
export class BookService {
    constructor(private http: Http) {
    }
    getBookItems() {
        return this.http.get('./data/books.json');
    }
}