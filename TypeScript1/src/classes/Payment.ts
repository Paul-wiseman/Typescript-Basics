import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
    constructor(
         readonly recipient: string, 
         private details: string, 
         public amount: number){
        
    }

    // Method
    format(){
        return `${this.recipient} is owes $${this,this.amount} for ${this.details}`;
    }
}
