import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../transaction.model';

@Component({
  selector: 'app-transaction-tile',
  templateUrl: './transaction-tile.component.html',
  styleUrls: ['./transaction-tile.component.css']
})
export class TransactionTileComponent implements OnInit {

  @Input() public singleTransaction:Transaction;

  constructor() { }

  ngOnInit(): void {
    console.log(this.singleTransaction);
  }

}
