import { CallingPlan } from 'src/calling_plans/entities/calling_plan.entity';
import { Patient } from 'src/patients/entities/patient.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Calling {
  @OneToOne(() => CallingPlan)
  @JoinColumn({ name: 'calling_id', referencedColumnName: 'id' })
  readonly calling_plan: CallingPlan;

  @ManyToOne(() => Patient)
  @JoinColumn({ name: 'patient_id', referencedColumnName: 'id' })
  readonly patient: Patient;

  @Column()
  called_at: Date;

  @CreateDateColumn()
  readonly created_at?: Date;

  @UpdateDateColumn()
  readonly updated_at?: Date;
}
