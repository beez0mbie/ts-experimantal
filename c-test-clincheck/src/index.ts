
import { AB } from '@clincheck/b-test-clincheck';

const message: AB = { fromA: { A1: '1', A2: 'sdf' } , fromB: 1 }; //fromB muts be string!

console.log(message.fromB);

