import { fakeCache } from '../data/fakeCache';
import { useEffect, useState } from 'react';
import { fakeApi } from '../data/fakeApi';

const SESSION_KEY = 'session';

export const useSession = () => {
  const cache = fakeCache.getItem(SESSION_KEY);
  const [data, setData] = useState(cache);
  const [loading, setLoading] = useState(false);

  const clear = () => {
    setData(null);
    fakeCache.clear();
  };

  useEffect(() => {
    if (!cache) {
      setLoading(true);
    }
    fakeApi
      .getSession()
      .then(session => {
        if (session) {
          setData(session);
          fakeCache.setItem(SESSION_KEY, session);
        } else {
          clear();
        }
      })
      .catch(() => {
        clear();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, setData, loading };
};
