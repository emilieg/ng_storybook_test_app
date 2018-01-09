import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { TableComponentComponent } from './table-component/table-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    TableComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
