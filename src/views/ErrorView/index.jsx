import { useRouteError } from 'react-router';

export const ErrorView = () => {
  const error = useRouteError();

  return (
    <div>
      Error View
      <p>{error.message}</p>
    </div>
  );
};
