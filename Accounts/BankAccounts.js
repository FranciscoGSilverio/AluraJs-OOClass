//Abstract class
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
    if (this.constructor == BankAccounts)
      throw new Error(
        "You shouldn't instanciante an object using an abstract class"
      );
    this._cash = inicialCash;
    this._client = client;
    this._agency = agency;
  }

  //abstract method
  withdraw(value) {
    throw new Error("The withdraw method of BankAccounts is an abstract method");
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
