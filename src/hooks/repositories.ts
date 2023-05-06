import { useEffect, useState } from 'react';

import { GITHUB_API } from '@env';
import { IRepository } from '@src/interfaces/repository';

export const useRepositories = () => {
  const [load, setLoad] = useState(false);
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    setLoad(true);
    setInterval(() => {
      fetch(`${GITHUB_API}`)
        .then(response => response.json())
        .then(data => setRepositories(data))
        .finally(() => setLoad(false));
    }, 5000);
  }, []);

  return { repositories, load };
};
