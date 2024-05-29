import { Injectable } from "@nestjs/common";
import { Args, Int, Mutation, Query } from "@nestjs/graphql";
import { QLPost } from "../entities/post.entity";
import { CreateQLPost } from "../dto/create-post.input";
import { PostQLService } from "../services/post.service";
import { UpdateQLPost } from "../dto/update-post.input";


@Injectable()
export class PostQLResolver {

    constructor(private readonly postQLService: PostQLService){}

    @Mutation(() => QLPost, {name: 'createqlpost'})
    async createPostQl(@Args('createQLPost') createQLPost: CreateQLPost){
        return this.postQLService.create(createQLPost)
    }

    @Query(() => QLPost, { name: 'findqlpost' })
    async findPostQl(@Args({name:'id',type:()=>Int}) id: number){
        return this.postQLService.findOne(id)
    }

    @Query(returns => [QLPost], { name: 'findallqlposts' })
    async findAllPostsQL(){
        return this.postQLService.findAll()
    }

    @Mutation(()=>QLPost, {name: 'updateqlpost'})
    async updatePostQL(@Args({name:'id',type:()=>Int})id:number, updatePostQL: UpdateQLPost){
        return this.postQLService.update(id,updatePostQL)
    }

    @Mutation(()=>QLPost, {name:'deleteqlpost'})
    async deletePostQL(@Args({name:'id',type:()=>Int}) id :number){
        return this.postQLService.remove(id)
    }

}