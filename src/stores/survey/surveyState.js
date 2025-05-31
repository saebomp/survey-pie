import { selector } from 'recoil';

import getSurvey from '../../services/getSurvey';

const surveyState = selector({
  key: 'surveyState', // unique ID (with respect to other atoms/selectors)
  get: async () => {
    const res = await getSurvey(window.location.pathname.split('/')[2]);
    return res.data;
  },
});

export default surveyState;
