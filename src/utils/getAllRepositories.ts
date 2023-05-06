import axios from 'axios';

import { IRepository } from '@src/interfaces/repository';

export const getAllRepositories = async (api: string): Promise<IRepository[]> => {
  const reposnse = await axios.get<IRepository[]>(api);

  return reposnse.data;
};
