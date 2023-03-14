import { useEffect, useState } from 'react';

import { IRepository } from '@src/interfaces/repository';

export const useRepositories = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/TiagoM13/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return { repositories }
}
