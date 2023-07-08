import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-bookviewer',
  templateUrl: './bookviewer.component.html',
  styleUrls: ['./bookviewer.component.scss']
})
export class BookviewerComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
  ){}

  book_code: string = '';
  book_name: string = '';
  pagina_actual: number = 0
  paginas = [ // cambiar a un sistema de carga dinamico
    'assets/media/imagen-test.png',
    'assets/media/imagen-test-2.png',
    'assets/media/imagen-test-3.png',
  ]
  flowload_next_min: number = 3;
  flowload_next_max: number = 15;
  flowload_previous_min: number = 3;
  flowload_previous_max: number | null = 15;


  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.book_code = params.get('code') || '';
    })
    // buscar datos del libro

    // nombre del libro
    this.book_name = 'Book ' + this.book_code;
    window.document.title = this.book_name;

    // cargar paginas necesarias
  }

  next_page(){
    let pagina_siguiente = this.pagina_actual + 1;
    if (pagina_siguiente < this.paginas.length){
      this.pagina_actual = pagina_siguiente;
    }
  }

  previous_page(){
    let pagina_anterior = this.pagina_actual - 1;
    if (pagina_anterior >= 0){
      this.pagina_actual = pagina_anterior;
    }
  }

  flowload_page(){
    // revisar que paginas se tiene

    // quitar paginas innecesarias

    // agregar paginas nuevas necesarias
  }
}
