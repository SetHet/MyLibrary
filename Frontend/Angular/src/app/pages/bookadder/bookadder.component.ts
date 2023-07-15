import { Component } from '@angular/core';

@Component({
  selector: 'app-bookadder',
  templateUrl: './bookadder.component.html',
  styleUrls: ['./bookadder.component.scss']
})
export class BookadderComponent {
  

  register: RegisterForm = {
    name: '',
    image: null,
    files: []
  }

  onFileChange(event: any ){
    this.register.files.splice(0, this.register.files.length);;
    for (let index = 0; index < event.target.files.length; index++) {
      this.register.files.push(event.target.files[index])
    }
  }

  onImageChange(event: any) {
    let file = event.target.files[0];
    if (file){
      this.register.image = file;
      let preview = document.getElementById("imagePreview") as HTMLImageElement
      if (preview){
        preview.src = URL.createObjectURL(this.register.image as Blob)
      }
    }
  }
}

type RegisterForm = {
  name: String,
  image: File | null,
  files: File[]
}