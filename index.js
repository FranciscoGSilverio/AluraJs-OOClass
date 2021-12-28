import { Clients } from "./Clients.js";
import { Account } from "./Account.js";

const Francisco = new Clients("Francisco", 11122233345);
const Mauricio = new Clients("Mauricio", 22233344456);

const FranciscoAccount = new Account(Francisco, 1);
const MauricioAccount = new Account(Mauricio, 2);

MauricioAccount.withdraw(20);
MauricioAccount.deposit(1200);

console.log(Account.totalOfAccounts);
