import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LedgerComponent } from './ledger/ledger.component';
import { TransactionsComponent } from './ledger/transactions/transactions.component';
import {FormComponent} from './ledger/form/form.component';
import { TransactionTileComponent } from './ledger/transactions/transaction-tile/transaction-tile.component';


@NgModule({
  declarations: [
    AppComponent,
    LedgerComponent,
    TransactionsComponent,
    FormComponent,
    TransactionTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
