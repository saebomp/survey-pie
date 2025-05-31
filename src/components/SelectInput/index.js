import styled from "styled-components";

function Item({ children, onChange }) {
  return (
    <ItemWrapper>
      <label>
        <input type="checkbox" onChange={onChange} />
        <span />
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
}

function SelectInput({ answer = [], setAnswer, options }) {
  //answer=[] answer가 undefined 일경우 배열로 인식하게함
  const handleChange = (isChecked, index) => {
    // console.log("answer", answer, index);
    if (isChecked) {
      //setAnswer (index 추가)
      setAnswer([...answer, index]); //체크된 값을 배열로 관리. 이미선택된 값 answer를 추가하고, 새로 추가된값 index 넣기
    } else {
      //setAnswer (index 빼기)
      setAnswer(answer.filter((item) => item !== index)); //filter 를 돌려서 동일한 index 값이 들어오면 그걸 빼고 새 배열만듬
    }
  };
  return (
    <SelectInputWrapper>
      {options.items.map((item, index) => {
        return (
          <Item
            key={index}
            onChange={(e) => {
              handleChange(e.target.checked, index);
            }}
          >
            {item}
          </Item>
        );
      })}
    </SelectInputWrapper>
  );
}

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ItemWrapper = styled.div`
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] ~ span {
    width: 24px;
    height: 24px;
    border: 3px solid #e2dfdf;
    box-sizing: border-box;
    display: inline-block;
    border-radius: 100%;
    vertical-align: middle;
    margin-right: 10px;
  }
  input[type="checkbox"]:checked ~ span {
    border: 8px solid #6542f1;
  }
  input[type="checkbox"] ~ div {
    font-size: 14px;
    line-height: 18px;
    display: inline-block;
    vertical-align: middle;
  }
  input[type="checkbox"]:checked ~ div {
    font-weight: bold;
  }
`;

export default SelectInput;
