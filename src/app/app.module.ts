import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';


import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { NewBeerComponent } from './new-beer/new-beer.component';
import { EditBeerComponent } from './edit-beer/edit-beer.component';
import { FilterPipe } from './filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    NewBeerComponent,
    EditBeerComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
