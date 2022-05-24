import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Patient } from 'src/patients/entities/patient.entity';

@Entity()
export class Injection {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @ManyToOne(() => Patient)
  @JoinColumn({ name: 'patient_id', referencedColumnName: 'id' })
  readonly patient: Patient;

  @Column('date', { nullable: false })
  injection_datetime: Date;

  @Column('tinyint', { nullable: true })
  injected: boolean | null = null;

  @CreateDateColumn()
  readonly created_at?: Date;

  @UpdateDateColumn()
  readonly updated_at?: Date;
}
