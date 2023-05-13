import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Admin } from '@prisma/client';
import { hash } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async create(
    createAdminDto: CreateAdminDto,
  ): Promise<{ admin: Admin; token: string }> {
    const hashedPassword = await hash(createAdminDto.password, 10);
    const admin = await this.prisma.admin.create({
      data: {
        name: createAdminDto.name,
        email: createAdminDto.email,
        password: hashedPassword,
      },
    });
    const token = jwt.sign({ id: admin.id }, 'your_secret_key_here');
    return { admin, token };
  }

  findAll(): Promise<Admin[]> {
    return this.prisma.admin.findMany();
  }

  findOne(id: number): Promise<Admin | null> {
    return this.prisma.admin.findUnique({
      where: { id },
    });
  }

  update(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin> {
    return this.prisma.admin.update({
      where: { id },
      data: updateAdminDto,
    });
  }

  remove(id: number): Promise<Admin> {
    return this.prisma.admin.delete({
      where: { id },
    });
  }

  findByEmail(email: string): Promise<Admin | null> {
    return this.prisma.admin.findUnique({
      where: { email },
    });
  }
}
