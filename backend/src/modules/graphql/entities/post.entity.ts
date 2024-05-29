import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AbstractEnttiy } from 'src/database/abstract.entity';
import { QLUser } from './user.entity';

@ObjectType()
@Entity()
export class QLPost extends AbstractEnttiy<QLPost> {
  // @Field({nullable:false})
  // @Column()
  // userId

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field()
  @Column()
  title: string;

  // ::TODO:: remove this optional
  @Field({ nullable: true })
  @Column({ nullable: true })
  image_url?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  video_url?: string;

  @Field()
  @Column()
  prompt: string;

  // relations
  @ManyToOne((type) => QLUser, (user) => user.posts)
  @Field(() => QLUser)
  owner: QLUser;

  @ManyToMany((type) => QLUser)
  @Field(() => [QLUser])
  users: QLUser[];
}
