import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const { amount, type, date, userId } = createTransactionDto;
    return await this.prisma.transaction.create({
      data: {
        amount,
        type,
        date,
        user: { connect: { id: userId } },
      },
    });
  }

  async findAll() {
    return this.prisma.transaction.findMany();
  }

  async findOne(id: number) {
    return this.prisma.transaction.findUnique({ where: { id } });
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    const { amount, type, date, userId } = updateTransactionDto;
    return await this.prisma.transaction.update({
      where: { id },
      data: {
        amount,
        type,
        date,
        user: { connect: { id: userId } },
      },
    });
  }

  async remove(id: number) {
    return this.prisma.transaction.delete({ where: { id } });
  }
}
