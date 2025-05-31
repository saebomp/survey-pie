import { selector } from 'recoil';

import questionState from './surveyState';

const questionsLengthState = selector({
  key: 'questionsLengthState',
  get: ({ get }) => {
    const questions = get(questionState).questions;
    return questions.length;
  },
});

export default questionsLengthState;
