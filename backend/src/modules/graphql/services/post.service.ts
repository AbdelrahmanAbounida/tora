import { Injectable } from "@nestjs/common";
import { CreateQLPost } from "../dto/create-post.input";
import { UpdateQLPost } from "../dto/update-post.input";
import { InjectRepository } from "@nestjs/typeorm";
import { QLPost } from "../entities/post.entity";
import { Repository } from "typeorm";


@Injectable()
export class PostQLService {
    constructor(@InjectRepository(QLPost) private readonly postRepository: Repository<QLPost>){}

    async create(createQLPost: CreateQLPost){
        const post =  this.postRepository.create(createQLPost)
        await this.postRepository.save(post)
        return post
    }

    async findOne(id: number){
        const post = await this.postRepository.findOneBy({id})
        return post
    }

    async findAll(){
        const qlposts = await this.postRepository.find()
        return qlposts
    }

    async update(id:number,updatePostQL: UpdateQLPost){
        try{
            this.postRepository.update(id,updatePostQL)
        return true
        }
        catch(error){
            console.log({error})
            return false
        }
    }

    async remove(id:number){
        try{
            this.postRepository.delete(id)
            return true 
        }
        catch(error){
            console.log({error})
            return false 
        }
    }

}