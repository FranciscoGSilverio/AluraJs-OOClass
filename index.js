import { Clients } from "./Clients.js";
import { Account } from "./Account.js";
import { SavingsAccount } from "./SavingsAccount.js";

const Francisco = new Clients("Francisco", 11122233345);
const Mauricio = new Clients("Mauricio", 22233344456);

const FranciscoAccount = new SavingsAccount(200, Francisco, 20);
const MauricioAccount = new Account(Mauricio, 10);

//****Methods demonstration****
/*MauricioAccount.deposit(500);
MauricioAccount.withdraw(100); 

MauricioAccount.transfer(300, FranciscoAccount);

console.log(FranciscoAccount, MauricioAccount);*/
