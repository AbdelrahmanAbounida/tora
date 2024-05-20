import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { USER_ROLE_ENUM } from '../constants/role.enum';
import { Exclude, Expose } from 'class-transformer';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Exclude()
  hashedPassword: string;

  @IsEnum(USER_ROLE_ENUM)
  role: USER_ROLE_ENUM;
}
