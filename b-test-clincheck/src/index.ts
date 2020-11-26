import { A } from '@clincheck/a-test-clincheck/src/interface';
import tooth2 from '../textures/Tooth2.png';

const message: A = { A1: '1', A2: 'sdf' };

console.log(message.A1);
console.log(tooth2);

export interface AB {
  fromA: A;
  fromB: typeof tooth2;
}

// export const message2: AB = { fromA: { A1: '1', A2: 'sdf' } , fromB: 1 }
