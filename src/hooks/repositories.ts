import { useEffect, useState } from 'react';

interface IRepository {
  name: string;
  description: string;
  html_url: string;
}

export const useRepositories = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/TiagoM13/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return { repositories }
}
