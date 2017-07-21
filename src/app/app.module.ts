import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule}   from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from './header/header.component';
import {BooksComponent} from './books/books.component';
import {AuthorsComponent} from './authors/authors.component';
import {GenresComponent} from './genres/genres.component';
import {BookPageComponent} from './books/book-page/book-page.component';
import {BooksListComponent} from './books/books-list/books-list.component';
import {DropdownDirective} from "./shared/dropdown.directive";
import {BooksItemComponent} from './books/books-list/books-item/books-item.component';
import {BooksStartComponent} from './books/books-start/books-start.component';
import {AuthorListComponent} from './authors/author-list/author-list.component';
import {AuthorListItemComponent} from './authors/author-list/author-list-item/author-list-item.component';
import {AuthorPageComponent} from './authors/author-page/author-page.component';
import {AuthorStartComponent} from './authors/author-start/author-start.component';
import {GenresListComponent} from './genres/genres-list/genres-list.component';
import {GenrePageComponent} from './genres/genre-page/genre-page.component';
import {GenreStartComponent} from './genres/genre-start/genre-start.component';
import {GenreListItemComponent} from './genres/genres-list/genre-list-item/genre-list-item.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BooksComponent,
        AuthorsComponent,
        GenresComponent,
        BookPageComponent,
        BooksListComponent,
        DropdownDirective,
        BooksItemComponent,
        BooksStartComponent,
        AuthorListComponent,
        AuthorListItemComponent,
        AuthorPageComponent,
        AuthorStartComponent,
        GenresListComponent,
        GenrePageComponent,
        GenreStartComponent,
        GenreListItemComponent,
        ErrorPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
