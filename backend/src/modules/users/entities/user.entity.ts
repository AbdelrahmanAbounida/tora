import { AbstractEnttiy } from 'src/database/abstract.entity';
import { Column, Entity } from 'typeorm';
import { USER_ROLE_ENUM } from '../constants/role.enum';
import { Exclude, Expose } from 'class-transformer';

@Entity()
export class User extends AbstractEnttiy<User> {
  @Column({ type: 'nvarchar', length: 50, nullable: true })
  name: string;

  @Column({ type: 'mediumtext', nullable: true })
  image: string;

  @Column({ type: 'mediumtext' })
  email: string;

  @Column()
  @Exclude()
  hashedPassword: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) // ,default:new Date()
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  @Expose({
    name: 'Verification date',
  })
  emailVerified: Date;

  @Column({ type: 'enum', enum: USER_ROLE_ENUM })
  role: USER_ROLE_ENUM;
}
