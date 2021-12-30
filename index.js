import { Clients } from "./Clients.js";
import { Manager } from "./Employees/Manager.js";
import { Director } from "./Employees/Director.js";
import { AutenticationSystem } from "./AutenticationSystem.js";

const director = new Director("Fernando", 1000, 123123123);
const manager = new Manager("Ricardo", 500, 234345678);

director.registerPassword(123456);
manager.registerPassword(123);

const Client = new Clients("Amanda", 123456789, 234);


const managerLoged = AutenticationSystem.login(manager, 123);
const directorLoged = AutenticationSystem.login(director, 123456);

const clientLoged = AutenticationSystem.login(Client, 234);

console.log(managerLoged, directorLoged, clientLoged);
