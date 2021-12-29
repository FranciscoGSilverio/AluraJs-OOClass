import { BankAccounts } from "./BankAccounts.js";

export class Account extends BankAccounts {
  static totalOfAccounts = 0;

  constructor(client, agency) {
    super(0, client, agency);
    Account.totalOfAccounts++;
  }
  //overwrites the 'withdraw' method;
  withdraw(value) {
    let fee = 1.1;
    return this._withdraw(value, fee);
  }
}
