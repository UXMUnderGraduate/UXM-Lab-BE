import { Module } from '@nestjs/common';
import { NoticeService } from './service/notice.service';
import { NoticeController } from './controller/notice.controller';
import { Notice } from './entities/notice.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Notice]), AuthModule],
  controllers: [NoticeController],
  providers: [NoticeService],
})
export class NoticeModule {}
