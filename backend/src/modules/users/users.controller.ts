import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
  HttpException,
  NotFoundException,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
// @UsePipes(ValidationPipe)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    // ValidationPipe
    return this.usersService.create(createUserDto);
  }

  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.findUserById(id);
    if (!user) {
      return new NotFoundException('There is no user with this id');
    }
    return user;
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const user = await this.usersService.findUserById(id);
    if (!user) {
      return new NotFoundException('There is no user with this id');
    }
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.findUserById(id);
    console.log({ user });
    if (!user) {
      return new NotFoundException('No user found');
    }

    return this.usersService.remove(id);
  }
}
