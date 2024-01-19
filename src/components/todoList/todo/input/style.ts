import styled from "styled-components";
const StyleInput = styled.div`
  .todo {
    display: flex;
    align-items: center;
  }
  .todo input {
    width: 300px;
    height: 45px;
    padding-left: 10px;
    outline: none;
    border: 1px solid gray;
    border-radius: 5px;
  }
  .todo input:focus {
    border: none;
    outline: 1px solid orangered;
  }
`;
export { StyleInput };
