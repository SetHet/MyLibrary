import { Component, OnInit } from '@angular/core';
import { BackendService } from '@src/app/services/backend.service';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.scss']
})
export class MybooksComponent implements OnInit {
  books_list = [
    {
      name: "Libro 1",
      code: "11111",
      img_url: "../../../assets/media/imagen-test.png",
    },
    {
      name: "Libro 2",
      code: "22222",
      img_url: "../../../assets/media/imagen-test.png",
    },
    {
      name: "Libro 3",
      code: "33333",
      img_url: "../../../assets/media/imagen-test.png",
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
