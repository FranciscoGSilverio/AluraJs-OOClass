import { Clients } from "./Clients.js";
import { Account } from "./Account.js";

const Francisco = new Clients();
Francisco.name = "Francisco";
Francisco.id = 11122233345;

const Mauricio = new Clients();
Mauricio.name = "Mauricio";
Mauricio.id = 22233344456;

const FranciscoAccount = new Account();
FranciscoAccount.client = Francisco;
FranciscoAccount.agency = 1;

const MauricioAccount = new Account();
MauricioAccount.client = Mauricio;
MauricioAccount.agency = 2;

MauricioAccount.withdraw(20);
MauricioAccount.deposit(1200);

FranciscoAccount.cash = 300;
console.log(FranciscoAccount.cash);
