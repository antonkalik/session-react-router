import { Outlet, useOutletContext } from 'react-router';
import styled from 'styled-components';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export const MainLayout = () => {
  const session = useOutletContext();

  return (
    <StyledMainLayout>
      <div>
        <Navigation session={session} />
        <StyledContainer session={session.data}>
          <Outlet context={session} />
        </StyledContainer>
      </div>
      <Footer />
    </StyledMainLayout>
  );
};

const StyledContainer = styled.div`
  background-color: ${({ session }) => (session ? '#f67575' : '#7ee78a')};
  height: 300px;
  padding: 20px;
`;

const StyledMainLayout = styled.div`
  background-color: #bdbdbd;
  padding: 10px;
`;
