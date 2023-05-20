import { useOutletContext } from 'react-router';
import { LandingView } from 'src/views/LandingView';
import { ListsPostsView } from 'src/views/ListsPostsView';

export const HomeView = () => {
  const session = useOutletContext();

  return session.data ? <ListsPostsView /> : <LandingView />;
};
