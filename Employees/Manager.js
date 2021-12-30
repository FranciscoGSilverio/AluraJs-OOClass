import { Employee } from "./Employee";

export class Manager extends Employee{
    constructor(name, salary, id){
        super(name, salary, id);
        this._bonus = 1.1;
    }
}