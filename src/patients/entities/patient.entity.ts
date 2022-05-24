import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column('date', { nullable: false })
  birth_date: Date;

  @Column()
  phone: number;

  @Column()
  email: string;

  @CreateDateColumn()
  readonly created_at?: Date;

  @UpdateDateColumn()
  readonly updated_at?: Date;
}
