import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${({ session }) => (session ? '#f67575' : '#7ee78a')};
  padding: 20px;
`;

export const StyledMainLayout = styled.div`
  background-color: #bdbdbd;
  padding: 10px;
`;