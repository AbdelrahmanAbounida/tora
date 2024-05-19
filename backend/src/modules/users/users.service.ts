import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly entiyManager: EntityManager,
  ) {}
  async create(createUserDto: CreateUserDto) {
    // check if user exists
    const isUserExist = await this.findUserByEmail(createUserDto.email);

    if (isUserExist.length > 0) {
      return new ConflictException('User With this email already exist');
    }
    const user = new User({ ...createUserDto });
    await this.entiyManager.save(user);
    return user;
  }

  async findAll() {
    const users = await this.userRepository.find();
    return users;
  }

  findUserById(id: number) {
    return `This action returns a #${id} user`;
  }
  async findUserByEmail(email: string) {
    const user = await this.userRepository.findBy({ email });
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
