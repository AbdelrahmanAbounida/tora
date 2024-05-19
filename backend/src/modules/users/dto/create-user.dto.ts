import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { USER_ROLE_ENUM } from '../constants/role.enum';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  hashedPassword: string;

  @IsEnum(USER_ROLE_ENUM)
  role: USER_ROLE_ENUM;
}
