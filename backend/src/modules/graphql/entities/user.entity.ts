import { Field, ObjectType } from "@nestjs/graphql";
import { AbstractEnttiy } from "src/database/abstract.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { QLPost } from "./post.entity";
import { UserRole } from "../constants/user-role.enum";
import { Exclude } from "class-transformer";


@Entity()
@ObjectType()
export class QLUser extends AbstractEnttiy<QLUser>{

    @Field({nullable: true})
    @Column({type: 'nvarchar',nullable:true})
    name: string 

    @Column({type: 'mediumtext',nullable:true})
    @Field({nullable: true})
    image:string

    @Column({type: 'nvarchar'}) // ,unique:true,
    @Field({nullable: false})

    email: string

    @Column({type: 'mediumtext'})
    @Field({nullable: false})
    @Exclude()
    password : string 
    
    @Column({ type: 'timestamp'}) // , default: () => 'CURRENT_TIMESTAMP' 
    @Field({nullable: false})
    emailVerified: Date

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    @Field({nullable: false})
    createdAt : Date

    @Column({ type: 'timestamp'}) // , default: () => 'CURRENT_TIMESTAMP' 
    @Field({nullable: false})
    updatedAt : Date

    @Column({type: 'enum',enum:UserRole, default:UserRole.USER})
    @Field(type => UserRole ,{nullable: false})
    role : UserRole

    // relations 
    @OneToMany(type=>QLPost, post =>post.owner)
    posts: QLPost[]

    @ManyToMany(type=>QLPost)
    @JoinTable() // no need to create external table 
    savedPosts: QLPost[]
}
