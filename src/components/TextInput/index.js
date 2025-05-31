import styled from 'styled-components';

function TextInput({ answer = '', setAnswer, options }) {
  return (
    <Input
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      placeholder={options.placeholder}
      // maxLength={options?.max}
      {...(options?.max && { maxLength: options?.max })} //max가 undefined 아닌경우 maxLength를 options의 max로 세팅하고 max가 undefined 이면 이 구문자체가 없는 취급됨
    />
  );
}

const Input = styled.input`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 18px;
  line-height: 21px;
  padding: 12px 18px;
  width: 100%;
`;

export default TextInput;
