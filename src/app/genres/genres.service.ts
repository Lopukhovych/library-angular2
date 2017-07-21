import {Injectable} from "@angular/core";

import {Genre} from "../shared/library.model";
import {Http} from "@angular/http";

@Injectable()
export class GenreService{

    private bookList: Genre[] = [
        new Genre(
            'Роман',
            ['Заводной апельсин','Железо, ржавое железо', 'Повелитель мух']
        ),
        new Genre(
            'Фэнтези',
           ['Апрельское колдовство']
        )

    ];
    constructor(private http: Http){}
    getbookList(){
        // console.log(JSON.stringify(this.bookList));
        // return this.bookList.slice();
        return this.http.get('./data/genres.json');
    }
    getGenre(genre){
        for(let i = 0; i <= this.bookList.length; i++ ){
            if(this.bookList[i].genreName == genre) return this.bookList[i];
        }
    }

}