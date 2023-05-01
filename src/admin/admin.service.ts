import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Admin } from '@prisma/client';
import { hash } from 'bcrypt';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const hashedPassword = await hash(createAdminDto.password, 10);
    return this.prisma.admin.create({
      data: {
        name: createAdminDto.name,
        email: createAdminDto.email,
        password: hashedPassword,
      },
    });
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
