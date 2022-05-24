import { configValidationSchema } from './config.schema';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { InjectionsModule } from './injections/injections.module';
import { PatientsModule } from './patients/patients.module';
import { ResponsesModule } from './responses/responses.module';
import { CallingPlansModule } from './calling_plans/calling_plans.module';
import { CallingsModule } from './callings/callings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const isProduction = configService.get('STAGE') === 'prod';

        return {
          ssl: isProduction,
          extra: {
            ssl: isProduction ? { rejectUnauthorized: false } : null,
          },
          type: 'mysql',
          autoLoadEntities: true,
          synchronize: true,
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
        };
      },
    }),
    TasksModule,
    InjectionsModule,
    PatientsModule,
    ResponsesModule,
    CallingsModule,
    CallingPlansModule,
  ],
})
export class AppModule {}
