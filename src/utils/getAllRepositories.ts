import { IRepository } from '@src/interfaces';
import { api } from '@src/lib';

export const getAllRepositories = async (): Promise<IRepository[]> => {
  const reposnse = await api.get<IRepository[]>('/repos');

  return reposnse.data;
};
