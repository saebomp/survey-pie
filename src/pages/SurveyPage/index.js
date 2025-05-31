import { Suspense } from 'react';
import styled from 'styled-components';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';

function SurveyPage() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <SurveyPageWarpper>
        <ProgressIndicator />
        <QuestionBox />
      </SurveyPageWarpper>
    </Suspense>
  );
}
const SurveyPageWarpper = styled.div`
  width: 100%;
  min-height: 100%;
`;
export default SurveyPage;
