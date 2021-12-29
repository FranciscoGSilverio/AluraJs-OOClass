export class BankAccounts {
  set client(newValue) {
    if (newValue instanceof Clients) this._client = newValue;
  }

  get client() {
    return this._client;
  }

  get cash() {
    return this._cash;
  }

  constructor(inicialCash, client, agency) {
    this._cash = inicialCash;
    this._client = client;
    this._agency = agency;
  }

  withdraw(value) {
    let fee = 1;
    return this._withdraw(value, fee);
  }

  _withdraw(value, fee) {
    const amount = fee * value;
    if (this._cash >= amount) {
      this._cash -= amount;
      return amount;
    } else return 0;
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
