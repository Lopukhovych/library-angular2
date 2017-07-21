"use strict";
var Book = (function () {
    function Book(bookName, description) {
        this.bookName = bookName;
        this.description = description;
    }
    return Book;
}());
exports.Book = Book;
var Author = (function () {
    function Author(authorName, bookList) {
        this.authorName = authorName;
        this.bookList = bookList;
    }
    return Author;
}());
exports.Author = Author;
var Genre = (function () {
    function Genre(genreName, bookList) {
        this.genreName = genreName;
        this.bookList = bookList;
    }
    return Genre;
}());
exports.Genre = Genre;
var LibraryItem = (function () {
    function LibraryItem(book, author, genre) {
        this.book = book;
        this.author = author;
        this.genre = genre;
    }
    return LibraryItem;
}());
exports.LibraryItem = LibraryItem;
