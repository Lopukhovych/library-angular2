import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class GenreService{

    constructor(private http: Http){}

    getbookList(){
        return this.http.get('./data/genres.json');
    }

}