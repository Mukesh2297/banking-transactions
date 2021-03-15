import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTileComponent } from './transaction-tile.component';

describe('TransactionTileComponent', () => {
  let component: TransactionTileComponent;
  let fixture: ComponentFixture<TransactionTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
