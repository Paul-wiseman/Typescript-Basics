import { HasFormatter } from '../interfaces/HasFormatter.js';

// Classes
// classes are public by default
// readonly variables can only be accessed from outside and inside the class but cannot be 
// modified from
export class Invoice implements HasFormatter {
    readonly client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // constructor(
    //     readonly client: string,
    //     private details: string,
    //     public amount: number

    // ){};

    // Method
    format(){
        return `${this.client} owes $${this,this.amount} for ${this.details}`;
    }
}
