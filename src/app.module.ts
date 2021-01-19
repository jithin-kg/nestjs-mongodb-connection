import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/Database.Module';

@Module({
  imports: [DatabaseModule], //databse
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
