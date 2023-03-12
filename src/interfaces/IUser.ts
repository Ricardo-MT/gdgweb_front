export interface IUser {
  _id: string;
  name: string;
  surname: string;
  email: string;
  descripcion?: string;
  skills: Array<string>;
  role: 'admin' | 'ponente';
  socialLinks: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
    blog?: string;
  };
  statuses: {
    verified?: string;
    banned?: string;
  };
  dateOfJoining: number;
}
