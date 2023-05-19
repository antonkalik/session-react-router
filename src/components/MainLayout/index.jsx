import { Outlet, useOutletContext } from 'react-router';
import { Navigation } from 'src/components/Navigation';
import { Footer } from 'src/components/Footer';
import { StyledContainer, StyledMainLayout } from './styles';

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
