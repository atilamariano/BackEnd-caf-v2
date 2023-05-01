import { Prisma } from '.prisma/client';

export class Admin implements Prisma.AdminUncheckedCreateInput {
  id?: number;
  email: string;
  password: string;
  name: string;
}
