import {Field, ObjectType} from "@nestjs/graphql"
import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { AbstractEnttiy } from "src/database/abstract.entity";
import { QLUser } from "./user.entity";

@ObjectType()
@Entity()
export class QLPost extends AbstractEnttiy<QLPost> {

    // @Field({nullable:false})
    // @Column()
    // userId 

    @Field()
    @Column()
    title: string 

    @Field()
    @Column()
    image_url: string 

    @Field()
    @Column()
    video_url: string 
    
    @Field()
    @Column()
    prompt: string 

    // relations 
    @ManyToOne(type=>QLUser, user =>user.posts)
    owner:QLUser 

    @ManyToMany(type=>QLUser)
    users: QLUser[]
}