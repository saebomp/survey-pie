import { useRecoilState } from 'recoil';

import answersState from '../stores/answers/atom';
import useStep from './useStep';

function useCurrentAnswer() {
  const step = useStep();
  const [answers, setAnswers] = useRecoilState(answersState);

  const answer = answers[step];
  const setAnswer = (newAnswer) => {
    //newAnswer 는 사용자가 입력한 새로운 답변
    setAnswers((answes) => {
      const newAnswers = [...answers]; //answers를 복사해서 newAnswers 라는 새배열만듬 ->불면성
      newAnswers[step] = newAnswer; //복사한 배열의 step 인덱스 위치에 newAnswer을 넣음
      return newAnswers;
    });
  };

  return [answer, setAnswer];
}

export default useCurrentAnswer;
