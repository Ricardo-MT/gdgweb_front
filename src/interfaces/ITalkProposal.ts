import type { IUser } from 'src/interfaces/IUser';

export interface ITalkProposal {
  _id: string;
  createdBy: string;
  speakersIds: Array<string>;
  title: string;
  description: string;
  skills: Array<string>;
  notes: string;
}

export interface ITalk {
  _id: string;
  createdBy: IUser;
  speakersIds: Array<IUser>;
  title: string;
  description: string;
  skills: Array<string>;
}
