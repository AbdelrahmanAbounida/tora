import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly entiyManager: EntityManager,
  ) {}
  async create(createUserDto: CreateUserDto) {
    // check if user exists
    const isUserExist = await this.findUserByEmail(createUserDto.email);

    if (isUserExist.length > 0) {
      return new ConflictException('User With this email already exist');
    }
    const user = new User({ ...createUserDto });
    // const user = this.userRepository.create(createUserDto); // different way
    await this.entiyManager.save(user);
    return user;
  }

  async findAll() {
    const users = await this.userRepository.find();
    return users;
  }

  async findUserById(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }
  async findUserByEmail(email: string) {
    const user = await this.userRepository.findBy({ email });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findUserById(id);
    const updatedUser = Object.assign(user, updateUserDto);
    await this.entiyManager.save(updatedUser);

    return updatedUser;
  }

  async remove(id: number) {
    const user = await this.findUserById(id);
    await this.entiyManager.remove(user);
    return { message: 'User has been deleted successfully' };
  }
}
