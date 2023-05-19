import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${({ session }) => (session ? '#f67575' : '#7ee78a')};
  height: 300px;
  padding: 20px;
`;

export const StyledMainLayout = styled.div`
  background-color: #bdbdbd;
  padding: 10px;
`;