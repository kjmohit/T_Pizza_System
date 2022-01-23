import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Store } from './services/store.service';
import PizzaListView from './views/pizzaListView.component';
import { HttpClientModule } from "@angular/common/http"
import { CartView } from './views/CartView';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { CustomizePizzaComponent } from './views/customize-pizza.component';
import { MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [     
        AppComponent,
        PizzaListView,
        CartView,
        CustomizePizzaComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      NgbModule,
      MatDialogModule,
      MatGridListModule,
      MatToolbarModule,
      MatIconModule,
      MatRadioModule,
      MatCheckboxModule,
      MatButtonModule,
      BrowserAnimationsModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
