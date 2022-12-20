import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoticeModule } from './notice/notice.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicationModule } from './publication/publication.module';
import typeOrmConfig from './common/config/type-orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), NoticeModule, PublicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
