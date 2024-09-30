import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { BooksServiceService } from '../books-service.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    // BooksServiceService
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
  providers: [BooksServiceService]
})
export class BooksComponent {

  constructor(private bookService: BooksServiceService, private http: HttpClient) {}

  searchInput = new FormControl('');

  volumeInfo: any[] = [];
  volumeInfo1: any[] = [];

  newBook(){
    //to do
  }

  ngOnInit(){
    this.getBooksDetails();
  }

  getBooksDetails(){
    this.bookService.getBooks().subscribe( data => {
      data.items.forEach((element: any) => {
        this.volumeInfo.push(element['volumeInfo'])
      });
      this.volumeInfo1 = this.volumeInfo;
    })
  }

  filterBooks() {
    let searchValue = this.searchInput.value?.toLowerCase();
    // console.log(searchValue)
    if(searchValue !== ''){
      this.volumeInfo1 = this.volumeInfo.filter((value) => {
        return value.title.toLowerCase().search(searchValue)
      });
    }
    else{
      this.volumeInfo1 = this.volumeInfo;
    }
    console.log(this.volumeInfo);
  }

}
