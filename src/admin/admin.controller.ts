import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import * as bcrypt from 'bcrypt';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(
    private readonly authService: AuthService,
    private readonly adminService: AdminService,
  ) {}

  @Post('login')
  async login(@Body() createAdminDto: CreateAdminDto) {
    const admin = await this.adminService.findByEmail(createAdminDto.email);
    if (!admin) {
      throw new Error('Admin not found');
    }
    const passwordMatch = await bcrypt.compare(
      createAdminDto.password,
      admin.password,
    );
    if (!passwordMatch) {
      throw new Error('Invalid credentials');
    }
    const { access_token } = await this.authService.login(admin);
    return {
      access_token,
      token_type: 'Bearer',
      expires_in: '24h',
    };
  }
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
