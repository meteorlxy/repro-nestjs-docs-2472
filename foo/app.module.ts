import { Module } from '@nestjs/common';
import { CommonModule } from 'common/common.module';
import { AppService } from './app.service';

@Module({
  imports: [CommonModule],
  providers: [AppService],
})
export class AppModule {}
