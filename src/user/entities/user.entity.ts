import { Transaction } from '@prisma/client';

export class User {
  id?: number;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  transactions?: Transaction[];
}
