import { Component, OnInit } from '@angular/core';
import { Book } from '@src/app/models/book.model';
import { BackendService } from '@src/app/services/backend.service';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.scss']
})
export class MybooksComponent implements OnInit {
  books_list: Book[] = [
    {
      name: "Libro 1",
      id: "11111",
      imgURL: "../../../assets/media/imagen-test.png",
    },
    {
      name: "Libro 2",
      id: "22222",
      imgURL: "../../../assets/media/imagen-test.png",
    },
    {
      name: "Libro 3",
      id: "33333",
      imgURL: "../../../assets/media/imagen-test.png",
    }
  ];

  constructor(
    private service_backend: BackendService
  ){}

  ngOnInit(): void {
    // Test
    // for (let index = 0; index < 2; index++) {
    //   this.books_list = this.books_list.concat(this.books_list);
    // }
    this.service_backend.getBooks()?.subscribe(books => {
      this.books_list = books.data
      this.books_list.forEach(item => {
        if (!item.imgURL)
          item.imgURL = "../../../assets/media/imagen-test.png"
      })
    })
  }

  ClickCard(code: string){
    // cambiar nombre pagina
    window.document.title = code;

    // cambiar pagina
    window.location.href = '/bookviewer?code='+code;

  }

  testconnection() {
    console.log("test conectioon")
    this.service_backend.getTest()?.subscribe(data => {
      //window.prompt(data)
      console.log(data)
    })
  }
}
