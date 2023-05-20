import { useEffect } from 'react';
import { useActionData, useNavigation, useOutletContext } from 'react-router';
import { Form, redirect } from 'react-router-dom';

export const LoginView = () => {
  const navigation = useNavigation();
  const session = useOutletContext();
  const isLoading =
    navigation.state === 'loading' || navigation.state === 'submitting';
  const data = useActionData();

  useEffect(() => {
    if (data && !data.error) {
      session.login(data);
      redirect('/');
    }
  });

  return (
    <div>
      <Form action="/login" method="post">
        <label>
          Username:
          <input disabled={isLoading} type="text" name="username" />
        </label>
        <label>
          Password:
          <input disabled={isLoading} type="password" name="password" />
        </label>
        <button disabled={isLoading}>
          {isLoading ? 'loading...' : 'Login'}
        </button>
      </Form>
      {data && data.error && <div>{data.error}</div>}
    </div>
  );
};