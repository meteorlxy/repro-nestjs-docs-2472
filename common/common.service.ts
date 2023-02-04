import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class CommonService {
  constructor(private moduleRef: ModuleRef) {}

  sayHello(): void {
    console.log('hello from common service');
  }
}
