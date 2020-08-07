import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController, TodosService, TodosModule } from './todos';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/eapp'), TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
