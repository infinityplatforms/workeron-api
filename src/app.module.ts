import { CategoriesModule } from './categories/categories.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
