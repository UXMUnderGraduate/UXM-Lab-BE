import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoticeModule } from './notice/notice.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicationModule } from './publication/publication.module';
import { MemberModule } from './member/member.module';
import { ImageModule } from './image/image.module';
import typeOrmConfig from './common/config/type-orm.config';
import { GalleryModule } from './gallery/gallery.module';
import { ConfigModule } from '@nestjs/config';
import { ResearchModule } from './research/research.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    NoticeModule,
    PublicationModule,
    MemberModule,
    ImageModule,
    GalleryModule,
    ResearchModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
