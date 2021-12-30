import { BankAccounts } from "./BankAccounts.js";

export class SavingsAccount extends BankAccounts {
  constructor(inicialCash, client, agency) {
    super(inicialCash, client, agency);
  }
}
