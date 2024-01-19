import styled from "styled-components";
const StyleItem = styled.ul`
  margin-top: 10px;
  color: white;
  border-radius: 5px;
  li {
    margin-top: 10px;
    background-color: green;
  }
  span.active {
    text-decoration: line-through;
    color: #c4c4c4;
  }
`;
export { StyleItem };
