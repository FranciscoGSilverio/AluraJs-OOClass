class Clients {
  name;
  id;
}

class Account {
  cash;
  agency;

  withdraw(value) {
    if (this.cash >= value) {
      this.cash -= value;
    } else console.log("Operation denied!");
  }

  deposit(value) {
    if (value > 0) {
      this.cash += value;
    } else console.log("Operation denied!");
  }
}

const Francisco = new Clients();
const Mauricio = new Clients();

const FranciscoAccount = new Account();
const MauricioAccount = new Account();

Francisco.name = "Francisco";
Francisco.id = 11122233345;
FranciscoAccount.cash = 1200.85;
FranciscoAccount.agency = 1;

Mauricio.name = "Mauricio";
Mauricio.id = 22233344456;
MauricioAccount.cash = 500.9;
MauricioAccount.agency = 2;

MauricioAccount.withdraw(20);
MauricioAccount.deposit(1200);

console.log(MauricioAccount);
