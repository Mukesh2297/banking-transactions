export interface Transaction{
    availableBalance:number;
    reason:string;
    dateOfTransaction:string;
    amountCreditedOrDebited:number;
    isAmountCredited:boolean;
}