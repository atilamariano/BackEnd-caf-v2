import { PartialType } from '@nestjs/swagger';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsBoolean,
  MaxLength,
  Matches,
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
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
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
