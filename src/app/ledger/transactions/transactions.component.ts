import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LedgerService } from '../ledger.service';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit,OnDestroy {

  public transactions:Transaction[];

  public transactionSubscription:Subscription;

  public userRequestedTransaction:Subscription;

  constructor(private ledgerService:LedgerService) { }

  ngOnInit(): void {

    this.ledgerService.sampleMethod(1,2,3,4,5);
  
  this.transactionSubscription = this.ledgerService.allTransactions.subscribe((response:Transaction[])=>{
    this.transactions = response;
  });

  }

  handleTransactionContent(val){
    console.log(val);
     this.userRequestedTransaction = this.ledgerService.allTransactions.subscribe((response:Transaction[])=>{
      if(val==='spends'){
        console.log(response);
        this.transactions = response.filter((arrItem,ind)=>arrItem.isAmountCredited===true);
        console.log(this.transactions);
      }
      else if(val==='received'){
        this.transactions = response.filter((arrItem,ind)=>arrItem.isAmountCredited===false);
      }
      else{
        this.transactions = response;
      }
     })
  }

  ngOnDestroy(){
    this.transactionSubscription.unsubscribe();
  }

  

}
