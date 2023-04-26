import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Fulano da Silva',
    description: 'Seu nome completo.',
  })
  name: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'email@email.com',
    description: 'Seu email.',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  @ApiProperty({
    example: 'Abc@123',
    description: 'Sua senha de acesso com no mínimo 6 caracteres.',
  })
  password: string;

  isActive: boolean;

  balance?: number;
}
