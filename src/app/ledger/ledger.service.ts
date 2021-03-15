import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transaction } from './transaction.model';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {

  public sampleTransactions:Transaction[] = [{availableBalance:12000,reason:"Credit from Bank",dateOfTransaction:"12-Dec-2020",amountCreditedOrDebited:100,isAmountCredited:true},
  {availableBalance:15000,reason:"Debit from Bank",dateOfTransaction:"17-Dec-2020",amountCreditedOrDebited:-100,isAmountCredited:false}]

  public availableBalance:BehaviorSubject<number> = new BehaviorSubject<number>(19345.22) ;

  public allTransactions:BehaviorSubject<Transaction[]>=new BehaviorSubject<Transaction[]>([]);

  public monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  constructor() { }

  creditAmount(creditObj){
    this.doCalculation(creditObj,'add');

  }

  sampleMethod(){
    console.log(Array.from(arguments));
  }

  debitAmount(creditObj){
    this.doCalculation(creditObj,'sub');
  }

  doCalculation(transactionObj,doWhat:string){
    const currentAvailableBalance = this.availableBalance.value;
    let newBalance;
    let newTransactionObj;
    if(doWhat==='add'){
      newBalance = currentAvailableBalance + parseFloat(transactionObj.amount);
      newTransactionObj = {reason:transactionObj.reason,
        availableBalance:newBalance,
        dateOfTransaction:this.constructDate(),
        amountCreditedOrDebited:transactionObj.amount,
      isAmountCredited:false};
    }

    else if(doWhat==='sub'){
      newBalance = currentAvailableBalance - transactionObj.amount;
      newTransactionObj = {reason:transactionObj.reason,
        availableBalance:newBalance,
        dateOfTransaction:this.constructDate(),
        amountCreditedOrDebited:-transactionObj.amount,
        isAmountCredited:true};
    }   
    console.log(newTransactionObj);
    const currentTransactions = this.allTransactions.value;
    const newTransactions = [...currentTransactions,newTransactionObj];
    this.availableBalance.next(newBalance);
    this.allTransactions.next(newTransactions);

  }


  constructDate(){
    const date =  new Date();
    return `${date.getDate()}-${this.monthArray[date.getMonth()]}-${date.getFullYear()}`;
  }

}
