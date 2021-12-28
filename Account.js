import { Clients } from "./Clients.js";

export class Account {
  static totalOfAccounts = 0;
  agency;
  _client;

  set client(newValue) {
    if (newValue instanceof Clients) this._client = newValue;
  }

  get client() {
    return this._client;
  }

  _cash = 0;

  get cash() {
    return this._cash;
  }

  constructor(client, agency) {
    this.client = client;
    this.agency = agency;
    Account.totalOfAccounts++;
  }

  withdraw(value) {
    if (this._cash >= value) {
      this._cash -= value;
      return value;
    } else console.log("Operation denied!");
  }

  deposit(value) {
    if (value <= 0) return;
    this._cash += value;
  }

  transfer(value, destination) {
    const transferValue = this.withdraw(value);
    destination.deposit(transferValue);
  }
}
