import { A } from 'a-test-clincheck/src/interface';
import X from 'extendType';

const message: A = { A1: '1', A2: 'sdf' };

console.log(message.A1);

export interface AB {
  fromA: A;
  fromB: X;
}

