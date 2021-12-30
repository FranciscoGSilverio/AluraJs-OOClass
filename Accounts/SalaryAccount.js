import { BankAccounts } from "./BankAccounts.js";

export class SalaryAccoount extends BankAccounts {
  constructor(client) {
    super(0, client, 100);
  }

  withdraw(value) {
    const fee = 1.02;
    return this._withdraw(value, fee);
  }
}
