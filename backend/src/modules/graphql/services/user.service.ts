import { Injectable } from '@nestjs/common';
import { CreateQLUser } from '../dto/create-userql.input';
import { UpdateQLUser } from '../dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { QLUser } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserQLService {

  constructor(@InjectRepository(QLUser) private readonly qluserRepository: Repository<QLUser>){}
  async create(createQLUser: CreateQLUser) {
    const user =  this.qluserRepository.create(createQLUser)
        await this.qluserRepository.save(user)
        return user
  }

  async findAll() {
    const qlusers = await this.qluserRepository.find()
        return qlusers
  }

  async findOne(id: number) {
    const post = await this.qluserRepository.findOneBy({id})
    return post
   
  }

  update(id: number, updateGraphqlInput: UpdateQLUser) {
    try{
      this.qluserRepository.update(id,updateGraphqlInput)
  return true
  }
  catch(error){
      console.log({error})
      return false
  }
  }

  remove(id: number) {
    try{
      this.qluserRepository.delete(id)
      return true 
  }
  catch(error){
      console.log({error})
      return false 
  }
  }

  removeByEmail(email: string){
    try{
      
    }
    catch(error){
      console.log({error})
    }
  }
}
