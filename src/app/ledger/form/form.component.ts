import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LedgerService } from '../ledger.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public availableBalance:Observable<number>;

  constructor(private ledgerService:LedgerService) { }

  ngOnInit(): void {
    this.availableBalance = this.ledgerService.availableBalance;
  }

  handleTransaction(transactionForm,val){
    if(val==='credit'){
      this.ledgerService.creditAmount(transactionForm.value);
    }
    else{
      this.ledgerService.debitAmount(transactionForm.value);
    }
  }

}
