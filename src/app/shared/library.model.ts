export class Book {
    public bookName: string;
    public description: string;
    public author: string[];
    public genre: string;
    constructor(bookName: string,description: string, author: string[], genre: string){
        this.bookName = bookName;
        this.description = description;
        this.author = author;
        this.genre = genre;
    }
}
export class Author{
    public authorName: string;
    public biography: string;
    public bookList: string[];
    constructor(authorName: string, biography: string,bookList: string[] ){
        this.authorName = authorName;
        this.biography = biography;
        this.bookList = bookList;
    }
}

export class Genre {
    public genreName: string;
    public bookList: string[];
    constructor(genreName: string,bookList: string[] ){
        this.genreName = genreName;
        this.bookList = bookList;
    }
}