import { Module } from '@nestjs/common';
import { InjectionsService } from './injections.service';
import { InjectionsController } from './injections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InjectionsRepository } from './injection.repository';

@Module({
  imports: [TypeOrmModule.forFeature([InjectionsRepository])],
  controllers: [InjectionsController],
  providers: [InjectionsService],
})
export class InjectionsModule {}
