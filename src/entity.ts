import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  userUid: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column('int')
  ddd: number;

  @Column('int')
  phone: number;
}
