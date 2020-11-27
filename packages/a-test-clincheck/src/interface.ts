import { CX } from 'b-test-clincheck';
export interface A {
  A1: string;
  A2: string;
}


const message: CX = { A: { A1: '1', A2: 'sdf' } , X: 1 }; //X muts be string

console.log(message.X);

