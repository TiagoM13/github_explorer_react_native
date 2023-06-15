import { IRepository } from '@app/interfaces';
import { api } from '@app/lib/axios';

export const getAllRepositories = async (): Promise<IRepository[]> => {
  const reposnse = await api.get<IRepository[]>('/repos');

  return reposnse.data;
};
