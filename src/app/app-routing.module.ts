import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {BooksComponent} from "./books/books.component";
import {AuthorsComponent} from "./authors/authors.component";
import {BookPageComponent} from "./books/book-page/book-page.component";
import {BooksStartComponent} from "./books/books-start/books-start.component";
import {AuthorStartComponent} from "./authors/author-start/author-start.component";
import {AuthorPageComponent} from "./authors/author-page/author-page.component";
import {GenresComponent} from "./genres/genres.component";
import {GenreStartComponent} from "./genres/genre-start/genre-start.component";
import {GenrePageComponent} from "./genres/genre-page/genre-page.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/books', pathMatch: 'full'},
    {path: 'books', component: BooksComponent, children:[
        {path: '', component: BooksStartComponent, pathMatch: 'full'},
        {path:':bookname',component: BookPageComponent},
    ]},
    {path: 'authors', component: AuthorsComponent,children:[
        {path: '', component: AuthorStartComponent, pathMatch: 'full'},
        {path: ':authorname',component: AuthorPageComponent}
    ]},
    {path: 'genres',component: GenresComponent,children:[
        {path:'', component: GenreStartComponent, pathMatch: 'full'},
        {path:':genrename', component: GenrePageComponent}
    ]}
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}