import { PartialType } from '@nestjs/swagger';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsBoolean,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    example: 'novoemail@email.com',
    description: 'Seu novo email.',
  })
  email?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiPropertyOptional({
    example: 'NovaSenha@2',
    description: 'Sua nova senha de acesso com no mínimo 8 caracteres.',
  })
  password?: string;

  @IsBoolean()
  @ApiPropertyOptional({
    example: true,
    description: 'Indica se o usuário deve ser marcado como ativo ou inativo.',
  })
  isActive?: boolean;
}
