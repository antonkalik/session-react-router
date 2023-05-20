import { fakeApi } from 'src/data/fakeApi';

export async function loginAction({ request }) {
  const formData = await request.formData();
  const sessionData = {
    username: formData.get('username'),
    password: formData.get('password'),
  };

  try {
    await fakeApi.login(sessionData);
    return sessionData;
  } catch (err) {
    if (err.message === 'Invalid credentials') {
      return {
        error: 'Invalid username or password.',
      };
    }
    throw err;
  }
}
