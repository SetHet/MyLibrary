import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MybooksComponent } from './pages/mybooks/mybooks.component';
import { BookviewerComponent } from './pages/bookviewer/bookviewer.component';
import { BookadderComponent } from './pages/bookadder/bookadder.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngulardocComponent } from './extra/angulardoc/angulardoc.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MybooksComponent,
    BookviewerComponent,
    BookadderComponent,
    NavbarComponent,
    AngulardocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
