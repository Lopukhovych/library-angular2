import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class AuthorsService {

    constructor(private http: Http) {
    }

    getAuthorList() {
        return this.http.get('./data/authors.json');
    }
}