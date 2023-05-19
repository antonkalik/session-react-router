import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { fakeApi } from 'src/data/fakeApi';
import { fakeCache } from 'src/data/fakeCache';

export const SessionProvider = () => {
  const cache = fakeCache.getItem('cache');
  const [data, setData] = useState(cache);

  useEffect(() => {
    fakeApi.getSession().then(setData);
  }, []);

  const logout = async () => {
    setData(null);
    await fakeApi.logout();
  };

  return <Outlet context={{ data, login: setData, logout }} />;
};
