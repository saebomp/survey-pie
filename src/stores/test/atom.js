import { atom } from 'recoil';

const testState = atom({
  key: 'testState', // unique ID (with respect to other atoms/selectors)
  default: ['a', 'b', 'c'], // default value (aka initial value)
});

export default testState;
