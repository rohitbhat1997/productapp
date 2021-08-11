import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableViewComponent } from './content/table-view/table-view.component';
import { CardViewComponent } from './content/card-view/card-view.component';
import { MaterialModule } from './shared/material.module';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { AlphabetOnlyDirective } from './directives/alphabet-only.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ProductAddComponent,
    TableViewComponent,
    CardViewComponent,
    NumbersOnlyDirective,
    AlphabetOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],

  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
