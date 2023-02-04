import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { CommonGuard } from './common.guard';
import { CommonService } from './common.service';

@Module({
  providers: [
    CommonService,
    {
      provide: APP_GUARD,
      useClass: CommonGuard,
    },
  ],
  exports: [CommonService],
})
export class CommonModule {}
