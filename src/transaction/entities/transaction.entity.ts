import { Prisma } from '.prisma/client';
import { User } from 'src/user/entities/user.entity';

export class Transaction implements Prisma.TransactionUncheckedCreateInput {
  id?: number;
  amount: number;
  type: string;
  date?: Date;
  userId: number;
  user?: User;
}
