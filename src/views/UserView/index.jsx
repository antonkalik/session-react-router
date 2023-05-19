import { useOutletContext } from 'react-router';

export const UserView = () => {
  const session = useOutletContext();
  return <div>User {session.data?.email} View</div>;
};
