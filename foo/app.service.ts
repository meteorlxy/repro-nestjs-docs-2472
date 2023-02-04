import { Injectable } from '@nestjs/common';
import { CommonService } from 'common/common.service';

@Injectable()
export class AppService {
  constructor(private commonService: CommonService) {}

  sayHello(): void {
    this.commonService.sayHello();
  }
}
