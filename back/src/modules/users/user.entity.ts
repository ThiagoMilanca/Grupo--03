import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from '../orders/order.entity';
import { DEFAULT_PROFILE_IMAGE_USER } from 'src/config/env.config';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
      default: DEFAULT_PROFILE_IMAGE_USER,
  })
  imageProfile: string;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({
    type: 'varchar',
    length: 128,
    nullable: false
  })
  password: string;

  @Column({
    type: 'bigint',
    nullable: false
  })
  dni: number;

  @Column({
    type: 'bigint',
    nullable: false
  })
  phone: number;

  @Column({
    default: true,
  })
  isActive: boolean;

  @Column({
    default: false,
  })
  isAdmin: boolean;

  @Column({
    default: false,
  })
  isBanned: boolean;

  @OneToMany(() => OrderEntity, (order) => order.user)
  order?: OrderEntity[];
}
