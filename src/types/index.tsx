
export interface IUser {
  username: string;
  url: string;
  avatar: string;
}

export interface IRepository {
  key: number;
  rank: number;
  username: string;
  repositoryName: string;
  url: string;
  description: string | null;
  language: string | null;
  languageColor: string | null;
  totalStars: number;
  forks: number;
  starsSince: number;
  since: string;
  builtBy: Array<IUser>;
}

export interface IPopularRepo {
  repositoryName: string | null;
  description: null;
  url: string | null;
}

export interface IDeveloper {
  key: number;
  rank: number;
  username: string;
  name: string;
  url: string;
  avatar: string;
  since: string;
  popularRepository: IPopularRepo;
}
