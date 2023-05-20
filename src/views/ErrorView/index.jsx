import { useRouteError } from 'react-router';

export const ErrorView = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Error View</h1>
      <p>{error.message}</p>
    </div>
  );
};
