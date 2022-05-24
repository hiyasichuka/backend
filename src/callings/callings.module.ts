import { Module } from '@nestjs/common';
import { CallingsService } from './callings.service';
import { CallingsController } from './callings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CallingsRepository } from './callings.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CallingsRepository])],
  controllers: [CallingsController],
  providers: [CallingsService],
})
export class CallingsModule {}
