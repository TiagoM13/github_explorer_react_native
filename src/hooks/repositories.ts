import { useEffect, useState } from 'react';

import { IRepository } from '@src/interfaces/repository';

export const useRepositories = () => {
  const [load, setLoad] = useState(false);
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    setLoad(true);
    setInterval(() => {
      fetch('https://api.github.com/users/TiagoM13/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
        .finally(() => setLoad(false))
    }, 5000)
  }, [])

  return { repositories, load }
}
