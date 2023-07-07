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
    img=""

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.book_code = params.get('code') || '';
    })
  }
}
